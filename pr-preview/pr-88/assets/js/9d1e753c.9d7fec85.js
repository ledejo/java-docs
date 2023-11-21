"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8887],{69157:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=t(85893),s=t(11151),i=t(52991);const r={title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},u=void 0,l={id:"exercises/java-stream-api/java-stream-api",title:"Die Java Stream API",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api.mdx",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/",permalink:"/java-docs/pr-preview/pr-88/exercises/java-stream-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api.mdx",tags:[{label:"java-stream-api",permalink:"/java-docs/pr-preview/pr-88/tags/java-stream-api"}],version:"current",sidebarPosition:200,frontMatter:{title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},sidebar:"exercisesSidebar",previous:{title:"Optionals03",permalink:"/java-docs/pr-preview/pr-88/exercises/optionals/optionals03"},next:{title:"JavaStreamAPI01",permalink:"/java-docs/pr-preview/pr-88/exercises/java-stream-api/java-stream-api01"}},c={},h=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function d(e){const a={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n","\n",(0,n.jsx)(i.Z,{}),"\n",(0,n.jsx)(a.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_heldenepos_stream_api_kennenlernen",children:"II-5-1.1.1"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_den_geliebten_captain_aus_einer_liste_ermitteln",children:"II-5-1.1.2"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_bilder_einrahmen",children:"II-5-1.1.3"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_schau_und_sag",children:"II-5-1.1.4"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_doppelte_inseln_mit_metallen_der_seltenen_erden_entfernen",children:"II-5-1.1.5"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_wo_gibt_es_die_segel",children:"II-5-1.1.6"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_das_beliebteste_auto_kaufen",children:"II-5-1.1.7"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_nan_in_einem_array_erkennen",children:"II-5-1.2.1"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_jahrzehnte_erzeugen",children:"II-5-1.2.2"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_array_mit_konstantem_inhalt_%C3%BCber_stream_erzeugen",children:"II-5-1.2.3"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_pyramiden_zeichnen",children:"II-5-1.2.4"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_buchstabenh%C3%A4ufigkeit_eines_strings_ermitteln",children:"II-5-1.2.5"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_von_1_auf_0_von_10_auf_9",children:"II-5-1.2.6"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_zwei_int_arrays_zusammenf%C3%BChren",children:"II-5-1.2.7"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_gewinnkombinationen_ermitteln",children:"II-5-1.2.8"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_die_schnellsten_und_langsamsten_paddler",children:"II-5-1.3.1"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_median_berechnen",children:"II-5-1.3.2"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_temperaturstatistiken_berechnen_und_charts_zeichnen",children:"II-5-1.3.3"})]}),"\n"]})]})}function o(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},52991:(e,a,t)=>{t.d(a,{Z:()=>b});t(67294);var n=t(34334),s=t(53438),i=t(39960),r=t(13919),u=t(95999),l=t(92503);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=t(85893);function d(e){let{href:a,children:t}=e;return(0,h.jsx)(i.Z,{href:a,className:(0,n.Z)("card padding--lg",c.cardContainer),children:t})}function o(e){let{href:a,icon:t,title:s,description:i}=e;return(0,h.jsxs)(d,{href:a,children:[(0,h.jsxs)(l.Z,{as:"h2",className:(0,n.Z)("text--truncate",c.cardTitle),title:s,children:[t," ",s]}),i&&(0,h.jsx)("p",{className:(0,n.Z)("text--truncate",c.cardDescription),title:i,children:i})]})}function g(e){let{item:a}=e;const t=(0,s.LM)(a);return t?(0,h.jsx)(o,{href:t,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:a.description??(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function m(e){let{item:a}=e;const t=(0,r.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(a.docId??void 0);return(0,h.jsx)(o,{href:a.href,icon:t,title:a.label,description:a.description??n?.description})}function j(e){let{item:a}=e;switch(a.type){case"link":return(0,h.jsx)(m,{item:a});case"category":return(0,h.jsx)(g,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function p(e){let{className:a}=e;const t=(0,s.jA)();return(0,h.jsx)(b,{items:t.items,className:a})}function b(e){const{items:a,className:t}=e;if(!a)return(0,h.jsx)(p,{...e});const i=(0,s.MN)(a);return(0,h.jsx)("section",{className:(0,n.Z)("row",t),children:i.map(((e,a)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(j,{item:e})},a)))})}},11151:(e,a,t)=>{t.d(a,{Z:()=>u,a:()=>r});var n=t(67294);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function u(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);