"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3759],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},o=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=c(t),g=r,b=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return t?n.createElement(b,u(u({ref:a},o),{},{components:t})):n.createElement(b,u({ref:a},o))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:r,u[1]=s;for(var c=2;c<i;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2991:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7294),r=t(6010),i=t(3438),u=t(9960),s=t(3919),l=t(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function o(e){let{href:a,children:t}=e;return n.createElement(u.Z,{href:a,className:(0,r.Z)("card padding--lg",c.cardContainer)},t)}function m(e){let{href:a,icon:t,title:i,description:u}=e;return n.createElement(o,{href:a},n.createElement("h2",{className:(0,r.Z)("text--truncate",c.cardTitle),title:i},t," ",i),u&&n.createElement("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:u},u))}function p(e){let{item:a}=e;const t=(0,i.Wl)(a);return t?n.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:a.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function g(e){let{item:a}=e;const t=(0,s.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(a.docId??void 0);return n.createElement(m,{href:a.href,icon:t,title:a.label,description:a.description??(null==r?void 0:r.description)})}function b(e){let{item:a}=e;switch(a.type){case"link":return n.createElement(g,{item:a});case"category":return n.createElement(p,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function f(e){let{className:a}=e;const t=(0,i.jA)();return n.createElement(d,{items:t.items,className:a})}function d(e){const{items:a,className:t}=e;if(!a)return n.createElement(f,e);const u=(0,i.MN)(a);return n.createElement("section",{className:(0,r.Z)("row",t)},u.map(((e,a)=>n.createElement("article",{key:a,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},8717:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>l,toc:()=>o});var n=t(7462),r=(t(7294),t(3905)),i=t(2991);const u={title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},s=void 0,l={unversionedId:"exercises/java-stream-api/java-stream-api",id:"exercises/java-stream-api/java-stream-api",title:"Die Java Stream API",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api.md",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/",permalink:"/java-docs/exercises/java-stream-api/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api.md",tags:[{label:"java-stream-api",permalink:"/java-docs/tags/java-stream-api"}],version:"current",sidebarPosition:200,frontMatter:{title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},sidebar:"exercisesSidebar",previous:{title:"Optionals03",permalink:"/java-docs/exercises/optionals/optionals03"},next:{title:"JavaStreamAPI01",permalink:"/java-docs/exercises/java-stream-api/java-stream-api01"}},c={},o=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],m={toc:o},p="wrapper";function g(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,r.kt)(i.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_heldenepos_stream_api_kennenlernen"},"II-5-1.1.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_den_geliebten_captain_aus_einer_liste_ermitteln"},"II-5-1.1.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_bilder_einrahmen"},"II-5-1.1.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_schau_und_sag"},"II-5-1.1.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_doppelte_inseln_mit_metallen_der_seltenen_erden_entfernen"},"II-5-1.1.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_wo_gibt_es_die_segel"},"II-5-1.1.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_das_beliebteste_auto_kaufen"},"II-5-1.1.7")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_nan_in_einem_array_erkennen"},"II-5-1.2.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_jahrzehnte_erzeugen"},"II-5-1.2.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_array_mit_konstantem_inhalt_%C3%BCber_stream_erzeugen"},"II-5-1.2.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_pyramiden_zeichnen"},"II-5-1.2.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_buchstabenh%C3%A4ufigkeit_eines_strings_ermitteln"},"II-5-1.2.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_von_1_auf_0_von_10_auf_9"},"II-5-1.2.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_zwei_int_arrays_zusammenf%C3%BChren"},"II-5-1.2.7")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_gewinnkombinationen_ermitteln"},"II-5-1.2.8")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_die_schnellsten_und_langsamsten_paddler"},"II-5-1.3.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_median_berechnen"},"II-5-1.3.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_temperaturstatistiken_berechnen_und_charts_zeichnen"},"II-5-1.3.3"))))}g.isMDXComponent=!0}}]);