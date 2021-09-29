---
title: dothttp-runner 0.0.31
author: prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: extension release update.
hide_table_of_contents: false
---

## [0.0.31]

- [**Improvement**] **HttpBook**
  - Save Response of **httpbook** cell
  - Generate Programming Language (easy import) from **HttpBook** cell
  - Convert **HttpBook** to httpfile for easy sharing
  - Show Hover suggesstions in **HttpBook** cell
  - Run Individual target when multiple targets are defined in single cell of **HttpBook** notebook
  - Http Targets can be extended from http target defined in Other cell of **HttpBook** notebook
  - Import http file as **Httpbook** (notebook)
- [**Improvement**] feat(useunstable): use unstable build of dothttp, includes unstable build of dothttp while figuring out which version to download
- [**Improvement**] now, extension uses disposes all commands, which helps vscode editor refresh or discard extension when not in use faster
- [**Bug**] Targets Execution will be taken from code lens or editor panel (earlier, it is taken from activetexteditor, which is running into errors incase its not real editor, such as output window)
- [**Bug**] export to postman runs into error in case of file already exported.
- [**Bug**] import postman runs into error in case of file already exits, now shows correct error message.
