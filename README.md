# Manchitra Transit Maps

A static blog built with Astro, themed around transit diagrams and cartography.
Content is organized into four "lines" (categories): Transit Maps, Infra Updates,
Charts, and Family Trees.

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321/manchitra-transit-maps/` (note the base path —
that's intentional, see below).

## Writing a post

Add a new Markdown file to `src/content/blog/`, e.g. `src/content/blog/my-post.md`:

```markdown
---
title: "My Post Title"
description: "One-line summary, used for SEO."
pubDate: 2026-07-12
category: transit   # transit | infra | charts | family
---

Your content here, in Markdown.
```

The post will automatically appear on the homepage and its category page — no
other file needs to be touched.

## Before you deploy: two things to change

1. **`astro.config.mjs`** — replace `your-username` with your actual GitHub
   username. If you rename the repo from `manchitra-transit-maps`, update
   `base` to match (must have leading and trailing slashes, e.g. `/new-name/`).

2. **Repo name** — the `base` path in the config must exactly match your GitHub
   repo name, since GitHub Pages serves project sites from
   `https://USERNAME.github.io/REPO-NAME/`.

## Deploying to GitHub Pages

1. Create a new repo on GitHub (e.g. `manchitra-transit-maps`). Don't
   initialize it with a README — this project already has one.

2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/manchitra-transit-maps.git
   git push -u origin main
   ```

3. On GitHub, go to your repo → **Settings → Pages**, and under "Build and
   deployment," set **Source** to **GitHub Actions**. That's it — the workflow
   in `.github/workflows/deploy.yml` will build and publish the site
   automatically on every push to `main`.

4. Your site will be live at `https://YOUR-USERNAME.github.io/manchitra-transit-maps/`
   within a minute or two of the first successful push. You can watch progress
   under the repo's **Actions** tab.

## Using a custom domain

If you later point a custom domain at this site:
- Add a `public/CNAME` file containing just your domain (e.g. `manchitra.in`)
- Set `base: '/'` in `astro.config.mjs`
- Set `site` to your custom domain (e.g. `https://manchitra.in`)
- Point your domain's DNS at GitHub Pages (A records to GitHub's IPs, or a
  CNAME record if using a subdomain) — see GitHub's "Managing a custom domain"
  docs for exact records.

## Project structure

```
src/
  content/blog/        # your posts, as Markdown files
  content.config.ts    # schema for post frontmatter (title, category, etc.)
  components/
    LineNav.astro       # the transit-line nav (site's signature visual)
    DeparturesBoard.astro  # post-listing table
  layouts/Layout.astro # shared <head>, fonts, footer
  pages/
    index.astro                    # homepage
    blog/[category]/index.astro    # one page per line (transit/infra/charts/family)
    blog/[category]/[id].astro     # individual post page
  styles/global.css    # design tokens (colors, type) + base styles
```
