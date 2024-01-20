"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9389],{71622:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=t(85893),r=t(11151),c=t(52991);const a={title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20,tags:["class-structure"]},i=void 0,u={id:"exercises/class-structure/class-structure",title:"Aufbau einer Java-Klasse",description:"",source:"@site/docs/exercises/class-structure/class-structure.mdx",sourceDirName:"exercises/class-structure",slug:"/exercises/class-structure/",permalink:"/java-docs/pr-preview/pr-116/exercises/class-structure/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-structure/class-structure.mdx",tags:[{label:"class-structure",permalink:"/java-docs/pr-preview/pr-116/tags/class-structure"}],version:"current",sidebarPosition:20,frontMatter:{title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20,tags:["class-structure"]},sidebar:"exercisesSidebar",previous:{title:"Programmieren",permalink:"/java-docs/pr-preview/pr-116/exercises/coding/"},next:{title:"ClassStructure01",permalink:"/java-docs/pr-preview/pr-116/exercises/class-structure/class-structure01"}},o={},l=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}];function d(e){const s={a:"a",h2:"h2",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n","\n",(0,n.jsx)(c.Z,{}),"\n",(0,n.jsx)(s.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(s.a,{href:"https://tutego.de/javabuch/aufgaben/intro.html#_fehlermeldungen_der_ide_kennenlernen",children:"I-1-1.2.1"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",children:"\xdcbungsaufgaben der Technischen Hochschule Ulm"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(s.a,{href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf",children:"Variablen01"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},52991:(e,s,t)=>{t.d(s,{Z:()=>b});t(67294);var n=t(90512),r=t(53438),c=t(33692),a=t(13919),i=t(95999),u=t(92503);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=t(85893);function d(e){let{href:s,children:t}=e;return(0,l.jsx)(c.Z,{href:s,className:(0,n.Z)("card padding--lg",o.cardContainer),children:t})}function h(e){let{href:s,icon:t,title:r,description:c}=e;return(0,l.jsxs)(d,{href:s,children:[(0,l.jsxs)(u.Z,{as:"h2",className:(0,n.Z)("text--truncate",o.cardTitle),title:r,children:[t," ",r]}),c&&(0,l.jsx)("p",{className:(0,n.Z)("text--truncate",o.cardDescription),title:c,children:c})]})}function f(e){let{item:s}=e;const t=(0,r.LM)(s);return t?(0,l.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})}):null}function g(e){let{item:s}=e;const t=(0,a.Z)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(s.docId??void 0);return(0,l.jsx)(h,{href:s.href,icon:t,title:s.label,description:s.description??n?.description})}function p(e){let{item:s}=e;switch(s.type){case"link":return(0,l.jsx)(g,{item:s});case"category":return(0,l.jsx)(f,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function m(e){let{className:s}=e;const t=(0,r.jA)();return(0,l.jsx)(b,{items:t.items,className:s})}function b(e){const{items:s,className:t}=e;if(!s)return(0,l.jsx)(m,{...e});const c=(0,r.MN)(s);return(0,l.jsx)("section",{className:(0,n.Z)("row",t),children:c.map(((e,s)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(p,{item:e})},s)))})}},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var n=t(67294);const r={},c=n.createContext(r);function a(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);