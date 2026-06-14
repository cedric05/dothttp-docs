---
title: dothttp-runner 1.0.68 - Request & Response Headers Side by Side
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode, headers, notebook, ui]
description: The Headers tab now shows both request and response headers side by side in two columns
hide_table_of_contents: false
---

We're releasing dothttp-runner 1.0.68, which brings a improvement to the notebook renderer: the Headers tab now displays both request and response headers at the same time.

<!-- truncate -->

## What's New

### Two-Column Headers View

Previously, the Headers tab in the notebook output only showed response headers. You had no way to see the actual request headers (Authorization, Content-Type, User-Agent, custom headers from your `.http` file) without inspecting the raw request manually.

In 1.0.68, the Headers tab is now split into two equal columns:

- **Left column** — Request Headers (the headers sent on the wire)
- **Right column** — Response Headers (returned by the server)

If either side has no headers, it shows "None" in italics. The tab only appears when at least one side has headers.

This makes it easy to compare what you sent vs. what the server saw without switching views or digging through logs.

## Technical Details

### New Components

Two new sub-components were added to `renderer.tsx`:

- **`HeadersTable`** — renders a header/value table for a given headers map
- **`HeadersPanel`** — the two-column flex layout wrapping two `HeadersTable` instances

### Backend Requirement

This feature depends on dothttp-req v0.0.44a33+, which adds `request_headers` to the execute response payload. The field captures the actual headers sent on the wire via `requests.PreparedRequest`, so you see exactly what was transmitted — including headers added by the HTTP library, not just what you wrote in the file.

A new `request_headers?: Headers` field was added to the `DothttpExecuteResponse` type in `response.ts`.

---

**Version:** 1.0.68  
**Release Date:** June 12, 2026  
**Download:** [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code)
