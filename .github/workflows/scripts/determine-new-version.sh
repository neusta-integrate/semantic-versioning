#!/bin/bash

# This script determines the new version number for the package.

# Retrieve current version from package.json
CURRENT_VERSION=$(jq -r '.version' package.json)
echo "Current version number: $CURRENT_VERSION"

# Initialize new version variable
NEW_VERSION=""

# Remove any pre-release identifiers from the current version
BASE_VERSION=$(echo $CURRENT_VERSION | sed -E 's/(-[^.]+.*)?$//')

# Check if this run is triggered by a pull request
if [[ "${{github.event_name}}" == "pull_request" ]]; then
    # Sanitize the pull request branch name to use in the version
    PR_BRANCH=$(echo ${GITHUB_HEAD_REF} | sed 's/[^a-zA-Z0-9]/-/g')
    NEW_VERSION="$BASE_VERSION-$PR_BRANCH"
else
    # For push events, determine the branch and adjust the version accordingly
    BRANCH_NAME=${GITHUB_REF#refs/heads/}
    DATE_TIME=$(date +'%Y%m%d.%H%M')
    case $BRANCH_NAME in
        "develop")
            NEW_VERSION="$BASE_VERSION-dev.$DATE_TIME";;
        "stage")
            NEW_VERSION="$BASE_VERSION-rc.$DATE_TIME";;
        "main")
            # For main branch, use semantic-release to determine the next version
            NEW_VERSION=$(npx semantic-release --dry-run | grep 'next release version is' | sed 's/.*is //');;
    esac
fi

# Check if a new version has been determined; if not, exit with a warning
if [ -z "$NEW_VERSION" ]; then
    echo "::warning title=No Release::No relevant changes have been detected. The workflow will be terminated without publishing a new release."
    exit 0
fi

# Export the new version number
echo "New version number: $NEW_VERSION"
echo "NEW_VERSION=$NEW_VERSION" >> $GITHUB_ENV
