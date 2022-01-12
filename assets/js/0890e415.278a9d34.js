"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6078],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"index",title:"Module: index",sidebar_label:"index",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"api/modules/index",id:"api/modules/index",isDocsHomePage:!1,title:"Module: index",description:"Variables",source:"@site/docs/api/modules/index.md",sourceDirName:"api/modules",slug:"/api/modules/index",permalink:"/admin-extension-sdk/docs/api/modules/index",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"Module: index",sidebar_label:"index",sidebar_position:0,custom_edit_url:null},sidebar:"API",previous:{title:"context",permalink:"/admin-extension-sdk/docs/api/modules/context"},next:{title:"_internals/function-serializer",permalink:"/admin-extension-sdk/docs/api/modules/internals_function_serializer"}},c=[{value:"Variables",id:"variables",children:[{value:"ui",id:"ui",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[{value:"window",id:"window",children:[],level:3},{value:"notification",id:"notification",children:[],level:3},{value:"context",id:"context",children:[],level:3},{value:"location",id:"location",children:[],level:3}],level:2}],s={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"ui"},"ui"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ui"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"The main export which will be available by direct imports."),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"componentSection")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/admin-extension-sdk/docs/api/modules/ui_componentSection"},(0,a.kt)("inlineCode",{parentName:"a"},"ui/componentSection")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tabs")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"tabPositionId"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),") => { ",(0,a.kt)("inlineCode",{parentName:"td"},"addTabItem"),": (",(0,a.kt)("inlineCode",{parentName:"td"},"messageOptions"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Omit"),"<",(0,a.kt)("a",{parentName:"td",href:"/admin-extension-sdk/docs/api/modules/channel#messagedatatype"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageDataType")),"<",(0,a.kt)("inlineCode",{parentName:"td"},'"uiTabsAddTabItem"'),">",", ",(0,a.kt)("inlineCode",{parentName:"td"},'"positionId"'),">",") => ",(0,a.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"void"),">","  }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"menu")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/admin-extension-sdk/docs/api/modules/ui_menuItem"},(0,a.kt)("inlineCode",{parentName:"a"},"ui/menuItem")))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/1d59573/src/index.ts#L9"},"src/index.ts:9")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("h3",{id:"window"},"window"),(0,a.kt)("p",null,"Re-exports ",(0,a.kt)("a",{parentName:"p",href:"/admin-extension-sdk/docs/api/modules/window"},"window")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"notification"},"notification"),(0,a.kt)("p",null,"Re-exports ",(0,a.kt)("a",{parentName:"p",href:"/admin-extension-sdk/docs/api/modules/notification"},"notification")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"context"},"context"),(0,a.kt)("p",null,"Re-exports ",(0,a.kt)("a",{parentName:"p",href:"/admin-extension-sdk/docs/api/modules/context"},"context")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"location"},"location"),(0,a.kt)("p",null,"Re-exports ",(0,a.kt)("a",{parentName:"p",href:"/admin-extension-sdk/docs/api/modules/location"},"location")))}u.isMDXComponent=!0}}]);