---
title: Enhanced HTTP File Organization with Imports
slug: http-file-import
---

Starting with version 0.0.42a12, users now have the capability to define and import multiple HTTP files using the `import <filename>;` syntax.

This exciting new feature empowers users to take control of their HTTP request files by allowing them to segregate and modularize their requests, significantly improving the overall organization and efficiency of their work.

For example, consider the following scenario:

**File: login.http**
```http
@name('base')
GET 'http://localhost:8080'
basicauth('username', 'password')
```

**File: api.http**
```http
import './login.http';

@name('users'): "base"
GET "http://localhost:8080/api/v1/users"

@name('create user'): "base"
POST "http://localhost:8080/api/v1/users"
json({
    "username": "password"
})
```

In this example, we see how the `import` feature allows the seamless integration of a "login" module into the "api" module, making it easier to manage and reuse HTTP requests across your project. This enhances code organization and the overall maintainability of your HTTP files.