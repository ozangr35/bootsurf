import assert from "node:assert/strict";
import test from "node:test";
import { AUDIT_EXCEPTIONS, evaluateAudit } from "./check-audit.mjs";

const BRACES = AUDIT_EXCEPTIONS[0];

function advisory(name, title, id, severity = "high") {
  return {
    source: 1,
    name,
    dependency: name,
    title,
    url: `https://github.com/advisories/${id}`,
    severity,
  };
}

function chainReport(extra = {}) {
  return {
    vulnerabilities: {
      braces: {
        name: "braces",
        severity: "high",
        via: [advisory("braces", "braces stack exhaustion", BRACES.id)],
        nodes: ["node_modules/braces"],
      },
      chokidar: {
        name: "chokidar",
        severity: "high",
        via: ["braces"],
        nodes: ["node_modules/chokidar"],
      },
      micromatch: {
        name: "micromatch",
        severity: "high",
        via: ["braces"],
        nodes: ["node_modules/micromatch"],
      },
      "fast-glob": {
        name: "fast-glob",
        severity: "high",
        via: ["micromatch"],
        nodes: ["node_modules/fast-glob", "node_modules/tailwindcss/node_modules/fast-glob"],
      },
      "@next/eslint-plugin-next": {
        name: "@next/eslint-plugin-next",
        severity: "high",
        via: ["fast-glob"],
        nodes: ["node_modules/@next/eslint-plugin-next"],
      },
      "eslint-config-next": {
        name: "eslint-config-next",
        severity: "high",
        via: ["@next/eslint-plugin-next"],
        nodes: ["node_modules/eslint-config-next"],
      },
      tailwindcss: {
        name: "tailwindcss",
        severity: "high",
        via: ["chokidar", "fast-glob", "micromatch", "postcss-selector-parser"],
        nodes: ["node_modules/tailwindcss"],
      },
      "postcss-selector-parser": {
        name: "postcss-selector-parser",
        severity: "moderate",
        via: [advisory("postcss-selector-parser", "moderate postcss issue", "GHSA-rj75-hqrm-r3gf", "moderate")],
        nodes: ["node_modules/postcss-selector-parser"],
      },
      ...extra,
    },
  };
}

function devLock(paths) {
  return Object.fromEntries(paths.map((nodePath) => [nodePath, { dev: true }]));
}

const DEV_LOCK = devLock([
  "node_modules/braces",
  "node_modules/chokidar",
  "node_modules/micromatch",
  "node_modules/fast-glob",
  "node_modules/tailwindcss/node_modules/fast-glob",
  "node_modules/@next/eslint-plugin-next",
  "node_modules/eslint-config-next",
  "node_modules/tailwindcss",
]);

test("braces exception is a single dated dev-tooling allowance", () => {
  assert.equal(AUDIT_EXCEPTIONS.length, 1);
  assert.equal(BRACES.id, "GHSA-vfj7-8cjw-p6xm");
  assert.equal(BRACES.packageName, "braces");
  assert.equal(BRACES.reviewBy, "2027-01-04");
});

test("allows the braces dev chain before the review date", () => {
  const result = evaluateAudit(chainReport(), DEV_LOCK, AUDIT_EXCEPTIONS, "2026-10-06");
  assert.equal(result.ok, true);
  assert.deepEqual(result.applied, [
    "@next/eslint-plugin-next",
    "braces",
    "chokidar",
    "eslint-config-next",
    "fast-glob",
    "micromatch",
    "tailwindcss",
  ]);
});

test("fails closed after the review date", () => {
  const result = evaluateAudit(chainReport(), DEV_LOCK, AUDIT_EXCEPTIONS, "2027-01-05");
  assert.equal(result.ok, false);
  assert.ok(result.failures.some((failure) => failure.detail.includes("expired")));
});

test("still passes on the review date", () => {
  const result = evaluateAudit(chainReport(), DEV_LOCK, AUDIT_EXCEPTIONS, "2027-01-04");
  assert.equal(result.ok, true);
});

test("rejects the exception when braces is not dev-only", () => {
  const lock = { ...DEV_LOCK, "node_modules/braces": { dev: false } };
  const result = evaluateAudit(chainReport(), lock, AUDIT_EXCEPTIONS, "2026-10-06");
  assert.equal(result.ok, false);
  assert.ok(
    result.failures.some(
      (failure) => failure.name === "braces" && failure.detail.includes("dev-only"),
    ),
  );
});

test("rejects an unrelated high advisory", () => {
  const report = chainReport({
    "left-pad": {
      name: "left-pad",
      severity: "high",
      via: [advisory("left-pad", "unrelated", "GHSA-xxxx-yyyy-zzzz")],
      nodes: ["node_modules/left-pad"],
    },
  });
  const result = evaluateAudit(report, DEV_LOCK, AUDIT_EXCEPTIONS, "2026-10-06");
  assert.equal(result.ok, false);
  assert.ok(result.failures.some((failure) => failure.name === "left-pad"));
});

test("rejects a second high advisory on braces itself", () => {
  const report = chainReport();
  report.vulnerabilities.braces.via.push(
    advisory("braces", "another braces bug", "GHSA-aaaa-bbbb-cccc"),
  );
  const result = evaluateAudit(report, DEV_LOCK, AUDIT_EXCEPTIONS, "2026-10-06");
  assert.equal(result.ok, false);
  assert.ok(result.failures.some((failure) => failure.name === "braces"));
});

test("ignores moderate advisories the same way as npm audit --audit-level=high", () => {
  const result = evaluateAudit(
    {
      vulnerabilities: {
        "postcss-selector-parser": {
          name: "postcss-selector-parser",
          severity: "moderate",
          via: [advisory("postcss-selector-parser", "moderate", "GHSA-rj75-hqrm-r3gf", "moderate")],
          nodes: ["node_modules/postcss-selector-parser"],
        },
      },
    },
    {},
    AUDIT_EXCEPTIONS,
    "2026-10-06",
  );
  assert.equal(result.ok, true);
  assert.deepEqual(result.applied, []);
});
