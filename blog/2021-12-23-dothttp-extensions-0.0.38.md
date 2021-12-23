---
title: dothttp-runner 0.0.38
author: prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: extension release update.
hide_table_of_contents: false
---

## [0.0.38]
- [**Improvement**] better code outline and easy filtering 
  - use '^' to filter urls
  - use '#' to filter by name
- [**Improvement**] test script completion provided using request forwarding to javascript.
- [**Bug**] renaming target in notebook or reording notebook is causing failure with incorrect target fixed
- [**Bug**] swagger import is not showing '.yml' files while import
- [**bump**] 
  - dothttp version to 0.0.40a2
    - supports script suggestions
  - swagger-to-har2 to 1.0.4
    - fixes openapi3 import request payloads