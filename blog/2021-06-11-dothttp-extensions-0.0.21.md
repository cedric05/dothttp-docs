---
title: dothttp-runner 0.0.21
author: prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: extension release update.
hide_table_of_contents: false
---
# 0.0.21
Notebooks can be used natively by upgrading to latest vscode version[57]

## Features
- [**Feature**](../docs/certificates) certificates pinning for sites
  - P12 (with password)
  - cert (with cert & optional key)
- [**Feature**](../docs/extra_args#insecure) Allow insecure requests
- [**Feature**](../docs/extra_args#clear) Cleanup Session after request completion
- [**Improvement**](../docs/extends#extendable-from-base) Extend url from base (base_http url + target_def url)
- [**Improvement**](../docs/extends#extendable-from-base) Extend certificate, insecure, clear from base