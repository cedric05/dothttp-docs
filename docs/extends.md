---
title: Extends
slug: extend
---

The dothttp extends is used in case of user wants to inherit request auth/headers from parent request. like oops, extendee can use base auth/headers(only auth and headers) and also override (if needed)

### Extendable From Base
- Auth defined in One request, and used everywhere else
- Headers defined in One request and used everywhere else
- Url join (contatinates base_url and target http url)
- Insecure (`@insecure`)
- Clear (`@clear`)
- Script (user always want to run default tests)

### No hierarchy
We wanted dothttp to be simple and extendable. lets say, grandparent, parent, child with below relationships
```text
grandparent -> parent
parent -> child
```
child will not use grandparent's any features, it will use parent (better not go for this kind of hierarchy)


#### example 1 (basic auth)

```http
@name(base)  # <-- base is used to identify
GET "https://httpbin.org/"
basicauth("username", "password")
header1: headervalue1

@name(sub): base # sub inherets base's auth and headers
GET "/basic-auth/username/password"
header2: headervalue2
```

#### example 1 (digest auth)

```http
@name(base)  # <-- base is used to identify
GET "https://httpbin.org"
digestauth("username", "password")
header1: headervalue1

@name(sub): base # sub inherets base's auth and headers
GET "/basic-auth/username/password"
header2: headervalue2
```