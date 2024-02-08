const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), './.github/workflows');
const targetDir = path.join(process.env.INIT_CWD, './.github/workflows');

function copyRecursively(srcDir, tgtDir) {
  // Ensure the target directory exists
  if (!fs.existsSync(tgtDir)) {
    fs.mkdirSync(tgtDir, { recursive: true });
  }

  // Read the contents of the current directory
  fs.readdirSync(srcDir).forEach((item) => {
    const srcItem = path.join(srcDir, item);
    const tgtItem = path.join(tgtDir, item);
    const itemStats = fs.statSync(srcItem);

    if (itemStats.isFile()) {
      // Copy the file if the item is a file
      fs.copyFileSync(srcItem, tgtItem);
    } else if (itemStats.isDirectory()) {
      // Recursive call if the item is a directory
      copyRecursively(srcItem, tgtItem);
    }
  });
}

// Start the copy process
copyRecursively(sourceDir, targetDir);
