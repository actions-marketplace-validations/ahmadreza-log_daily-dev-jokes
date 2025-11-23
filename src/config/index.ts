import { Config } from '../types';

/**
 * Gets configuration from environment variables
 */
export function getConfig(): Config {
  const githubToken = process.env.GITHUB_TOKEN;
  
  if (!githubToken) {
    throw new Error(
      'GITHUB_TOKEN environment variable is required!\n' +
      'Please set it in your GitHub Actions secrets or .env file.'
    );
  }

  const repoOwner = process.env.GITHUB_REPOSITORY_OWNER || 'ahmadreza-log';
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'daily-dev-jokes';

  return {
    repoOwner,
    repoName,
    githubToken,
  };
}

