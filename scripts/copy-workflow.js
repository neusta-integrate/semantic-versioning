const fs = require('fs');
const path = require('path');

const sourcePath = path.join(process.cwd(), './.github/workflows/publish-semantic-release.yml');
const targetPath = path.join(process.env.INIT_CWD, './.github/workflows/publish-semantic-release.yml');

// Ensure .github/workflows directory exists
const workflowsDir = path.dirname(targetPath);
if (!fs.existsSync(workflowsDir)) {
  fs.mkdirSync(workflowsDir, { recursive: true });
}

// Copy the workflow file
fs.copyFileSync(sourcePath, targetPath);
