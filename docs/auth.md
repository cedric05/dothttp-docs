---
title: Authentication
slug: auth
---


Dothttp supports basic, digest and certificate auth inherently

## Basic Authentication

Basic authentication is nothing but setting header

`Authorization: <username:password with base64 encoded>`

dothttp provides simple way to set basic authentication

Syntax:

`basicauth(<username>, <password>)`


### Example:

```http
@name('basic auth')
GET http://httpbin.org/basic-auth/foo/bar
basicauth('foo','bar')

```


## Digest Authentication

Digest authentication is one of most used authentication mechanisms.

Syntax:

`digestauth(<username>, <password>)`

```http
@name(digest)
GET "https://httpbin.org/digest-auth/20202/username/password/md5"
digestauth("username", "password")
```


For certificate auth visit [this](./certificates.md)

When users have multiple requests defined, extending auth information from base request is very helpful feature provided by dothttp.

check out more information on this [here](./extends.md)




## AWS Signature v4 Authentication

Aws signature v4 authentication is used for interacting with amazonaws apis

Syntax:

`awsauth(<accessId>, <secretKey>, <service>, <region>)`

```http
@name('simple s3, list buckets')
GET 'http://s3.amazonaws.com'
awsauth('dummy-access-id' , 'dummy-secret-token' , 's3', 'us-east-1')
# replace with correct values 
```


---

When users has multiple requests, extending auth information from base request is very helpful feature provided by dothttp.

check out more information on this [here](./extends.md)