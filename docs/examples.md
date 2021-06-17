---
title: Examples
slug: examples
---

## Xml payload


```http
@name('xml payload')
POST "https://httpbin.org/post"
"Content-Type" : "application/xml"
data(
"""
<?xml version='1.0' encoding='us-ascii'?>

<!--  A SAMPLE set of slides  -->

<slideshow 
    title="Sample Slide Show"
    date="Date of publication"
    author="Yours Truly"
    >

    <!-- TITLE SLIDE -->
    <slide type="all">
        <title>Wake up to WonderWidgets!</title>
    </slide>
"""
// you can define anything here
/*
"""
    <slide type="all">
    <title>this is commented and, easily taken back</title>
    </slide>
"""
*/

"""
    <!-- OVERVIEW -->
    <slide type="all">
        <title>Overview</title>
        <item>Why <em>WonderWidgets</em> are great</item>
        <item/>
        <item>Who <em>buys</em> WonderWidgets</item>
    </slide>

</slideshow>
"""
)

```


## Basic Authentication

```http
@name('basic auth')
GET http://httpbin.org/basic-auth/foo/bar
basicauth('foo','bar')

```


## Digest Authentication

```http
@name(digest)
GET "https://httpbin.org/digest-auth/20202/username/password/md5"
digestauth("username", "password")
```


## GraphQL

```http
POST 'https://api.spacex.land/graphql' 
json({
    "query":
        """{
          company {
            ceo
            coo
            cto_propulsion
            cto
            """
            // "employees"
            """
            founded
            founder
            launch_sites
            name
            summary
            test_sites
            valuation
            vehicles
          }
        }
  """,
  "variables":null}
)
```



## Extend from Base

```http
# {{baseUrl=api.github.com}}
# {{username=cedric05}}

@name("List events for the authenticated user"): "test"
GET "/users/{{username}}/events"
? "per_page"= "30"
? "page"= "1"    

@name("test") 
GET "https://{{baseUrl}}/"

```