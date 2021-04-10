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
or in curl terms
`curl -X PUT https://httpbin.org/put`

#### example  delete request

```http
DELETE https://httpbin.org/delete
```

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