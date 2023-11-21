"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9822],{81966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(85893),s=r(11151),a=r(52991);const i={title:"Komparatoren",description:"",sidebar_position:150,tags:["comparators"]},c=void 0,o={id:"exercises/comparators/comparators",title:"Komparatoren",description:"",source:"@site/docs/exercises/comparators/comparators.mdx",sourceDirName:"exercises/comparators",slug:"/exercises/comparators/",permalink:"/java-docs/pr-preview/pr-90/exercises/comparators/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators.mdx",tags:[{label:"comparators",permalink:"/java-docs/pr-preview/pr-90/tags/comparators"}],version:"current",sidebarPosition:150,frontMatter:{title:"Komparatoren",description:"",sidebar_position:150,tags:["comparators"]},sidebar:"exercisesSidebar",previous:{title:"Interfaces01",permalink:"/java-docs/pr-preview/pr-90/exercises/interfaces/interfaces01"},next:{title:"Comparators01",permalink:"/java-docs/pr-preview/pr-90/exercises/comparators/comparators01"}},l={},d=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function u(e){const t={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n","\n",(0,n.jsx)(a.Z,{}),"\n",(0,n.jsx)(t.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_verbrauch_von_elektroger%C3%A4ten_vergleichen",children:"I-8-1.1.1"})]}),"\n",(0,n.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_elektroger%C3%A4te_mit_dem_h%C3%B6chsten_verbrauch_finden",children:"I-8-1.1.2"})]}),"\n",(0,n.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_schnittstelle_comparator_zum_sortieren_einsetzen",children:"I-8-1.1.3"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>x});r(67294);var n=r(34334),s=r(53438),a=r(39960),i=r(13919),c=r(95999),o=r(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(85893);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(a.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:a}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,n.Z)("text--truncate",l.cardTitle),title:s,children:[r," ",s]}),a&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:a,children:a})]})}function m(e){let{item:t}=e;const r=(0,s.LM)(t);return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.jA)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(g,{...e});const a=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,n.Z)("row",r),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var n=r(67294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);