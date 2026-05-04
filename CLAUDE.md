# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Active migration: React → Hugo

Branch `hugo` is migrating the site from React (Create React App) to Hugo using the **nomad-tech** theme (`https://github.com/m03315/nomad-tech`). The original React source has been moved to `old/` for reference. The `main` branch retains the original React site.

Hugo Extended is required (v0.100.0+). The theme is installed as a git submodule at `themes/nomad-tech`.

## Hugo commands

```bash
hugo server -D          # Dev server at http://localhost:1313 (includes drafts)
hugo                    # Production build → /public
```

## Theme setup (nomad-tech)

Theme installed at `themes/nomad-tech` via git submodule. The authoritative config reference is `themes/nomad-tech/exampleSite/hugo.toml`.

## Content structure (nomad-tech)

The theme supports these content sections:
- `content/posts/` — blog articles
- `content/portfolio/` — project showcase (each entry has tech stack tags)
- `content/about/` — about page
- `content/travel/` — travel timeline entries

The theme has built-in multilingual support; for a single-language English site set `defaultLanguage = "en"` and skip the `[languages]` block.

## Data to migrate from React

The original site pulled these values from Firebase Realtime Database — they should become static data in Hugo (front matter or `data/` files):

**Contacts** — `github.url`, `email.url`, `linkedin.url`, `ig.url`, `medium.url`, `resume.url`
**About** — `job`, `org` (dynamic job title and organisation)

Firebase and Google Analytics (tag `G-84ZB543WE7`) need to be wired up via Hugo's config params or a custom partial.

## Deployment

Currently auto-deploys to Firebase Hosting (project `personalwebsite-eaf2d`) via GitHub Actions on push to `main`. The workflow will need updating to run `hugo` instead of `yarn run build` and point the deploy target at `/public` instead of `/build`.

## React source (reference only)

The React app lives in `src/Components/` — three components: `App.js` (data fetching), `Toolbar.js` (nav), `Main.js` (hero/social links). Custom colour palette: primary `#0b192f`, secondary `#4dc1ae`, on-primary `#cbd6f6`. These should inform the Hugo theme customisation.
