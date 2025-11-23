"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectRandomJoke = SelectRandomJoke;
exports.FormatJoke = FormatJoke;
const parser_util_1 = require("./parser.util");
/**
 * Selects a random joke from the list of issues
 */
function SelectRandomJoke(Issues) {
    if (Issues.length === 0) {
        throw new Error('Cannot select from empty issues array');
    }
    const RandomIndex = Math.floor(Math.random() * Issues.length);
    return Issues[RandomIndex];
}
/**
 * Formats the joke for display in README
 */
function FormatJoke(Issue) {
    const ParsedJoke = (0, parser_util_1.ParseIssueBody)(Issue);
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
//# sourceMappingURL=joke.util.js.map