# Taha Fatmi — Portfolio

A responsive React portfolio built with Vite, TypeScript, Framer Motion, Lenis, and Lucide. The interface follows the supplied black-and-orange mockup while using reusable sections, accessible controls, responsive navigation, and reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` for the production bundle and `npm run lint` for source checks.

## Add the final assets

All personal details and asset paths are centralized so the page does not need to be redesigned when final content arrives.

- Profile, email, portrait, CV, and social URLs: `src/data/profile.ts`
- Certificate titles, dates, badge paths, and credential URLs: `src/data/certifications.ts`
- Projects and links: `src/data/projects.ts`
- Experience: `src/data/experience.ts`

Recommended public asset paths:

- Portrait: `public/portrait.webp`, then set `portrait: '/portrait.webp'`
- CV: `public/taha-fatmi-cv.pdf`, then set `cv: '/taha-fatmi-cv.pdf'`
- Certificate badges: `public/certificates/<badge-name>.webp`, then set the matching `badge` value

The profile currently hides unprovided social links and converts the missing CV action into a working email request, so unfinished data is never shown as a broken link.

