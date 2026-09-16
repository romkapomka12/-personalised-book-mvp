# Notes

- Decision: Build the product gradually instead of jumping directly into full AI book generation.
- Decision: v0.3 should make the form useful by sending real requests to the owner.
- Decision: v0.4 can use Google Sheets first because it is simple, visible, and good for early operations.
- Decision: AI should first generate story text, not illustrations. Text is easier to inspect, edit, and control.
- Decision: Human review remains important before customers receive generated stories or print-ready files.
- Pitfall: AI illustration generation is high-risk because character consistency and child likeness can fail.
- Pitfall: Child photos create privacy obligations. Do not implement persistent photo storage without clear consent and deletion rules.
- Pitfall: Frontend-only API keys are unsafe for paid AI APIs; AI calls should go through a backend when added.
- Open question: For v0.3, should the first form submission tool be Formspree/Getform, EmailJS, or a custom backend?
- Open question: Should early requests include photo upload, or should photo collection be delayed until after initial contact?
