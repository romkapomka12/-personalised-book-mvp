# Notes

- Decision: Start with a personalised children's book where the child is the main character. This keeps the first MVP simple and easier to build while learning HTML, CSS, JavaScript, Git, GitHub Pages, SEO, and analytics.
- Decision: Family stories, couple stories, wedding stories, and broader personalised life-story books are promising future differentiation ideas, but they should not complicate the first MVP.
- Decision: Use GitHub Pages for the first deployment because it is free and fits a static website.
- Pitfall: The repository name starts with `-`, so the Pages URL includes `/-personalised-book-mvp/`. Preserve this path exactly in `robots.txt`, `sitemap.xml`, and links.
- Pitfall: Initial GitHub Pages access showed 404 until a `.nojekyll` file was added and a Pages build was triggered.
- Pitfall: The repository is public. Do not commit secrets, private customer data, real uploaded photos, API keys, analytics secrets, or payment credentials.
- Open question: Choose final brand name later. Current temporary name in the UI is `StoryHero`.
- Open question: Validate whether the first paid product should be digital PDF first, print first, or both.
- Open question: Use competitor research to decide if AI-generated images should be part of v1 or left for later.
