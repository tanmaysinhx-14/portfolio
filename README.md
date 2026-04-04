# Tanmay Portfolio

This repository contains my personal portfolio built with Next.js. It is designed to present my work in AI, computer vision, backend development, and polished front-end implementation through a clean, responsive single-page experience.

## Overview

The portfolio highlights:

- a structured hero section with profile links and clear calls to action
- featured projects with supporting descriptions and technology tags
- an experience timeline focused on the stacks used during each phase
- education details and professional contact options
- a shared typed data layer that powers both the page and the API routes

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Bootstrap 5
- Custom global CSS
- `next/font` with Inter
- Vercel Analytics and Speed Insights

## Project Structure

```txt
src/
  app/
    api/
      featured-work/route.ts
      page-data/route.ts
    components/
      about-me/
      communication-methods/
      education/
      experience/
      featured-work/
      footer/
      header/
      hero-section/
    globals.css
    layout.tsx
    page.tsx
  data/
    portfolio.ts
public/
  images/
    feature-work/
    hero-sec/
    icon/
```

## Content Source

Most portfolio copy and structured content live in [`src/data/portfolio.ts`](src/data/portfolio.ts). This keeps the visible content consistent across:

- the main page components
- the internal API routes
- shared labels, links, and section data

## Local Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Validation

Useful commands:

```bash
npm run lint
npm run build
```

## Notes

- Images and icons are stored in `public/images`.
- The portfolio is deployed on Vercel.
- Content and layout are optimized for both desktop and mobile viewing.
