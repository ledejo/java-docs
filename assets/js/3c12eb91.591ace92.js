"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),a=r(6010),o=r(3438),i=r(9960),s=r(3919),c=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??(null==a?void 0:a.description)})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},2052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(2991);const i={title:"Objektorientierte Programmierung",description:"",sidebar_position:80,tags:["oo"]},s=void 0,c={unversionedId:"exercises/oo/oo",id:"exercises/oo/oo",title:"Objektorientierte Programmierung",description:"",source:"@site/docs/exercises/oo/oo.md",sourceDirName:"exercises/oo",slug:"/exercises/oo/",permalink:"/java-docs/exercises/oo/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/oo/oo.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"}],version:"current",sidebarPosition:80,frontMatter:{title:"Objektorientierte Programmierung",description:"",sidebar_position:80,tags:["oo"]},sidebar:"exercisesSidebar",previous:{title:"Arrays05",permalink:"/java-docs/exercises/arrays/arrays05"},next:{title:"OO01",permalink:"/java-docs/exercises/oo/oo01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,a.kt)(o.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_radio_mit_objektvariablen_und_ein_hauptprogramm_deklarieren"},"I-6-1.1.1")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_methoden_eines_radios_implementieren"},"I-6-1.1.2")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_private_parts_objektvariablen_privat_machen"},"I-6-1.1.3")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_setter_und_getter_anlegen"},"I-6-1.1.4")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_sendernamen_in_frequenzen_konvertieren"},"I-6-1.2.1")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_anlegevarianten_radio_konstruktoren_schreiben"},"I-6-1.4.1")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_copy_konstruktor_implementieren"},"I-6-1.4.2"))))}m.isMDXComponent=!0}}]);