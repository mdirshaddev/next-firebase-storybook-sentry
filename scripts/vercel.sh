#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "dependabot" ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

elif [[ "$VERCEL_GIT_COMMIT_REF" == "feature" ]]; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

elif [[ "$VERCEL_GIT_COMMIT_REF" == "storybook-static" ]]; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

else
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
fi
