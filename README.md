# BootSurf — Studio Website

Marketing site for **BootSurf**, the indie AI app studio behind [SynapLift](https://synaplift.com).

**Live:** https://bootsurf.com · **Repo:** https://github.com/ozangr35/bootsurf

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS, Framer Motion
- Static export → GitHub Pages (GitHub Actions)

## Development

```bash
./start.sh
# or: npm install && npm run dev
```

Open http://localhost:3001

## Build & preview

```bash
npm run build
npm run preview   # serves out/ on http://localhost:3002
```

## Security

```bash
npm run security:check
```

- See [SECURITY.md](./SECURITY.md) for reporting vulnerabilities
- CI runs npm audit, gitleaks, and secret-pattern scans
- Dependabot weekly updates (npm + Actions)
- Never commit `.env` files (see `.env.example`)

## Deploy

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`.

DNS for `bootsurf.com`: GitHub Pages A records or CNAME → `ozangr35.github.io` (details in SECURITY.md).

## Structure

| Route | Purpose |
|-------|---------|
| `/` | Studio home — capabilities + portfolio |
| `/about` | Our Mission |
| `/technology` | Technology stack |
| `/projects` | Featured projects |
| `/process` | App Store / asc release process |
| `/contact` | Contact |
| `/privacy` | Studio website privacy policy |

Product marketing for SynapLift lives on **synaplift.com** (separate repo).
