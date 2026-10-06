import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const HIGH_SEVERITIES = new Set(["high", "critical"]);

/**
 * Dated exceptions to the high/critical audit gate.
 * Each entry is fail-closed after `reviewBy` (UTC, inclusive).
 * Transitive packages are allowed only when every high/critical cause
 * traces back to one of these advisories, and only while every install
 * path in the lockfile is dev-only.
 */
export const AUDIT_EXCEPTIONS = [
  {
    id: "GHSA-vfj7-8cjw-p6xm",
    packageName: "braces",
    reviewBy: "2027-01-04",
    reason:
      "No patched braces release exists (latest is 3.0.3). The package is dev-only, reached through Tailwind CSS 3 (chokidar, micromatch, fast-glob) and eslint-config-next. It is not a production dependency. npm audit fix --force upgrades to Tailwind 4, which drops only the Tailwind path and is a breaking CSS change.",
  },
];

function isHigh(severity) {
  return HIGH_SEVERITIES.has(severity);
}

function ghsaFromUrl(url) {
  const match = String(url ?? "").match(/GHSA-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}/i);
  return match ? match[0].toUpperCase() : null;
}

function advisoryMatches(via, exceptions) {
  const id = ghsaFromUrl(via.url);
  return exceptions.some(
    (exception) =>
      exception.id.toUpperCase() === id && exception.packageName === via.name,
  );
}

function coveredBy(name, vulnerabilities, exceptions, seen) {
  if (seen.has(name)) {
    return seen.get(name);
  }

  const info = vulnerabilities[name];
  if (!info || !isHigh(info.severity)) {
    seen.set(name, true);
    return true;
  }

  seen.set(name, false);
  const vias = info.via ?? [];
  if (vias.length === 0) {
    return false;
  }

  for (const via of vias) {
    if (typeof via === "string") {
      if (!coveredBy(via, vulnerabilities, exceptions, seen)) {
        return false;
      }
      continue;
    }
    if (isHigh(via.severity) && !advisoryMatches(via, exceptions)) {
      return false;
    }
  }

  seen.set(name, true);
  return true;
}

function nonDevNode(info, lockPackages) {
  const nodes = info.nodes ?? [];
  if (nodes.length === 0) {
    return "(no lockfile path)";
  }
  for (const nodePath of nodes) {
    const entry = lockPackages[nodePath];
    if (!entry || entry.dev !== true) {
      return nodePath;
    }
  }
  return null;
}

function describeVulnerability(info) {
  const parts = [];
  for (const via of info.via ?? []) {
    if (typeof via === "string") {
      parts.push(`depends on ${via}`);
      continue;
    }
    const id = ghsaFromUrl(via.url);
    parts.push(id ? `${via.title} (${id})` : via.title);
  }
  return parts.join("; ") || "no advisory details";
}

export function evaluateAudit(report, lockPackages, exceptions, today) {
  const vulnerabilities = report.vulnerabilities ?? {};
  const active = exceptions.filter((exception) => today <= exception.reviewBy);
  const expired = exceptions.filter((exception) => today > exception.reviewBy);
  const failures = [];
  const applied = [];

  const highNames = Object.keys(vulnerabilities).filter((name) =>
    isHigh(vulnerabilities[name].severity),
  );

  for (const name of highNames) {
    const info = vulnerabilities[name];
    if (coveredBy(name, vulnerabilities, active, new Map())) {
      const prodNode = nonDevNode(info, lockPackages);
      if (prodNode) {
        failures.push({
          name,
          severity: info.severity,
          detail: `${prodNode} is outside the dev-only tree, so the dated exception does not apply`,
        });
        continue;
      }
      applied.push(name);
      continue;
    }

    if (expired.length > 0 && coveredBy(name, vulnerabilities, expired, new Map())) {
      const dates = expired
        .map((exception) => `${exception.id} review by ${exception.reviewBy}`)
        .join(", ");
      failures.push({
        name,
        severity: info.severity,
        detail: `dated exception expired (${dates})`,
      });
      continue;
    }

    failures.push({
      name,
      severity: info.severity,
      detail: describeVulnerability(info),
    });
  }

  applied.sort();
  return { ok: failures.length === 0, failures, applied };
}

function readLockPackages() {
  const lock = JSON.parse(readFileSync(join(ROOT, "package-lock.json"), "utf8"));
  return lock.packages ?? {};
}

function runNpmAudit() {
  try {
    return execFileSync("npm", ["audit", "--json"], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 10 * 1024 * 1024,
    });
  } catch (error) {
    const stdout = Buffer.isBuffer(error.stdout)
      ? error.stdout.toString("utf8")
      : error.stdout;
    if (typeof stdout === "string" && stdout.trim().startsWith("{")) {
      return stdout;
    }
    const stderr = Buffer.isBuffer(error.stderr)
      ? error.stderr.toString("utf8")
      : error.stderr;
    throw new Error(stderr || error.message);
  }
}

function main() {
  for (const exception of AUDIT_EXCEPTIONS) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(exception.reviewBy)) {
      console.error(`Invalid review date for ${exception.id}: ${exception.reviewBy}`);
      process.exit(1);
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  let report;
  try {
    report = JSON.parse(runNpmAudit());
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }

  if (report.error) {
    console.error(report.error.summary || report.error.message || "npm audit failed");
    process.exit(1);
  }

  const result = evaluateAudit(report, readLockPackages(), AUDIT_EXCEPTIONS, today);
  if (!result.ok) {
    console.error("npm audit high/critical gate failed:");
    for (const failure of result.failures) {
      console.error(`- ${failure.name} (${failure.severity}): ${failure.detail}`);
    }
    process.exit(1);
  }

  console.log("npm audit high/critical gate passed.");
  if (result.applied.length > 0) {
    for (const exception of AUDIT_EXCEPTIONS) {
      if (!result.applied.includes(exception.packageName)) {
        continue;
      }
      console.log(
        `Dated exception ${exception.id} (${exception.packageName}) through ${exception.reviewBy}.`,
      );
      console.log(exception.reason);
      console.log(`Applied to: ${result.applied.join(", ")}`);
    }
    return;
  }

  for (const exception of AUDIT_EXCEPTIONS) {
    console.log(
      `${exception.id} was not reported. The dated ${exception.packageName} exception is unused.`,
    );
  }
}

const invokedDirectly =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
if (invokedDirectly) {
  main();
}
