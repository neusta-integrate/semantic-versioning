const fs = require('fs');
const path = require('path');

const sourcePath = path.join(process.cwd(), './.npmrc');
const targetPath = path.join(process.cwd(), '../../../.npmrc');

// Function to read the .npmrc file and return its content
function readNpmrcFile() {
    if (fs.existsSync(sourcePath)) {
        return fs.readFileSync(sourcePath, 'utf8');
    } else {
        console.log('.npmrc file not found.');
        return null;
    }
}

const ourNpmrcContent = readNpmrcFile();

// Check if .npmrc exists
if (fs.existsSync(targetPath)) {
    let content = fs.readFileSync(targetPath, 'utf8');

    // Check if our content is already in the .npmrc
    if (!content.includes(ourNpmrcContent)) {
        // Append our content to .npmrc
        fs.appendFileSync(targetPath, `\n${ourNpmrcContent}`);
    }
} else {
    // If .npmrc does not exist, create it with our content
    fs.writeFileSync(targetPath, ourNpmrcContent);
}
