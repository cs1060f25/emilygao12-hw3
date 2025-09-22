# Journal Prototype
 
Author: Emily Gao (GitHub: [emilygao12](https://github.com/emilygao12))
 
Live site: https://emilygao12-hw3.vercel.app
 
## Overview
Journal Prototype is a lightweight, static web app deployed on Vercel. It lets you create quick text notes, simulate simple audio notes, and browse an archive with basic search. Data persists locally in your browser using `localStorage`.
 
## Implemented Features
- Text notes
  - Create a new text note at `/text/` and save it to your journal.
- Audio notes (simulated)
  - Toggle the “New Audio Note” button on the Home page to simulate recording and save a placeholder audio entry with a timestamp.
- Archive with search and throwback
  - Archive page (`/archive/`) lists all notes in reverse chronological order.
  - Exact search tab filters by substring match.
  - Smart search tab displays a friendly banner: “Not implemented yet—coming soon!”
  - A “throwback” card shows a randomly selected past note as a memory.
 
## Not Implemented Yet (Planned / Future)
- Smart search (semantic/fuzzy/AI-assisted search)
- Real audio capture and playback
- Editing/deleting notes
- Cloud sync and authentication
 
## Deployment (Vercel)
This project is configured as a static site and deploys on Vercel.
 
Current deployment: https://emilygao12-hw3.vercel.app
 
## Team PRD
PRD link: https://docs.google.com/document/d/1nNX6mI4i-YOOCPmL9tHF9bsjQs3fS574rfZ0-T07gkU/edit?usp=sharing
