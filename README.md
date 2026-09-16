# Personalised Book MVP

A learning-focused MVP for creating personalised children’s books where each child becomes the main character of their own story.

## Project idea

This project is a small website prototype for a future personalised book service. The first version focuses on a simple children’s book flow:

1. A parent enters the child’s name, age and interests.
2. The parent chooses a story theme.
3. The website shows a simple preview of the future book request.

Later, the project can grow into a real product with AI-generated text, AI-assisted illustrations, PDF generation, online payments and printed book delivery.

## Current MVP scope

The v0.3-ready version includes:

- one landing page;
- basic responsive layout;
- personalisation form;
- local photo preview in the browser;
- parent email and consent fields;
- accessible loading, success, warning and error states;
- local photo validation and preview without uploading the file;
- Formspree-ready email submission;
- safe request preview without injecting user input as HTML;
- basic SEO files: `robots.txt` and `sitemap.xml`.

## Tech stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Planned next steps

- Improve the landing page copy.
- Add more book themes.
- Prepare the project for GitHub Pages deployment.
- Add Google Search Console and Google Analytics later.
- Research competitors and update product decisions based on real market data.

## Long-term ideas

The first product direction is a personalised children’s book. Later, the same platform could support other book types, such as family stories, couple stories, wedding stories and personal life stories.


## Activate v0.3 email delivery

The form code is ready, but real email delivery stays disabled until the project owner creates a Formspree form.

1. Create a form at [Formspree](https://formspree.io/).
2. Copy its endpoint, for example `https://formspree.io/f/abcdwxyz`.
3. In `index.html`, replace `https://formspree.io/f/YOUR_FORM_ID` with the real endpoint.
4. Commit the change and send one test request from the GitHub Pages site.
5. Confirm that the request arrives at the intended email address.

The Formspree endpoint is not a secret. API keys, passwords and customer data must never be committed.

For privacy, v0.3 sends only text fields. The child photo is intentionally excluded and remains local in the browser. Publish a privacy policy before collecting real customer requests.
