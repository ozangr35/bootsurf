# Bootsurf — Studio Website

Marketing site for **Bootsurf**, the indie AI app studio behind [SynapLift](https://synaplift.com).

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS, Framer Motion
- Static export for GitHub Pages

## Development

```bash
./start.sh
# or: npm install && npm run dev
```

Open http://localhost:3001

## Build

```bash
npm run build
```

Static output is written to `out/` — deploy to GitHub Pages with `public/CNAME` set to `bootsurf.com`.

## Structure

| Route | Purpose |
|-------|---------|
| `/` | Studio home — capabilities + SynapLift launch |
| `/about` | About Bootsurf |
| `/process` | App Store Connect / asc release process |
| `/contact` | Contact |
| `/privacy` | Studio website privacy policy |

Product marketing for SynapLift lives on **synaplift.com** (separate repo: `synaplift-web`).
