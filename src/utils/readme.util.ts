import * as fs from 'fs';
import * as path from 'path';

const START_MARKER = '<!--START_SECTION:dev-jokes-->';
const END_MARKER = '<!--END_SECTION:dev-jokes-->';

/**
 * Updates README.md with the new joke content
 */
export function updateReadme(jokeContent: string, readmePath?: string): void {
  const targetPath = readmePath || path.join(process.cwd(), 'README.md');
  
  // Read current README
  let readmeContent = '';
  if (fs.existsSync(targetPath)) {
    readmeContent = fs.readFileSync(targetPath, 'utf8');
  } else {
    // Create a basic README if it doesn't exist
    readmeContent = `# Daily Dev Jokes

${START_MARKER}
${END_MARKER}

## How to Contribute

Submit an issue with "joke" in the title and your joke in the body!
`;
  }

  // Check for markers
  const startIndex = readmeContent.indexOf(START_MARKER);
  const endIndex = readmeContent.indexOf(END_MARKER);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(
      `README.md must contain both markers:\n${START_MARKER}\n${END_MARKER}`
    );
  }

  // Replace the content between markers
  const before = readmeContent.substring(0, startIndex + START_MARKER.length);
  const after = readmeContent.substring(endIndex);

  const newReadmeContent = `${before}\n\n${jokeContent}\n\n${after}`;

  // Write updated README
  fs.writeFileSync(targetPath, newReadmeContent, 'utf8');
  console.log('✅ README.md updated successfully!');
}

