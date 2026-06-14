---
title: dothttp-runner 1.0.69 - Smart CLI Selection & Stacked Headers Layout
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode, cli, installer, headers, notebook]
description: Extension now picks the newest installed dothttp CLI automatically, and the headers layout switches from side-by-side to top-and-bottom
hide_table_of_contents: false
---

We're releasing dothttp-runner 1.0.69 with two changes: smarter CLI version selection using `version.json`, and a revised headers layout that stacks request and response headers vertically instead of side by side.

<!-- truncate -->

## What's New

### Smart CLI Selection via version.json

Previously, the extension found the dothttp CLI binary by checking a fixed priority list and returning the first match. This meant that if multiple binaries existed (extension-bundled, workspace-local, globally downloaded), the order was fixed regardless of which one was newer.

1.0.69 changes this by reading `version.json` from each candidate binary's install directory and **selecting the newest version** using semver comparison.

**Selection priority:**

1. **Explicit user config** — if `dothttp.conf.path` is set and the file exists, that binary is always used
2. **Newest among all others** — the extension scans the extension-bundled binary, the workspace-local binary, and the globally downloaded binary, reads their `version.json`, and picks the highest version

Version strings follow Python PEP 440 format (e.g. `0.0.44a33`). The extension converts these to semver pre-release notation (`0.0.44-a.33`) internally for comparison.

**Why this matters:** When you manually update the dothttp CLI to a newer version than what shipped with the extension, the extension now picks up your newer installation automatically rather than defaulting to its own bundled binary.

### Headers Layout: Top and Bottom

The side-by-side columns introduced in 1.0.68 have been changed to a **stacked vertical layout**: Request Headers on top, Response Headers below.

The side-by-side layout worked well on wide displays but compressed the header name and value columns too much on narrower panels. The stacked layout gives each table the full width.

## Technical Details

### Version Comparison

The new `compareCliVersions` function in `downloader.ts` handles PEP 440 → semver conversion:

```ts
function compareCliVersions(a: string | undefined, b: string | undefined): number {
    const toSemver = (v: string | undefined) =>
        semver.coerce(v?.replace(/(\d)(a|b|rc)(\d)/, '$1-$2.$3')) ?? new semver.SemVer('0.0.0');
    return semver.compare(toSemver(a), toSemver(b));
}
```

Candidates without a `version.json` lose to any versioned candidate but retain their insertion order (extension-bundled first) among themselves.

### New InstalledVersionInfo Interface

A new `InstalledVersionInfo` interface exposes the full metadata from `version.json`:

```ts
export interface InstalledVersionInfo {
    version: string;
    dothttp_req: string;
    python: string;
    pyinstaller: string;
    platform: string;
    runner_os: string;
    runner_arch: string;
    build_id: string;
    build_number: string;
    commit: string;
    source: string;
}
```

---

**Version:** 1.0.69  
**Release Date:** June 13, 2026  
**Download:** [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code)
