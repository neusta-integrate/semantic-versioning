const fs = require('fs');
const path = require('path');

const releaseConfigPath = path.join(process.cwd(), 'release.config.js');
const releaseConfigContent = `// Configuration for semantic release
module.exports = {
  ...require('@open4business/semantic-versioning')
};
`;

// Create release.config.js with the specified content
fs.writeFileSync(releaseConfigPath, releaseConfigContent);
