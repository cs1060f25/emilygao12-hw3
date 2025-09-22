# emilygao12-hw3

This repository now includes a minimal, production-ready static site that prints "Hello, World!" and is deployable on Vercel with zero configuration.

## Deploying to Vercel (Dashboard)
1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. Keep the default settings (Framework Preset: "Other").
4. Click "Deploy". Vercel will build and serve `index.html` as the homepage.

## Deploying to Vercel (CLI)
If you prefer the CLI:

```bash
# 1) Install the Vercel CLI (once)
npm i -g vercel

# 2) From the project directory, link and deploy
vercel  # follow prompts to link or create a new project

# 3) For a production deploy
vercel --prod
```

## Local Preview
You can serve the static site locally with any static server, or use Vercel Dev:

```bash
# Using Vercel Dev (after installing vercel CLI)
vercel dev

# Or using Python's simple HTTP server
python3 -m http.server 5173
# Then open http://localhost:5173 in your browser
```

## Project Structure
- `index.html` — Static homepage with a styled "Hello, World!" message.
- `vercel.json` — Minimal config to ensure all routes fall back to `index.html`.
- `hello_world.py` — A simple Python hello world script (not used by Vercel, kept for reference).
- `README.md` — This file.

## Notes
- Because this project is a static site, there is no build step required.
- You can add assets (images, CSS, JS) next to `index.html` and they will be served automatically.
