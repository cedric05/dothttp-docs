---
title: dothttp-runner 1.0.11 & 1.0.12 Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---

## 1.0.11 & 1.0.12

- Updated dothextensions-build/cli to version 0.0.43a2.
    - New Feature: Added support for Azure Authentication.
    - Updated badssl certificates.
    - Updated dependencies to their latest versions.
        - Bumped faker from version 19.13.0 to 20.0.0, thanks to @dependabot in cedric05/dothttp#202.
        - Azure Authentication Support: Introduced Azure Authentication support, thanks to @cedric05 in - cedric05/dothttp#209.
        - Chore: Bumped jsonschema to version 4.20.0.
        - Chore: Bumped textx to version 4.0.1.
        - Chore: Bumped restrictedpython to version 7.0.
        - Chore: Bumped faker to version 20.1.0.
        - Added Azure Authentication support to the package.
            - Added new Python package msal version 1.26.0.
- Updated dothttp-runner build node js version to 21