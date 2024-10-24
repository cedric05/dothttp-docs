---
title: dothttp-runner 1.0.20 - 1.0.26 Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---


## 1.0.26
- Fix build issues

## 1.0.25
- Update dotextensions-build to 0.0.43-a23
  - Allows user to use arthematic expressions in json payload
- Fix linux arm64 extension: packages correct platform version of dotextensions-build
- Update dependent packages
  - yauzl to 3.1.3
  - jsonc-parser to 3.3.1

## 1.0.24-1.0.23
- Keep history of cell response for comparision.
  - max number of responses to keep in notebook can be configured by `dothttp.conf.notebook.numofresponses`. 
    - if `0`, it keeps all, default is five.
  - Update dependent packages
    - follow-redirects to 1.15.8
    - @types/node to 22.5.2
    - @types/lodash to 4.17.7

## 1.0.22
  - Update dotextensions-build/cli to 0.0.43a16
    - Updates dependent packages (requests, msal, faker, certifi, urllib3)

## 1.0.21
  - Update dotextensions-build/cli to 0.0.43a14
    - Updates dependent packages

## 1.0.20
  - Update dotextensions-build/cli to 0.0.43a13
    - Fix Azure Cli Login
