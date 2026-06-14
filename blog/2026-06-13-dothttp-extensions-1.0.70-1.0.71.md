---
title: dothttp-runner 1.0.70 / 1.0.71 - Per-Architecture Download URLs & Windows ARM64
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode, installer, windows, arm64, platforms]
description: Download URL schema now uses explicit per-architecture keys and adds Windows ARM64 support; 1.0.71 hotfix ensures clients are included in the release bundle
hide_table_of_contents: false
---

We're releasing dothttp-runner 1.0.70 and 1.0.71. Both ship on June 13, 2026. Version 1.0.71 is a hotfix for 1.0.70 which was missing the client binaries in its published bundle.

<!-- truncate -->

## What Changed

### Explicit Per-Architecture Download URLs (1.0.70)

The `version` interface in `download.ts` previously used loosely-typed and partially optional keys for download URLs, with fallback chains for missing architectures:

```ts
// Before (1.0.69)
downloadUrls: {
    linux?: string,
    linux_arm64: string,
    linux_amd64: string,
    windows?: string,
    darwin: string,
    darwin_arm64?: string,
    darwin_amd64?: string,
}
```

1.0.70 replaces this with a strict, explicit schema where every supported platform+architecture combination has its own required key:

```ts
// After (1.0.70)
downloadUrls: {
    linux_amd64: string,
    linux_arm64: string,
    windows_x86: string,
    windows_amd64: string,
    windows_arm64: string,
    darwin_arm64: string,
    darwin_amd64: string,
}
```

The `fetchPlatformDownloadurl` function was rewritten to match on both `platform` and `arch` without fallbacks. Windows now dispatches to `windows_arm64`, `windows_amd64`, or `windows_x86` based on the detected architecture.

### Windows ARM64 Support

The old schema had a single `windows` key with no architecture distinction. The new schema adds a dedicated `windows_arm64` URL, enabling native binaries for Windows ARM64 devices (Surface Pro X, Snapdragon-based Windows laptops).

## 1.0.71 Hotfix

Version 1.0.70 was published without the client binaries included in the VSIX bundle, making it non-functional. 1.0.71 is a version bump with no code changes that re-publishes the release with the correct artifacts. If you installed 1.0.70, update to 1.0.71.

---

**Versions:** 1.0.70, 1.0.71  
**Release Date:** June 13, 2026  
**Download:** [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code)
