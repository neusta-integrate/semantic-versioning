# @open4business/semantic-versioning

## About
@open4business/semantic-versioning is an advanced tool designed to automate and standardize the semantic versioning process across multiple projects. This module integrates seamlessly with `semantic-release` and `@open4business/commit-rules`, simplifying the setup and ensuring consistent versioning and commit practices.

## Key Features
- **Automated Version Management:** Leverages commit messages to automatically manage semantic versioning.
- **Conventional Commits Enforcement:** Integrates with `@open4business/commit-rules` to ensure commit messages follow the Conventional Commits format.
- **Simplified Setup:** Easy to integrate, reducing setup complexity.
- **Standardized Process:** Provides a consistent release workflow across projects.

## Installation
Install the module as a development dependency in your project:
```bash
npm install @open4business/semantic-versioning --save-dev
```

## Usage
To use this module, configure your project's `.releaserc` file to extend `@open4business/semantic-versioning`. Ensure that your commit messages adhere to the Conventional Commits standard.

### Example `.releaserc` Configuration
```json
{
  "extends": "@open4business/semantic-versioning"
}
```

## Workflow
- Make changes in a separate branch and create a pull request to merge these changes into the `main` branch.
- Once the pull request is merged, the `publish-npm.yml` GitHub Action will automatically run, handling the semantic versioning and publishing the package to NPM.

### Enforcing Conventional Commits
Use `@open4business/commit-rules` to ensure that your commit messages follow the Conventional Commits format. This is crucial for the `semantic-release` tool to correctly determine version bumps.

## Best Practices
- Regularly update `@open4business/semantic-versioning` and `@open4business/commit-rules` to benefit from the latest features and improvements.
- Follow the [Conventional Commits](https://www.conventionalcommits.org/) format strictly to ensure accurate semantic versioning.

## Support and Contributions
- **Getting Help:** For support, questions, or feedback, please file an issue on our [GitHub repository](https://github.com/open4business/semantic-versioning).
- **Contributing:** Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under [MIT License](LICENSE). For more details, see the LICENSE file in the repository.