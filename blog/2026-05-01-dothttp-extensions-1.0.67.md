---
title: dothttp-runner 1.0.67 - SQLite-based History with node:sqlite
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode, history, sqlite, performance]
description: Migrated request history storage from better-sqlite3 to node:sqlite for better performance and native Node.js integration
hide_table_of_contents: false
---

We're releasing dothttp-runner 1.0.67 with a major upgrade to request history storage! This release migrates from `tingo` to Node.js's native `node:sqlite` module, bringing improved performance, better stability, and native integration.

<!-- truncate -->

## 🔄 What Changed

### SQLite Migration: tingo → node:sqlite

We've migrated the request history storage from `tingo` to Node.js's native `node:sqlite` module (available in Node.js 22.5.0+).

**Why the change?**
- **Native Node.js integration**: Built into Node.js runtime, no native dependencies
- **Better performance**: Optimized by the Node.js core team
- **Improved stability**: No compilation issues across platforms
- **Reduced bundle size**: Removes ~1MB of native binaries
- **Future-proof**: Maintained as part of Node.js core
