---
title: Test Scripts
slug: scripts
---

Dothttp provides flexibility of small tests in javascript in same file. tests are faily simple



### Method
Method  | Parameters | Description
--------|-------------|----------
`test`   | testName (string), func (function)   | Creates a test with the name testName and body func. All tests are executed after the response handler script.
`assert`   | condition (boolean), message (string)   |Checks that the specified condition is true; throws an exception otherwise. The optional message parameter serves as an exception message.
`log`    | text | 	Prints text to the response handler or test stdout and then terminates the line. func (function)

### Properties

The global properties storage, which is used for setting, retrieving, or removing properties.

In your HTTP requests, you can access a variable saved in client.global as variable_name by using the {{variable_name}} syntax.


Method  | Parameters | Description
--------|-------------|----------
`set`   | varName (string), varValue (string)   | Saves the variable with the varName name to the storage and sets its value to varValue.
`get`   | varName (string)   |Returns the value of the varName variable.
`isEmpty` |  | 	Checks whether the global object has no variables defined.
`clear` | varName (string)| Removes the varName variable from the variables storage.
`clearAll` |  | 	Removes all variables from the variables storage.


For more information and examples visit [jetbrains-client-reference](https://www.jetbrains.com/help/idea/http-client-reference.html#client-properties)
we took inspiration from jetbrains-client reference.



## HTTP Response reference

Propert | Description
---------|-------------
body (string or object)	|Response content, which is a string or a JSON object if the response's content-type is application/json.
headers (ResponseHeaders)|	The response headers storage object.
status (int)	|Response status, for example, 200 or 404.
contentType (ContentType)	|The contentType object, which holds the data on the Content-Type response header value.


## Headers
The ResponseHeaders object is used for retrieving the data about response headers' values.

Method|	Parameters|	Description
--------|----------|-----------
valueOf	| headerName (string) | Retrieves the first value of the headerName response header or null if the headerName response header does not exist.
valuesOf | headerName (string) | Retrieves the array containing all values of the headerName response header. Returns an empty array if the headerName response header does not exist.


### Example 
```http
@name("text payload")
GET http://httpbin.org/robots.txt
> {%
client.test("check status", function(){
    // checking test and assert
    client.assert(response.status ===200, "status is 200")
})
client.test("check json", function(){
    // were able to check headers
    client.assert(response.headers.valueOf('content-type') === "application/json", "content-type is json")
})
// were able to check json response
client.global.set("outputval", response.body);

%}

```

For more examples visit https://www.jetbrains.com/help/idea/http-response-handling-examples.html