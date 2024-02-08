const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), './.github/workflows');
const targetDir = path.join(process.env.INIT_CWD, './.github/workflows');

function copyRecursively(srcDir, tgtDir) {
  // Ensure target directory exists
  if (!fs.existsSync(tgtDir)) {
    fs.mkdirSync(tgtDir, { recursive: true });
  }

  // Read contents of the current directory
  fs.readdirSync(srcDir).forEach((item) => {
    const srcItem = path.join(srcDir, item);
    const tgtItem = path.join(tgtDir, item);
    const itemStats = fs.statSync(srcItem);

    if (itemStats.isFile()) {
      fs.copyFileSync(srcItem, tgtItem);
    } else if (itemStats.isDirectory()) {
      copyRecursively(srcItem, tgtItem);
    }
  });
}

copyRecursively(sourceDir, targetDir);
