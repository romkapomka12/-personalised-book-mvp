# Context

## Project Goal

Build a learning-focused MVP website for a future personalised children's book service.

The first product direction is a children's book where the child becomes the main character. The first MVP should stay simple: one static landing page, one core product idea, one form, and GitHub Pages deployment.

## Current Repository

- Repository: `romkapomka12/-personalised-book-mvp`
- Visibility: public
- Default branch: `main`
- GitHub Pages URL: `https://romkapomka12.github.io/-personalised-book-mvp/`

## Owning Files

- `index.html` — main landing page structure.
- `css/style.css` — responsive styles and visual design.
- `js/main.js` — form handling and local photo preview.
- `robots.txt` — crawler rules and sitemap link.
- `sitemap.xml` — single-page sitemap for GitHub Pages URL.
- `.nojekyll` — prevents Jekyll processing and helps GitHub Pages publish static assets directly.
- `README.md` — public project description.
- `workbench/` — operational workspace for agent continuity.

## Current MVP Behavior

The page currently includes:

- hero section for personalised children's books
- simple example book card
- how-it-works section
- product preview section
- form with child name, age, language, theme, interests, photo upload, consent checkbox
- local browser photo preview
- generated request preview after form submission

No backend exists yet. The uploaded photo is not stored anywhere; it is only previewed locally in the browser.

## Product Decisions

- Start with the simplest product: a personalised children's book where the child is the main hero.
- First story direction: space adventure.
- Future differentiation may include family stories, couple stories, wedding stories, and personal life stories, but those are not part of the first MVP.
- Keep Shopify and Etsy as future channels, not immediate implementation targets.
- Continue competitor research in the existing Google Sheet before making bigger product decisions.

## Constraints

- Keep the first version static: HTML, CSS, JavaScript.
- Do not add API keys, secrets, real customer data, or private photos to the public repository.
- GitHub Pages publishes from `main` and repository root.
- Because the repo name starts with `-`, always keep the full Pages URL exactly as `https://romkapomka12.github.io/-personalised-book-mvp/`.

## Verified Assumptions

- Repository is public.
- GitHub Pages build completed successfully after `.nojekyll` was added.
- Site opened successfully for the user.
