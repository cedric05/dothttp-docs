---
title: Getting Started
slug: /
---

## What is Dothttp?

Dothttp is an open-source programming language for testing and interacting with HTTP APIs. It aims to simplify the process of writing and maintaining API tests by providing a simple syntax and easy-to-use commands. Dothttp can be used to write tests for RESTful APIs and other HTTP-based services.

The language is designed to be human-readable and easy to understand. It uses YAML syntax for specifying HTTP requests and responses, making it easy to read and write tests even for those who are not familiar with programming languages. Dothttp also supports variables and functions, which can be used to generate dynamic data and reuse code.

Dothttp is built on top of Python and can be installed using pip. It comes with a command-line interface (CLI) that allows you to run tests, generate reports, and debug your code. The CLI can also be integrated with Continuous Integration (CI) systems such as Jenkins, CircleCI, and Travis CI, making it easy to automate your API tests.

Some of the key features of Dothttp include:

Support for HTTP methods such as GET, POST, PUT, DELETE, and more
Automatic handling of cookies and sessions
Support for file uploads and downloads
Built-in support for JSON and XML data formats
Support for testing APIs secured with OAuth2 and other authentication mechanisms
Extensibility through plugins
Overall, Dothttp is a powerful tool for testing and interacting with HTTP APIs. Its simplicity and ease of use make it an excellent choice for developers and testers who want to streamline their API testing process.

## Step 1: Install dothttp

If you haven't already, install dothttp via pip:

```shell
pip install dothttp-req
```

or via docker

```shell
docker pull quay.io/cedric05/dothttp
# docker pull dothttp/dothttp:latest
# prefer quay.io
docker run -it --rm -v $(cwd):/http-files dothttp/dothttp
```

## Step 2: Create new Http file

simple get request with dothttp

```http
//first.http
GET https://httpbin.org/get
? urlparamwskey1 = urlparamsvalue2
? urlparamwskey2 = urlparamsvalue2
```

run it via

`python -m dothttp first.http`


## extension installation

we ask you to use http notebooks instead of httpfiles. it comes with storing responses, shows generated properies. 

Extension url: [dothttp](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code) 

Extension Notebook Ace output support: [dotbook](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dotbook)

To install, open extensions page, search for dothttp and dotbook install both.

<iframe width="720" height="480" src="https://www.youtube.com/embed/I1PtzV5Oa5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
