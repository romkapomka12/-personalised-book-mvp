# Session Status

- Workstream: product-roadmap
- Status: IN_PROGRESS
- Last Updated: 2026-09-17

## Progress

- Completed: v0.3 closed.
- Completed: v0.4 uses a separate `Заявки` sheet in the existing business-research spreadsheet.
- Completed: Canonical request columns and allowed statuses defined.
- Completed: Native `RequestsTable` created with dropdowns, frozen headers, column sizing, status colors, and a marked example row.
- Completed: Child photos are excluded from v0.4 storage.
- Completed: Formspree integration options compared using current official documentation.
- Decision: Keep Formspree for email and use a free Google Apps Script companion endpoint for Sheet storage.
- Completed: Future PDF/printed formats, separate production/delivery statuses, and later Nova Poshta/Ukrposhta integrations recorded.
- In progress: Prepare the Apps Script receiver and deployment instructions.
- Blockers: Google Apps Script must be deployed from the spreadsheet owner's Google account before the website endpoint can be connected.

## NEXT STEP

Add the Google Apps Script receiver for the `Заявки` sheet, deploy it as a web app from the spreadsheet owner's account, and obtain its `/exec` URL.
