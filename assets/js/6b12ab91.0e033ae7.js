(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(238)),i={title:"Flags",slug:"flags"},o={unversionedId:"extra_args",id:"extra_args",isDocsHomePage:!1,title:"Flags",description:"Insecure",source:"@site/docs/extra_args.md",slug:"/flags",permalink:"/docs/flags",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/docs/extra_args.md",version:"current",sidebar:"docs",previous:{title:"Extending Requests in dothttp",permalink:"/docs/extend"},next:{title:"Test Scripts",permalink:"/docs/scripts"}},p=[{value:"Insecure",id:"insecure",children:[]},{value:"Clear",id:"clear",children:[]},{value:"Proxy",id:"proxy",children:[]},{value:"No Parent Script",id:"no-parent-script",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"insecure"},"Insecure"),Object(c.b)("p",null,"In local development environments, self-signed certificates are often used. By default, dothttp verifies certificates. However, you can bypass this verification by using ",Object(c.b)("inlineCode",{parentName:"p"},"@insecure")," after ",Object(c.b)("inlineCode",{parentName:"p"},"@name"),"."),Object(c.b)("p",null,"Use  ",Object(c.b)("inlineCode",{parentName:"p"},"@insecure")," after ",Object(c.b)("inlineCode",{parentName:"p"},"@name")," "),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-http"},'@name(\'with-key-and-cert\')\n@insecure\nGET https://client.badssl.com/\ncertificate(cert="{{cert}}",key="{{key}}")\n')),Object(c.b)("h3",{id:"clear"},"Clear"),Object(c.b)("p",null,"To clear all session variables, simply add @clear after @name."),Object(c.b)("h4",{id:"example-1"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-http"},'@name(\'with-key-and-cert\')\n@clear\nGET https://client.badssl.com/\ncertificate(cert="{{cert}}",key="{{key}}")\n')),Object(c.b)("h3",{id:"proxy"},"Proxy"),Object(c.b)("p",null,"Dothttp allows us to make HTTP/HTTPS requests through a proxy using ('http.proxy', 'proxy-url') or ('https.proxy', 'proxy-url')."),Object(c.b)("h4",{id:"example-2"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-http"},"@name('make http call via proxy')\n('http.proxy', 'http://127.0.0.1:2828')\nGET \"https://<url>\n\n")),Object(c.b)("h3",{id:"no-parent-script"},"No Parent Script"),Object(c.b)("p",null,"When executing, Dothttp typically attempts to load and execute the test script of the parent. While this behavior is advantageous in certain scenarios, there might be cases where running tests in the current target is undesirable. By employing the @no_parent_script flag, Dothttp disregards the execution of the parent script if the flag is present."),Object(c.b)("h4",{id:"example-3"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-http"},"# In this example, despite inheriting the request definition from `base`, tests will not be executed due to the presence of the `@no_parent_script` flag\n@name('sample'): \"base\"\n@no_parent_script\nGET \"https://<url>\"\n\n@name('base')\nGET \"https://<url>\"\n\n> {%\n\ndef init_set_variables():\n    client.properties.set('key', 'value')\n\n%} python\n\n")))}l.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);