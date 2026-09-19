#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PROJECT_NAME="mjl-shq-properties"
ALIAS="mjl-shq-properties.vercel.app"

if ! command -v npx >/dev/null 2>&1; then
  echo "npx is required to deploy."
  exit 1
fi

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "VERCEL_TOKEN is not set."
  echo
  echo "This environment cannot deploy to Vercel automatically."
  echo "From a machine that is logged into the MJL Vercel team, run:"
  echo
  echo "  cd mjl-shq-properties"
  echo "  npx vercel --yes --prod --name ${PROJECT_NAME}"
  echo "  npx vercel alias set <deployment-url> ${ALIAS}"
  echo
  echo "Vercel project name: ${PROJECT_NAME}"
  echo "Production alias: https://${ALIAS}"
  echo "Root Directory: mjl-shq-properties"
  exit 2
fi

echo "Deploying ${PROJECT_NAME} to Vercel production..."
URL="$(npx vercel --yes --prod --name "${PROJECT_NAME}" --token "${VERCEL_TOKEN}")"
echo "Deployment URL: ${URL}"

echo "Aliasing to https://${ALIAS}..."
npx vercel alias set "${URL}" "${ALIAS}" --token "${VERCEL_TOKEN}" || {
  echo "Alias step failed. The deployment may still be live at ${URL}."
  echo "Retry: npx vercel alias set ${URL} ${ALIAS}"
  exit 3
}

echo "Live preview: https://${ALIAS}"
