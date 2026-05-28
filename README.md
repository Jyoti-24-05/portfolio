# Jyoti Kumari — Portfolio

Personal portfolio site built with Next.js 14 and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deploy**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — no env vars needed

## Customising

All content is in `app/page.tsx`:

- **Projects** — update the `PROJECTS` array (name, description, tech, GitHub link, live link)
- **Skills** — update the `SKILLS` object
- **Social links** — search for `href="https://github.com"` etc. and update inline
- **About text** — edit the `<p>` blocks in the `About` section
- **Colors** — change CSS variables in `app/globals.css` under `:root`
