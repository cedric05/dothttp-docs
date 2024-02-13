---
---
title: dothttp-runner 1.0.15 Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---

## 1.0.15

- Updated dothextensions-build/cli to version 0.0.43a6.
    - chore bump versions for `faker`, `waitress`, `requests-pkcs12`
    - Adds init script execution which runs before loading parameters (useful for loading/setting vars)
    - Update pre prequest script to support payload variables
    - Allows `json`, `yaml` in test script