---
title: Variables

slug: variables
---

## Variables

one can define variables in http file via `{{var}}`. define it once and use it everywhere

#### example 1:

```shell
//test.http
GET https://httpbin.org/{{var=get}}
? path = "{{var}}"
// curl -X GET 'https://httpbin.org/get?path=get'
```

`python -m dothttp test.http`

In the above `httpdef`, var is set to `get`. one can overwrite it via

`python -m dothttp test.http --properties var=post`

producing

`curl -X GET 'https://httpbin.org/post?path=post'`

#### example 2:

```http
//test.http
POST https://httpbin.org/post
json({
  "firstname": "{{name=john}}",
  "lastname": "{{lastname=doe}}",
  "location": "hyderabad",
// "location": "delhi",
  "full name": "{{name}} {{lastname}}",
})
```

curl output will be

```shell
curl -X POST \
-H 'Content-Length: 90' \
-H 'Content-Type: application/json' \
-d '{"firstname": "john", "lastname": "doe", "location": "hyderabad", "full name": "john doe"}' \
https://httpbin.org/post
```

override via properties by passing in command line

`python -m dothttp --properties name=shiva lastname=prasanth`

```shell
curl -X POST \
-H 'Content-Length: 102' \
-H 'Content-Type: application/json' \
-d '{"firstname": "shiva", "lastname": "prasanth", "location": "hyderabad", "full name": "shiva prasanth"}' \
https://httpbin.org/post
```

## Environment

passing properties from command line is not always handy. one can define

`.dothttp.json` in same directory as http file

```json
//.dothttp.json
{
  "*" : {
    "default": "variables"
  },
  "john": {
    "name": "jhonny",
    "lastname": "depp"
  },
  // ironman
  "ironman": {
    "name": "robert",
    "lastname": "dny jnr"
  }
}
```


## random

while integration testing, having to replace few fields are pain points.
using $randomStr will generate random string of random length.

- random string ($randomStr)
- random integer ($randomInt)
- random float( $randomFloat)
- random bool ( $randomBool)

```http
//test.http
POST https://httpbin.org/post
json({
    "full name":  "john {{name=$randomStr:10}}",
    "name":  "john {{name}}",
    "height": {{$randomInt:2}},
})
```
name --> shiva + "randomString of length 10 chars"
height --> randomInteger of length 2

made request will like below
```shell
curl -X POST \
-H 'Content-Length: 73' \
-H 'Content-Type: application/json' \
-d '{"full name": "john Z4gi1r8IEX", "name": "john Z4gi1r8IEX", "height": 51}' \
https://httpbin.org/post
```