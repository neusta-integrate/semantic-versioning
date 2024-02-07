#!/bin/bash

# Define variables
ORGANISATION=${github.repository_owner}
PACKAGE_NAME=$(echo "${{ github.event.repository }}" | cut -d'/' -f2)
VERSION_TO_DELETE="$NEW_VERSION"

# Fetch package versions
PACKAGE_INFO=$(curl -X GET "https://api.github.com/orgs/$ORGANISATION/packages/npm/$PACKAGE_NAME/versions"   -H "Authorization: bearer ${GH_TOKEN}"   -H "Accept: application/vnd.github.v3+json")

echo "Package Info Response:"
echo "$PACKAGE_INFO"

# Parse response for version ID
VERSION_ID=$(echo $PACKAGE_INFO | jq -r --arg VERSION_TO_DELETE "$VERSION_TO_DELETE" '.[] | select(.name==$VERSION_TO_DELETE) | .id')

# Delete the specified package version
if [ ! -z "$VERSION_ID" ]; then
  curl -X DELETE "https://api.github.com/user/packages/npm/$PACKAGE_NAME/versions/$VERSION_ID"     -H "Authorization: bearer ${GH_TOKEN}"     -H "Accept: application/vnd.github.v3+json"
fi
