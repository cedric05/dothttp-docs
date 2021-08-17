---
title: dothttp-runner 0.0.26
author: prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: extension release update.
hide_table_of_contents: false
---


## [0.0.26]
- [**Feature**] Better distinction between json and javascript
- [**Feature**] editor will show suggestions in `.dothttp.json`
- Bump dothttp version to 0.0.33
  - [**Feature**] New dynamic properties ($randomSlug, $uuid, $timestamp)
  - [**Improvement**] Better postman export (apikey, bearerauth)
  - [**Improvement**] Curl/har export shows duplicate headers in case of header has case change
  - [**Improvement**] Curl Generation/export will add content-length (curl itself will generate, adding it will cause other problems)
  - [**Continous**] keeping track of performance
  - [**Improvement**] load huge request payload from file without fear memory
  - [**Bug**] Curl/har with basic auth, adding authentication header fixed
  - [**Bug**] postman with urlencode not working fixed
  - [**New**](https://github.com/cedric05/dothttp/pull/114) Support AWSAuth (landed in version dothttp 0.0.32)
  - [**New**](https://github.com/cedric05/dothttp/pull/109) Support UnixSocket (landed in dothttp version 0.0.31)
  - [**Bug**] add tests for p12, cert, awsauth for dotextensions execute target, (landed in dothttp version 0.0.33)
  - [**Bug**] error handling for regenerate http from parsed object (landed in dothttp version 0.0.33)
  - [**Bug**] requests-aws4auth is not must included (dothttp-wasm) (landed in dothttp version 0.0.33)