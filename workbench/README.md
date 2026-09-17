# Workbench Protocol

The `workbench/` directory is the persistent operational workspace for AI agents working on this repository.

For this project, the workbench exists to preserve context for the personalised book MVP: product decisions, implementation plans, deployment status, SEO setup, analytics setup, competitor research links, and next actions.

## Goals

- Preserve continuity between separate work sessions.
- Keep project plans, checkpoints, and decisions inside the repository.
- Make the next action explicit so work can resume quickly.
- Avoid losing important context in chat-only memory.
- Separate active execution notes from final public documentation.

## Directory Layout

Each active workstream gets its own folder under `workbench/`.

Example:

```text
workbench/
  README.md
  ACTIVE
  <workstream-name>/
    plan.md
    context.md
    session-status.md
    notes.md
```

## Current Project Workstreams

Expected workstreams for this repository may include:

- `initial-mvp-website` — first static landing page and GitHub Pages deployment.
- `seo-and-analytics` — Google Search Console, sitemap, robots, GA4, Tag Manager.
- `competitor-research` — competitor findings and product positioning notes.
- `product-roadmap` — staged delivery from the request form through AI, PDF, and illustrations.
- `book-production-research` — separate research into book layout, character creation, illustration generation, print files, and publishing workflows.
- `future-backend` — later Python backend, PDF generation, AI workflow, and database planning.

Create a new workstream only when the work is meaningfully separate from the current active one.

## File Purposes

### `workbench/ACTIVE`

Optional file used when one workstream should be treated as the default active focus.

- Contents: a single workstream folder name.
- Update it when focus changes to a different workstream.

### `workbench/<workstream-name>/plan.md`

The canonical checklist for the active workstream.

- Use this file for the implementation plan.
- Keep task statuses current.
- Do not maintain a separate authoritative checklist only in chat.

### `workbench/<workstream-name>/context.md`

Stable background context that should survive session boundaries.

Include durable facts such as:

- project goals
- important files
- current architecture
- external services and deployment details
- verified assumptions
- product decisions that should not be forgotten

Do not use this file for transient status updates.

### `workbench/<workstream-name>/session-status.md`

The active checkpoint for session continuity.

This file must answer:

- what changed most recently
- current status
- blockers, if any
- what must be done next

This is the first workstream file an agent should read when resuming work.

### `workbench/<workstream-name>/notes.md`

Decision log for implementation details, pitfalls, tradeoffs, and open questions.

Use it to record:

- why a specific approach was chosen
- dead ends worth avoiding later
- GitHub Pages or deployment pitfalls
- product direction decisions
- follow-up ideas that should not be forgotten

## Required Statuses

Each workstream must use one of these exact statuses in `session-status.md` and, when appropriate, in `plan.md`:

- `PLANNING`
- `PLAN_REVIEW`
- `IN_PROGRESS`
- `BLOCKED`
- `DONE`

## Required `NEXT STEP` Format

Every `session-status.md` must contain exactly one `NEXT STEP` section with a single concrete action.

Recommended template:

```markdown
# Session Status

- Workstream: <workstream-name>
- Status: IN_PROGRESS
- Last Updated: 2026-09-16 13:30 UTC+3

## Progress

- Completed: ...
- In progress: ...
- Blockers: none

## NEXT STEP

<one concrete action that should be executed first>
```

Rules:

- `NEXT STEP` must be actionable.
- `NEXT STEP` must be singular.
- `NEXT STEP` should point to the first action, not a broad goal.
- If blocked, `NEXT STEP` must state the unblock action.

## Session Start Procedure

At the start of a repository work session, an agent must:

1. Read `workbench/README.md`.
2. Read `workbench/ACTIVE` if it exists.
3. Determine the active workstream folder.
4. Read `workbench/<active-workstream>/session-status.md` first.
5. Read `plan.md`, `context.md`, and `notes.md` as needed.
6. Execute or reassess the recorded `NEXT STEP` before creating a new direction.

If no workstream folder exists yet for the requested work:

1. Create `workbench/<workstream-name>/`.
2. Create `plan.md`, `context.md`, `session-status.md`, and `notes.md`.
3. Initialize `session-status.md` with `Status: PLANNING` and a concrete `NEXT STEP`.
4. Optionally set `workbench/ACTIVE` to the new workstream name.

## Required Update Rules

After each substantial change, the agent must:

1. Update `plan.md` to reflect completed and remaining tasks.
2. Update `session-status.md` with:
   - latest checkpoint
   - current status
   - refreshed progress summary
   - a new `NEXT STEP`
3. Append new decisions, pitfalls, or open questions to `notes.md` when relevant.

Examples of substantial changes:

- implementation of a meaningful website section
- deployment or GitHub Pages configuration change
- SEO or analytics setup
- discovery of a blocker
- completion of a validation step
- preparing to end a session with unfinished work

## Parallel Work Rules

When multiple workstreams are active in parallel:

- create one folder per workstream
- keep `plan.md` and `session-status.md` isolated per workstream
- update `workbench/ACTIVE` to the default active workstream when focus shifts
- never mix statuses or checkpoints from different workstreams in one folder

## Documentation Lifecycle

The workbench is for active execution state, not final public documentation.

When a workstream is complete:

1. Mark `session-status.md` as `DONE`.
2. Ensure `notes.md` captures durable lessons.
3. Move stable user-facing or architectural knowledge into `README.md` or `docs/`.
4. Keep workbench notes concise after completion.

## Agent Requirements

- Do not keep the authoritative task checklist outside `plan.md`.
- Do not start a parallel workstream in an existing folder.
- Do not overwrite `context.md` with temporary status updates.
- Do not finish a session without updating `session-status.md` when work remains.
- Prefer small, factual updates over long narrative logs.
