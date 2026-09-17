# Context

## Purpose

This workstream captures the staged product roadmap for turning the current static landing page into a working personalised children's book service.

The user agreed with a gradual path: start with manual fulfilment and only later add AI, PDF generation, admin tooling, illustration automation, printing, and carrier integrations.

## Roadmap

### v0.3 — Form sends request by email

Goal: make the website collect real requests.

Expected behavior:

- user fills the form
- parent email is collected
- request data is sent to the project owner by email
- photo handling is still simple and must be privacy-conscious

Current implementation:

- Formspree receives the public website submission
- the owner receives an email notification
- the selected photo remains local in the browser

### v0.4 — Requests are saved to Google Sheet or database

Goal: create a structured order/request log.

Expected behavior:

- every request gets stored in a table
- owner can review request history
- request status can be tracked manually
- Formspree continues to provide the email notification

Selected MVP integration:

- keep the current Formspree submission for email delivery
- add a Google Apps Script web-app endpoint bound to the business spreadsheet
- send the same text-only request payload to Apps Script
- validate and append the request to the existing `Заявки` sheet
- do not send or store the selected child photo

Why this method was selected:

- Formspree's native Google Sheets plugin is available only on paid Personal, Professional, and Business plans
- the current Personal plan is listed at $15/month or $120/year
- a Formspree webhook requires a higher paid plan
- Google Apps Script can expose a `doPost(e)` web-app endpoint and append a row without introducing another paid automation service
- this is an MVP bridge; a later backend should become the single source of truth

Important implementation risk:

- Formspree and Apps Script are two separate deliveries, so the UI must not claim full success unless both results are understood
- the Apps Script endpoint is public; it must validate required fields, expected values, payload size, and a honeypot
- no paid API secrets may be placed in frontend JavaScript

Sources reviewed on 2026-09-17:

- https://help.formspree.io/articles/plugins/use-google-sheets-to-send-your-submissions-to-a-spreadsheet
- https://formspree.io/plans
- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow(Object)

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

## Future fulfilment model

The catalogue can later contain at least two delivery formats:

- `Digital PDF`
- `Printed book`

Do not overload the current request status with printing and shipping events. Keep three separate concepts:

1. Request status: `Нова`, `На перевірці`, `Очікуємо відповідь`, `У роботі`, `Preview надіслано`, `Завершено`, `Скасовано`.
2. Production status: future values such as `Не розпочато`, `Макет готується`, `Погоджено`, `Передано в друк`, `Надруковано`.
3. Delivery status: future values such as `Не потрібна`, `Очікує відправлення`, `Накладну створено`, `Передано перевізнику`, `У дорозі`, `Доставлено`, `Повернення`.

Future printed-order fields may include:

- `Формат книги`
- `Статус виробництва`
- `Статус доставки`
- `Перевізник`
- `ТТН`
- `Дата відправлення`
- `Дата доставки`
- delivery price and recipient details when legally and operationally required

Nova Poshta and Ukrposhta API integrations are future scope. Research should cover branch/address lookup, waybill creation, label generation, tracking updates, error handling, price, and test environments. Phone numbers and delivery addresses must not be collected until the privacy policy and retention rules are updated.

## Core Product Principle

Do not jump straight to full automation. Build trust and validate demand first.

Recommended sequence:

1. collect real interest
2. handle early requests manually
3. learn what customers want
4. automate text generation
5. automate PDF generation
6. only then add advanced illustration and fulfilment workflows

## Brand Direction

The preferred future umbrella brand is **Yours in Story** with the tagline:

> Personalized books for every chapter of life.

The name is intentionally broader than children's hero stories and can later support family, couple, wedding, baby-milestone, and life-story books.

`StoryHero` remains the temporary name of the current children-focused MVP until a deliberate rebrand and domain purchase. The current public data-contact email is `yoursinstory.books@gmail.com`.

## v0.4 Google Sheet Schema

Use the existing business-research spreadsheet and keep operational requests in a separate sheet named `Заявки`.

Canonical columns, in order:

1. `ID заявки`
2. `Дата/час`
3. `Статус`
4. `Email батьків`
5. `Імʼя батьків`
6. `Імʼя дитини`
7. `Вік`
8. `Мова`
9. `Тема`
10. `Інтереси дитини`
11. `Згода`
12. `Джерело`
13. `Formspree ID`
14. `Наступна дія`
15. `Дата контакту`
16. `Нотатки`
17. `Оновлено`

Allowed request statuses:

- `Нова`
- `На перевірці`
- `Очікуємо відповідь`
- `У роботі`
- `Preview надіслано`
- `Завершено`
- `Скасовано`

The source dropdown anticipates `Сайт`, `Etsy`, `Shopify`, and `Інше`. The v0.4 schema intentionally contains no child-photo storage column. A photo selected on the website remains local in the browser.
