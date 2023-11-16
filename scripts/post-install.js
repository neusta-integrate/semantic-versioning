const childProcess = require('child_process');

function runScript(scriptPath) {
  try {
    childProcess.execSync(`node ${scriptPath}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${scriptPath}: ${error}`);
    process.exit(1);
  }
}

// Aufruf der Unterskripte
runScript('./check-and-update-npmrc.js');
runScript('./copy-workflow.js');
runScript('./create-release-config.js');
