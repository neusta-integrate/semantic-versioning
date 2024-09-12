const fs = require('fs');
const path = require('path');

const releaseConfigPath = path.join(process.env.INIT_CWD, './.releaserc');
const releaseConfigContent = `{
  "extends": "@neusta-integrate/semantic-versioning"
}
`;

// Create release.config.js with the specified content
fs.writeFileSync(releaseConfigPath, releaseConfigContent);
