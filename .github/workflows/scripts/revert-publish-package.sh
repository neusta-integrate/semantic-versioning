#!/bin/bash

RELEASE_ID=$(curl -s -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
  "https://api.github.com/repos/${{ github.repository }}/releases/tags/${{ env.NEW_VERSION }}" \
  | jq -r '.id')

if [ "$RELEASE_ID" != "null" ]; then
  curl -s -X DELETE -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
    "https://api.github.com/repos/${{ github.repository }}/releases/$RELEASE_ID"
fi

IS_PUBLISH_COMPLETED=false
echo "IS_PUBLISH_COMPLETED=$IS_PUBLISH_COMPLETED" >> $GITHUB_ENV
