
#!/bin/bash

# Publishing the package
npm run publish-release

# If publishing succeeds, set environment variables to indicate completion
if [ $? -eq 0 ]; then
    echo "IS_PUBLISH_COMPLETED=true" >> $GITHUB_ENV
    echo "::notice title=Publish Package::The release for version $NEW_VERSION has been published to GitHub Packages."
else
    echo "IS_PUBLISH_COMPLETED=false" >> $GITHUB_ENV
    echo "::error title=Publish Package::Failed to publish the release for version $NEW_VERSION."
fi
