import { GetConfig } from './config';
import { GitHubService } from './services/github.service';
import { SelectRandomJoke, FormatJoke } from './utils/joke.util';
import { UpdateReadme } from './utils/readme.util';

/**
 * Main function
 */
async function Main(): Promise<void> {
  try {
    console.log('🚀 Starting daily joke update...\n');

    // Get configuration
    const Config = GetConfig();

    // Initialize GitHub service
    const GitHubServiceInstance = new GitHubService(
      Config.RepoOwner,
      Config.RepoName,
      Config.GitHubToken
    );

    // Fetch joke issues
    const JokeIssues = await GitHubServiceInstance.FetchJokeIssues();

    // Select random joke
    const SelectedJoke = SelectRandomJoke(JokeIssues);
    console.log(`\n📝 Selected joke from issue #${SelectedJoke.number}`);

    // Format joke
    const FormattedJoke = FormatJoke(SelectedJoke);
    console.log('\n' + FormattedJoke + '\n');

    // Update README
    UpdateReadme(FormattedJoke);

    console.log('✨ Done!');
  } catch (CaughtError) {
    const ErrorMessage = CaughtError instanceof Error ? CaughtError.message : 'Unknown error';
    console.error('❌ Error:', ErrorMessage);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  Main();
}

export { Main };

