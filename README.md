# Daily Dev Jokes 🤣

A fun repository for sharing developer jokes and memes! Submit an issue with "joke" in the title and your joke in the body, and it will be displayed randomly in this README.

## Today's Joke

<!--START_SECTION:dev-jokes-->
> Why do programmers prefer dark mode?
> 
> Because light attracts bugs! 🐛
> 
> — [Issue #1](https://github.com/ahmadreza-log/daily-dev-jokes/issues/1) by [@ahmadreza-log](https://github.com/ahmadreza-log)
<!--END_SECTION:dev-jokes-->

## How to Contribute

1. Go to the [Issues](https://github.com/ahmadreza-log/daily-dev-jokes/issues) page
2. Click "New Issue"
3. Select the **"🎭 Submit a Joke"** template
4. Fill in the form:
   - 🎤 **Your Hilarious Joke**: Write your best developer joke
   - 🖼️ **Meme Image URL** (optional): Add a meme image URL if you have one
   - 🌍 **Language**: Select the language of your joke
   - ✅ **Code of Conduct**: Confirm your joke follows community guidelines
5. Submit the issue!

Once your issue is closed, it will be eligible to appear in the daily joke section above! 🎉

## How It Works

This repository uses GitHub Actions to automatically update the README.md every 24 hours with a random joke from closed issues. The script:

1. Fetches all closed issues with the "joke" label (created using the joke template)
2. Parses the issue template to extract:
   - The joke text
   - Optional meme image URL
   - Language information
3. Randomly selects one joke
4. Updates the README.md between the `<!--START_SECTION:dev-jokes-->` markers with formatted content

## Setup

To use this in your own repository:

1. Fork this repository
2. Go to Settings → Secrets and variables → Actions
3. The `GITHUB_TOKEN` is automatically provided by GitHub Actions
4. Update the repository name and owner in the workflow file if needed
5. The workflow will run automatically every day at 00:00 UTC

## License

ISC

