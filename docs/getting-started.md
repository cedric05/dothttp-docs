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


## extension installation

we ask you to use http notebooks instead of httpfiles. it comes with storing responses, shows generated properies. 

Extension url: [dothttp](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code) 

Extension Notebook Ace output support: [dotbook](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dotbook)

To install, open extensions page, search for dothttp and dotbook install both.

<iframe width="720" height="480" src="https://www.youtube.com/embed/I1PtzV5Oa5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>