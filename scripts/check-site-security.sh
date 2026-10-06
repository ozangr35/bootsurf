#!/usr/bin/env bash
# Ops lock-in for the static GitHub Pages export (no HTTP header API).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

fail() {
  echo "$*" >&2
  exit 1
}

rg -q 'httpEquiv="Content-Security-Policy"' app/layout.tsx \
  || fail "CSP meta missing from app/layout.tsx"

rg -q 'httpEquiv="X-Frame-Options"' app/layout.tsx \
  || fail "X-Frame-Options meta missing from app/layout.tsx"

rg -q 'referrer: "strict-origin-when-cross-origin"' app/layout.tsx \
  || fail "Referrer-Policy missing from app/layout.tsx"

if rg -n '<form\b' app components --glob '*.tsx'; then
  fail "Form element found; contact must stay mailto unless a reviewed backend exists."
fi

if rg -n 'href=\{?[`'\'']http://' app components lib --glob '*.{ts,tsx}'; then
  fail "Insecure http:// URL found in site source."
fi

rg -q 'siteUrl = "https://bootsurf.com"' lib/site.ts \
  || fail "siteUrl must be https://bootsurf.com"

rg -q 'mailto:\$\{contactEmail\}' app/contact/page.tsx \
  || fail "Contact page must use mailto, not a form backend."

echo "Site security header/ops checks passed."
