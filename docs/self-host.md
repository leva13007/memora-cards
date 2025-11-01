# 🚀 Self-Hosting Guide

This guide explains how to host your own instance of Memora Cards.

## Overview

Memora Cards is a static web application, which means it can be hosted on any static file hosting service. No server-side code is required!

---

## Prerequisites

- Node.js 24+ (for building)
- Basic familiarity with command line
- A hosting service account (optional for local-only use)

---

## Build Steps

### 1. Clone and Install

```bash
git clone https://github.com/leva13007/memora-cards
cd memora-cards
pnpm install
```

### 2. Configure Your Decks

Edit `deck.config.json` (or create it) to point to your card sources:

```json
{
  "decks": [
    {
      "name": "My Deck",
      "source": "./public/cards.csv"
    }
  ]
}
```

### 3. Build for Production

```bash
pnpm build
```

This creates a `dist/` directory with all the static files needed.

### 4. Deploy

Copy the contents of `dist/` to your hosting service.

---

## Hosting Options

### GitHub Pages

1. Build the project: `pnpm build`
2. Push the `dist/` folder contents to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

Or use a GitHub Action to automate this process.

### Netlify

1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Import your repository
2. Framework preset: Vite
3. Build command: `pnpm build`
4. Output directory: `dist`

### Static File Hosting

Upload the `dist/` folder contents to any static hosting service:
- AWS S3 + CloudFront
- Cloudflare Pages
- Surge.sh
- Any web server (nginx, Apache, etc.)

---

## Local Development Server

For local testing before deployment:

```bash
pnpm dev
```

Visit `http://localhost:5173` (or the port shown in terminal).

---

## Configuration for Hosting

### Base Path

If hosting in a subdirectory (e.g., `yoursite.com/memora/`), configure the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/memora/',
  // ... other config
});
```

### Custom Domain

For custom domains, ensure:
- Your hosting service supports custom domains
- DNS records are properly configured
- HTTPS is enabled (most modern hosts do this automatically)

---

## Environment Variables

Currently, Memora Cards doesn't require environment variables. All configuration is done via `deck.config.json`.

---

## Troubleshooting

### Build Fails

- Ensure Node.js version matches `package.json` engines requirement (24+)
- Clear `node_modules` and reinstall: `rm -rf node_modules pnpm-lock.yaml && pnpm install`

### Cards Not Loading

- Check that `deck.config.json` paths are correct
- Verify card files are included in the build or accessible via URLs
- Check browser console for errors

### Routing Issues

- Ensure your hosting service supports client-side routing (SPA mode)
- Configure redirect rules to serve `index.html` for all routes

---

## Security Considerations

- Memora Cards runs entirely client-side — no server secrets needed
- Be cautious with remote deck URLs — only load from trusted sources
- HTTPS is recommended for production deployments

---

## Next Steps

- Customize the UI to match your branding
- Add your own card decks
- Set up automated deployments via CI/CD

---

## Support

For issues with self-hosting:
- Open an issue on GitHub
- Check the main README.md
- Review other documentation in `docs/`