"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[975],{93657:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(85893),a=t(11151),s=t(85521);const i={title:"Comparators01",description:""},o=void 0,l={id:"exercises/comparators/comparators01",title:"Comparators01",description:"",source:"@site/docs/exercises/comparators/comparators01.mdx",sourceDirName:"exercises/comparators",slug:"/exercises/comparators/comparators01",permalink:"/java-docs/pr-preview/pr-85/exercises/comparators/comparators01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators01.mdx",tags:[],version:"current",frontMatter:{title:"Comparators01",description:""},sidebar:"exercisesSidebar",previous:{title:"Komparatoren",permalink:"/java-docs/pr-preview/pr-85/exercises/comparators/"},next:{title:"Comparators02",permalink:"/java-docs/pr-preview/pr-85/exercises/comparators/comparators02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Coordinate</em>",id:"hinweise-zur-klasse-coordinate",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const r={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Erstelle die Klasse ",(0,n.jsx)(r.code,{children:"Coordinate"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,n.jsx)(r.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Koordinatenliste mit mehreren\nKoordinaten erzeugt, diese sortiert und anschlie\xdfend auf der Konsole ausgibt"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(r.mermaid,{value:"classDiagram\n    Comparable~Coordinate~ <|.. Coordinate\n\n    class Coordinate {\n        -x: int &#123final&#125\n        -y: int &#123final&#125\n        +Coordinate(x: int, y: int)\n        +x() int\n        +y() int\n        +getDistanceToOriginPoint() double\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n        +compareTo(other: Coordinate) int\n    }\n\n    class Comparable~Coordinate~ {\n        <<interface>>\n        +compareTo(o: Coordinate) int\n    }"}),"\n",(0,n.jsxs)(r.h2,{id:"hinweise-zur-klasse-coordinate",children:["Hinweise zur Klasse ",(0,n.jsx)(r.em,{children:"Coordinate"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Die Methode ",(0,n.jsx)(r.code,{children:"double getDistanceToOriginPoint()"})," soll die Distanz der\nKoordinate zum Nullpunkt zur\xfcckgeben"]}),"\n",(0,n.jsxs)(r.li,{children:["Die Methode ",(0,n.jsx)(r.code,{children:"int compareTo(other: Coordinate)"})," soll die Koordinate mit der\neingehenden Koordinate anhand ihrer jeweiligen Distanz zum Nullpunkt\nvergleichen. Ist die Distanz der Koordinate zum Nullpunkt kleiner als bzw.\ngr\xf6\xdfer als bzw. gleich die der eingehenden Koordinate, soll der Wert 1 bzw. -1\nbzw. 0 zur\xfcckgegeben werden"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(r.p,{children:["Die statische Methode ",(0,n.jsx)(r.code,{children:"double hypot(x: double, y: double)"})," der Klasse ",(0,n.jsx)(r.code,{children:"Math"}),"\nberechnet die Hypotenuse zum eingehenden X- und Y-Wert."]}),"\n",(0,n.jsx)(s.Z,{pullRequest:"47",branchSuffix:"comparators/01"})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var n=t(34334);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>k});var n=t(67294),a=t(34334),s=t(12466),i=t(16550),o=t(20469),l=t(91980),u=t(67392),c=t(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[u,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const r=e.currentTarget,t=l.indexOf(r),a=o[t].value;a!==n&&(u(r),i(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=b(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...r}),(0,x.jsx)(j,{...e,...r})]})}function k(e){const r=(0,f.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(r))}},85521:(e,r,t)=>{t.d(r,{Z:()=>l});t(67294);var n=t(74866),a=t(85162),s=t(39960),i=t(9286),o=t(85893);function l(e){let{pullRequest:r,branchSuffix:t}=e;return(0,o.jsxs)(n.Z,{children:[(0,o.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,o.jsx)(i.Z,{language:"console",children:`git switch exercises/${t}`}),(0,o.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,o.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,o.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,o.jsx)(i.Z,{language:"console",children:`git switch solutions/${t}`}),(0,o.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,o.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,o.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,o.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);