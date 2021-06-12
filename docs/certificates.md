---
title: Certificates
slug: certificates
---
Dothttp by default uses cacerts. Starting [0.0.23](https://pypi.org/project/dothttp-req/0.0.23/) version, it supports client certificate ssl auth (X509Auth).

## Certificate
add `certificate(cert="{{cert}}")` for adding custom ssl configuration

(has no support for password encrypted)

```http
https://client.badssl.com/
certificate(cert="{{cert}}")
```

## Certificate and key
If certificates and key are in seperate files, one can use below

```http
https://client.badssl.com/
certificate(cert="{{cert}}", key="{{key}}")
```

(has no support for password encrypted)

## P12 and password
If p12 file and password, use below notation

```http
@name('with-p12')
@clear
https://client.badssl.com/
p12(file="{{p12}}",password="badssl.com")
```

### Notes:
1. With ssl, one would want to use `@insecure` when certificates are self-signed
2. with ssl, and one is changing certificates, because of requests connection pool pinning for host use `@clear`