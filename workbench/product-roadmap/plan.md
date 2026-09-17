# Plan

## Roadmap definition

- [x] Agree staged roadmap from v0.3 to v1.0.
- [x] Record v0.3: form sends request by email.
- [x] Record v0.4: requests are saved to Google Sheet or database.
- [x] Record v0.5: owner manually creates PDF from request.
- [x] Record v0.6: AI generates story text.
- [x] Record v0.7: admin panel for story review.
- [x] Record v0.8: automatic PDF generation.
- [x] Record v1.0: AI or template-based illustrations.

## v0.3 — Email request flow

- [x] Choose Formspree as the temporary form backend.
- [x] Add parent email, optional parent name, child details, and consent.
- [x] Add loading, success, warning, and error states.
- [x] Keep child photos local and exclude them from submissions.
- [x] Connect the owner-controlled Formspree endpoint.
- [x] Verify delivery from GitHub Pages to Formspree and the owner's email.
- [x] Replace internal language and theme codes with human-readable values.
- [x] Retest and confirm correct language and theme fields.
- [x] Mark the technical v0.3 milestone complete.
- [x] Accept the current privacy policy as the test version for this MVP stage.
- [x] Close v0.3 and move the active milestone to v0.4.

## Production readiness

- [x] Define the privacy-policy scope for parent data, child details, Formspree, local photo preview, retention, and deletion.
- [x] Create a dedicated public Yours in Story privacy email.
- [x] Publish `privacy.html` with the approved contact.
- [x] Link the policy from the request consent and site footer.
- [x] Add the policy page to `sitemap.xml`.
- [x] Verify the published policy on mobile before collecting real customer requests.

## v0.4 — Structured request tracking

- [ ] Define Google Sheet columns and request statuses.
- [ ] Choose the Formspree-to-Google-Sheets integration method.
- [ ] Save each new request to the Sheet without storing child photos.
- [ ] Test status tracking from new request through manual fulfilment.

## Brand direction

- [x] Record `Yours in Story` as the preferred future umbrella brand.
- [x] Record the tagline: `Personalized books for every chapter of life.`
- [x] Keep `StoryHero` as the temporary children-focused MVP name until a deliberate rebrand and domain purchase.
