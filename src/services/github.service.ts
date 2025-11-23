import { Octokit } from '@octokit/rest';
import { Issue } from '../types';

/**
 * GitHub service for interacting with GitHub API
 */
export class GitHubService {
  private octokit: Octokit;
  private repoOwner: string;
  private repoName: string;

  constructor(repoOwner: string, repoName: string, githubToken: string) {
    this.octokit = new Octokit({
      auth: githubToken,
    });
    this.repoOwner = repoOwner;
    this.repoName = repoName;
  }

  /**
   * Fetches all closed issues with "joke" in the title
   */
  async fetchJokeIssues(): Promise<Issue[]> {
    try {
      console.log(`Fetching closed issues from ${this.repoOwner}/${this.repoName}...`);
      
      const { data: issues } = await this.octokit.rest.issues.listForRepo({
        owner: this.repoOwner,
        repo: this.repoName,
        state: 'closed',
        per_page: 100, // GitHub API max is 100 per page
      });

      // Filter issues that have "joke" in the title (case-insensitive)
      const jokeIssues = issues.filter(issue => 
        issue.title.toLowerCase().includes('joke') && 
        !issue.pull_request // Exclude pull requests
      );

      console.log(`Found ${jokeIssues.length} joke issues`);

      if (jokeIssues.length === 0) {
        throw new Error('No joke issues found! Please create some issues with "joke" in the title.');
      }

      return jokeIssues;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error fetching issues:', errorMessage);
      throw error;
    }
  }
}

