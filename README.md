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
- verified Formspree email submission with human-readable request values;
- safe request preview without injecting user input as HTML;
- basic SEO files: `robots.txt` and `sitemap.xml`;
- a published privacy policy with a dedicated data-contact email.

## Tech stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Current project status

v0.3 is complete. The form delivery, human-readable request values, local-only photo preview, consent flow, and published test privacy policy have been verified.

The active milestone is v0.4 structured request tracking.

## Planned next steps

- Define the Google Sheet columns and allowed request statuses.
- Choose the Formspree-to-Google-Sheets integration method.
- Save text request data without storing child photos.
- Test the manual request workflow from a new submission through completion.
- Add Google Search Console and Google Analytics later.

## Long-term ideas

The first product direction is a personalised children’s book. Later, the same platform could support other book types, such as family stories, couple stories, wedding stories and personal life stories.


## v0.3 email delivery

The owner-controlled Formspree endpoint is connected to the website.

Email delivery was verified end to end on 2026-09-16. Submissions reach Formspree and the owner's email with human-readable language and theme values.

A privacy policy now covers parent and child data, Formspree processing, local-only photo handling, retention, and deletion requests. The public data-contact email is `yoursinstory.books@gmail.com`.

The Formspree endpoint is not a secret. API keys, passwords and customer data must never be committed.

For privacy, v0.3 sends only text fields. The child photo is intentionally excluded and remains local in the browser. The next product milestone is v0.4 structured request tracking.
