const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../.github/workflows/publish-semantic-release.yml');
const projectRoot = path.join(process.cwd(), '../../');
const targetPath = path.join(projectRoot, '.github/workflows/publish-semantic-release.yml');

// Ensure .github/workflows directory exists
const workflowsDir = path.dirname(targetPath);
if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir, { recursive: true });
}

// Copy the workflow file
fs.copyFileSync(sourcePath, targetPath);
