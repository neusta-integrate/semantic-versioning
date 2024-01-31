# @open4business/semantic-versioning

## About

`@open4business/semantic-versioning` is an advanced tool designed to automate and standardize the semantic versioning process across multiple projects. This module integrates seamlessly with `semantic-release` and `@open4business/commit-rules`, simplifying the setup and ensuring consistent versioning and commit practices.

## Key Features

- **Automated Version Management:** Leverages commit messages to automatically manage semantic versioning.
- **Angular Commit Message Conventions Enforcement:** Integrates with `@open4business/commit-rules` to ensure commit messages follow the Conventional Commits format.
- **Simplified Setup:** Easy to integrate, reducing setup complexity.
- **Standardized Process:** Provides a consistent release workflow across projects.

## Prerequisites

Before you begin using `@open4business/semantic-versioning`, ensure that you have the following prerequisites in place:

- **Node.js and npm:** The latest LTS version of Node.js and npm installed.
- **GitHub Packages Access:**
  - Create a `.npmrc` file in your project root with the following content to configure access to GitHub Packages:
    ```
    @open4business:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
    ```
  - The `NODE_AUTH_TOKEN` is a Personal Access Token (PAT) that you need to generate on GitHub. This token should have the "packages:read" permission to allow access to GitHub Packages.
  - To set `NODE_AUTH_TOKEN` as an environment variable, run `export NODE_AUTH_TOKEN='your_token_here'` in the terminal. Replace `your_token_here` with your actual PAT.
  - For detailed instructions on creating a Personal Access Token, refer to the GitHub manual: [Creating a personal access token](https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token).
- **Project Configuration:**
  - **`package.json`:** Update the `package.json` file with project-specific values for semantic versioning:
    - `name`: Define the unique name of your project.
    - `version`: Start with an initial version (e.g., `1.0.0`).
    - `repository`: Define the repository URL.
    - `scripts`: Include a `publish-release` script definition.
- **Repository Secrets** (`[YourRepoUrl]/settings/secrets/actions`)**:**
  - **REGISTRY_TOKEN:** The authentication token for the package registry you want to use (e.g., npm token). This secret is optional. If set, you must also set `REGISTRY_URL`. If not set, the default token `NODE_AUTH_TOKEN_GLOBAL_O4B` for the GitHub Package Registry will be used.
  - **REGISTRY_URL:** The URL of the package registry you want to use (e.g., `https://registry.npmjs.org/`). This secret is optional. If set, you must also set `REGISTRY_TOKEN`. If not set, the default will be the GitHub Package Registry (`https://npm.pkg.github.com`).

## Installation

Install the module as a development dependency in your project:

```bash
npm install @open4business/semantic-versioning --save-dev
```

## Usage

Once installed, `@open4business/semantic-versioning` is configured to work seamlessly. The critical part of the release process is the `npm run publish-release` command, which should be defined in your `package.json` under `scripts`. This command is automatically called at the end of the workflow to publish the release.

## Workflow

- Make changes in a separate branch and create a pull request to merge these changes into the `main` branch.
- Once the pull request is merged, the `publish-semantic-release.yml` GitHub Action will automatically run, handling the semantic versioning and publishing the package.
- The workflow uses the GitHub Package Registry by default to publish packages. If `REGISTRY_TOKEN` and `REGISTRY_URL` are set as repository secrets, the specified registry (e.g., npm) will be used instead.

### Enforcing Angular Commit Message Conventions

Use `@open4business/commit-rules` to ensure that your commit messages follow the Angular Commit Message Conventions format. This is crucial for the `semantic-release` tool to correctly determine version bumps.

## Best Practices

- Regularly update `@open4business/semantic-versioning` and `@open4business/commit-rules` to benefit from the latest features and improvements.
- Follow the [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) format strictly to ensure accurate semantic versioning.

## Support and Contributions

- **Getting Help:** For support, questions, or feedback, please file an issue on our [GitHub repository](https://github.com/open4business/semantic-versioning).
- **Contributing:** Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## Module Development

For the further development of the formatter-scss module, additional steps are required:

- **Repository Secrets** (`[YourRepoUrl]/settings/secrets/actions`):
  - **O4B_GITHUB_ACTIONS_BOT**: The public key of a project-specific deploy key.
    - `Step 1`: Create key e.g. with a bash command `ssh-keygen -t ed25519` and save it somewhere.
    - `Step 2`: Add deploy key in `[YourRepoUrl]/settings/keys`.
    - `Step 3`: Set title to e.g. `GitHub_Actions-Bot`, use the public part of the key created in `Step 1` as key and check `Allow write access`.
    - `Step 4`: Create repository secret `O4B_GITHUB_ACTIONS_BOT` with the private part of the key created in `Step 1`.
- **GitHub Actions Settings** (`[YourRepoUrl]/settings/actions`):
  - Ensure that "Workflow permissions" are set to "Read and write permissions" in the "Actions" settings.
