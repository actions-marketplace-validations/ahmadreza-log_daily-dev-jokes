import { getConfig } from './config';
import { GitHubService } from './services/github.service';
import { selectRandomJoke, formatJoke } from './utils/joke.util';
import { updateReadme } from './utils/readme.util';

/**
 * Main function
 */
async function main(): Promise<void> {
  try {
    console.log('🚀 Starting daily joke update...\n');

    // Get configuration
    const config = getConfig();

    // Initialize GitHub service
    const githubService = new GitHubService(
      config.repoOwner,
      config.repoName,
      config.githubToken
    );

    // Fetch joke issues
    const jokeIssues = await githubService.fetchJokeIssues();

    // Select random joke
    const selectedJoke = selectRandomJoke(jokeIssues);
    console.log(`\n📝 Selected joke from issue #${selectedJoke.number}`);

    // Format joke
    const formattedJoke = formatJoke(selectedJoke);
    console.log('\n' + formattedJoke + '\n');

    // Update README
    updateReadme(formattedJoke);

    console.log('✨ Done!');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Error:', errorMessage);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

export { main };

