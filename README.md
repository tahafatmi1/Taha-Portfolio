# Taha Fatmi — Portfolio

A responsive portfolio for Taha Fatmi, built with React, Vite, TypeScript, Framer Motion, Lenis, and Lucide. It includes a custom project gallery, SAP certification badges, professional experience, an embedded resume, social/contact links, accessible controls, responsive navigation, and reduced-motion support.

Live site: [taha-portfolio-ten.vercel.app](https://taha-portfolio-ten.vercel.app/)

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` for the production bundle and `npm run lint` for source checks.

## Content management

All personal details and asset paths are centralized so the page does not need to be redesigned when final content arrives.

- Profile, email, portrait, CV, and social URLs: `src/data/profile.ts`
- Certificate titles, dates, badge paths, and credential URLs: `src/data/certifications.ts`
- Projects and links: `src/data/projects.ts`
- Experience: `src/data/experience.ts`

The completed portrait, resume, certification badges, and project screenshots are stored under `public/`. Uptown Dance & Fitness is intentionally pinned as the first project; add future projects after it in `src/data/projects.ts`.

The previous website is preserved in `archive/legacy-portfolio/` and in Git history.
