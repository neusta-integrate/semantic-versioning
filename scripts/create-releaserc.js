const fs = require('fs');
const path = require('path');

const projectRoot = path.join(process.cwd(), '../../');
const releaseConfigPath = path.join(projectRoot, '.releaserc');
const releaseConfigContent = `{
  "extends": "@open4business/semantic-versioning"
}
`;

// Create release.config.js with the specified content
fs.writeFileSync(releaseConfigPath, releaseConfigContent);
