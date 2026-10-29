#!/usr/bin/env bash
# Fail if the static export drops CSP or referrer meta, or if out/ contains a secret.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Same patterns as scripts/check-secrets.sh.
# grep, not rg: ubuntu-latest does not ship ripgrep, and a missing rg
# exits 127, which this script would report as a missing CSP tag.
PATTERN='(ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z_-]{35}|xox[baprs]-[A-Za-z0-9-]{10,}|-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----)'

fail() {
  echo "$*" >&2
  exit 1
}

if [[ ! -d out ]]; then
  fail "Static export out/ is missing. Run npm run build first."
fi

grep -q 'httpEquiv="Content-Security-Policy"' app/layout.tsx \
  || fail "CSP meta tag missing from app/layout.tsx"

grep -q 'referrer: "strict-origin-when-cross-origin"' app/layout.tsx \
  || fail "Referrer policy missing from app/layout.tsx"

# Exact allowlists for the built CSP. Any wildcard or unlisted source fails.
# The two Cloudflare origins are here on purpose (Web Analytics beacon).
ALLOW_SCRIPT_SRC="'self' 'unsafe-inline' https://static.cloudflareinsights.com"
ALLOW_CONNECT_SRC="'self' https://cloudflareinsights.com"

check_csp_allowlist() {
  local page="$1" csp directive allowed value values
  csp="$(grep -o 'http-equiv="Content-Security-Policy" content="[^"]*"' "$page" \
    | head -n 1 | sed -e 's/^.*content="//' -e 's/"$//' \
        -e "s/&#x27;/'/g" -e "s/&#39;/'/g" -e 's/&quot;/"/g' -e 's/&amp;/\&/g')"
  [[ -n "$csp" ]] || fail "Could not read CSP content from $page"
  for directive in script-src connect-src; do
    if [[ "$directive" == "script-src" ]]; then
      allowed="$ALLOW_SCRIPT_SRC"
    else
      allowed="$ALLOW_CONNECT_SRC"
    fi
    local line
    line="$(printf '%s\n' "$csp" | tr ';' '\n' | sed -e 's/^ *//' -e 's/ *$//' \
      | grep -E "^${directive}( |$)" || true)"
    [[ -n "$line" ]] || fail "CSP in $page has no $directive directive"
    read -r -a values <<<"${line#"$directive"}"
    for value in "${values[@]}"; do
      case "$value" in
        *'*'*) fail "CSP $directive in $page contains a wildcard: $value" ;;
      esac
      case " $allowed " in
        *" $value "*) ;;
        *) fail "CSP $directive in $page has an unlisted source: $value" ;;
      esac
    done
  done
}

found_html=0
while IFS= read -r page; do
  found_html=1
  grep -q 'http-equiv="Content-Security-Policy"' "$page" \
    || fail "CSP meta tag missing from $page"
  grep -q 'name="referrer" content="strict-origin-when-cross-origin"' "$page" \
    || fail "Referrer meta missing from $page"
  check_csp_allowlist "$page"
done < <(find out -name '*.html' -print | sort)

if [[ "$found_html" -eq 0 ]]; then
  fail "No HTML files in out/."
fi

if grep -R -n -E -I -- "$PATTERN" out; then
  fail "Possible secret detected in out/."
fi

echo "Site security checks passed."
