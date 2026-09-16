# Personalised Book MVP

A learning-focused MVP for creating personalised children’s books where each child becomes the main character of their own story.

## Project idea

This project is a small website prototype for a future personalised book service. The first version focuses on a simple children’s book flow:

1. A parent enters the child’s name, age and interests.
2. The parent chooses a story theme.
3. The website shows a simple preview of the future book request.

Later, the project can grow into a real product with AI-generated text, AI-assisted illustrations, PDF generation, online payments and printed book delivery.

## Current MVP scope

The v0.3 version includes:

- one landing page;
- basic responsive layout;
- personalisation form;
- local photo preview in the browser;
- parent email and consent fields;
- accessible loading, success, warning and error states;
- local photo validation and preview without uploading the file;
- Formspree email submission, pending one live delivery test;
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
- Test Formspree delivery from the live GitHub Pages site.
- Add Google Search Console and Google Analytics later.
- Research competitors and update product decisions based on real market data.

## Long-term ideas

The first product direction is a personalised children’s book. Later, the same platform could support other book types, such as family stories, couple stories, wedding stories and personal life stories.


## v0.3 email delivery

The owner-controlled Formspree endpoint is connected to the website.

1. Open the live GitHub Pages site.
2. Send one test request with non-sensitive sample data.
3. Confirm that the request appears in Formspree and reaches the intended email address.
4. Record the successful test in the product roadmap workstream.

The Formspree endpoint is not a secret. API keys, passwords and customer data must never be committed.

For privacy, v0.3 sends only text fields. The child photo is intentionally excluded and remains local in the browser. Publish a privacy policy before collecting real customer requests.
