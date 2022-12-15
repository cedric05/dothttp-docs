---
title: dothttp-runner 1.0.0
author: prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode]
description: extension release update.
hide_table_of_contents: false
---


This is our first ever 1.0 release since its first introduced (Feb 2021). For past couple of months updates mainly focuses on fixing bugs and we feel now is the time to hit 1.0. 

As a sole developer, i feel little proud of this product although adoption is little less. During my last job, I had work 10-20 microservices, each having its own apis. There is no client or sdk to interact with apis. Its hard to use curl as it is not easy to save or update. Postman is there (widely used) but i hated as its not dev friendly (hate switching multiple tabs and too many tabs). It also consumes huge cpu and memory. I started to built this product, solely to save and resue and dev friendly. These are the principles i have in mind.

1. doesn't spy (or) no telemtry.
2. dev friendly .
3. quick import/export/share .
4. works with existing dev tools (vscode and cli).
5. easy to quick start and understand .
6. save and re-use mentality . 

It used be a just another cli like curl but after discussing internally with postman/insomnia users, I went on to create vscode code extension. After our first vscode extension release, there were some requests like support history, variables, multiple requests in single file, extending requests. 

With its current usage, I felt investing any more in this is is not profitable (both professionally and personally). I will keep supporting(bug fixing) this but only for next 2-3 more months. and its reason for releasing it as 1.0.0. 

Checkout [this](https://docs.dothttp.dev/docs/dothttp-runner-notebook) (this is our most promising feature) for quick recap on what dothttp runner can offer you.