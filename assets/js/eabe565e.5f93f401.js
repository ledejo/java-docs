"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),r=n(4334),s=n(3438),i=n(9960),c=n(3919),l=n(5999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",o.cardContainer)},n)}function m(e){let{href:t,icon:n,title:s,description:i}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",o.cardTitle),title:s},n," ",s),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",o.cardDescription),title:i},i))}function p(e){let{item:t}=e;const n=(0,s.Wl)(t);return n?a.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(d,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,s.jA)();return a.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return a.createElement(b,e);const i=(0,s.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},4753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),s=n(2991);const i={title:"Innere Klassen (Inner Classes)",description:"",sidebar_position:170,tags:["inner-classes"]},c=void 0,l={unversionedId:"exercises/inner-classes/inner-classes",id:"exercises/inner-classes/inner-classes",title:"Innere Klassen (Inner Classes)",description:"",source:"@site/docs/exercises/inner-classes/inner-classes.md",sourceDirName:"exercises/inner-classes",slug:"/exercises/inner-classes/",permalink:"/java-docs/exercises/inner-classes/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/inner-classes/inner-classes.md",tags:[{label:"inner-classes",permalink:"/java-docs/tags/inner-classes"}],version:"current",sidebarPosition:170,frontMatter:{title:"Innere Klassen (Inner Classes)",description:"",sidebar_position:170,tags:["inner-classes"]},sidebar:"exercisesSidebar",previous:{title:"Exceptions03",permalink:"/java-docs/exercises/exceptions/exceptions03"},next:{title:"InnerClasses01",permalink:"/java-docs/exercises/inner-classes/inner-classes01"}},o={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,r.kt)(s.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/nested_types.html#_am_fm_modulation_in_den_radio_typ_setzen"},"I-10-1.1.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/nested_types.html#_drei_arten_von_watt_comparator_implementierungen_schreiben"},"I-10-1.1.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/lambda-functional-programming.html#_lambda_ausdr%C3%BCcke_f%C3%BCr_funktionale_schnittstellen_schreiben"},"I-13-1.1.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/lambda-functional-programming.html#_lambda_ausdr%C3%BCcke_entwickeln"},"I-13-1.1.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/lambda-functional-programming.html#_eintr%C3%A4ge_l%C3%B6schen_kommentare_entfernen_in_csv_konvertieren"},"I-13-1.2.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/javalib.html#_superhelden_verarbeiten"},"I-16-1.2.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/javalib.html#_superhelden_vergleichen"},"I-16-1.2.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/javalib.html#_helden_comparatoren_verketten"},"I-16-1.2.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/javalib.html#_punkte_nach_abstand_zum_zentrum_sortieren"},"I-16-1.2.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/javalib.html#_gesch%C3%A4fte_in_der_n%C3%A4he_ermitteln"},"I-16-1.2.6"))))}d.isMDXComponent=!0}}]);