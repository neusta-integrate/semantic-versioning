const fs = require('fs');
const path = require('path');

const projectRoot = path.join(process.cwd(), '../../');
const npmrcPath = path.join(projectRoot, '.npmrc');
const ourNpmrcContent = `# Your npmrc configurations`;

// Check if .npmrc exists
if (fs.existsSync(npmrcPath)) {
    let content = fs.readFileSync(npmrcPath, 'utf8');

    // Check if our content is already in the .npmrc
    if (!content.includes(ourNpmrcContent)) {
        // Append our content to .npmrc
        fs.appendFileSync(npmrcPath, `\n${ourNpmrcContent}`);
    }
} else {
    // If .npmrc does not exist, create it with our content
    fs.writeFileSync(npmrcPath, ourNpmrcContent);
}
