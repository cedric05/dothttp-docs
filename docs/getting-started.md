---
title: Getting Started
slug: /
---

## Step 1: Install dothttp

If you haven't already, install dothttp via pip:

```shell
pip install dothttp-req
```

or via docker

```shell
docker pull quay.io/cedric05/dothttp
# docker pull dothttp/dothttp:latest
# prefer quay.io
docker run -it --rm -v $(cwd):/http-files dothttp/dothttp
```

## Step 2: Create new Http file

simple get request with dothttp

```http
//first.http
GET https://httpbin.org/get
? urlparamwskey1 = urlparamsvalue2
? urlparamwskey2 = urlparamsvalue2
```

run it via

`python -m dothttp first.http`
