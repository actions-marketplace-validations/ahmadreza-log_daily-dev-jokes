import { Issue } from '../types';
import { ParsedJoke } from '../types';
import { ParseIssueBody } from './parser.util';

/**
 * Selects a random joke from the list of issues
 */
export function SelectRandomJoke(Issues: Issue[]): Issue {
  if (Issues.length === 0) {
    throw new Error('Cannot select from empty issues array');
  }
  
  const RandomIndex = Math.floor(Math.random() * Issues.length);
  return Issues[RandomIndex];
}

/**
 * Formats the joke for display in README
 */
export function FormatJoke(Issue: Issue): string {
  const ParsedJoke = ParseIssueBody(Issue);
  const Author = Issue.user?.login || 'Unknown';

  // Format joke text - keep original line breaks, add blockquote to each line
  const FormattedJokeText = ParsedJoke.Joke
    .split('\n')
    .filter(Line => Line.trim() !== '') // Remove empty lines
    .map(Line => `> ${Line.trim()}`)
    .join('\n');

  // Build the output
  let Output = `${FormattedJokeText}`;

  // Add image if available
  if (ParsedJoke.Image) {
    Output += `\n> \n> ![Joke Image](${ParsedJoke.Image})`;
  }

  // Add footer with author (simple format, no language, no issue link)
  Output += `\n> \n> — ${Author}`;

  return Output;
}

