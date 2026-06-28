#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
npm install
# predev hook clears .next automatically — prevents broken CSS from stale cache
npm run dev
