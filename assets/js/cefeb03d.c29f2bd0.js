(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(191)),i={title:"Test Scripts",slug:"scripts"},s={unversionedId:"test_scripts",id:"test_scripts",isDocsHomePage:!1,title:"Test Scripts",description:"Dothttp provides flexibility of small tests in javascript/python in same file. writing tests are faily simple.",source:"@site/docs/test_scripts.md",slug:"/scripts",permalink:"/docs/scripts",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/docs/test_scripts.md",version:"current",sidebar:"docs",previous:{title:"Flags",permalink:"/docs/flags"},next:{title:"Ordering",permalink:"/docs/order"}},b=[{value:"Javascript",id:"javascript",children:[{value:"Method",id:"method",children:[]},{value:"Properties",id:"properties",children:[]}]},{value:"HTTP Response reference",id:"http-response-reference",children:[]},{value:"Headers",id:"headers",children:[{value:"Example",id:"example",children:[]}]},{value:"Python",id:"python",children:[{value:"Execution",id:"execution",children:[]},{value:"Availaible libraries",id:"availaible-libraries",children:[]},{value:"Pre-request script",id:"pre-request-script",children:[]},{value:"Test script",id:"test-script",children:[]},{value:"Complete Example",id:"complete-example",children:[]},{value:"Limitations",id:"limitations",children:[]}]}],o={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Dothttp provides flexibility of small tests in javascript/python in same file. writing tests are faily simple."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#javascript"},"javascript")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#python"},"python")," (",Object(l.b)("em",{parentName:"li"},"preferred"),")")),Object(l.b)("h2",{id:"javascript"},"Javascript"),Object(l.b)("h3",{id:"method"},"Method"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Parameters"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"test")),Object(l.b)("td",{parentName:"tr",align:null},"testName (string), func (function)"),Object(l.b)("td",{parentName:"tr",align:null},"Creates a test with the name testName and body func. All tests are executed after the response handler script.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"assert")),Object(l.b)("td",{parentName:"tr",align:null},"condition (boolean), message (string)"),Object(l.b)("td",{parentName:"tr",align:null},"Checks that the specified condition is true; throws an exception otherwise. The optional message parameter serves as an exception message.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"log")),Object(l.b)("td",{parentName:"tr",align:null},"text"),Object(l.b)("td",{parentName:"tr",align:null},"Prints text to the response handler or test stdout and then terminates the line. func (function)")))),Object(l.b)("h3",{id:"properties"},"Properties"),Object(l.b)("p",null,"The global properties storage, which is used for setting, retrieving, or removing properties."),Object(l.b)("p",null,"In your HTTP requests, you can access a variable saved in client.global as variable_name by using the {{variable_name}} syntax."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Parameters"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"set")),Object(l.b)("td",{parentName:"tr",align:null},"varName (string), varValue (string)"),Object(l.b)("td",{parentName:"tr",align:null},"Saves the variable with the varName name to the storage and sets its value to varValue.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"get")),Object(l.b)("td",{parentName:"tr",align:null},"varName (string)"),Object(l.b)("td",{parentName:"tr",align:null},"Returns the value of the varName variable.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"isEmpty")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Checks whether the global object has no variables defined.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"clear")),Object(l.b)("td",{parentName:"tr",align:null},"varName (string)"),Object(l.b)("td",{parentName:"tr",align:null},"Removes the varName variable from the variables storage.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"clearAll")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Removes all variables from the variables storage.")))),Object(l.b)("p",null,"For more information and examples visit ",Object(l.b)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/http-client-reference.html#client-properties"},"jetbrains-client-reference"),"\nwe took inspiration from jetbrains-client reference."),Object(l.b)("h2",{id:"http-response-reference"},"HTTP Response reference"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Propert"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"body (string or object)"),Object(l.b)("td",{parentName:"tr",align:null},"Response content, which is a string or a JSON object if the response's content-type is application/json.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"headers (ResponseHeaders)"),Object(l.b)("td",{parentName:"tr",align:null},"The response headers storage object.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"status (int)"),Object(l.b)("td",{parentName:"tr",align:null},"Response status, for example, 200 or 404.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"contentType (ContentType)"),Object(l.b)("td",{parentName:"tr",align:null},"The contentType object, which holds the data on the Content-Type response header value.")))),Object(l.b)("h2",{id:"headers"},"Headers"),Object(l.b)("p",null,"The ResponseHeaders object is used for retrieving the data about response headers' values."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Parameters"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"valueOf"),Object(l.b)("td",{parentName:"tr",align:null},"headerName (string)"),Object(l.b)("td",{parentName:"tr",align:null},"Retrieves the first value of the headerName response header or null if the headerName response header does not exist.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"valuesOf"),Object(l.b)("td",{parentName:"tr",align:null},"headerName (string)"),Object(l.b)("td",{parentName:"tr",align:null},"Retrieves the array containing all values of the headerName response header. Returns an empty array if the headerName response header does not exist.")))),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-http"},'@name("text payload")\nGET http://httpbin.org/robots.txt\n> {%\nclient.test("check status", function(){\n    // checking test and assert\n    client.assert(response.status ===200, "status is 200")\n})\nclient.test("check json", function(){\n    // were able to check headers\n    client.assert(response.headers.valueOf(\'content-type\') === "application/json", "content-type is json")\n})\n// were able to check json response\nclient.global.set("outputval", response.body);\n\n%}\n\n')),Object(l.b)("p",null,"For more examples visit ",Object(l.b)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/http-response-handling-examples.html"},"https://www.jetbrains.com/help/idea/http-response-handling-examples.html")),Object(l.b)("h2",{id:"python"},"Python"),Object(l.b)("h3",{id:"execution"},"Execution"),Object(l.b)("p",null,"Execution follows of request follows this order."),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Pre request script")),Object(l.b)("li",{parentName:"ol"},"Property resolution (default properties in script)"),Object(l.b)("li",{parentName:"ol"},"Dynamic Property resoluiton (",Object(l.b)("inlineCode",{parentName:"li"},"$randomStr"),"...)"),Object(l.b)("li",{parentName:"ol"},"Headers resolution"),Object(l.b)("li",{parentName:"ol"},"Auth resolution"),Object(l.b)("li",{parentName:"ol"},"Body resolution"),Object(l.b)("li",{parentName:"ol"},"certificate (if exists)"),Object(l.b)("li",{parentName:"ol"},"request completion"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"test script"))),Object(l.b)("h3",{id:"availaible-libraries"},"Availaible libraries"),Object(l.b)("p",null,"Having pre request scripts are completely sandboxed so not to harm. here are list of method libraires availabile."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"math"),Object(l.b)("li",{parentName:"ol"},"hashlib"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://pypi.org/project/Faker/"},"faker")),Object(l.b)("li",{parentName:"ol"},"unittest"),Object(l.b)("li",{parentName:"ol"},"csv"),Object(l.b)("li",{parentName:"ol"},"uuid"),Object(l.b)("li",{parentName:"ol"},"base64"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"client")," (dothttp client)",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"request")," (dothttp current executing request)",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"headers")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"query")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"payload")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"data")," (attribute/text exists if postdata is text)"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"json")," (attribute/(json/dict) exists if postdata is json )"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"header")," (attribute/text exists if posted data content-type is defined)"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"filename")," (attribute/text exists if postdata is to be read from file)"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"files")," (attribute/list exists if postdata is multipart)"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"response")," (availaible for test scripts)"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"properties"),"(python ",Object(l.b)("inlineCode",{parentName:"li"},"dictionary"),")",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"set")," (to update a property)"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"clear")," (to delete a property)"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"clear_all")," (to clear all properties)")))))),Object(l.b)("h3",{id:"pre-request-script"},"Pre-request script"),Object(l.b)("p",null,"Pre request script runs before executing each request. Currently support is availabile only for python script. It opens up more possibilites. "),Object(l.b)("p",null,"Some of its uses"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Custom authentication"),Object(l.b)("li",{parentName:"ul"},"Faking request data"),Object(l.b)("li",{parentName:"ul"},"Some computation")),Object(l.b)("h4",{id:"writing"},"Writing"),Object(l.b)("p",null,"Pre request scripts are nothing but methods prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"pre")," defined in script section of dothttp request. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'def pre_request1():\n    # sets new header\n    client.request.headers.setdefault("hai", "bye")\n\ndef pre_request2():\n    # sets overwrites header\n    client.request.headers.setdefault("hai", str(2*1000*2999))\n')),Object(l.b)("h3",{id:"test-script"},"Test script"),Object(l.b)("p",null,"Test scripts are unit test cases which will be executed. There are two types of writing test scripts"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"methods prefixed with ",Object(l.b)("inlineCode",{parentName:"li"},"test"),". it should not accept any arguments"),Object(l.b)("li",{parentName:"ol"},"classes extending ",Object(l.b)("inlineCode",{parentName:"li"},"unittest.TestCase"),".")),Object(l.b)("h4",{id:"writingexample"},"Writing/example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"def pre_hai():\n    # simple pre request script\n    client.request.headers.setdefault(\"preheader\", \"prevalue\")\n    # updates properties\n    client.properties.set('somekey', 'somevalue')\n\n# simple test method\ndef test_hai():\n    # if exceptions are throwed, test is failed\n    if client.response.status_code == 200:\n        log('working')\n    else:\n        log('not working')\n    client.properties.set('somekey', 'somevalue2')\n\n# Class level tests\nclass SampleTest(unittest.TestCase):\n    def test_is_mime_not_json(self):\n        # simpel assertion\n        self.assertTrue(client.response.headers.get(\"content-type\").startswith(\"application/xml\"), \"should not be json\")\n\n    def test_pre_request_preheader(self):\n        body = client.response.json()\n        # simple assertion\n        self.assertEqual(\"assertion\", body['headers']['someheaderkey'])\n\n")),Object(l.b)("h3",{id:"complete-example"},"Complete Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-http"},'@name("text payload")\nGET http://httpbin.org/get\n> {%\n\ndef pre_hai():\n    client.request.headers.setdefault("preheader", "prevalue")\n\ndef test_hai():\n    if client.response.status_code == 200:\n        log(\'working\')\n    else:\n        log(\'not working\')\n\nclass SampleTest(unittest.TestCase):\n    def test_is_mime_not_json(self):\n        self.assertTrue(client.response.headers.get("content-type").startswith("application/xml"), "should not be json")\n\n    def test_pre_request_preheader(self):\n        body = client.response.json()\n        self.assertEqual("prevalue", body[\'headers\'][\'Preheader\'])\n%} python\n')),Object(l.b)("h3",{id:"limitations"},"Limitations"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"failing pre request fails execution of request"),Object(l.b)("li",{parentName:"ol"},"pre request script should not accept any arguments"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"import")," and ",Object(l.b)("inlineCode",{parentName:"li"},"filesystem")," access is completely blocked and fails pre request."),Object(l.b)("li",{parentName:"ol"},"All assignment on ",Object(l.b)("inlineCode",{parentName:"li"},"client")," and ",Object(l.b)("inlineCode",{parentName:"li"},"libraries")," are blocked and fails pre request.")))}p.isMDXComponent=!0},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,u=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?r.a.createElement(u,s(s({ref:t},o),{},{components:a})):r.a.createElement(u,s({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);