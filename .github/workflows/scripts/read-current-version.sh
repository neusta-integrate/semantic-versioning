#!/bin/bash

# Reads the current version number from package.json of the main branch and exports it as an environment variable

# Checkout the main branch to ensure we're reading the package.json from the main branch
git checkout main

# Extract the current version from package.json of the main branch
CURRENT_VERSION=$(git show main:package.json | jq -r '.version')

# Display the current version
echo "Current version number: $CURRENT_VERSION"

# Export the current version as an environment variable for later steps
echo "CURRENT_VERSION=$CURRENT_VERSION" >> $GITHUB_ENV
