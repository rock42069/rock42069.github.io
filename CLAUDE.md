# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll-based academic portfolio site using the [al-folio](https://github.com/alshedivat/al-folio) theme, deployed to GitHub Pages at `https://rock42069.github.io/`. Content is authored in Markdown; the site is built by Jekyll and deployed via GitHub Actions to the `gh-pages` branch.

## Build & Development

**Preferred: Docker (no Ruby setup required)**
```bash
docker compose up
# Site available at http://localhost:8080 with live-reload
```

**Alternative: Local Ruby**
```bash
bundle install
bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload
```

**Production build:**
```bash
JEKYLL_ENV=production bundle exec jekyll build
# Output in _site/
```

**Code formatting:**
```bash
npx prettier --write .
```

There is no test suite. CI checks include link validation (`broken-links.yml`), Prettier formatting (`prettier.yml`), and CodeQL security scanning (`codeql.yml`).

## Architecture

### Content Collections

| Directory | Purpose |
|-----------|---------|
| `_pages/` | Static pages (about, blog, cv, projects, publications, teaching) |
| `_posts/` | Blog posts — filename format: `YYYY-MM-DD-title.md` |
| `_projects/` | Project showcase entries |
| `_news/` | Announcements shown on the homepage |
| `_bibliography/papers.bib` | BibTeX citations, rendered via `jekyll-scholar` |
| `_books/` | Book collection entries |

### Configuration & Data

- `_config.yml` — Main config (25KB). Controls all site settings, plugin options, third-party library CDN URLs with SRI hashes, and Jekyll Scholar settings.
- `_data/cv.yml` — CV content (or use `assets/json/resume.json` as alternative)
- `_data/socials.yml` — Social links
- `_data/repositories.yml` — GitHub repos to display
- `_data/coauthors.yml`, `_data/venues.yml` — Publication metadata

### Layouts & Templates

`_layouts/` provides 12 Liquid templates. Key ones:
- `about.liquid` — Homepage layout
- `bib.liquid` — Publications page (handles BibTeX rendering)
- `cv.liquid` — CV page driven by `_data/cv.yml`
- `distill.liquid` — Interactive/technical blog post format
- `post.liquid` — Standard blog post

`_includes/` contains reusable snippets; `_sass/` contains SCSS (includes Font Awesome and Tabler Icons).

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:
1. Builds with `JEKYLL_ENV=production`
2. Runs PurgeCSS (`purgecss.config.js`) to strip unused styles
3. Deploys `_site/` to the `gh-pages` branch

The site is served by GitHub Pages from `gh-pages`.

## Key Files for Common Tasks

- **Homepage content**: `_pages/about.md` and `_news/`
- **Publications**: `_bibliography/papers.bib` (BibTeX format, auto-rendered)
- **CV**: `_data/cv.yml` or `assets/json/resume.json`
- **Site title/author/URL**: `_config.yml` (top section)
- **Enable/disable features** (dark mode, math, masonry, etc.): `_config.yml` feature flags
- **Social links**: `_data/socials.yml`
