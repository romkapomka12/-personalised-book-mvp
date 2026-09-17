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
- Formspree for MVP email delivery
- Google Sheets and Google Apps Script for v0.4 request tracking

## Current project status

v0.3 is complete. The active milestone is v0.4 structured request tracking.

The `Заявки` sheet and request schema are ready. A validated Google Apps Script receiver has been prepared in `integrations/google-apps-script/`. It still needs to be deployed from the spreadsheet owner's Google account before the website can use it.

## Planned next steps

- Deploy the Apps Script receiver and obtain its production `/exec` URL.
- Connect the website to both Formspree email delivery and Google Sheet storage.
- Test one request end to end.
- Test the manual request workflow through completion.
- Add Google Search Console and Google Analytics later.

## Long-term ideas

The first product direction is a personalised children’s book. Later, the same platform could support family stories, couple stories, wedding stories and personal life stories.

Future fulfilment can support a digital PDF or a printed book. Production status and delivery status will be tracked separately. Nova Poshta and Ukrposhta API integrations are planned only after the manual print-and-ship workflow is validated.

## v0.3 email delivery

The owner-controlled Formspree endpoint is connected to the website.

Email delivery was verified end to end on 2026-09-16. Submissions reach Formspree and the owner's email with human-readable language and theme values.

A privacy policy covers parent and child data, Formspree processing, local-only photo handling, retention, and deletion requests. The public data-contact email is `yoursinstory.books@gmail.com`.

The Formspree endpoint is not a secret. API keys, passwords and customer data must never be committed.

For privacy, v0.3 sends only text fields. The child photo is intentionally excluded and remains local in the browser.
