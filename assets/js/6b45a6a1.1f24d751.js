(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(267)),i={title:"dothttp-runner 0.0.53",author:"prasanth",author_url:"https://github.com/cedric05",tags:["dothttp-runner","vscode"],description:"extension release update.",hide_table_of_contents:!1},c={permalink:"/blog/2022/07/03/dothttp-extensions-0.0.52-0.0.53",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/blog/2022-07-03-dothttp-extensions-0.0.52-0.0.53.md",source:"@site/blog/2022-07-03-dothttp-extensions-0.0.52-0.0.53.md",description:"extension release update.",date:"2022-07-03T00:00:00.000Z",formattedDate:"July 3, 2022",tags:[{label:"dothttp-runner",permalink:"/blog/tags/dothttp-runner"},{label:"vscode",permalink:"/blog/tags/vscode"}],title:"dothttp-runner 0.0.53",readingTime:.465,truncated:!1,prevItem:{title:"dothttp-runner 0.0.54",permalink:"/blog/2022/07/09/dothttp-extensions-0.0.54"},nextItem:{title:"dothttp-runner 0.0.51",permalink:"/blog/2022/06/22/dothttp-extensions-0.0.50-0.0.51"}},p=[{value:"0.0.52/0.0.53",id:"00520053",children:[]},{value:"0.0.52",id:"0052",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"00520053"},"[0.0.52/0.0.53]"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[ ",Object(a.b)("strong",{parentName:"li"},"Bug"),"]"," Generate/OpeninEditor is not working in notebook output (bug introduced in webextension support (0.0.49)) "),Object(a.b)("li",{parentName:"ul"},"[ ",Object(a.b)("strong",{parentName:"li"},"chore")," ]"," Update dothttp cli to ",Object(a.b)("inlineCode",{parentName:"li"},"0.0.41a5"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"[",Object(a.b)("strong",{parentName:"li"},"chore")," ]"," updates textx to 3.0.0"),Object(a.b)("li",{parentName:"ul"},"[",Object(a.b)("strong",{parentName:"li"},"chore")," ]"," updates requests to 2.28.1"),Object(a.b)("li",{parentName:"ul"},"[",Object(a.b)("strong",{parentName:"li"},"improvement")," ]"," python test script has support using ",Object(a.b)("inlineCode",{parentName:"li"},"for")," loop")))),Object(a.b)("h2",{id:"0052"},"[0.0.52]"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Prerelease")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[ ",Object(a.b)("strong",{parentName:"li"},"Improvement"),"]"," Fix script execution logging is not logging error output if compilation issue"),Object(a.b)("li",{parentName:"ul"},"[ ",Object(a.b)("strong",{parentName:"li"},"Improvement"),"]"," change from ace editor to highlighter.js for faster rendereing. if you want to keep using ace editor, install dotbook extension")))}u.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);