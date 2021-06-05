---
title: Extends
slug: extend
---

The dothttp extends is used in case of user wants to inherit request auth/headers from parent request. like oops, extendee can use base auth/headers(only auth and headers) and also override (if needed)

Use cases
- Auth defined in One request, and used everywhere else
- Headers defined in One request and used everywhere else



#### example 1 (basic auth)

```http
@name(base)  # <-- base is used to identify
GET "https://httpbin.org/get"
basicauth("username", "password")
header1: headervalue1

@name(sub): base # sub inherets base's auth and headers
GET "https://httpbin.org/basic-auth/username/password"
header2: headervalue2
```

#### example 1 (digest auth)

```http
@name(base)  # <-- base is used to identify
GET "https://httpbin.org/get"
digestauth("username", "password")
header1: headervalue1

@name(sub): base # sub inherets base's auth and headers
GET "https://httpbin.org/basic-auth/username/password"
header2: headervalue2
```