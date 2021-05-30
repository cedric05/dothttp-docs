---
title: Request basics
slug: request-basics
---

## Method

dothttp supports  `GET`, `POST`, `OPTIONS`, `DELETE`, `CONNECT`, `PUT`, `HEAD`, `TRACE`, `PATCH`, `COPY`, `LINK`, `UNLINK`, `PURGE`, `LOCK`, `UNLOCK`, `PROPFIND`, `VIEW`

#### example  put request

```http
PUT https://httpbin.org/put
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwLCA1RyCgpKSi20tcH0UmZeXr5Ren6BaUlXACO2wnm)

or in curl terms
`curl -X PUT https://httpbin.org/put`

#### example  delete request

```http
DELETE https://httpbin.org/delete
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJxzcfVxDXFVyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpALvdC7A=)

or in curl terms
`curl -X DELETE https://httpbin.org/delete`

## URL params

#### example 1
```http
GET https://httpbin.org/delete
? key1 = value2
? key2 = value2
? key3 = "value2 with spaces"
? key4 = 'value2 with single quotes'

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJxzdw1RyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpXPYK2amVhgq2CmWJOaWpRhC+ERrfGMhXgggolGeWZCgUFyQmpxYrQWRNgLLqKLKZeek5qQqFpfklqcXqAJUcKes=)

```
or in curl terms
`curl -X GET 'https://httpbin.org/delete?key1=value2&key2=value2'`

#### example 2
example with spaces or special charectors
```http
GET https://httpbin.org/delete
? age= 40
? name = "john don"
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJxzdw1RyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpXPYKiemptgomBkBWXmJuqoKtglJWfkaeQkp+nhIAXBUTDw==)

or in curl terms
`curl -X GET 'https://httpbin.org/delete?age=40&name=john+don'`

## Payload


#### example 1: text payload
```http
POST https://httpbin.org/post
? key1 = value2
? key2 = value2
data(
     "this is text"
     // has a comment in between
     " payload"
)
```


[try in browser here](https://cedric05.github.io/dothttp-playground/#eJxFi00KwjAUhPc5xZCVbnzYpSAeQcFe4NU+TLBNghl/enstFRw+GL6BOR3PLQJZ6k5k7i6mTb5fpeRKd8DNpi32eOrwsGbx5u+9UlcOczxDrPhCe9MvmwiCVigueRwtETGhM77M0u+EotOQtfdu/QGvkyls)

curl request for better understanding
`curl -X POST  -d 'this is text payload' 'https://httpbin.org/post?key1=value2&key2=value2'`

#### example 2: text payload

In case of payload containing quotes its hard to add escapes. dothttp gives user flexibilty of triple quote strings (inspired from python).

```http
POST https://httpbin.org/post
? key1 = value2
? key2 = value2
data(
     """this "is" text"""
     // has a comment in between
     """ pay "ram" load"""
)
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJxFi0sKwkAQRPdziqJXurExS0E8goJeoGMaZzDzIdN+cnsdAlqb4lXxTsfzBd6s1B1z6z6kTZ5uXHI1d8Bd5y32eMr40G7h7s+DmKwcWojIfKigUAmmb/sOy8MMLxWCa45RkyEk9Gov1fRTUWQGTRIJY5ahuWvn3AfUxCyi)


#### example 3: json payload
```http
POST https://httpbin.org/post
json({
     "name": "john don",
     "age" : 20
})
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcWcX5eRrVXAogoJSXmJuqZKWglJWfkaeQkp+npAOVSExPVVKwUjAy4KrVBAAJqBcN)

#### example 4: urlencode

```http
POST https://httpbin.org/post
urlencoded({
     "name": "john",
     "age" : 20,
     "lastname": 'doe',
// single quotes
})
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcpUU5qXnJ+SmpKRrVXAogoJSXmJuqZKWglJWfkaekAxVMTE9VUrBSMDKACeQkFpdAVaqn5Keq63Dp6ysUZ+al56QqFJbml6QWc9VqAgA+DSRd)

in curl terms 
```shell
curl -X POST \
-H 'Content-Length: 31' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'name=john&age=20.0&lastname=doe' \
https://httpbin.org/post
```


## Multipart


#### example 1: with file

```http
POST https://req.dothttp.dev
files(
    ('name', 'value'),
    ('name2', 'test.md'),
    ('name3', '{"jsondata" : "jsonvalue"}', 'application/json')    
)
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXL0ot1EvJLwFx9VJSy7jSMnNSizW4FIBAQz0vMTdVXUdBvSwxpzRVXVMHSdgIJF6SWlyil5uCKmMMkqlWyirOz0tJLElUUrBSAHPAhijVgmQTCwpyMpMTSzLz8/RBUuqaIO1cmgDVji0V)

curl mirror of above request

```shell
curl -X POST \
--form name=value \
--form 'name2=@test.md' \
--form 'name3={"jsondata" : "jsonvalue"}' \
https://req.dothttp.dev/
```


## Binary
#### example 1: with file

```http
POST https://req.dothttp.dev
fileinput('C:\Users\john\documents\movie.mkv')
```
## curl

#### example 1: 
basic curl 
```http
curl -X POST https://req.dothttp.dev
--header "content-type: text/plain"
data("hai")
```

[try in browser](https://cedric05.github.io/dothttp-playground/#eJwVx7EKgCAUBdDdr3g41WDu/kRBDa0PfaAganaL+vvobMdfPZPZaZnXjSLQTmdtl2MKFX+nILcyJgoH6aR9LZACg7eJI8gD2zKnolVg8KAjJz1+xJccfw==)