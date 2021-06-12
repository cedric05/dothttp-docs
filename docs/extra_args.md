---
title: Flags
slug: flags
---

### Insecure

While development in local, dev environments most of us uses self signed certificates. By default dothttp will verify certificates, incase of one wants to use self signed certificates

Use  `@insecure` after `@name` 

#### Example
```http
@name('with-key-and-cert')
@insecure
https://client.badssl.com/
certificate(cert="{{cert}}",key="{{key}}")
```

### Clear

When one wants to clear all session variables use

Use  `@clear` after `@name` 

#### Example
```http
@name('with-key-and-cert')
@clear
https://client.badssl.com/
certificate(cert="{{cert}}",key="{{key}}")
```
