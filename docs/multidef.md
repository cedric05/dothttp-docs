---
title: Multiple requests
slug: multidef
---

## Initial

Having to define seperate request for each file is not clean. dothttp supports defining multiple requests in single file

```http
// first one
GET https://httpbin.org/get
// second one
POST https://httpbin.org/post
```

to target specific request use `--target` argument 

#### example 1
```
// first one
GET https://httpbin.org/get


// second one
POST https://httpbin.org/post
```
```shell
python -m dothttp test.http --target 1
#  picks first request
```
```shell
python -m dothttp test.http --target 2
# picks second request
```

## define/naming

Instead of going with number once can name request go pass that name


```http
@name(first)
GET https://httpbin.org/get


@name(second)
POST https://httpbin.org/post
```

```shell
python -m dothttp test.http --target first
#  picks first request
```
```shell
python -m dothttp test.http --target second
# picks second request
```

#### example 3 (quotes)
names having special chars or space needs to be defined in quotes(single/double)
```http
@name('name with spaces')
GET https://httpbin.org/get

@name("name with double quotes")
GET https://httpbin.org/get
```