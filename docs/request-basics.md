---
title: Basics of Dothttp Requests
slug: dothttp-basics
---

## Supported HTTP Methods

Dothttp supports a wide range of HTTP methods, enabling you to interact with web services effectively. The supported methods include:

- `GET`
- `POST`
- `OPTIONS`
- `DELETE`
- `CONNECT`
- `PUT`
- `HEAD`
- `TRACE`
- `PATCH`
- `COPY`
- `LINK`
- `UNLINK`
- `PURGE`
- `LOCK`
- `UNLOCK`
- `PROPFIND`
- `VIEW`

The syntax for specifying an HTTP request is as follows: `<METHOD> <URL>`. For example, `GET https://req.dothttp.dev` represents a `GET` request to `https://req.dothttp.dev`.

### Example: PUT Request

```http
PUT https://httpbin.org/put
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJwLCA1RyCgpKSi20tcH0UmZeXr5Ren6BaUlXACO2wnm)

In curl terms, this is equivalent to:

```shell
curl -X PUT https://httpbin.org/put
```


#### Example  DELETE request

```http
DELETE https://httpbin.org/delete
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJxzcfVxDXFVyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpALvdC7A=)


In curl terms, this is equivalent to:

```shell
curl -X DELETE https://httpbin.org/delete
```


## URL Parameters

URL parameters are used to exchange small but meaningful pieces of information between web pages. For example, consider the URL `https://req.dothttp.dev?page=3&query=ram`, where `page=3&query=ram` are the URL parameters.

Dothttp provides a flexible way to define URL parameters using the following syntax:

```http
https://req.dothttp.dev
? page = 3
? query = ram
```

With this syntax, you can easily comment out specific parameters, making it developer-friendly.

### Example 1

```http
GET https://httpbin.org/delete
? key1 = value2
? key2 = value2
? key3 = "value2 with spaces"
? key4 = 'value2 with single quotes'
```

[try in browser here](https://cedric05.github.io/dothttp-playground/#eJxzdw1RyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpXPYK2amVhgq2CmWJOaWpRhC+ERrfGMhXgggolGeWZCgUFyQmpxYrQWRNgLLqKLKZeek5qQqFpfklqcXqAJUcKes=)


In curl terms, the request is:

```shell
curl -X GET 'https://httpbin.org/delete?key1=value2&key2=value2'
```

### Example 2 (Dealing with Spaces and Special Characters)

```http
GET https://httpbin.org/delete
? age= 40
? name = "john don"
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJxzdw1RyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpXPYKiemptgomBkBWXmJuqoKtglJWfkaeQkp+nhIAXBUTDw==)

In curl terms, the request is:

```shell
curl -X GET 'https://httpbin.org/delete?age=40&name=john+don'
```

## HTTP Headers

HTTP headers convey essential information about a request or response, as well as the data transmitted in the message body. The syntax for specifying headers is as follows: `key: value`.

### Example

```http
GET https://req.dothttp.dev
content-type: application/json
data("{

}")
```

In this example, the request sets the `content-type` header to `application/json`.

## Request Payload

The request payload is the final part of a request and typically contains data that cannot be passed in the URL. While not all requests have payloads, POST and PUT methods commonly do.

Dothttp supports various payload formats, including text, JSON, URL-encoded, and multipart.

### Text Payload

Text payloads are specified with the syntax: `data("this is payload")`. Text payloads can span multiple lines without the need for escapes. Single and double quotes are also supported. To include double quotes within a payload, triple quotes can be used.

#### Example 1: Text Payload

```http
POST https://httpbin.org/post
? key1 = value2
? key2 = value2
data(
     "this is text"
     // Comment in between
     " payload"
)
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJxFi00KwjAUhPc5xZCVbnzYpSAeQcFe4NU+TLBNghl/enstFRw+GL6BOR3PLQJZ6k5k7i6mTb5fpeRKd8DNpi32eOrwsGbx5u+9UlcOczxDrPhCe9MvmwiCVigueRwtETGhM77M0u+EotOQtfdu/QGvkyls)



In curl terms, the request is:

```shell
curl -X POST  -d 'this is text payload' 'https://httpbin.org/post?key1=value2&key2=value2'
```

#### Example 2: Text Payload with Quotes

To handle payloads containing quotes, Dothttp offers the flexibility of triple-quoted strings, inspired by Python.

```http
POST https://httpbin.org/post
? key1 = value2
? key2 = value2
text(
     """this "is" text"""
     // Comment in between
     """ pay "ram" load"""

; // Break
 'text/plain' // Content-Type
)
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJxFi0sKwkAQRPdziqJXurExS0E8goJeoGMaZzDzIdN+cnsdAlqb4lXxTsfzBd6s1B1z6z6kTZ5uXHI1d8Bd5y32eMr40G7h7s+DmKwcWojIfKigUAmmb/sOy8MMLxWCa45RkyEk9Gov1fRTUWQGTRIJY5ahuWvn3AfUxCyi)

### JSON Payload

JSON (JavaScript Object Notation) payloads are widely used for data transfer in requests. The syntax for specifying JSON payloads is: `json({"key": "value"})`. Using a JSON payload sets the `content-type` to `application/json` by default, which can be overridden if necessary.

#### Example 3: JSON Payload

```http
POST https://httpbin.org/post
json({
     "name": "john don",
     // some comment
     "age" : 20
})
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcWcX5eRrVXAogoJSXmJuqZKWglJWfkaeQkp+npAOVSExPVVKwUjAy4KrVBAAJqBcN)

### URL-Encoded Payload

URL-encoded payloads are commonly used in web requests when the content-type is not specified. The syntax for URL-encoded payloads is the same as for JSON payloads. Using URL-encoded payloads sets the `content-type` to `application/x-www-form-urlencoded` by default, which can also be overridden.

#### Example 4: URL-Encoded Payload

```http
POST https://httpbin.org/post
urlencoded({
     "name": "john",
     "age" : 20,
     "lastname": 'doe',
// Single quotes
})
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcpUU5qXnJ+SmpKRrVXAogoJSXmJuqZKWglJWfkaekAxVMTE9VUrBSMDKACeQkFpdAVaqn5Keq63Dp6ysUZ+al56QqFJbml6QWc9VqAgA+DSRd)

In curl terms, the request is equivalent to:

```shell
curl -X POST \
-H 'Content-Length: 31' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'name=john&age=20.0&lastname=doe' \
https://httpbin.org/post
```

### Multipart Payload

Multipart payloads are used when multiple files need to be uploaded in a single request. The syntax for specifying multipart payloads is as follows:

```
multipart(
     "name of file" < "file path",
     "name of file2" < "filepath2",
     "name" < "inline value",
)
```

All file paths are verified, and if a file path is present, the file is sent in the request. Otherwise, the inline value is sent. Depending on the file extension, the content-type can be automatically set, although this can be overridden.

#### Example 1: Multipart Payload with a File

```http
POST https://req.dothttp.dev
multipart(
    'name' < 'value',
    'name2' < 'test.md',
    'name3' < '{"jsondata" : "jsonvalue"}' ; 'application/json'    
)
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXL0ot1EvJLwFx9VJSy7jSMnNSizW4FIBAQz0vMTdVXUdBvSwxpzRVXVMHSdgIJF6SWlyil5uCKmMMkqlWyirOz0tJLElUUrBSAHPAhijVgmQTCwpyMpMTSzLz8/RBUuqaIO1cmgDVji0V)

In curl terms, the request is equivalent to:

```shell
curl -X POST \
--form name=value \
--form 'name2=@test.md' \
--form 'name3={"jsondata" : "jsonvalue"}' \
https://req.dothttp.dev

/
```

### Binary Payload

Dothttp files support only Unicode format, which means that embedding binary data in a Dothttp file is not supported. To upload binary data, you can use the `fileinput("file path")` syntax.

#### Example 1: Binary Payload

```http
POST https://req.dothttp.dev
fileinput('C:\Users\john\documents\movie.mkv')
// or
// < 'C:\Users\john\documents\movie.mkv'
```

### cURL Equivalent

Dothttp provides a simple way to generate cURL commands for your requests. Here's an example of a basic cURL request generated from a Dothttp request:

#### Example 1: Basic cURL Request

```http
curl -X POST https://req.dothttp.dev
--header "content-type: text/plain"
data("hai")
```

[Try it in your browser](https://cedric05.github.io/dothttp-playground/#eJwVx7EKgCAUBdDdr3g41WDu/kRBDa0PfaAganaL+vvobMdfPZPZaZnXjSLQTmdtl2MKFX+nILcyJgoH6aR9LZACg7eJI8gD2zKnolVg8KAjJz1+xJccfw==)

For more examples, consider exploring the [Dothttp Playground](https://ghpage.dothttp.dev/#eJx9j88KwjAMh+99itKLCrLe9xIKepe4RVdJm9o/wyG+u9WD2CHm0nxffqFEbDe7vVwMKfnYag3eNNFDh7eGwPX6HMAPV1pIcYnslnchS6lrxjCp9g1vodT9A1J2bD24SX67YpFr5hknPvjAPlM07Oajist/FWstFVpPPCFG9Td64ux67H+4UDmC7LrhEE3CWA0cWKxEzNZCmCpXltKP3REoQ5pfN+JgOqqiD/HdlRvWr2eEYOBYkqp1meghVuIJSlpmOA==).