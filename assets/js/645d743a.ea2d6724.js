(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(178)),i={title:"Comments",slug:"comments"},c={unversionedId:"comments",id:"comments",isDocsHomePage:!1,title:"Comments",description:"The dothttp comments are the statements that are not considered (no op) for request generation. These can be used to provide information or explanation.",source:"@site/docs/comments.md",slug:"/comments",permalink:"/docs/comments",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/docs/comments.md",version:"current",sidebar:"docs",previous:{title:"Variables",permalink:"/docs/variables"},next:{title:"Multiple requests",permalink:"/docs/multidef"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The dothttp comments are the statements that are not considered (no op) for request generation. These can be used to provide information or explanation.\nIt can also be used to hide request data."),Object(a.b)("p",null,"Types of dothttp Comments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Single Line Comment (",Object(a.b)("inlineCode",{parentName:"li"},"//")," like javascript)"),Object(a.b)("li",{parentName:"ul"},"Multi Line Comment (startswith",Object(a.b)("inlineCode",{parentName:"li"},"/*"),"  endswith ",Object(a.b)("inlineCode",{parentName:"li"},"*/")," like javascript)"),Object(a.b)("li",{parentName:"ul"},"Unix Comment ",Object(a.b)("inlineCode",{parentName:"li"},"#"))),Object(a.b)("h4",{id:"example-1-single-line"},"example 1 (single line)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-http"},"//first.http\nGET https://httpbin.org/get\n//? urlparamwskey1 = urlparamsvalue2\n? urlparamwskey2 = urlparamsvalue2\n")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJzT10/LLCou0csoKSngcncNUQAxiq309UF0UmaeXn5Run56agmXvr69QmlRTkFiUWJueXF2aqWhgi1coLgsMac01YgLTYkRphIArb0oLw=="},"try in browser here")),Object(a.b)("p",null,"produces request "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"curl -X GET \\\n'https://httpbin.org/get?urlparamwskey2=urlparamsvalue2'\n")),Object(a.b)("h4",{id:"example-2-combo"},"example 2 (combo)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-http"},'POST https://httpbin.org/post\njson({\n    "name" : "john",\n//    "name" : "doe",\n    "location" : \'newyork\',  \n/* \n    this is ignored\n*/\n    "interests" : [\n                    "hiking", \n                    \'working out\', \n                    \'football\',\n                    //"manga",\n                    "netflix",\n    ]\n})\n\n')),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://cedric05.github.io/dothttp-playground/#eJx1jUEKwkAMRfdzipDNqBSz9xIKuhMXo522Y9ukdCIq4t2dVjdK/QQC7/2QzXq7g0q1iyuiYR8DL6UvqZOo5hyFZw8DKciu9QgrwLNUjJkh+sa5+ERH1sjJaRAeuGV/vUtf2wzA0ALGhlYhwjAlS+9zs6D3YWD1vY8ah8v9yH6DVagDl5jBpLbX9Ct5kIvaf51CRI+uaWw26YmwdVw6nNbIXosm3D76YJ5z8wIAcEyH"},"try in browser here")),Object(a.b)("p",null,"produces request, manga and name 'doe' is commented/removed whwen making request"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n-H \'Content-Length: 102\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{"name": "john", \n    "location": "newyork", \n    "interests": [\n            "hiking", \n            "working out", \n            "football", \n            "netflix"]\n    }\' \\\nhttps://httpbin.org/post\n')))}s.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);