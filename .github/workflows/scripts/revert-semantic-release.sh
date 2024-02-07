#!/bin/bash

git push --delete origin v${{ env.NEW_VERSION }}
git tag -d v${{ env.NEW_VERSION }}

IS_SEMANTIC_RELEASE_COMPLETED=false
echo "IS_SEMANTIC_RELEASE_COMPLETED=$IS_SEMANTIC_RELEASE_COMPLETED" >> $GITHUB_ENV
