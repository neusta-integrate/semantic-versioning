
#!/bin/bash

# Running semantic-release
npx semantic-release

# Setting environment variables for later steps
echo "IS_SEMANTIC_RELEASE_COMPLETED=true" >> $GITHUB_ENV
echo "::notice title=Semantic Release::Tag and release for version $NEW_VERSION have been created."
