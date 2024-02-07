#!/bin/bash

# Updating the package.json with the new version
jq '.version="'$NEW_VERSION'"' package.json > temp.json && mv temp.json package.json