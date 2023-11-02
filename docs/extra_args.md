---
title: Flags
slug: flags
---

### Insecure

In local development environments, self-signed certificates are often used. By default, dothttp verifies certificates. However, you can bypass this verification by using `@insecure` after `@name`.

Use  `@insecure` after `@name` 

#### Example
```http
@name('with-key-and-cert')
@insecure
GET https://client.badssl.com/
certificate(cert="{{cert}}",key="{{key}}")
```

### Clear

To clear all session variables, simply add @clear after @name.

#### Example
```http
@name('with-key-and-cert')
@clear
GET https://client.badssl.com/
certificate(cert="{{cert}}",key="{{key}}")
```

### Proxy

Dothttp allows us to make HTTP/HTTPS requests through a proxy using ('http.proxy', 'proxy-url') or ('https.proxy', 'proxy-url').


#### Example

```http
@name('make http call via proxy')
('http.proxy', 'http://127.0.0.1:2828')
GET "https://<url>

```