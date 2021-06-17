---
title: Ordering
slug: order
---

Dothttp has lot of keywords. using one in different place can cause errors. for Running without errors. one use keep this under blanket


Order is
1. [name](./multidef.md) Opitonal
2. [flags(@insecure/@clear)](./extra_args.md) Optional
3. Url (required)
4. [basicauth/digestauth](./auth.md) Optional
5. [certificates](./certificates.md) Optional
6. [urlparams](./request-basics.md#url-params) Optional
7. [payload](./request-basics.md#payload) Optional
8. [script](./test_scripts.md) Optional


Ordering may change in future, but we will most likely want to support old versions.