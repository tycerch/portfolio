# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website built with Next.js 15 and deployed on Cloudflare Pages. It's a TypeScript/React application showcasing Chris Tycer's professional experience as a Data & Supply Chain Analyst.

## Development Commands

### Local Development
```bash
bun run dev          # Start development server with Turbopack
bun run build        # Build the application
bun run start        # Start production server
bun run lint         # Run ESLint
```

### Cloudflare Pages
```bash
bun run pages:build  # Build for Cloudflare Pages using @cloudflare/next-on-pages
bun run preview      # Preview Pages application locally using Wrangler
bun run deploy       # Deploy to Cloudflare Pages
bun run cf-typegen   # Generate CloudflareEnv types
```

### Post-build
```bash
bun run postbuild    # Generates sitemap (runs automatically after build)
```

## Architecture

### Project Structure
- `app/` - Next.js 13+ app directory structure
  - `sections/` - Main page sections (Hero, About, Projects, Experience, Certifications, Contact)
  - `components/` - Reusable UI components (NavBar, SocialLinks, Timeline components)
  - `protests/` - Additional page route
  - `layout.tsx` - Root layout with metadata, structured data, and global components
  - `page.tsx` - Homepage combining all sections

### Styling
- Uses Tailwind CSS with custom theme configuration
- Custom color palette: dark background (#0B0C10), highlight teal (#66FCF1), accent (#45A29E)
- Custom spacing and container max-widths defined in tailwind.config.ts
- Global styles in `app/globals.css`

### Deployment Target
- Optimized for Cloudflare Pages using `@cloudflare/next-on-pages`
- Configured with Wrangler for edge deployment
- Includes Cloudflare Workers types for bindings support

### TypeScript Configuration
- Strict TypeScript with ES2017 target
- Path alias `@/*` for root-level imports
- Includes Cloudflare Workers types for edge runtime

## Key Features
- Single-page application with section-based navigation
- SEO optimized with metadata, OpenGraph, and structured data
- Responsive design with mobile-first approach
- Professional portfolio layout with timeline components
- Integrated social links and contact information

## Development Notes

- Uses bun as package manager (bun.lockb present, package.json specifies bun@1.1.29)
- Requires Node.js ^20.9.0
- ESLint configured with Next.js and TypeScript rules
- Includes sitemap generation via next-sitemap
- Font: Inter from Google Fonts