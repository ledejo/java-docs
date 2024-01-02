"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5021],{11522:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var s=r(85893),a=r(11151),t=r(85521);const l={title:"Generics03",description:""},i=void 0,u={id:"exercises/generics/generics03",title:"Generics03",description:"",source:"@site/docs/exercises/generics/generics03.mdx",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics03",permalink:"/java-docs/pr-preview/pr-104/exercises/generics/generics03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics03.mdx",tags:[],version:"current",frontMatter:{title:"Generics03",description:""},sidebar:"exercisesSidebar",previous:{title:"Generics02",permalink:"/java-docs/pr-preview/pr-104/exercises/generics/generics02"},next:{title:"Generics04",permalink:"/java-docs/pr-preview/pr-104/exercises/generics/generics04"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>SchoolClass</em>",id:"hinweise-zur-klasse-schoolclass",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,s.jsx)(n.code,{children:"Pair"}),", ",(0,s.jsx)(n.code,{children:"Pupil"})," und ",(0,s.jsx)(n.code,{children:"SchoolClass"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Schulklasse mit mehreren\nSch\xfclern erzeugt und die Sch\xfclerpaare ausgibt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    SchoolClass o-- Pupil\n\n    class Pair~T~ {\n        <<record>>\n        partA: T\n        partB: T\n    }\n\n    class SchoolClass {\n        <<record>>\n        name: String\n        pupils: List~Pupil~\n        +addPupil(pupil: Pupil) void\n        +getPairs() List~Pair~Pupil~~\n    }\n\n    class Pupil {\n        <<record>>\n        name: String\n        gender: String\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-schoolclass",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"SchoolClass"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addPupil(pupil: Pupil)"})," soll der Schulklasse den eingehenden\nSch\xfcler hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Pair<Pupil>> getPairs()"})," soll aus den Sch\xfclern der\nSchulklasse zuf\xe4llige Paare bilden und zur\xfcckgeben. Bei einer ungeraden Anzahl\nan Sch\xfclern soll der verbleibende Sch\xfcler mit dem Wert ",(0,s.jsx)(n.code,{children:"null"})," gepaart werden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Sch\xfcler:\nFranziska\nFritz\nHans\nJennifer\nLisa\nMax\nPeter\n\nPaare:\nJennifer - Franziska\nFritz - Lisa\nMax - Hans\nPeter - null\n"})}),"\n",(0,s.jsx)(t.Z,{pullRequest:"64",branchSuffix:"generics/03"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var s=r(90512);const a={tabItem:"tabItem_Ymn6"};var t=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>S});var s=r(67294),a=r(90512),t=r(12466),l=r(16550),i=r(20469),u=r(91980),c=r(67392),o=r(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:a}}=e;return{value:n,label:r,attributes:s,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,t=h(e),[l,u]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,d]=g({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,o.Nk)(r);return[a,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:a}),f=(()=>{const e=c??m;return p({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function x(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),o=e=>{const n=e.currentTarget,r=u.indexOf(n),a=i[r].value;a!==s&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:d,onClick:o,...t,className:(0,a.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function S(e){const n=(0,b.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},85521:(e,n,r)=>{r.d(n,{Z:()=>u});r(67294);var s=r(74866),a=r(85162),t=r(39960),l=r(9286),i=r(85893);function u(e){let{pullRequest:n,branchSuffix:r}=e;return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);