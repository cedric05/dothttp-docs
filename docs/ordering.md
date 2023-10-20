---
title: Request Ordering in Dothttp
slug: request-order

Dothttp incorporates a variety of keywords, and using them in the wrong order can lead to errors. To ensure error-free execution, it's essential to maintain a structured approach.

The recommended order for composing a Dothttp request is as follows:

0. [**Import**](./import.md) (Optional)
1. [**Name**](./multidef.md) (Optional)
2. [**Flags (@insecure/@clear)**](./extra_args.md) (Optional)
3. **URL** (Required)
4. [**Basicauth/Digestauth**](./auth.md) (Optional)
5. [**Certificates**](./certificates.md) (Optional)
6. [**URL Parameters**](./request-basics.md#url-params) (Optional)
7. [**Payload**](./request-basics.md#payload) (Optional)
8. [**Test Scripts**](./test_scripts.md) (Optional)

Please note that the order may evolve in the future, but we will make efforts to maintain compatibility with older versions to support existing implementations.

This structured order ensures a clear and consistent approach to creating Dothttp requests, reducing the likelihood of errors and enhancing the readability of your scripts.