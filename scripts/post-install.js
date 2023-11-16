const childProcess = require('child_process');
const packageJson = require('./package.json');

function runScript(scriptPath) {
  try {
    childProcess.execSync(`node ${scriptPath}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${scriptPath}: ${error}`);
    process.exit(1);
  }
}

// Run the subscripts
runScript('./scripts/copy-workflow.js');
runScript('./scripts/check-and-update-npmrc.js');
runScript('./scripts/create-release-config.js');

// Success message with dynamic module name
console.log(`Module "${packageJson.name}" has been successfully installed.`);

// Reminder to check project-specific values in package.json
console.log('\x1b[31m%s\x1b[0m', 'Reminder: Ensure all project-specific values in package.json, especially "name", are correctly set.');
