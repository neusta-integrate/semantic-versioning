module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    {
      "path": "@semantic-release/github",
      "assets": ["dist/**", "docs/**"]
    }
  ]
};
