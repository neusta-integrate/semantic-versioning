# @open4business/semantic-versioning

## About
`@open4business/semantic-versioning` is an advanced tool designed to automate and standardize the semantic versioning process across multiple projects. This module integrates seamlessly with `semantic-release`, simplifying the setup and ensuring consistent versioning and commit practices.

## Key Features
- **Automated Version Management:** Leverages commit messages to automatically manage semantic versioning.
- **Simplified Setup:** Easy to integrate, reducing setup complexity.
- **Standardized Process:** Provides a consistent release workflow across projects.

## Prerequisites
Before you begin using `@open4business/semantic-versioning`, ensure that you have the following prerequisites in place:

- **Node.js and npm:** The latest LTS version of Node.js and npm installed.
- **Project Configuration:**
  - **`package.json`:** Update the `package.json` file with project-specific values for semantic versioning:
    - `name`: Define the unique name of your project.
    - `version`: Start with an initial version (e.g., `1.0.0`).
    - `repository`: Define the repository URL.
    - `scripts`: Include a `publish-release` script definition.
- **Repository Secrets:**
  - **NODE_AUTH_TOKEN_ORGANISATION_O4B:** A token from the GH account "organisationo4b" with the "package:read" permission.
  - **O4B_GITHUB_ACTIONS_BOT:** The public key of a project-specific deploy key.
- **GitHub Actions Settings:**
  - Ensure that "Workflow permissions" are set to "Read and write permissions" in the "Actions" settings.

## Installation
Install the module as a development dependency in your project:
```bash
npm install @open4business/semantic-versioning --save-dev
```

## Usage
Once installed, `@open4business/semantic-versioning` is configured to work seamlessly. The critical part of the release process is the `npm run publish-release` command, which should be defined in your `package.json` under `scripts`. This command is automatically called at the end of the workflow to publish the release.

## Workflow
- Make changes in a separate branch and create a pull request to merge these changes into the `main` branch.
- Once the pull request is merged, the `publish-semantic-release.yml` GitHub Action will automatically run, handling the semantic versioning and publishing the package to NPM.

## Best Practices
- Regularly update `@open4business/semantic-versioning` to benefit from the latest features and improvements.
- Follow the [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) format strictly to ensure accurate semantic versioning.

## Support and Contributions
- **Getting Help:** For support, questions, or feedback, please file an issue on our [GitHub repository](https://github.com/open4business/semantic-versioning).
- **Contributing:** Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.