#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# grep, not rg: ubuntu-latest does not ship ripgrep, and a missing rg made
# this scan pass without scanning anything.
PATTERN='(ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z_-]{35}|xox[baprs]-[A-Za-z0-9-]{10,}|-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----)'

if grep -R -n -E -I \
  --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=out --exclude-dir=.git \
  --exclude=package-lock.json --exclude=check-secrets.sh \
  -- "$PATTERN" .; then
  echo "Possible secret detected in repository files."
  exit 1
fi

echo "No common secret patterns found."
