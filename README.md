<div align="center">

# Town Library

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)

A modern book discovery app powered by [Open Library](https://openlibrary.org) and [Wikipedia](https://www.wikipedia.org), built with React and TypeScript.

[Getting started](#getting-started) · [Features](#features) · [Tech stack](#tech-stack) · [Project structure](#project-structure)

</div>

---

Town Library lets you search, explore, and learn about books using Open Library's vast catalog. Browse recent community activity, search by keyword or use advanced filters, and dive into detailed book pages enriched with Wikipedia content.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Karasu-huginn/3WEBD.git
   cd 3WEBD
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

> [!NOTE]
> No API keys or environment variables are needed. The app uses the public Open Library and Wikipedia APIs.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Features

- **Book search** — Search across millions of books by keyword, with results showing covers, authors, and edition counts
- **Advanced search** — Filter by title, author, subject, publisher, year, ISBN, or language
- **Book details** — View descriptions, subjects, characters, places, time periods, excerpts, and external links
- **Wikipedia integration** — Embedded Wikipedia pages alongside book details for richer context
- **Recent activity feed** — Live feed of Open Library community changes (new books, edits, covers) with auto-refresh

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | [React 19](https://react.dev) with [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Routing | [React Router 7](https://reactrouter.com) |
| Data fetching | [TanStack React Query 5](https://tanstack.com/query) |
| Build tool | [Vite 7](https://vite.dev) with [SWC](https://swc.rs) |

## Project structure

```
src/
├── api/            # API client for Open Library & Wikipedia
├── components/     # Reusable UI components (Header, Books, BookWiki, etc.)
├── hooks/          # Custom React Query hooks for data fetching
├── pages/          # Page components (Home, Search, AdvancedSearch, BookDetails)
├── types/          # TypeScript interfaces
├── utils/          # Utility functions (time formatting, filter config)
├── App.tsx         # Root component with routing
└── main.tsx        # Entry point
```
