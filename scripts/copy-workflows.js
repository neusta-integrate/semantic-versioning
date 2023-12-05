const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), './.github/workflows');
const targetDir = path.join(process.env.INIT_CWD, './.github/workflows');

// Ensure target .github/workflows directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all files in the source directory
fs.readdirSync(sourceDir).forEach((file) => {
  const sourceFile = path.join(sourceDir, file);
  const targetFile = path.join(targetDir, file);

  // Copy each file from the source to the target directory
  fs.copyFileSync(sourceFile, targetFile);
});
