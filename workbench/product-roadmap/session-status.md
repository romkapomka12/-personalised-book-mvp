# Session Status

- Workstream: product-roadmap
- Status: IN_PROGRESS
- Last Updated: 2026-09-22

## Progress

- Completed: v0.3 closed.
- Completed: v0.4 uses a separate `Заявки` sheet in the existing business-research spreadsheet.
- Completed: Canonical request columns and allowed statuses defined.
- Completed: Child photos are excluded from v0.4 storage.
- Completed: Google Apps Script receiver deployed and connected to the website.
- Resolved: Apps Script access changed to `Anyone` after the first live submission failed to reach the Sheet.
- Verified: Public health endpoint responds successfully.
- Verified: Direct text-only POST requests create correctly structured rows in `Заявки`.
- Verified: Synthetic rows `REQ-20260922-004530-D6D035` and `REQ-20260922-004601-1CE758` were created.
- In progress: Final end-to-end test through the published website.
- Blockers: none.

## NEXT STEP

Submit one new test request from the published website and verify that the same request appears both in the Formspree email and as a new non-system row in the `Заявки` sheet.
