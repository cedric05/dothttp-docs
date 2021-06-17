---
title: Request basics
slug: request-basics
---

## Method

dothttp supports  `GET`, `POST`, `OPTIONS`, `DELETE`, `CONNECT`, `PUT`, `HEAD`, `TRACE`, `PATCH`, `COPY`, `LINK`, `UNLINK`, `PURGE`, `LOCK`, `UNLOCK`, `PROPFIND`, `VIEW`


syntax is 
`<METHOD> <URL>` for example `GET https://req.dothttp.dev` will make a `GET` request to `https://req.dothttp.dev`

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

Passing URL parameters is a way to exchange small and meaningful information between pages on a website. 
for example
`https://req.dothttp.dev?page=3&query=ram` 

In here `page=3&query=ram` is the url params.

Dothttp gives to fesibility to define params like

```http
https://req.dothttp.dev
? page = 3
? query = ram
```
with above syntax, one can always comment any param and make requests. (dev friendly)
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

## Headers

HTTP header fields provide required information about the request or response, or about the object sent in the message body.

Syntax: `key: value` 

#### Example
```http
GET https://req.dothttp.dev
content-type: application/json
data("{

}")

```
above request sets `content-type` to `application/json`.

## Payload


It is last part of a request is the body/payload. Not all requests will have payload. useually post & put methods have payloads.
payload/body consists of data which cannot be passed in url.

With dothttp users can define payload in [text format](#text-payload), [json format](#json-payload), [urlencode](#urlencode), [multipart format](#multipart)


### Text Payload:

Syntax: 
`data("this is payload")` In here `this is paylaod` is payload sent to request. it accepts mulitiline with having to escapes.
Single quote or double quote is also supported. In case of escapping double quote, one could use triple quotes like


`""" 'this is "example"'"""` --> has quotes

#### Breaks:

dothttp provides text breaks like `data("string" "join")` converts to `data("stringjoin")` using text breaks, dev can comment that specific key (dev friendly)


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

### Json payload

Json(javascript object notation) payload is one of the most used request transfer format. 

Syntax:

`json({"key": "value"})` 

Using json payload will set `content-type` to `application/json` by default (one can always override).

#### example 3: json payload
```http
POST https://httpbin.org/post
json({
     "name": "john don",
     "age" : 20
})
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcWcX5eRrVXAogoJSXmJuqZKWglJWfkaeQkp+npAOVSExPVVKwUjAy4KrVBAAJqBcN)

### UrlEncode

by default most browsers use this method by default (if content-type is not specified). usage is same as [json payload](#json-payload)

Syntax: `urlencoded({"key":"value"})`

using urlencoded payload will set `content-type` to `application/x-www-form-urlencoded` (can be overriden)

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


### Multipart

This method of payload is used incase of multiple files needed to be uploaded in single request. 

Syntax:
```
files(
     ("name of file", "file path"),
     ("name of file2", "filepath2"),
     ("name", "in line value"),
)
```

All file paths from above are verfied, if file path is present it will be sent, otherwise, inline value is sent in the request.
according to file extension, content-type of that file can be set. (can be overriden like this `('name', 'filepath', 'application/json')`)


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


### Binary


http files will only support unicode format. As embedding binary data in http file is not supported, http provides upload file(can be binary or non binary) with this.

Syntax:
`fileinput("path of file")`

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


---
Also checkout 
[graphql example](https://ghpage.dothttp.dev/#eJx9j88KwjAMh+99itKLCrLe9xIKepe4RVdJm9o/wyG+u9WD2CHm0nxffqFEbDe7vVwMKfnYag3eNNFDh7eGwPX6HMAPV1pIcYnslnchS6lrxjCp9g1vodT9A1J2bD24SX67YpFr5hknPvjAPlM07Oajist/FWstFVpPPCFG9Td64ux67H+4UDmC7LrhEE3CWA0cWKxEzNZCmCpXltKP3REoQ5pfN+JgOqqiD/HdlRvWr2eEYOBYkqp1meghVuIJSlpmOA==)