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
