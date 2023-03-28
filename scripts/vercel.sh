#!/bin/bash

if [[ $VERCEL_GIT_COMMIT_REF =~ "dependabot" ]] ; then
  echo ">> Skipping deploy!"
  exit 0;
elif [[ $VERCEL_GIT_COMMIT_REF =~ "feature" ]]; then
  echo ">> Skipping deploy!"
  exit 0;
elif [[ $VERCEL_GIT_COMMIT_REF =~ "storybook-static" ]]; then
  echo ">> Skipping deploy!"
  exit 0; 
else
  echo ">> Proceeding with deploy."
  exit 1; 
fi
