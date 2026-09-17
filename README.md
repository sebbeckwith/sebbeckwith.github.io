# Gobby homepage prototype

An editorial marketing homepage for Gobby, built with Vite, React, TypeScript and plain CSS.

## Run locally

Requires a current Node.js LTS release.

```sh
npm install
npm run dev
```

Quality checks:

```sh
npm run lint
npm run build
```

## Structure

- `src/components/SiteShell.tsx`: reusable header, footer, container and link-button patterns.
- `src/components/Hero.tsx`: editorial hero composition and CTA behaviour.
- `src/components/HeroProductMockup.tsx`: non-interactive HTML/SVG recreation of the product visual.
- `src/components/ClientLogoCarousel.tsx`: accessible, one-logo-at-a-time client carousel.
- `src/components/VideoModal.tsx`: accessible product-demo modal and play icon.
- `src/components/ProductVisuals.tsx`: lightweight workflow and differentiator demonstrations.
- `src/components/HomeSections.tsx`: page-specific editorial sections.
- `src/components/Faq.tsx`: semantic FAQ disclosure content.
- `src/data/homepage.ts`: typed navigation and repeated content.
- `src/data/clientLogos.ts`: client logo paths, organisation names and alt text.
- `src/styles/tokens.css`: portable design tokens.
- `src/styles/global.css`: global, component and responsive styles.

The components use semantic HTML and plain CSS so the layouts can be recreated in WordPress without bringing across a React component library.

## Content that must be replaced before launch

The homepage deliberately labels unverified social proof, customer evidence and video content. Replace those development placeholders only with approved material.

Also confirm:

- Customer/partner logos, testimonials and evidence.
- Signup, login, contact, pricing, legal and solution URLs.
- The canonical production URL, social preview image and favicon.
- Approved YouTube product demonstration URL.
- Data storage, privacy, anonymisation, AI, moderation and security claims.
- Exact product capability boundaries and approved use-case priorities.

## Brand asset

The approved logo is stored at `src/assets/brand/gobby-logo.png` and used in the header and footer. The supplied PNG had a solid black background, so only the connected background pixels were removed to make the existing artwork transparent; its proportions and artwork remain unchanged.

## Design system

Colours, type, spacing, layout widths, shape and motion values are CSS custom properties in `tokens.css`. Yellow is reserved for action and emphasis; semantic colours are not used decoratively. Most type and spacing scale fluidly with `clamp()`.

## Accessibility and performance

- Keyboard-operable mobile navigation and native `<details>` FAQ.
- Skip link, landmarks, one H1 and a logical heading structure.
- Visible focus states, 44px-class controls and reduced-motion support.
- No component, icon, animation or carousel library.
- Product explanations remain readable text even where a visual diagram is used.

Before production, test keyboard order, VoiceOver/NVDA, 400% zoom/reflow, contrast, multiple mobile viewports, production Lighthouse results and all active links.
