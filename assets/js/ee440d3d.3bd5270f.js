"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(7294),a=r(6010),i=r(3438),o=r(9960),c=r(3919),s=r(5999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??(null==a?void 0:a.description)})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},6512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const o={title:"Klausuraufgaben Programmierung 1",description:"",sidebar_position:30},c=void 0,s={unversionedId:"additional-material/exam-exercises1/exam-exercises1",id:"additional-material/exam-exercises1/exam-exercises1",title:"Klausuraufgaben Programmierung 1",description:"",source:"@site/docs/additional-material/exam-exercises1/exam-exercises1.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/",permalink:"/java-docs/additional-material/exam-exercises1/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises1/exam-exercises1.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Klausuraufgaben Programmierung 1",description:"",sidebar_position:30},sidebar:"additionalMaterialSidebar",previous:{title:"Downloads (Daniel)",permalink:"/java-docs/additional-material/downloads"},next:{title:"Kassensystem",permalink:"/java-docs/additional-material/exam-exercises1/cashier-system"}},l={},m=[],d={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);