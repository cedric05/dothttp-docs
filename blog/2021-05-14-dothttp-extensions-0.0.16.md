---
title: dothttp-runner 0.0.16
author: prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode, announcement]
description: extension release update.
hide_table_of_contents: false
---

## [0.0.16]
- [**Improvement**] curl generated for json data types will formatted for better viewing experience
- [**Improvement**] notebooks will be serialized in formatted json, for better reading in git (preview)
- [**Improvement**] Better completion for infile variables, completes language keywords, better details for environment/properties/infile variable information
- [**Improvement**] urls can be completed from past runs(past 100 entries) (earlier it used to be from current file)
- [**Improvement**] History entry will now have urls for easy filtering
- [**Bug**] fast error reporting. (earlier there is bug which will not update error diagnostics right away, even though its fixed)
- [**Bug**] users running with pythonpath not able to start extension for first time fixed
- [**Bug**] grammer fixed and many improvements (highlights triple quotes correctly, indentation not happening fix)
