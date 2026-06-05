# Consultancy Portfolio Website

Frontend-only consultancy/agency portfolio built with React and React Router.

No Java backend required. All content is static; contact form uses Formspree + Calendly.

## Local development

```bash
npm install
cp .env.example .env   # then add your Calendly / Formspree URLs
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env` file:

```env
REACT_APP_CALENDLY_URL=https://calendly.com/your-org/consultation
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Restart the dev server after changing `.env`.

## Build

```bash
npm run build
```

Output is in the `build/` folder.

## Deploy (new project — unlink from old backend/frontend)

Your old setup had **two separate deployments** (Java backend + React frontend). This repo replaces both with **one static frontend**.

### Step 1 — Create a new GitHub repository

1. On GitHub, create a new repo (e.g. `consultancy-website`).
2. Do **not** use the old `Consultancy` monorepo for this deployment.

### Step 2 — Push this folder as the new repo

From this `website` folder:

```bash
git init
git add .
git commit -m "Initial frontend-only consultancy portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/consultancy-website.git
git push -u origin main
```

### Step 3 — Disconnect / remove old deployments

Do this in your hosting dashboard (Vercel, Netlify, Render, etc.):

| Old deployment | Action |
|----------------|--------|
| **Old frontend project** | Delete the project, or disconnect it from the old GitHub repo |
| **Old Java backend** | Delete the service entirely — it is no longer needed |
| **Old monorepo link** | Point hosting to the **new repo** only, root directory `/` (not `consultancy/frontend`) |

You are **not** migrating the old repo — you are creating a **new** hosting project linked to the **new** repo.

### Step 4 — Deploy the new repo

#### Vercel (recommended)

1. [vercel.com](https://vercel.com) → **Add New Project**
2. Import `consultancy-website` (the new repo)
3. Framework: **Create React App**
4. Root directory: `.` (repo root)
5. Build command: `npm run build`
6. Output directory: `build`
7. Add env vars: `REACT_APP_CALENDLY_URL`, `REACT_APP_FORMSPREE_ENDPOINT`
8. Deploy

`vercel.json` is included — it fixes **404 on routes** like `/contact` and `/projects`.

#### Netlify

1. [netlify.com](https://netlify.com) → **Add new site** → Import from Git
2. Select the new repo
3. Build: `npm run build`, publish: `build`
4. Add env vars in Site settings → Environment variables
5. Deploy

`netlify.toml` and `public/_redirects` fix SPA routing 404s.

#### GitHub Pages

1. Set `homepage` in `package.json` to your Pages URL, e.g. `"https://yourusername.github.io/consultancy-website"`
2. Install: `npm install --save-dev gh-pages`
3. Add scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d build"`
4. Run `npm run deploy`

`public/404.html` handles direct URL access on GitHub Pages.

### Step 5 — Custom domain (optional)

In your new hosting project only:

1. Add your domain in hosting DNS settings
2. Remove the domain from the **old** frontend/backend projects first
3. Update DNS to point to the new deployment

## Why you were getting 404 errors

React Router uses client-side routes (`/contact`, `/services`, etc.). On static hosts, visiting `/contact` directly asks the server for a file that does not exist.

**Fix:** All requests must serve `index.html` so React Router can handle the route. This repo includes:

- `vercel.json` — Vercel rewrites
- `netlify.toml` + `public/_redirects` — Netlify SPA fallback
- `public/404.html` — GitHub Pages fallback

## Project structure

```
website/
├── public/          # Static assets + SPA redirect rules
├── src/
│   ├── components/  # Navbar, Form, CalendlyEmbed, etc.
│   ├── data/        # Static portfolio content
│   ├── pages/       # Home, Services, Projects, News, Jobs, Contact
│   └── router/      # App routes
├── vercel.json
├── netlify.toml
└── package.json
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/projects` | Portfolio |
| `/news` | News & insights |
| `/jobs` | Careers |
| `/contact` | Consultation booking |
