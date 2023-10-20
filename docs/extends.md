---
title: Extending Requests in dothttp
slug: request-extension
---

The "extend" feature in dothttp allows users to inherit request authentication and headers from a parent request. This feature is especially useful for creating a hierarchy of requests where one request can use the authentication and headers defined in another ("parent") request, and potentially override them if necessary.

### Extending from a Base Request
The "extend" feature enables the following capabilities:

- **Authentication Inheritance:** Define authentication in one request and use it across multiple requests.
- **Header Inheritance:** Specify headers in one request and utilize them in other requests.
- **URL Concatenation:** Join the base URL and the target HTTP URL.
- **Insecure Requests:** Mark requests as insecure using the `@insecure` tag.
- **Clear Requests:** Use the `@clear` tag to clear request attributes.
<!-- - **Script Inclusion:** Easily incorporate scripts to run default tests. -->

#### Example 1: Basic Authentication
```http
@name(base)  # <-- "base" identifies the base request
GET "https://httpbin.org/"
basicauth("username", "password")
header1: headervalue1

@name(sub): base  # "sub" inherits authentication and headers from "base"
GET "/basic-auth/username/password"
header2: headervalue2
```

#### Example 2: Digest Authentication
```http
@name(base)  # <-- "base" identifies the base request
GET "https://httpbin.org"
digestauth("username", "password")
header1: headervalue1

@name(sub): base  # "sub" inherits authentication and headers from "base"
GET "/basic-auth/username/password"
header2: headervalue2
```

#### JWT Authorization
```http
# Create a base request
# This base request collects the token for each subsequent request and sets it as a variable
# It also sets the "Authorization" header in subsequent requests
@name("base")
GET "http://localhost:3000/api"
"Authorization" : "{{auth=}}"

> {%

client.global.set("auth", response.headers.valueOf("Authorization"));

client.test("is 200", function(){
    client.assert(response.status === 200, "status is 200")
})

%}

/*
    Using script inheritance. The "Login" request unwraps the authorization header from the token/header
    and checks if the response code is 200.
*/
@name("Login") : "base"
POST "/login"
json({
	"email": "rr@admin.com",
	"password": "pass1",
})

/*
    Using script inheritance. The "self" request sets the authorization header from the earlier API request.
    It will check and update the authorization header according to the latest data and run tests.
*/
@name("self") : "base"
GET "/self"
```

The "extend" feature in dothttp provides a powerful and flexible way to structure and manage your HTTP requests, making it easier to reuse and customize common settings across multiple requests.