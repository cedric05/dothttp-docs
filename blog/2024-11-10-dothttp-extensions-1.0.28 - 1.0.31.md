---
title: dothttp-runner 1.0.28 - 1.0.31 Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---

## 1.0.31
- Fix header completions appearing in all areas causing bad experience (like payload and test script)
- Fix Url completion not working properly with notebook
- Update grammer, json payload doesnot need to have quotes for strings.

## 1.0.30
- package.json version issue fixed.

## 1.0.29
- Dothttp Diagnostics is now configurable
- Update dotextensions-build to 0.0.43-a26
  - json payload: keys/values without quotes & prerequest message cleanup & use pytest to test dothtp request files

## 1.0.28
- Fixes #218 , History is lost if one runs into error