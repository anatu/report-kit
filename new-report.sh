#!/usr/bin/env bash
# new-report.sh — scaffold a new report from the template.
# Usage: ./new-report.sh my-report-slug
set -euo pipefail

slug="${1:-}"
if [[ -z "$slug" ]]; then
  echo "usage: $0 <slug>   (e.g. $0 distill-q2-results)" >&2
  exit 1
fi

here="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$here/reports" "$here/data"
out="$here/reports/$slug.html"

if [[ -e "$out" ]]; then
  echo "refusing to overwrite existing $out" >&2
  exit 1
fi

# Copy template and fix relative paths (reports/ is one level deeper).
sed 's#\./styles/#../styles/#g; s#\./index.html#../index.html#g' \
  "$here/template.html" > "$out"

echo "created $out"
echo "next: edit it, then add a <a class=\"card\"> entry in index.html"
echo "preview: (cd \"$here\" && python3 -m http.server) → http://localhost:8000/reports/$slug.html"
