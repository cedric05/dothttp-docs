---
title: dothttp-runner 1.0.7, 1.0.8, 1.0.9, 1.0.10 Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---


## 1.0.10
- Update dothextensions-build/cli to 0.0.43a1
    - Improvement: now `json` keyword is optional when payload content-type is `application/json` 
    - Improvement:  Empty file is valid http file, no need to create empty http request just to avoid compilation issue
    - Improvement: Provide support to suggest extendable http requests.
- Improvement: add suggestions for extendable http requests.


## [1.0.9]
- Update dothextensions-build/cli to 0.0.42
-   fix: property from multiple cells or imports is getting overridden resulting into undefined property

## [1.0.8]
- Update dothextensions-build/cli to 0.0.42a13
- Add support to http proxies
- Fix import loads from different cells

## [1.0.7]
- Update dothextensions-build/cli to 0.0.42a12
- Fix peer dependencies issue (uses dot-preact-highlight inplace of preact-highlight)
- click provider for import file.

