(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{267:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,m=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return a?l.a.createElement(m,o(o({ref:t},c),{},{components:a})):l.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<r;c++)p[c]=a[c];return l.a.createElement.apply(null,p)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),l=a(7),r=(a(0),a(267)),p={title:"Basics of Dothttp Requests",slug:"request-basics"},o={unversionedId:"request-basics",id:"request-basics",isDocsHomePage:!1,title:"Basics of Dothttp Requests",description:"Supported HTTP Methods",source:"@site/docs/request-basics.md",slug:"/request-basics",permalink:"/docs/request-basics",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/docs/request-basics.md",version:"current",sidebar:"docs",previous:{title:"Enhanced HTTP File Organization with Imports",permalink:"/docs/import"},next:{title:"Authentication",permalink:"/docs/auth"}},i=[{value:"Supported HTTP Methods",id:"supported-http-methods",children:[{value:"Example: PUT Request",id:"example-put-request",children:[]}]},{value:"URL Parameters",id:"url-parameters",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2 (Dealing with Spaces and Special Characters)",id:"example-2-dealing-with-spaces-and-special-characters",children:[]}]},{value:"HTTP Headers",id:"http-headers",children:[{value:"Example",id:"example",children:[]}]},{value:"Request Payload",id:"request-payload",children:[{value:"Text Payload",id:"text-payload",children:[]},{value:"JSON Payload",id:"json-payload",children:[]},{value:"URL-Encoded Payload",id:"url-encoded-payload",children:[]},{value:"Multipart Payload",id:"multipart-payload",children:[]},{value:"Binary Payload",id:"binary-payload",children:[]},{value:"CURL Equivalent",id:"curl-equivalent",children:[]},{value:"Output",id:"output",children:[]},{value:"Math expressions",id:"math-expressions",children:[]}]}],c={toc:i};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"supported-http-methods"},"Supported HTTP Methods"),Object(r.b)("p",null,"Dothttp supports a wide range of HTTP methods, enabling you to interact with web services effectively. The supported methods include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GET")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"POST")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"OPTIONS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DELETE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CONNECT")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PUT")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HEAD")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TRACE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PATCH")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"COPY")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LINK")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UNLINK")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PURGE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LOCK")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UNLOCK")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PROPFIND")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"VIEW"))),Object(r.b)("p",null,"The syntax for specifying an HTTP request is as follows: ",Object(r.b)("inlineCode",{parentName:"p"},"<METHOD> <URL>"),". For example, ",Object(r.b)("inlineCode",{parentName:"p"},"GET https://req.dothttp.dev")," represents a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," request to ",Object(r.b)("inlineCode",{parentName:"p"},"https://req.dothttp.dev"),"."),Object(r.b)("h3",{id:"example-put-request"},"Example: PUT Request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},"PUT https://httpbin.org/put\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJwLCA1RyCgpKSi20tcH0UmZeXr5Ren6BaUlXACO2wnm"},"Try it in your browser")),Object(r.b)("p",null,"In curl terms, this is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT https://httpbin.org/put\n")),Object(r.b)("h4",{id:"example--delete-request"},"Example  DELETE request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},"DELETE https://httpbin.org/delete\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJxzcfVxDXFVyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpALvdC7A="},"Try it in your browser")),Object(r.b)("p",null,"In curl terms, this is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X DELETE https://httpbin.org/delete\n")),Object(r.b)("h2",{id:"url-parameters"},"URL Parameters"),Object(r.b)("p",null,"URL parameters are used to exchange small but meaningful pieces of information between web pages. For example, consider the URL ",Object(r.b)("inlineCode",{parentName:"p"},"https://req.dothttp.dev?page=3&query=ram"),", where ",Object(r.b)("inlineCode",{parentName:"p"},"page=3&query=ram")," are the URL parameters."),Object(r.b)("p",null,"Dothttp provides a flexible way to define URL parameters using the following syntax:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},"https://req.dothttp.dev\n? page = 3\n? query = ram\n")),Object(r.b)("p",null,"With this syntax, you can easily comment out specific parameters, making it developer-friendly."),Object(r.b)("h3",{id:"example-1"},"Example 1"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},"GET https://httpbin.org/delete\n? key1 = value2\n? key2 = value2\n? key3 = \"value2 with spaces\"\n? key4 = 'value2 with single quotes'\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJxzdw1RyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpXPYK2amVhgq2CmWJOaWpRhC+ERrfGMhXgggolGeWZCgUFyQmpxYrQWRNgLLqKLKZeek5qQqFpfklqcXqAJUcKes="},"try in browser here")),Object(r.b)("p",null,"In curl terms, the request is:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X GET 'https://httpbin.org/delete?key1=value2&key2=value2'\n")),Object(r.b)("h3",{id:"example-2-dealing-with-spaces-and-special-characters"},"Example 2 (Dealing with Spaces and Special Characters)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'GET https://httpbin.org/delete\n? age= 40\n? name = "john don"\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJxzdw1RyCgpKSi20tcH0UmZeXr5Ren6Kak5qSWpXPYKiemptgomBkBWXmJuqoKtglJWfkaeQkp+nhIAXBUTDw=="},"Try it in your browser")),Object(r.b)("p",null,"In curl terms, the request is:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X GET 'https://httpbin.org/delete?age=40&name=john+don'\n")),Object(r.b)("h2",{id:"http-headers"},"HTTP Headers"),Object(r.b)("p",null,"HTTP headers convey essential information about a request or response, as well as the data transmitted in the message body. The syntax for specifying headers is as follows: ",Object(r.b)("inlineCode",{parentName:"p"},"key: value"),"."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'GET https://req.dothttp.dev\ncontent-type: application/json\ndata("{\n\n}")\n')),Object(r.b)("p",null,"In this example, the request sets the ",Object(r.b)("inlineCode",{parentName:"p"},"content-type")," header to ",Object(r.b)("inlineCode",{parentName:"p"},"application/json"),"."),Object(r.b)("h2",{id:"request-payload"},"Request Payload"),Object(r.b)("p",null,"The request payload is the final part of a request and typically contains data that cannot be passed in the URL. While not all requests have payloads, POST and PUT methods commonly do."),Object(r.b)("p",null,"Dothttp supports various payload formats, including text, JSON, URL-encoded, and multipart."),Object(r.b)("h3",{id:"text-payload"},"Text Payload"),Object(r.b)("p",null,"Text payloads are specified with the syntax: ",Object(r.b)("inlineCode",{parentName:"p"},'data("this is payload")'),". Text payloads can span multiple lines without the need for escapes. Single and double quotes are also supported. To include double quotes within a payload, triple quotes can be used."),Object(r.b)("h4",{id:"example-1-text-payload"},"Example 1: Text Payload"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'POST https://httpbin.org/post\n? key1 = value2\n? key2 = value2\ndata(\n     "this is text"\n     // Comment in between\n     " payload"\n)\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJxFi00KwjAUhPc5xZCVbnzYpSAeQcFe4NU+TLBNghl/enstFRw+GL6BOR3PLQJZ6k5k7i6mTb5fpeRKd8DNpi32eOrwsGbx5u+9UlcOczxDrPhCe9MvmwiCVigueRwtETGhM77M0u+EotOQtfdu/QGvkyls"},"Try it in your browser")),Object(r.b)("p",null,"In curl terms, the request is:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST  -d 'this is text payload' 'https://httpbin.org/post?key1=value2&key2=value2'\n")),Object(r.b)("h4",{id:"example-2-text-payload-with-quotes"},"Example 2: Text Payload with Quotes"),Object(r.b)("p",null,"To handle payloads containing quotes, Dothttp offers the flexibility of triple-quoted strings, inspired by Python."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'POST https://httpbin.org/post\n? key1 = value2\n? key2 = value2\ntext(\n     """this "is" text"""\n     // Comment in between\n     """ pay "ram" load"""\n\n; // Break\n \'text/plain\' // Content-Type\n)\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJxFi0sKwkAQRPdziqJXurExS0E8goJeoGMaZzDzIdN+cnsdAlqb4lXxTsfzBd6s1B1z6z6kTZ5uXHI1d8Bd5y32eMr40G7h7s+DmKwcWojIfKigUAmmb/sOy8MMLxWCa45RkyEk9Gov1fRTUWQGTRIJY5ahuWvn3AfUxCyi"},"Try it in your browser")),Object(r.b)("h3",{id:"json-payload"},"JSON Payload"),Object(r.b)("p",null,"JSON (JavaScript Object Notation) payloads are widely used for data transfer in requests. The syntax for specifying JSON payloads is: ",Object(r.b)("inlineCode",{parentName:"p"},'json({"key": "value"})'),". Using a JSON payload sets the ",Object(r.b)("inlineCode",{parentName:"p"},"content-type")," to ",Object(r.b)("inlineCode",{parentName:"p"},"application/json")," by default, which can be overridden if necessary."),Object(r.b)("h4",{id:"example-3-json-payload"},"Example 3: JSON Payload"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'POST https://httpbin.org/post\njson({\n     "name": "john don",\n     // some comment\n     "age" : 20\n})\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcWcX5eRrVXAogoJSXmJuqZKWglJWfkaeQkp+npAOVSExPVVKwUjAy4KrVBAAJqBcN"},"Try it in your browser")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Json Payload Supports variable substition at object level for example")),Object(r.b)("blockquote",null,Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-http"},'POST http://httpbin.org/post\njson({\n     "data" : {{data}}\n})\n')))),Object(r.b)("blockquote",null,Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre"},"where property file can have\n")))),Object(r.b)("blockquote",null,Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n   "*": {\n         "data": {\n                 "name": "data",\n                 "firstName": "prasanth"\n            }\n       }\n}\n')))),Object(r.b)("blockquote",null,Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"payload will look like, "),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n   "data": {\n        "name" : "data",\n        "firstName": "prasanth"\n     }\n}\n')))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Allows Unquoted keys and values if they are alphanumeric and begin with an alphabetic character",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"For Example:"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-http"},'GET "https://httpbin.org/post\njson(\n{\n       // this lets users easy to write payloads especially for json.     \n     firstName : ranga\n}\n)\n')),Object(r.b)("p",{parentName:"blockquote"},"This still works  "))))),Object(r.b)("h3",{id:"url-encoded-payload"},"URL-Encoded Payload"),Object(r.b)("p",null,"URL-encoded payloads are commonly used in web requests when the content-type is not specified. The syntax for URL-encoded payloads is the same as for JSON payloads. Using URL-encoded payloads sets the ",Object(r.b)("inlineCode",{parentName:"p"},"content-type")," to ",Object(r.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," by default, which can also be overridden."),Object(r.b)("h4",{id:"example-4-url-encoded-payload"},"Example 4: URL-Encoded Payload"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'POST https://httpbin.org/post\nurlencoded({\n     "name": "john",\n     "age" : 20,\n     "lastname": \'doe\',\n// Single quotes\n})\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXB9FJmXl6+UXp+gX5xSVcpUU5qXnJ+SmpKRrVXAogoJSXmJuqZKWglJWfkaekAxVMTE9VUrBSMDKACeQkFpdAVaqn5Keq63Dp6ysUZ+al56QqFJbml6QWc9VqAgA+DSRd"},"Try it in your browser")),Object(r.b)("p",null,"In curl terms, the request is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST \\\n-H 'Content-Length: 31' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n-d 'name=john&age=20.0&lastname=doe' \\\nhttps://httpbin.org/post\n")),Object(r.b)("h3",{id:"multipart-payload"},"Multipart Payload"),Object(r.b)("p",null,"Multipart payloads are used when multiple files need to be uploaded in a single request. The syntax for specifying multipart payloads is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'multipart(\n     "name of file" < "file path",\n     "name of file2" < "filepath2",\n     "name" < "inline value",\n)\n')),Object(r.b)("p",null,"All file paths are verified, and if a file path is present, the file is sent in the request. Otherwise, the inline value is sent. Depending on the file extension, the content-type can be automatically set, although this can be overridden."),Object(r.b)("h4",{id:"example-1-multipart-payload-with-a-file"},"Example 1: Multipart Payload with a File"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},"POST https://req.dothttp.dev\nmultipart(\n    'name' < 'value',\n    'name2' < 'test.md',\n    'name3' < '{\"jsondata\" : \"jsonvalue\"}' ; 'application/json'    \n)\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJwL8A8OUcgoKSkottLXL0ot1EvJLwFx9VJSy7jSMnNSizW4FIBAQz0vMTdVXUdBvSwxpzRVXVMHSdgIJF6SWlyil5uCKmMMkqlWyirOz0tJLElUUrBSAHPAhijVgmQTCwpyMpMTSzLz8/RBUuqaIO1cmgDVji0V"},"Try it in your browser")),Object(r.b)("p",null,"In curl terms, the request is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST \\\n--form name=value \\\n--form 'name2=@test.md' \\\n--form 'name3={\"jsondata\" : \"jsonvalue\"}' \\\nhttps://req.dothttp.dev\n\n/\n")),Object(r.b)("h3",{id:"binary-payload"},"Binary Payload"),Object(r.b)("p",null,"Dothttp files support only Unicode format, which means that embedding binary data in a Dothttp file is not supported. To upload binary data, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},'fileinput("file path")')," syntax."),Object(r.b)("h4",{id:"example-1-binary-payload"},"Example 1: Binary Payload"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},"POST https://req.dothttp.dev\nfileinput('C:\\Users\\john\\documents\\movie.mkv')\n// or\n// < 'C:\\Users\\john\\documents\\movie.mkv'\n")),Object(r.b)("h3",{id:"curl-equivalent"},"CURL Equivalent"),Object(r.b)("p",null,"Dothttp provides a simple way to generate cURL commands for your requests. Here's an example of a basic cURL request generated from a Dothttp request:"),Object(r.b)("h4",{id:"example-1-basic-curl-request"},"Example 1: Basic cURL Request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'curl -X POST https://req.dothttp.dev\n--header "content-type: text/plain"\ndata("hai")\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJwVx7EKgCAUBdDdr3g41WDu/kRBDa0PfaAganaL+vvobMdfPZPZaZnXjSLQTmdtl2MKFX+nILcyJgoH6aR9LZACg7eJI8gD2zKnolVg8KAjJz1+xJccfw=="},"Try it in your browser")),Object(r.b)("p",null,"For more examples, consider exploring the ",Object(r.b)("a",{parentName:"p",href:"https://ghpage.dothttp.dev/#eJx9j88KwjAMh+99itKLCrLe9xIKepe4RVdJm9o/wyG+u9WD2CHm0nxffqFEbDe7vVwMKfnYag3eNNFDh7eGwPX6HMAPV1pIcYnslnchS6lrxjCp9g1vodT9A1J2bD24SX67YpFr5hknPvjAPlM07Oajist/FWstFVpPPCFG9Td64ux67H+4UDmC7LrhEE3CWA0cWKxEzNZCmCpXltKP3REoQ5pfN+JgOqqiD/HdlRvWr2eEYOBYkqp1meghVuIJSlpmOA=="},"Dothttp Playground"),"."),Object(r.b)("h3",{id:"output"},"Output"),Object(r.b)("p",null,"Dothttp allows you to save the HTTP response directly to a file. To do this, simply append ",Object(r.b)("inlineCode",{parentName:"p"},'>> "<full file path>"')," after your HTTP definition."),Object(r.b)("h4",{id:"example-2"},"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'GET "https://req.dothttp.dev"\n>> "/tmp/out.resp.txt"\n')),Object(r.b)("h3",{id:"math-expressions"},"Math expressions"),Object(r.b)("p",null,"dothttp can expand simple arthematic expressions in json if they are in braces in json. "),Object(r.b)("h4",{id:"example-3"},"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http"},'POST "https://req.dothttp.dev"\njson(\n\n     {\n>> "wait_time": (3*60), // 3 minutes in seconds,\n>> "print": "hai",\n     }\n)\n')),Object(r.b)("p",null,"above is a simple example but it helps simplify reading/making requests"))}b.isMDXComponent=!0}}]);