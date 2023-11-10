"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4007],{82610:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=s(85893),r=s(11151),a=s(85521);const i={title:"JavaStreamAPI01",description:""},t=void 0,o={id:"exercises/java-stream-api/java-stream-api01",title:"JavaStreamAPI01",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api01.mdx",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/java-stream-api01",permalink:"/java-docs/pr-preview/pr-82/exercises/java-stream-api/java-stream-api01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api01.mdx",tags:[],version:"current",frontMatter:{title:"JavaStreamAPI01",description:""},sidebar:"exercisesSidebar",previous:{title:"Die Java Stream API",permalink:"/java-docs/pr-preview/pr-82/exercises/java-stream-api/"},next:{title:"JavaStreamAPI02",permalink:"/java-docs/pr-preview/pr-82/exercises/java-stream-api/java-stream-api02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Console</em>",id:"hinweis-zur-klasse-console",level:2},{value:"Hinweise zur Klasse <em>ConsoleQueries</em>",id:"hinweise-zur-klasse-consolequeries",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,l.jsx)(n.code,{children:"ConsoleQueries"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,l.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche alle erstellten Abfragen ausf\xfchrt und\ndie Ergebnisse auf der Konsole ausgibt"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n    Console o-- Maker\n    ConsoleQueries o-- Console\n\n    class Maker {\n        <<enumeration>>\n        MICROSOFT\n        NINTENDO\n        SONY\n    }\n\n    class Console {\n        <<record>>\n        -title: String\n        -maker: Maker\n        -lifespan: int\n        -soldUnitsInMillions: double\n    }\n\n    class DataProvider {\n        +getConsoles()$ List~Console~\n    }\n\n    class ConsoleQueries {\n        <<record>>\n        -consoles: List~Console~\n        +getAllCurrentConsoleNames() List~String~\n        +getAllConsolesSortedByLifespan() List~Console~\n        +isAnyConsoleWithMoreThan150MillionSoldUnits() boolean\n        +isAllConsolesWithMoreThan50MillionSoldUnits() boolean\n        +getNumberOfConsolesFromNintendo() long\n        +getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles() List~String~\n        +getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles() OptionalDouble\n        +getAllConsolesByMaker() Map~Maker&sbquo; List~Console~~\n        +getTotalSoldUnitsInMillionsPerMaker() Map~Maker, Double~\n    }"}),"\n",(0,l.jsxs)(n.h2,{id:"hinweis-zur-klasse-console",children:["Hinweis zur Klasse ",(0,l.jsx)(n.em,{children:"Console"})]}),"\n",(0,l.jsxs)(n.p,{children:["Konsolen, die aktuell noch verkauft werden, besitzen bei der Lebensspanne den\nWert ",(0,l.jsx)(n.code,{children:"-1"})," (Stand: 14.06.2023)"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweise-zur-klasse-consolequeries",children:["Hinweise zur Klasse ",(0,l.jsx)(n.em,{children:"ConsoleQueries"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"List<String> getAllCurrentConsoleNames()"})," soll die Namen aller\nKonsolen, die aktuell noch verkauft werden zur\xfcckgeben (",(0,l.jsx)(n.em,{children:"Nintendo Switch,\nPlayStation 4, XBox One"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"List<VideoGameConsole> getAllConsolesSortedByLifespan()"})," soll\nalle Konsolen absteigend sortiert nach der Lebensspanne zur\xfcckgeben\n(",(0,l.jsx)(n.em,{children:"VideoGameConsole[title=Nintendo Wii, maker=NINTENDO, lifespan=13,\nsoldUnits=101.63]"}),",...)"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"boolean isAnyConsoleWithMoreThan150MillionSoldUnits()"})," soll die\nAntwort auf die Frage, ob es eine Konsole mit mehr als 150 Millionen\nverkauften Einheiten gibt, zur\xfcckgeben (",(0,l.jsx)(n.em,{children:"true"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"boolean isAllConsolesWithMoreThan50MillionSoldUnits()"})," soll die\nAntwort auf die Frage, ob von allen Konsolen mehr als 50 Millionen Einheiten\nverkauft wurden, zur\xfcckgeben (",(0,l.jsx)(n.em,{children:"false"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"long getNumberOfConsolesFromNintendo()"})," soll die Anzahl der\nKonsolen von Nintendo zur\xfcckgeben (",(0,l.jsx)(n.em,{children:"8"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode\n",(0,l.jsx)(n.code,{children:"List<String> getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()"})," soll die\nNamen aller Konsolen, die nicht mehr verkauft werden sowie die Anzahl\nverkaufter Einheiten pro Jahr in Millionen zur\xfcckgeben (",(0,l.jsx)(n.em,{children:"PlayStation 2\n(13.225)"}),",...)"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode\n",(0,l.jsx)(n.code,{children:"OptionalDouble getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()"}),"\nsoll den Durchschnitt verkaufter Einheiten pro Jahr in Millionen aller\nKonsolen, die nicht mehr verkauft werden zur\xfcckgeben (",(0,l.jsx)(n.em,{children:"9.900365412365412"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"Map<Maker, List<VideogameConsole>> getAllConsolesByMaker()"})," soll\nalle Konsolen gruppiert nach den Herstellern zur\xfcckgeben (",(0,l.jsx)(n.em,{children:"MICROSOFT:\n[VideoGameConsole[title=XBox 360, maker=MICROSOFT, lifespan=12,\nsoldUnitsInMillions=85.81]"}),",...],...)"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"Map<Maker, Double> getTotalSoldUnitsInMillionsPerMaker()"})," soll\ndie Anzahl verkaufter Einheiten pro Hersteller in Millionen zur\xfcckgeben\n(",(0,l.jsx)(n.em,{children:"MICROSOFT: 137.07"}),",...)"]}),"\n"]}),"\n",(0,l.jsx)(a.Z,{pullRequest:"71",branchSuffix:"stream-api/01"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>i});s(67294);var l=s(34334);const r={tabItem:"tabItem_Ymn6"};var a=s(85893);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>M});var l=s(67294),r=s(34334),a=s(12466),i=s(16550),t=s(20469),o=s(91980),u=s(67392),c=s(50012);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:l,default:r}}=e;return{value:n,label:s,attributes:l,default:r}}))}(s);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=s.find((e=>e.default))??s[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:a}))),[u,d]=p({queryString:s,groupId:r}),[b,v]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Nk)(s);return[r,(0,l.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),g=(()=>{const e=u??b;return m({value:e,tabValues:a})?e:null})();(0,t.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=s(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(85893);function j(e){let{className:n,block:s,selectedValue:l,selectValue:i,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),r=t[s].value;r!==l&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":l===n}),children:s??n},n)}))})}function x(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(j,{...e,...n}),(0,f.jsx)(x,{...e,...n})]})}function M(e){const n=(0,v.Z)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(n))}},85521:(e,n,s)=>{s.d(n,{Z:()=>o});s(67294);var l=s(74866),r=s(85162),a=s(39960),i=s(9286),t=s(85893);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch exercises/${s}`}),(0,t.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch solutions/${s}`}),(0,t.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);