#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PATTERN='(ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{10,}|-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----)'

EXCLUDES=(
  --glob '!node_modules/**'
  --glob '!.next/**'
  --glob '!out/**'
  --glob '!package-lock.json'
  --glob '!scripts/check-secrets.sh'
  --glob '!SECURITY.md'
)

if rg -n "$PATTERN" "${EXCLUDES[@]}" .; then
  echo "Possible secret detected in repository files."
  exit 1
fi

echo "No common secret patterns found."
