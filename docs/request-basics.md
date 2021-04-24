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
data("this is text payload")
```


[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVc9grZqZWGCrYKZYk5palGEL4Rgp+SWJKooVSSkVmsAEQlqRUlCgWJlTn5iSlKmgBR7h3R)

curl request for better understanding
`curl -X POST  -d 'this is text payload' 'https://httpbin.org/post?key1=value2&key2=value2'`

#### example 2: json payload
```http
POST https://httpbin.org/post
json({
     "name": "john don",
     "age" : 20
})
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcWcX5eRrVXAogoJSXmJuqZKWglJWfkaeQkp+npAOVSExPVVKwUjAy4KrVBAAJqBcN)

#### example 3: urlencode

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