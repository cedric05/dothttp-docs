---
title: Flags
slug: flags
---

### Insecure

In local development environments, self-signed certificates are often used. By default, dothttp verifies certificates. However, you can bypass this verification by using `@insecure` after `@name`.

Insecure flag also lets child/grand child reqeust to extend system-command properties. check properties section for more information. 

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


### No Parent Script

When executing, Dothttp typically attempts to load and execute the test script of the parent. While this behavior is advantageous in certain scenarios, there might be cases where running tests in the current target is undesirable. By employing the @no_parent_script flag, Dothttp disregards the execution of the parent script if the flag is present.


#### Example

```http
# In this example, despite inheriting the request definition from `base`, tests will not be executed due to the presence of the `@no_parent_script` flag
@name('sample'): "base"
@no_parent_script
GET "https://<url>"

@name('base')
GET "https://<url>"

> {%

def init_set_variables():
    client.properties.set('key', 'value')

%} python

```