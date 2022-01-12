"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4113],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3302:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],c={},s="Locations",l={unversionedId:"guide/concepts/locations",id:"guide/concepts/locations",isDocsHomePage:!1,title:"Locations",description:"Extensions can render custom views via iFrames. To support multiple views in different places every location of the iFrame gets a unique ID. These can be defined by the extension developer itself.",source:"@site/docs/guide/4_concepts/locations.md",sourceDirName:"guide/4_concepts",slug:"/guide/concepts/locations",permalink:"/admin-extension-sdk/docs/guide/concepts/locations",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Component sections",permalink:"/admin-extension-sdk/docs/guide/concepts/component-sections"},next:{title:"Positions",permalink:"/admin-extension-sdk/docs/guide/concepts/positions"}},p=[{value:"Base location",id:"base-location",children:[],level:2},{value:"Change height of location iFrame",id:"change-height-of-location-iframe",children:[],level:2},{value:"Avoiding scrollbars",id:"avoiding-scrollbars",children:[],level:2}],d={toc:p};function u(e){var n=e.components,c=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"locations"},"Locations"),(0,r.kt)("p",null,"Extensions can render custom views via iFrames. To support multiple views in different places every ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," of the iFrame gets a unique ID. These can be defined by the extension developer itself."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:"),"  "),(0,r.kt)("p",null,"A extension wants to render a custom iFrame in a card in the dashboard. The ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," of the iFrame has then a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"locationId")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"sw-dashboard-example-app-dashboard-card"),". The app can also render another iFrames which also get ",(0,r.kt)("inlineCode",{parentName:"p"},"locationId"),"s. In our example it is a iFrame in a custom modal: ",(0,r.kt)("inlineCode",{parentName:"p"},"example-app-example-modal-content"),"."),(0,r.kt)("p",null,"The extension want to render different views depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," of the iFrame. So the extension developer can render the correct view depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"locationId"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Add the ui extensions when your extension is loaded in the hidden iFrame\nif (location.is(location.MAIN_HIDDEN)) {\n  ui.componentSection.add({\n      component: 'card',\n      positionId: 'sw-product-properties__before',\n      props: {\n          title: 'Hello from plugin',\n          subtitle: 'I am before the properties card',\n          /**\n           *  The locationId:\n           **/\n          locationId: 'my-app-card-before-properties'\n      }\n  })\n}\n\n// Render the custom UI when the iFrame location matches your defined location\nif (sw.location.is('my-app-card-before-properties')) {\n    document.body.innerHTML = '<h1>I am the in the location \"my-app-card-before-properties\"</h1>';\n}\n")),(0,r.kt)("h2",{id:"base-location"},"Base location"),(0,r.kt)("p",null,"Every extension gets rendered in a hidden iFrame. In this iFrame the extension can execute different commands to extend\nthe administration and add custom locations to different extension points. To check if the script will be executed in this\nlocation you can use the predefined constant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { location } from '@shopware-ag/admin-extension-sdk';\n\nif (location.is(location.MAIN_HIDDEN)) {\n  // Do the stuff in the hidden iFrame\n}\n")),(0,r.kt)("h2",{id:"change-height-of-location-iframe"},"Change height of location iFrame"),(0,r.kt)("p",null,"The iFrame height is by default fixed. You can update the height with the location helper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"location.updateHeight(750); // change iFrame height to 750px\n")),(0,r.kt)("p",null,"If you use a parameter then the height will automatically be calculated so that your whole view gets rendered. In most cases\nyou don't want to update the height manually. To watch for height changes you can use the auto resizer. It updates the iFrame\nheight everytime the height of the view changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// watch for height changes and update the iFrame\nlocation.startAutoResizer();\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auto Resizer example",src:t(1125).Z})),(0,r.kt)("h2",{id:"avoiding-scrollbars"},"Avoiding scrollbars"),(0,r.kt)("p",null,"If you render custom locations it is useful to disable the scroll behavior in your view. Otherwise scrollbars are visible\nwhich aren't needed in most cases. To avoid this you can add the css property ",(0,r.kt)("inlineCode",{parentName:"p"},"overflow: hidden;")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," element."))}u.isMDXComponent=!0},1125:function(e,n,t){n.Z=t.p+"assets/images/auto-resizer-c312932409cf7781ca9318664b85df43.gif"}}]);