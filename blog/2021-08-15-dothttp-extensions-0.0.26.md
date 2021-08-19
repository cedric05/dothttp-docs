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
  - [**New Feature**](https://github.com/cedric05/dothttp/pull/114) Support AWSAuth (landed in version dothttp 0.0.32)
  - [**New Feature**](https://github.com/cedric05/dothttp/pull/109) Support UnixSocket (landed in dothttp version 0.0.31)
  - [**New Feature**] New dynamic properties ($randomSlug, $uuid, $timestamp)

  - [**Improvement**] Better postman export (apikey, bearerauth)
  - [**Improvement**] Curl/har export shows duplicate headers in case of header has case change
  - [**Improvement**] Curl Generation/export will add content-length (curl itself will generate, adding it will cause other problems)
  - [**Improvement**] keeping track of performance (via benchmark suite)
  - [**Improvement**] load huge request payload from file without fear memory
  - [**Improvement**] postman import to http (import variables to .dothttp.json)
  - [**Improvement**] postman import to http (create base http incase of inherit auth)
  - [**Improvement**] postman export expose vairables from .dothttp.json

  - [**Bug**] Curl/har with basic auth, adding authentication header fixed
  - [**Bug**] postman with urlencode not working fixed
  - [**Bug**] add tests for p12, cert, awsauth for dotextensions execute target, (landed in dothttp version 0.0.33)
  - [**Bug**] error handling for regenerate http from parsed object (landed in dothttp version 0.0.33)
  - [**Bug**] requests-aws4auth is not must included (dothttp-wasm) (landed in dothttp version 0.0.33)
  - [**Bug**] fix curl gen for awsauth
  - [**Bug**] fix curl for urlencoded not generating payload data
  - [**Bug**] fix format http file for certificates and awsauth
  - [**Bug**] fix aws auth with post method not working
  - [**Tests**] integration tests for awsauth