---
title: Comments
slug: comments
---

The dothttp comments are the statements that are not considered (no op) for request generation. These can be used to provide information or explanation. 
It can also be used to hide request data.

Types of dothttp Comments
- Single Line Comment (`//` like javascript)
- Multi Line Comment (startswith`/*`  endswith `*/` like javascript)
- Unix Comment `#`



#### example 1 (single line)

```http
//first.http
GET https://httpbin.org/get
//? urlparamwskey1 = urlparamsvalue2
? urlparamwskey2 = urlparamsvalue2
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJzT10/LLCou0csoKSngcncNUQAxiq309UF0UmaeXn5Run56agmXvr69QmlRTkFiUWJueXF2aqWhgi1coLgsMac01YgLTYkRphIArb0oLw==)


produces request 
```shell
curl -X GET \
'https://httpbin.org/get?urlparamwskey2=urlparamsvalue2'
```


#### example 2 (combo)

```http
POST https://httpbin.org/post
json({
    "name" : "john",
//    "name" : "doe",
    "location" : 'newyork',  
/* 
    this is ignored
*/
    "interests" : [
                    "hiking", 
                    'working out', 
                    'football',
                    //"manga",
                    "netflix",
    ]
})

```


[try in browser here](https://cedric05.github.io/dothttp-playground/#eJx1jUEKwkAMRfdzipDNqBSz9xIKuhMXo522Y9ukdCIq4t2dVjdK/QQC7/2QzXq7g0q1iyuiYR8DL6UvqZOo5hyFZw8DKciu9QgrwLNUjJkh+sa5+ERH1sjJaRAeuGV/vUtf2wzA0ALGhlYhwjAlS+9zs6D3YWD1vY8ah8v9yH6DVagDl5jBpLbX9Ct5kIvaf51CRI+uaWw26YmwdVw6nNbIXosm3D76YJ5z8wIAcEyH)


produces request, manga and name 'doe' is commented/removed whwen making request
```shell
curl -X POST \
-H 'Content-Length: 102' \
-H 'Content-Type: application/json' \
-d '{"name": "john", 
    "location": "newyork", 
    "interests": [
            "hiking", 
            "working out", 
            "football", 
            "netflix"]
    }' \
https://httpbin.org/post
```