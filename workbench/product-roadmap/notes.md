# Notes

- Decision: Build the product gradually instead of jumping directly into full AI book generation.
- Decision: v0.3 should make the form useful by sending real requests to the owner.
- Decision: v0.4 can use Google Sheets first because it is simple, visible, and good for early operations.
- Decision: AI should first generate story text, not illustrations. Text is easier to inspect, edit, and control.
- Decision: Human review remains important before customers receive generated stories or print-ready files.
- Pitfall: AI illustration generation is high-risk because character consistency and child likeness can fail.
- Pitfall: Child photos create privacy obligations. Do not implement persistent photo storage without clear consent and deletion rules.
- Pitfall: Frontend-only API keys are unsafe for paid AI APIs; AI calls should go through a backend when added.
- Decision: Use Formspree as the temporary v0.3 form backend because the current site is static and hosted on GitHub Pages.
- Decision: v0.3 email submissions exclude the child photo. The photo remains local for preview and can be requested later after direct contact.
- Decision: The Formspree endpoint may be committed because it is a public form identifier, not a secret credential.
- Pitfall: Do not describe v0.3 as live until an end-to-end request reaches the owner's email.
- Follow-up: Publish a clear privacy policy before accepting real customer data.
- Decision: Owner-created Formspree endpoint was connected on 2026-09-16; v0.3 still requires one live end-to-end delivery test before completion.
- Pitfall: Formspree may reinterpret short internal values such as `uk` and expose raw values such as `forest` in notification emails.
- Decision: Convert select values to human-readable labels before submission and do not send duplicate `bookLanguageLabel` or `bookThemeLabel` fields.
- Validation: Corrected v0.3 payload was retested successfully on 2026-09-17; language and theme arrived with human-readable values and no duplicate label fields.
- Decision: Treat v0.3 as technically complete but not production-ready until a privacy policy is published.
- Decision: After privacy, v0.4 should use Google Sheets first with explicit request statuses and no child-photo storage.
- Decision: Use a dedicated brand email in the public privacy policy instead of publishing a personal or test address.
- Research note: Formspree processes and stores form submissions, may process data in the United States and other countries, and requires site owners to publish their own compatible privacy policy.
- Privacy draft scope: controller/contact, submitted fields, purpose, consent, Formspree processing, local-only photo behavior, retention period, access/correction/deletion requests, children and parental authority, security limits, and policy updates.
- Blocker: Do not publish a placeholder or invented privacy email.

- Decision: Use `yoursinstory.books@gmail.com` as the public MVP contact for privacy, correction, and deletion requests.
- Decision: Keep request data for up to six months after the last communication unless deletion is requested earlier or longer retention is legally required.
- Decision: The preferred future umbrella brand is `Yours in Story` with the tagline `Personalized books for every chapter of life.`
- Decision: Keep `StoryHero` as the temporary children-focused MVP label until a deliberate rebrand and domain purchase.
