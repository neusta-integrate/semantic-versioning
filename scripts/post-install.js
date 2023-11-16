if (process.env.CI) {
  console.log("CI/CD environment detected, skipping post-install script.");
  process.exit(0);
}

const childProcess = require("child_process");
const packageJson = require("./package.json");

function runScript(scriptPath) {
  try {
    childProcess.execSync(`node ${scriptPath}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${scriptPath}: ${error}`);
    process.exit(1);
  }
}

runScript("./scripts/copy-workflow.js");
runScript("./scripts/check-and-update-npmrc.js");
runScript("./scripts/create-release-config.js");

console.log(`Module "${packageJson.name}" has been successfully installed.`);

const prerequisitesLink = packageJson.homepage
  ? `${packageJson.homepage}#prerequisites`
  : 'the "Prerequisites" section in the README';
console.log(
  "\x1b[31m%s\x1b[0m",
  `Reminder: Ensure all project-specific values in package.json, especially "name", are correctly set. Also, check ${prerequisitesLink} for details on setting up the necessary repository secrets.`
);
