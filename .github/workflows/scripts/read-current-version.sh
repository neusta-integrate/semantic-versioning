#!/bin/bash

# Reads the current version number from package.json and exports it as an environment variable

# Extract the current version from package.json
CURRENT_VERSION=$(jq -r '.version' package.json)

# Display the current version
echo "Current version number: $CURRENT_VERSION"

# Export the current version as an environment variable for later steps
echo "CURRENT_VERSION=$CURRENT_VERSION" >> $GITHUB_ENV
