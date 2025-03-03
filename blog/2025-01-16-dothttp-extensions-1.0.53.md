---
title: dothttp-runner 1.0.53  Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---

## 1.0.53

- Updated dotextensions-build to version 0.0.44a19
  - Now supports filesystem operations in remote environments.
- Improved property view:
  - Prevents duplicate keys and allows selecting the desired key.
  - Added automatic retry when the CLI exits unexpectedly.
- Introduced support for using CLI capabilities from a remote machine (not recommended for full-fledged editing):
  - For scenarios where requests need to originate from a specific machine (due to network filters, iptables, etc.), you can launch the CLI using dothttp.conf.path.
  - Your script is responsible for downloading and launching the correct CLI version, while VSCode handles request execution and remote editing.

