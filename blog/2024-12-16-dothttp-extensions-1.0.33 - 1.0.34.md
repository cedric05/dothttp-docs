---
title: dothttp-runner 1.0.33 - 1.0.34 Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---


# 1.0.34
- Update dotextensions-build to version 0.0.43-a29
- Feat: Notebook request dothttp exception is now shown in the DothttpUI view instead of simple text.
- Fix: The error message for default/infile variable multi substitution not being supported has been improved to better explain what went wrong.
- Update npm packages

## 1.0.33
- Update dotextensions-build to version 0.0.43-a28
- Support math expressions in variable syntax using keyword $expr. For example $expr:2*10 will substitute 20
- can use xmltodict library for testing/parsing xml response in test_scripts