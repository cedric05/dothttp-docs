(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(253)),i={title:"dothttp-runner 0.0.28",author:"prasanth",author_url:"https://github.com/cedric05",tags:["dothttp-runner","vscode"],description:"extension release update.",hide_table_of_contents:!1},c={permalink:"/blog/2021/09/01/dothttp-extensions-0.0.28",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/blog/2021-09-01-dothttp-extensions-0.0.28.md",source:"@site/blog/2021-09-01-dothttp-extensions-0.0.28.md",description:"extension release update.",date:"2021-09-01T00:00:00.000Z",formattedDate:"September 1, 2021",tags:[{label:"dothttp-runner",permalink:"/blog/tags/dothttp-runner"},{label:"vscode",permalink:"/blog/tags/vscode"}],title:"dothttp-runner 0.0.28",readingTime:.325,truncated:!1,prevItem:{title:"dothttp-runner 0.0.29",permalink:"/blog/2021/09/11/dothttp-extensions-0.0.29"},nextItem:{title:"dothttp-runner 0.0.27",permalink:"/blog/2021/08/22/dothttp-extensions-0.0.27"}},p=[{value:"0.0.28",id:"0028",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"0028"},"[0.0.28]"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[",Object(a.b)("strong",{parentName:"li"},"Improvement"),"]",' export postman now generates filename with suffix ".postmancollection.json" '),Object(a.b)("li",{parentName:"ul"},"[",Object(a.b)("strong",{parentName:"li"},"New Feature"),"]"," supports importing har file"),Object(a.b)("li",{parentName:"ul"},"[",Object(a.b)("strong",{parentName:"li"},"Improvement"),"]"," curl with new library and import by file, should fix most curl import issues",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use other formats as curl import os not standardised"))),Object(a.b)("li",{parentName:"ul"},"[",Object(a.b)("strong",{parentName:"li"},"Improvement"),"]"," Now ",Object(a.b)("inlineCode",{parentName:"li"},"dothttp history"),", ",Object(a.b)("inlineCode",{parentName:"li"},"dothttp environment")," and ",Object(a.b)("inlineCode",{parentName:"li"},"dothttp propertiles")," will be shown in seperate view container for easy access")))}s.isMDXComponent=!0},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);