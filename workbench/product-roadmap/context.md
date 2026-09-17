# Context

## Purpose

This workstream captures the staged product roadmap for turning the current static landing page into a working personalised children's book service.

The user agreed with a gradual path: start with manual fulfilment and only later add AI, PDF generation, admin tooling, and illustration automation.

## Roadmap

### v0.3 — Form sends request by email

Goal: make the website collect real requests.

Expected behavior:

- user fills the form
- parent email is collected
- request data is sent to the project owner by email
- photo handling is still simple and must be privacy-conscious

Possible implementation options:

- Formspree / Getform / similar form backend
- EmailJS for frontend-only email sending
- custom Python backend later

### v0.4 — Requests are saved to Google Sheet or database

Goal: create a structured order/request log.

Expected behavior:

- every request gets stored in a table
- owner can review request history
- request status can be tracked manually

Possible storage:

- Google Sheets for early MVP
- SQLite/PostgreSQL for later backend

### v0.5 — Manual PDF creation from request

Goal: validate whether people want the product before building full automation.

Expected behavior:

- owner receives request
- story and pages are prepared manually or semi-manually
- customer gets a preview or PDF manually

This keeps cost and complexity low while learning what customers actually ask for.

### v0.6 — AI generates story text

Goal: use AI API for draft story generation.

Expected behavior:

- backend sends child details, language, theme, and interests to AI API
- AI returns a structured story draft
- output is reviewed before delivery

Important decision:

- start with AI for text before AI illustrations because text generation is easier to control.

### v0.7 — Admin review panel

Goal: owner reviews and edits AI-generated stories before customers receive them.

Expected behavior:

- requests appear in an admin view
- story draft can be reviewed, edited, approved, or regenerated
- status can be updated

### v0.8 — PDF generation

Goal: create downloadable book files automatically.

Expected behavior:

- approved text and selected layout become a PDF
- PDF can be sent to customer or used for print preparation

Possible implementation:

- Python PDF generation
- HTML-to-PDF rendering
- template-based page layout

### v1.0 — AI or template-based illustrations

Goal: add visuals after the text and request workflow are stable.

Expected behavior:

- book pages include illustrations
- character consistency and child likeness are handled carefully
- privacy and photo handling rules are explicit

Important risk:

- AI illustrations are harder than text because character consistency and likeness can fail.

## Core Product Principle

Do not jump straight to full automation. Build trust and validate demand first.

Recommended sequence:

1. collect real interest
2. handle early requests manually
3. learn what customers want
4. automate text generation
5. automate PDF generation
6. only then add advanced illustration workflows

## Current Recommendation

The technical v0.3 milestone is complete: requests reach the owner's email through Formspree and the corrected payload was verified.

Before collecting real customer requests, publish a privacy policy that explains:

- what parent and child data is submitted
- that Formspree processes the text submission
- that the selected child photo stays local in v0.3
- how long request data is retained
- how a parent can request correction or deletion

After the privacy page is live, start v0.4 by defining a Google Sheet schema and request statuses before implementing automatic storage.

## Brand Direction

The preferred future umbrella brand is **Yours in Story** with the tagline:

> Personalized books for every chapter of life.

The name is intentionally broader than children's hero stories and can later support family, couple, wedding, baby-milestone, and life-story books.

`StoryHero` remains the temporary name of the current children-focused MVP until a deliberate rebrand and domain purchase. The current public data-contact email is `yoursinstory.books@gmail.com`.
