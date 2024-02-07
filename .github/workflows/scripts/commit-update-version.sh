
#!/bin/bash

# Configuring git user details
git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"

# Adding and committing the updated package.json
git add package.json
git commit -m "chore: update version to $NEW_VERSION"

# Determining if this is a pull request event and pushing to the correct branch
if [[ -n "$PR_BRANCH_NAME" ]]; then
    git push origin HEAD:refs/heads/$PR_BRANCH_NAME
else
    BRANCH_NAME=${GITHUB_REF#refs/heads/}
    git push origin HEAD:refs/heads/$BRANCH_NAME
fi

# Recording the last commit SHA for potential rollback
echo "LAST_COMMIT_SHA=$(git rev-parse HEAD)" >> $GITHUB_ENV
echo "IS_VERSION_UPDATE_COMMIT_COMPLETED=true" >> $GITHUB_ENV
