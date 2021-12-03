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


[try in browser here](https://cedric05.github.io/dothttp-playground/#eJzT1y9JLS7RyygpKeBydw1RADGKrfT1QXRSZp5eflG6fnV1WWKRbXpqSW0tl71CQWJJhoKtghJYtLZWiUtfXyG5tChHQTdCAWSCOjYjgJrtQRpBpqgDABPjJ6k=)

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


[try in browser here](https://cedric05.github.io/dothttp-playground/#eJxVjc0KwjAQhO95iiUnBeneC30GBX2B1GxNSsyWZD1IyLtrFH96mhm+2VlEoSydE1nUYX88QXO5R2w6+thxuuDCWdScOW6KAtCTT1miuZLuQZfS3DCzi7XqXePB/ONPGizTt8FnI55ja7i7pWRGY58Icc0sBeffJ9MtBFg/rRV+86/pun0Aa2RE1A==)

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


[try in browser here](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcWcX5eRrVXApAoJRWmpOjkJeYm6pkBeRl5WfkKVRXg/i2KkWJeSn5ucElRVaGBrW1SjoQDdjUImQzUjPTM0qA8tXVUP2eeSVWRrW1Oly1mgBMty+h)

made request will like below
```shell
curl -X POST \
-H 'Content-Length: 73' \
-H 'Content-Type: application/json' \
-d '{"full name": "john Z4gi1r8IEX", "name": "john Z4gi1r8IEX", "height": 51}' \
https://httpbin.org/post
```
## uuid

uuid is completely random string with 36 char length

### Example

```http
POST "https://httpbin.org/post"
json(
  {
    // generates random uuid
    "uuid": "{{$uuid}}"
  }

)
```

## randomSlug
`randomSlug` or `randomLoremSlug`

we’ll see random, human-readable slugs (e.g., brave-purple-penguin) in the web development world. These slugs offer the uniqueness of a number ID but can be more playful and fun.


`{{$randomSlug:3}}` --> create slug with 3 (`brave-purple-penguin`)
`{{$randomSlug:2}}` --> create slug with 3 (`brave-ranga`)


### example

```http
POST "https://httpbin.org/post"
json(
  {
    // creates slug with human readable random
    "slug": "{{$randomSlug:10}}"
  }

)
```

## timestamp

While testing, uniquely identifiying request is hard,  one can use timestamp (epoch) in headers or queryparams to distinguish from ther requests

usage:

`{{$timestamp}}` --> generates `1629338487`  (current timestamp)

### Example:
```http
POST "https://httpbin.org/post"
json(
  {
    // creates current timestamp
    "timestamp": "{{$timestamp}}"
  }

)
```
