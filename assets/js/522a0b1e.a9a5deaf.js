(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(267)),i={title:"dothttp-runner 0.0.25",author:"prasanth",author_url:"https://github.com/cedric05",tags:["dothttp-runner","vscode"],description:"extension release update.",hide_table_of_contents:!1},l={permalink:"/blog/2021/06/26/dothttp-extensions-0.0.25",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/blog/2021-06-26-dothttp-extensions-0.0.25.md",source:"@site/blog/2021-06-26-dothttp-extensions-0.0.25.md",description:"extension release update.",date:"2021-06-26T00:00:00.000Z",formattedDate:"June 26, 2021",tags:[{label:"dothttp-runner",permalink:"/blog/tags/dothttp-runner"},{label:"vscode",permalink:"/blog/tags/vscode"}],title:"dothttp-runner 0.0.25",readingTime:.525,truncated:!1,prevItem:{title:"dothttp-runner 0.0.26",permalink:"/blog/2021/08/15/dothttp-extensions-0.0.26"},nextItem:{title:"dothttp-runner 0.0.23-0.0.24",permalink:"/blog/2021/06/20/dothttp-extensions-0.0.23-0.0.24"}},c=[{value:"0.0.25",id:"0025",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"0025"},"[0.0.25]"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Feature"),"]"," Better distinction between json and javascript"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Feature"),"]"," editor will show suggestions in ",Object(o.b)("inlineCode",{parentName:"li"},".dothttp.json")),Object(o.b)("li",{parentName:"ul"},"Bump dothttp version to 0.0.26",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Feature"),"]"," New dynamic properties ($randomSlug, $uuid, $timestamp)"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Improvement"),"]"," Better postman export (apikey, bearerauth)"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Improvement"),"]"," Curl/har export shows duplicate headers in case of header has case change"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Improvement"),"]"," Curl Generation/export will add content-length (curl itself will generate, adding it will cause other problems)"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Continous"),"]"," keeping track of performance"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Improvement"),"]"," load huge request payload from file without fear memory"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Bug"),"]"," Curl/har with basic auth, adding authentication header fixed"),Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("strong",{parentName:"li"},"Bug"),"]"," postman with urlencode not working fixed")))))}u.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);