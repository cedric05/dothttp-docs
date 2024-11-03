---
title: dothttp-runner 1.0.27 Release Notes
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: Updates on the latest extension releases.
hide_table_of_contents: false
---

## 1.0.27
- Update dotextensions-build to 0.0.43-a24
  * Bump python from 3.11 to 3.13 by @dependabot in https://github.com/cedric05/dothttp/pull/310
  * Fix https://github.com/cedric05/dothttp/issues/321 Support aws auth session_token by @cedric05 in https://github.com/cedric05/dothttp/pull/322
  * Fix https://github.com/cedric05/dothttp/issues/319 support running system commands via shell and capturing it as property
  * Fix https://github.com/cedric05/dothttp/issues/318: support reading env variables and respective test case
  * Fix https://github.com/cedric05/dothttp/issues/301: Add support for using jsonschema in test scripts
  * Fix https://github.com/cedric05/dothttp/issues/320: add support to use requests package in prerequest script
    * **Full Changelog**: https://github.com/cedric05/dothttp/compare/v0.0.43a23...v0.0.43a24
- Removed eslint dependencies