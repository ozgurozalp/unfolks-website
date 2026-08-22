# Unfolks — marketing site

Marketing site and blog for [Unfolks](https://unfolks.com), a free Chrome
extension that shows who doesn't follow you back on Instagram.

## Stack

| Concern      | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack, React 19)        |
| Styling      | Tailwind CSS v4 (CSS-first config in `globals.css`) |
| UI primitives| Radix UI + `class-variance-authority`               |
| Theming      | `next-themes`, class strategy, light/dark/system    |
| Content      | MDX via `@next/mdx`, frontmatter validated with Zod |
| Icons        | `lucide-react`                                      |

Every route is statically prerendered at build time.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server runs on [http://localhost:3001](http://localhost:3001).

## Scripts

| Script              | Purpose                            |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Dev server on port 3001            |
| `npm run build`     | Production build                   |
| `npm start`         | Serve the production build         |
| `npm run lint`      | ESLint (flat config)               |
| `npm run typecheck` | `tsc --noEmit`                     |

## Project layout

```
src/
├── app/                 # Routes, metadata, sitemap, robots
├── components/
│   ├── sections/        # Landing page sections
│   └── ui/              # Reusable primitives
├── lib/
│   ├── posts.ts         # MDX blog content layer
│   ├── site.ts          # Site copy and configuration
│   └── utils.ts         # cn(), date formatting
└── posts/               # Blog posts (.mdx)
```

## Writing a blog post

Add an `.mdx` file to `src/posts/`. The filename becomes the slug. Frontmatter
is validated at build time — an invalid post fails the build rather than
rendering broken.

```mdx
---
title: Your post title
date: 2026-08-22
summary: One or two sentences used on the index page and in meta tags.
tags:
  - Instagram
---

Your content here.
```

## Design tokens

Colours, fonts, radii, and animations live in `src/app/globals.css`:

- `@theme` holds the brand scale and motion primitives.
- `:root` / `.dark` hold the semantic tokens (`--background`, `--muted`, …).
- `@theme inline` maps those semantic tokens to Tailwind utilities.

Change a colour in one of those blocks and it propagates through both themes.

## Site copy

Headline copy, navigation, FAQ entries, testimonials, and the "how it works"
steps live in `src/lib/site.ts` rather than inline in JSX, so content edits
don't require touching component code.
