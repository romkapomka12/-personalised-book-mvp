# Google Apps Script receiver for v0.4

This receiver appends text-only website requests to the existing `Заявки` sheet.

The child photo is intentionally not accepted or stored.

## Deploy from the spreadsheet owner's Google account

1. Open the business Google Sheet.
2. Choose **Extensions → Apps Script**.
3. Delete the sample `myFunction` code.
4. Copy the full contents of [Code.gs](./Code.gs) into the editor.
5. Click **Save**.
6. Open **Project Settings** and set the time zone used by the business.
7. Choose **Deploy → New deployment**.
8. Select **Web app**.
9. Set **Execute as** to **Me**.
10. Set **Who has access** to **Anyone**.
11. Click **Deploy** and complete Google's authorization prompts.
12. Copy the production URL ending in `/exec`.

Do not use the test URL ending in `/dev`: it works only for script editors.

Send the `/exec` URL to the website maintainer. It is a public endpoint identifier, not a password, but it should still be used only for this form.

## What the receiver writes

The receiver creates:

- a unique request ID;
- current date and time;
- status `Нова`;
- the submitted parent and child text fields;
- source `Сайт`;
- next action `Перевірити заявку та відповісти`;
- an updated timestamp.

The Formspree ID stays empty because Formspree and Apps Script receive independent copies during the MVP.

## Built-in safeguards

- required-field validation;
- age range validation from 3 to 8;
- allowlists for language and theme;
- privacy-consent validation;
- field length limits;
- honeypot support through a hidden `company` field;
- spreadsheet-formula injection protection;
- a script lock to avoid simultaneous row collisions.

This is an MVP bridge. A later backend should receive each request once and become the single source of truth.
