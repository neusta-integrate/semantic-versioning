const fs = require('fs');
const path = require('path');

const releaseConfigPath = path.join(process.cwd(), '../../../.releaserc');
const releaseConfigContent = `{
  "extends": "@open4business/semantic-versioning"
}
`;

// Create release.config.js with the specified content
fs.writeFileSync(releaseConfigPath, releaseConfigContent);
