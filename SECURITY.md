# Security

BootSurf is a **static marketing site** (Next.js static export → GitHub Pages). There is no backend, database, or user authentication on bootsurf.com.

## Reporting a vulnerability

Email **synaplift@outlook.com** with:

- A clear description of the issue
- Steps to reproduce
- Impact assessment (if known)

We aim to acknowledge reports within a few business days.

## What we do not store on this site

- No accounts or login
- No analytics trackers (see [Privacy Policy](/privacy))
- No payment data
- No API keys in this repository (see `.gitignore`)

## Repository hygiene

- `.env` and credential files are gitignored
- CI runs `npm audit`, gitleaks, and a secret-pattern scan on push/PR
- Dependabot opens weekly update PRs for npm and GitHub Actions

## Deployment

- Published via GitHub Actions to GitHub Pages
- Custom domain: `bootsurf.com` (`public/CNAME`)
- HTTPS should be enforced in [GitHub Pages settings](https://github.com/ozangr35/bootsurf/settings/pages)

## DNS (registrar)

Point `bootsurf.com` to GitHub Pages:

- **A** `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME** `www` → `ozangr35.github.io` (optional)

Enable **2FA** on your domain registrar and GitHub account.
