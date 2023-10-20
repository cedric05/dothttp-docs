---
title: Getting Started with Dothttp
slug: start
---

## Introduction to Dothttp

Dothttp is an open-source programming language designed for testing and interacting with HTTP APIs. Its primary goal is to simplify the process of creating and maintaining API tests by offering an intuitive syntax and user-friendly commands. Dothttp is versatile and can be used for writing tests for RESTful APIs and various other HTTP-based services.

The language is designed to be easily readable and comprehensible. It leverages YAML syntax to specify HTTP requests and responses, making it accessible even to those not well-versed in programming languages. Furthermore, Dothttp supports variables and functions, which enable the generation of dynamic data and code reuse.

Dothttp is built on top of Python and can be effortlessly installed via pip. It provides a command-line interface (CLI) for running tests, generating reports, and debugging code. The CLI can also be seamlessly integrated with Continuous Integration (CI) systems such as Jenkins, CircleCI, and Travis CI, simplifying the automation of API tests.

Key features of Dothttp include:

- Support for HTTP methods like GET, POST, PUT, DELETE, and more.
- Automatic handling of cookies and sessions.
- Support for file uploads and downloads.
- Built-in support for JSON and XML data formats.
- Compatibility with testing APIs secured through OAuth2 and other authentication mechanisms.
- Extensibility through plugins.

All in all, Dothttp is a potent tool for testing and interacting with HTTP APIs. Its simplicity and user-friendliness make it an ideal choice for developers and testers looking to streamline their API testing process.

## Step 1: Installing Dothttp

To get started, if you haven't already, install Dothttp via pip:

```shell
pip install dothttp-req
```

Alternatively, you can use Docker for installation:

```shell
docker pull quay.io/cedric05/dothttp
docker run -it --rm -v $(cwd):/http-files dothttp/dothttp
```

## Step 2: Creating a New HTTP File

Let's create a simple HTTP request using Dothttp. Create a new file named `first.http` and add the following content:

```http
GET https://httpbin.org/get
? urlparamwskey1 = urlparamsvalue2
? urlparamwskey2 = urlparamsvalue2
```

You can run this request using the following command:

```shell
python -m dothttp first.http
```

## Extension Installation

We recommend using HTTP notebooks instead of HTTP files as they come with the capability to store responses and display generated properties.

- [Dothttp Extension](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code)
- [Dothttp Notebook Ace Output Support Extension](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dotbook)

To install these extensions, open the extensions page in your code editor, search for "dothttp," and install both extensions.

[Watch this video to learn more about using Dothttp](https://www.youtube.com/embed/I1PtzV5Oa5c)

This guide will help you get started with Dothttp, and you'll be on your way to efficiently testing and interacting with HTTP APIs.