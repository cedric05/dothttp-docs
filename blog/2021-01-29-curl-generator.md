---
title: curl-generator
author: prasanth
author_url: https://github.com/cedric05
tags: [curl, requests, debug]
description: generates curl
hide_table_of_contents: false
---

dothttp-req is website solely designed for debugging requests. (it generates curl with all arguments like urlparams, postparams, headers, everything)
when making requests debugging payload, debugging query params is pain taking part. 
like httpbin we will echo same request but in userfriendly curl.
checkout via

`curl -X DELETE https://req.dothttp.dev/user/1`
responds with 

```shell
curl "https://req.dothttp.dev/user/1" \
   -X DELETE \
   -H "connection: Keep-Alive" \
   -H "accept: */*" \
   -H "host: req.dothttp.dev" \
   -H "user-agent: curl/7.68.0" \
   -H "client-ip: 117.221.72.86:50796" \
```

# Improvement: (3/04/2021)
    now hosts are also supported, just prepend https://req.dothttp.dev to any url in integration point, generated curl will be with original url.

`curl -X DELETE https://req.dothttp.dev/https://httpbin.org/user/1`

```shell
curl "https://httpbin.org/user/1" \
   -X DELETE \
   -H "connection: Keep-Alive" \
   -H "accept: */*" \
   -H "host: req.dothttp.dev" \
   -H "user-agent: curl/7.68.0" \
   -H "client-ip: 117.221.72.86:50796" \
```
for debugging requests, dev just needs to replace host name with req.dothttp.dev. it generates curl request for you to verify 