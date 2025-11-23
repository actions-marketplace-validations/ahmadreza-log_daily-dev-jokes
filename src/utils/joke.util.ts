import { Issue } from '../types';

/**
 * Selects a random joke from the list of issues
 */
export function selectRandomJoke(issues: Issue[]): Issue {
  if (issues.length === 0) {
    throw new Error('Cannot select from empty issues array');
  }
  
  const randomIndex = Math.floor(Math.random() * issues.length);
  return issues[randomIndex];
}

/**
 * Formats the joke for display in README
 */
export function formatJoke(issue: Issue): string {
  const jokeText = issue.body || issue.title;
  const author = issue.user?.login || 'Unknown';
  const issueNumber = issue.number;
  const issueUrl = issue.html_url;

  return `> ${jokeText.replace(/\n/g, '\n> ')}
> 
> — [Issue #${issueNumber}](${issueUrl}) by [@${author}](https://github.com/${author})`;
}

