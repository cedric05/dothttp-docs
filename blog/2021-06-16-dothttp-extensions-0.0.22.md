---
title: dothttp-runner 0.0.22
author: prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: extension release update.
hide_table_of_contents: false
---

## [0.0.22]
- [**Feature**] Restart dothttp-cli command
- [**Improvement**] save file before running (for http file, for notebook it will not try to save)
- [**Bug**] import postman shows error message in case of failure
- [**Feature**] supports vscode hovers(shows informational message on hovering in dothttp)
  > ![Suggestions](/img/suggestions.png)
- [**Feature**] supports vscode definition(on clicking name, it will direct you to base definition)
- [**Improvement**] postman import with file(earlier it used to be link, now supports import via locally downloaded file)
- [**Improvement**] Bump dothttp-cli to 0.0.24
  - [**Improvement**] import postman now supports 2.1.0 postman collection (also lot of bug fixes with import)