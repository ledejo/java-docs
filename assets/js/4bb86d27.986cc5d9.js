"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6754],{84435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var i=t(85893),s=t(11151),a=t(52991);const c={title:"Ausnahmen (Exceptions)",description:"",sidebar_position:160,tags:["exceptions"]},r=void 0,o={id:"exercises/exceptions/exceptions",title:"Ausnahmen (Exceptions)",description:"",source:"@site/docs/exercises/exceptions/exceptions.mdx",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/",permalink:"/java-docs/exercises/exceptions/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions.mdx",tags:[{label:"exceptions",permalink:"/java-docs/tags/exceptions"}],version:"current",sidebarPosition:160,frontMatter:{title:"Ausnahmen (Exceptions)",description:"",sidebar_position:160,tags:["exceptions"]},sidebar:"exercisesSidebar",previous:{title:"Trees01",permalink:"/java-docs/exercises/trees/trees01"},next:{title:"Exceptions01",permalink:"/java-docs/exercises/exceptions/exceptions01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n","\n",(0,i.jsx)(a.Z,{}),"\n",(0,i.jsx)(n.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_die_l%C3%A4ngste_zeile_einer_datei_ermitteln",children:"I-9-1.1.1"}),"\n(ohne java.nio.file.Files)"]}),"\n",(0,i.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_ausnahmen_ermitteln_lachen_am_laufenden_band",children:"I-9-1.1.2"})]}),"\n",(0,i.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_string_array_in_int_array_konvertieren_und_nachsichtig_bei_nichtzahlen_sein",children:"I-9-1.1.3"})]}),"\n",(0,i.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_watt_ist_unm%C3%B6glich_mit_eigener_ausnahme_anzeigen",children:"I-9-1.3.1"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},52991:(e,n,t)=>{t.d(n,{Z:()=>f});t(67294);var i=t(90512),s=t(53438),a=t(33692),c=t(13919),r=t(95999),o=t(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(85893);function d(e){let{href:n,children:t}=e;return(0,u.jsx)(a.Z,{href:n,className:(0,i.Z)("card padding--lg",l.cardContainer),children:t})}function h(e){let{href:n,icon:t,title:s,description:a}=e;return(0,u.jsxs)(d,{href:n,children:[(0,u.jsxs)(o.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:s,children:[t," ",s]}),a&&(0,u.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a,children:a})]})}function p(e){let{item:n}=e;const t=(0,s.LM)(n);return t?(0,u.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function x(e){let{item:n}=e;const t=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(n.docId??void 0);return(0,u.jsx)(h,{href:n.href,icon:t,title:n.label,description:n.description??i?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(x,{item:n});case"category":return(0,u.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function m(e){let{className:n}=e;const t=(0,s.jA)();return(0,u.jsx)(f,{items:t.items,className:n})}function f(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(m,{...e});const a=(0,s.MN)(n);return(0,u.jsx)("section",{className:(0,i.Z)("row",t),children:a.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},n)))})}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var i=t(67294);const s={},a=i.createContext(s);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);