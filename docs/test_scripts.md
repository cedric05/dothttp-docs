---
title: Test Scripts
slug: scripts
---

Dothttp provides flexibility of small tests in javascript/python in same file. writing tests are faily simple.

- [javascript](#javascript)
- [python](#python) (*preferred*)

## Javascript


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


## Python


### Execution

Execution follows of request follows this order.

7. **Pre request script**
1. Property resolution (default properties in script)
2. Dynamic Property resoluiton (`$randomStr`...)
4. Headers resolution
3. Auth resolution
5. Body resolution
6. certificate (if exists)
8. request completion
9. **test script**

### Availaible libraries

Having pre request scripts are completely sandboxed so not to harm. here are list of method libraires availabile.

1. math
2. hashlib
3. [faker](https://pypi.org/project/Faker/)
4. unittest
5. csv
6. uuid
7. base64
8. `client` (dothttp client)
   1. `request` (dothttp current executing request)
      1. `headers`
      2. `query`
      3. `payload`
        1. `data` (attribute/text exists if postdata is text)
        2. `json` (attribute/(json/dict) exists if postdata is json )
        2. `header` (attribute/text exists if posted data content-type is defined)
        3. `filename` (attribute/text exists if postdata is to be read from file)
        4. `files` (attribute/list exists if postdata is multipart)
   2. `response` (availaible for test scripts)
   3. `properties`(python `dictionary`)
        1. `set` (to update a property)
        2. `clear` (to delete a property)
        3. `clear_all` (to clear all properties)



### Pre-request script

Pre request script runs before executing each request. Currently support is availabile only for python script. It opens up more possibilites. 


Some of its uses
- Custom authentication
- Faking request data
- Some computation


#### Writing

Pre request scripts are nothing but methods prefixed with `pre` defined in script section of dothttp request. 

```python
def pre_request1():
    # sets new header
    client.request.headers.setdefault("hai", "bye")

def pre_request2():
    # sets overwrites header
    client.request.headers.setdefault("hai", str(2*1000*2999))
```


### Test script

Test scripts are unit test cases which will be executed. There are two types of writing test scripts

1. methods prefixed with `test`. it should not accept any arguments
2. classes extending `unittest.TestCase`.


#### Writing/example

```python
def pre_hai():
    # simple pre request script
    client.request.headers.setdefault("preheader", "prevalue")
    # updates properties
    client.properties.set('somekey', 'somevalue')

# simple test method
def test_hai():
    # if exceptions are throwed, test is failed
    if client.response.status_code == 200:
        log('working')
    else:
        log('not working')
    client.properties.set('somekey', 'somevalue2')

# Class level tests
class SampleTest(unittest.TestCase):
    def test_is_mime_not_json(self):
        # simpel assertion
        self.assertTrue(client.response.headers.get("content-type").startswith("application/xml"), "should not be json")

    def test_pre_request_preheader(self):
        body = client.response.json()
        # simple assertion
        self.assertEqual("assertion", body['headers']['someheaderkey'])

```

### Complete Example
```http
@name("text payload")
GET http://httpbin.org/get
> {%

def pre_hai():
    client.request.headers.setdefault("preheader", "prevalue")

def test_hai():
    if client.response.status_code == 200:
        log('working')
    else:
        log('not working')

class SampleTest(unittest.TestCase):
    def test_is_mime_not_json(self):
        self.assertTrue(client.response.headers.get("content-type").startswith("application/xml"), "should not be json")

    def test_pre_request_preheader(self):
        body = client.response.json()
        self.assertEqual("prevalue", body['headers']['Preheader'])
%} python
```
### Limitations
1. failing pre request fails execution of request
2. pre request script should not accept any arguments
3. `import` and `filesystem` access is completely blocked and fails pre request.
4. All assignment on `client` and `libraries` are blocked and fails pre request.
