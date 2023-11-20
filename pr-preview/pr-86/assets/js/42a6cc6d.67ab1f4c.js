"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7939],{17020:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(85893),t=a(11151),s=a(85521);const i={title:"ClassDiagrams03",description:""},l=void 0,u={id:"exercises/uml/class-diagrams03",title:"ClassDiagrams03",description:"",source:"@site/docs/exercises/uml/class-diagrams03.mdx",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams03",permalink:"/java-docs/pr-preview/pr-86/exercises/uml/class-diagrams03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/uml/class-diagrams03.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams03",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams02",permalink:"/java-docs/pr-preview/pr-86/exercises/uml/class-diagrams02"},next:{title:"ClassDiagrams04",permalink:"/java-docs/pr-preview/pr-86/exercises/uml/class-diagrams04"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Creature</em>",id:"hinweise-zur-klasse-creature",level:2},{value:"Hinweise zur Klasse <em>CreatureGame</em>",id:"hinweise-zur-klasse-creaturegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Passe die Klasse ",(0,n.jsx)(r.code,{children:"Creature"})," aus \xdcbungsaufgabe ",(0,n.jsx)(r.a,{href:"../oo/oo06",children:"OO06"})," anhand des\nabgebildeten Klassendiagramms an und Erstelle die Klasse ",(0,n.jsx)(r.code,{children:"CreatureGame"})]}),"\n",(0,n.jsx)(r.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche einen Kampf zwischen zwei Kreaturen\nsimuliert"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(r.mermaid,{value:"classDiagram\n    CreatureGame o-- Creature\n\n    class CreatureGame {\n        -creature1: Creature &#123final&#125\n        -creature2: Creature &#123final&#125\n        -numberOfRounds: int\n        +Game(creature1: Creature, creature2: Creature)\n        +simulateFight() void\n        -move(creature1: Creature, creature2: Creature) boolean\n        -toString() String\n    }\n\n    class Creature {\n        -name: String &#123final&#125\n        -attackValue: int &#123final&#125\n        -hitpoints: int\n        +Creature(name: String, attackValue: int, hitpoints: int)\n        +attackCreature(creature: Creature) boolean\n        +name() String\n        +attackValue() int\n        +getHitpoints() int\n        +setHitpoints(hitpoints: int) void\n        +toString() String\n    }"}),"\n",(0,n.jsxs)(r.h2,{id:"hinweise-zur-klasse-creature",children:["Hinweise zur Klasse ",(0,n.jsx)(r.em,{children:"Creature"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Passe die Methode ",(0,n.jsx)(r.code,{children:"boolean attack(creature: Creature)"})," so an, dass der\nR\xfcckgabewert ",(0,n.jsx)(r.code,{children:"true"})," ist, wenn die Lebenspunkte der angegriffenen Kreatur\nkleiner gleich Null sind, bzw. ",(0,n.jsx)(r.code,{children:"false"}),", wenn nicht"]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"hinweise-zur-klasse-creaturegame",children:["Hinweise zur Klasse ",(0,n.jsx)(r.em,{children:"CreatureGame"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,n.jsxs)(r.li,{children:["Die Methode ",(0,n.jsx)(r.code,{children:"void simulateFight()"}),' soll die beiden Kreaturen sich so lange\ngegenseitig angreifen lassen, bis eine der Kreaturen "stirbt"']}),"\n",(0,n.jsxs)(r.li,{children:["Die Methode ",(0,n.jsx)(r.code,{children:"boolean move(creature1: Creature, creature2: Creature)"})," soll eine\nKreatur die andere angreifen lassen und den R\xfcckgabewert ",(0,n.jsx)(r.code,{children:"true"}),' liefern, wenn\ndie angegriffene Kreatur "stirbt", bzw. ',(0,n.jsx)(r.code,{children:"false"}),", wenn nicht"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",children:"Runde 1: Zombie (2 - 10), Vampir (4 - 6)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir hat noch 4 Lebenspunkte\nVampir greift Zombie an und erzielt 4 Schaden\nZombie hat noch 6 Lebenspunkte\n\u2026\nRunde 3: Zombie (2 - 2), Vampir (4 - 2)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir wurde vernichtet\n"})}),"\n",(0,n.jsx)(s.Z,{pullRequest:"38",branchSuffix:"class-diagrams/03"})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,r,a)=>{a.d(r,{Z:()=>i});a(67294);var n=a(34334);const t={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){let{children:r,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(t.tabItem,i),hidden:a,children:r})}},74866:(e,r,a)=>{a.d(r,{Z:()=>k});var n=a(67294),t=a(34334),s=a(12466),i=a(16550),l=a(20469),u=a(91980),o=a(67392),c=a(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:a}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:a,attributes:n,default:t}}=e;return{value:r,label:a,attributes:n,default:t}}))}(a);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function m(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:a}=e;const t=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})}),[s,t])]}function b(e){const{defaultValue:r,queryString:a=!1,groupId:t}=e,s=h(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[o,d]=p({queryString:a,groupId:t}),[b,g]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,c.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),f=(()=>{const e=o??b;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(85893);function v(e){let{className:r,block:a,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const r=e.currentTarget,a=u.indexOf(r),t=l[a].value;t!==n&&(o(r),i(t))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;r=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;r=u[a]??u[u.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},r),children:l.map((e=>{let{value:r,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,t.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===r}),children:a??r},r)}))})}function j(e){let{lazy:r,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function w(e){const r=b(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...r}),(0,x.jsx)(j,{...e,...r})]})}function k(e){const r=(0,g.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(r))}},85521:(e,r,a)=>{a.d(r,{Z:()=>u});a(67294);var n=a(74866),t=a(85162),s=a(39960),i=a(9286),l=a(85893);function u(e){let{pullRequest:r,branchSuffix:a}=e;return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${a}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${a}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);