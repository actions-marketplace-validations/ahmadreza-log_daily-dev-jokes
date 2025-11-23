import { Octokit } from '@octokit/rest';

/**
 * Type definition for GitHub Issue
 */
export type Issue = Awaited<ReturnType<Octokit['rest']['issues']['listForRepo']>>['data'][0];

/**
 * Configuration interface
 */
export interface Config {
  repoOwner: string;
  repoName: string;
  githubToken: string;
}

