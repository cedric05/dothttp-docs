---
title: Comments
slug: comments
---

The dothttp comments are the statements that are not considered . The comments can be used to provide information or explanation. 
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