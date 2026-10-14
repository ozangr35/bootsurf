#!/usr/bin/env bash
# Fail if the static export drops CSP or referrer meta, or if out/ contains a secret.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Same patterns as scripts/check-secrets.sh
PATTERN='(ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{10,}|-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----)'

fail() {
  echo "$*" >&2
  exit 1
}

if [[ ! -d out ]]; then
  fail "Static export out/ is missing. Run npm run build first."
fi

rg -q 'httpEquiv="Content-Security-Policy"' app/layout.tsx \
  || fail "CSP meta tag missing from app/layout.tsx"

rg -q 'referrer: "strict-origin-when-cross-origin"' app/layout.tsx \
  || fail "Referrer policy missing from app/layout.tsx"

found_html=0
while IFS= read -r page; do
  found_html=1
  rg -q 'http-equiv="Content-Security-Policy"' "$page" \
    || fail "CSP meta tag missing from $page"
  rg -q 'name="referrer" content="strict-origin-when-cross-origin"' "$page" \
    || fail "Referrer meta missing from $page"
done < <(find out -name '*.html' -print | sort)

if [[ "$found_html" -eq 0 ]]; then
  fail "No HTML files in out/."
fi

if rg -n "$PATTERN" out; then
  fail "Possible secret detected in out/."
fi

echo "Site security checks passed."
