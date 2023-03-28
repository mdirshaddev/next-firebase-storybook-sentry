#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$VERCEL_ENV" == "dependabot" ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

elif [[ "$VERCEL_ENV" == "feature" ]]; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

elif [[ "$VERCEL_ENV" == "storybook-static" ]]; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

else
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
fi
