(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(178)),i={title:"Export and Import",slug:"import-export"},p={unversionedId:"export",id:"export",isDocsHomePage:!1,title:"Export and Import",description:"Dothttp provides import and export from various formats.",source:"@site/docs/export.md",slug:"/import-export",permalink:"/docs/import-export",editUrl:"https://github.com/cedric05/dothttp-docs/edit/master/docs/export.md",version:"current",sidebar:"docs",previous:{title:"Extension configuration",permalink:"/docs/dothttp-runner-configuration"},next:{title:"Extension Notebook",permalink:"/docs/dothttp-runner-notebook"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Postman Collections",id:"postman-collections",children:[{value:"Import postman collection",id:"import-postman-collection",children:[]},{value:"Export postman collection",id:"export-postman-collection",children:[]}]},{value:"Openapi/Swagger",id:"openapiswagger",children:[{value:"Import",id:"import-1",children:[]}]},{value:"Curl",id:"curl",children:[{value:"Import",id:"import-2",children:[]}]},{value:"Export http request to general purpose programming languages",id:"export-http-request-to-general-purpose-programming-languages",children:[{value:"step-1 export",id:"step-1-export",children:[]},{value:"step-2 export",id:"step-2-export",children:[]}]},{value:"request will be generated and opened in new tab of vscode",id:"request-will-be-generated-and-opened-in-new-tab-of-vscode",children:[{value:"Alternative",id:"alternative",children:[]}]}],l={toc:c};function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Dothttp provides import and export from various formats. "),Object(a.b)("p",null,"Requires vscode and ",Object(a.b)("inlineCode",{parentName:"p"},"dothttp-runner")," extension installed"),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"please visit ",Object(a.b)("a",{parentName:"p",href:"/docs/"},"installation-page")," or go directly to marketplace via ",Object(a.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code"},"dothttp-runner")),Object(a.b)("h2",{id:"postman-collections"},"Postman Collections"),Object(a.b)("p",null,Object(a.b)("img",{alt:"check here",src:n(193).default}),"\nPostman is most used http client out there. importing or exporing a postman collection is supported in dothttp"),Object(a.b)("h3",{id:"import-postman-collection"},"Import postman collection"),Object(a.b)("p",null,"do ",Object(a.b)("inlineCode",{parentName:"p"},"ctrl+shift+p")," and write ",Object(a.b)("inlineCode",{parentName:"p"},"dothttp: import resource")),Object(a.b)("h4",{id:"step-1"},"Step 1:"),Object(a.b)("p",null,"pick postman from list of options\n",Object(a.b)("img",{alt:"check here",src:n(250).default})),Object(a.b)("p",null,"or check ",Object(a.b)("a",{parentName:"p",href:"#alternative"},"alternative")),Object(a.b)("h4",{id:"step-2"},"Step 2:"),Object(a.b)("p",null,"select how you want to import.\npostman provides export via json file or via link generated from postman\n",Object(a.b)("img",{alt:"check here",src:n(251).default})),Object(a.b)("h4",{id:"import"},"Import"),Object(a.b)("h5",{id:"import-step-by-link"},"Import step by link"),Object(a.b)("p",null,"paste link, it will ask which directory to save\n",Object(a.b)("img",{alt:"check here",src:n(252).default})),Object(a.b)("p",null,"or"),Object(a.b)("p",null,"or check ",Object(a.b)("a",{parentName:"p",href:"#alternative"},"alternative")),Object(a.b)("h4",{id:"import-step-by-file"},"Import step by file"),Object(a.b)("p",null,"select postman collection json file\n",Object(a.b)("img",{alt:"check here",src:n(253).default})),Object(a.b)("h3",{id:"export-postman-collection"},"Export postman collection"),Object(a.b)("p",null,"For exporting to postman collection, open ",Object(a.b)("inlineCode",{parentName:"p"},"http")," file in vscode. click menu options in editor."),Object(a.b)("p",null,Object(a.b)("img",{alt:"check here",src:n(254).default})),Object(a.b)("p",null,"select ",Object(a.b)("inlineCode",{parentName:"p"},"dothttp export http to postman"),"  and select folder to save file."),Object(a.b)("h2",{id:"openapiswagger"},"Openapi/Swagger"),Object(a.b)("h3",{id:"import-1"},"Import"),Object(a.b)("p",null,"Follow same steps as ",Object(a.b)("a",{parentName:"p",href:"#step-1"},"postman-import"),", choose ",Object(a.b)("inlineCode",{parentName:"p"},"swagger")," over postman."),Object(a.b)("p",null,"Support is availabile for both ",Object(a.b)("inlineCode",{parentName:"p"},"2.0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"3.0")),Object(a.b)("h2",{id:"curl"},"Curl"),Object(a.b)("h3",{id:"import-2"},"Import"),Object(a.b)("p",null,"Follow same steps as ",Object(a.b)("a",{parentName:"p",href:"#step-1"},"postman-import"),", choose ",Object(a.b)("inlineCode",{parentName:"p"},"curl")," over postman and paste curl"),Object(a.b)("p",null,"Support is availabile for both ",Object(a.b)("inlineCode",{parentName:"p"},"2.0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"3.0")),Object(a.b)("h2",{id:"export-http-request-to-general-purpose-programming-languages"},"Export http request to general purpose programming languages"),Object(a.b)("p",null,"Dothttp provides feasibility to export http definition to general programming lanugages like python, c, java, javascript, nodejs"),Object(a.b)("h3",{id:"step-1-export"},"step-1 export"),Object(a.b)("p",null,"To export to ",Object(a.b)("inlineCode",{parentName:"p"},"ctrl+shift+p")," and select ",Object(a.b)("inlineCode",{parentName:"p"},">dothttp generate request programming languages"),", click request to export, new file be generated with ",Object(a.b)("inlineCode",{parentName:"p"},".gen.[py/js/java]")," extension"),Object(a.b)("p",null,Object(a.b)("img",{alt:"check here",src:n(255).default})),Object(a.b)("p",null,"or check ",Object(a.b)("a",{parentName:"p",href:"#alternative"},"alternative")),Object(a.b)("h3",{id:"step-2-export"},"step-2 export"),Object(a.b)("p",null,"Pick language of your choice."),Object(a.b)("p",null,"Few languages have\n",Object(a.b)("img",{alt:"check here",src:n(256).default})),Object(a.b)("p",null,"Language sub options, pick if exists\n",Object(a.b)("img",{alt:"check here",src:n(257).default})),Object(a.b)("h2",{id:"request-will-be-generated-and-opened-in-new-tab-of-vscode"},"request will be generated and opened in new tab of vscode"),Object(a.b)("h3",{id:"alternative"},"Alternative"),Object(a.b)("p",null,"Open httpfile, right click on mouse, it will show editor submenu\n",Object(a.b)("img",{alt:"check here",src:n(193).default})))}s.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,p(p({ref:t},l),{},{components:n})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/OpenAsHttpBook-949c76f3ee96bb6efda9b887b20294e6.png"},250:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postmanimport-cc9cf65af43252740e22e15516a89411.png"},251:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman-pick-import-options-f33c988d87d5b2547be3d6022f688c90.png"},252:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman-import-by-link-cdea13e36ec43d7eb45479e835980c3a.png"},253:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman-import-by-file-f4851b6d1dc1d7caf40dc68845378d87.png"},254:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman-export-5fafcbc0984d8026342bf4111caa16a7.png"},255:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/export-general-programming-18ae424da8967622d6e48a266ad2a6ab.png"},256:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/export-pick-language-9962a2e3480c3e58f360f06d4f222447.png"},257:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/export-pick-sublanguage-if-exisits-fc10b8411e089c92aa64da517b3792d9.png"}}]);