import { Config } from '../types';

/**
 * Gets configuration from environment variables
 */
export function GetConfig(): Config {
  const GitHubToken = process.env.GITHUB_TOKEN;
  
  if (!GitHubToken) {
    throw new Error(
      'GITHUB_TOKEN environment variable is required!\n' +
      'Please set it in your GitHub Actions secrets or .env file.'
    );
  }

  const RepoOwner = process.env.GITHUB_REPOSITORY_OWNER || 'ahmadreza-log';
  const RepoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'daily-dev-jokes';

  return {
    RepoOwner,
    RepoName,
    GitHubToken,
  };
}

