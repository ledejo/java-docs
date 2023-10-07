"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5248],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),l=t(4334);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(7462),l=t(7294),r=t(4334),i=t(2466),s=t(6775),o=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function m(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=h({queryString:t,groupId:a}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),g=(()=>{const e=o??d;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var g=t(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(d(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(v,(0,a.Z)({},e,n)),l.createElement(f,(0,a.Z)({},e,n)))}function C(e){const n=(0,g.Z)();return l.createElement(N,(0,a.Z)({key:String(n)},e))}},7833:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),l=t(4866),r=t(5162),i=t(9960),s=t(614);function o(e){let{pullRequest:n,branchSuffix:t}=e;return a.createElement(l.Z,null,a.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(s.Z,{language:"console"},`git switch exercises/${t}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(r.Z,{value:"solution",label:"Solution"},a.createElement(s.Z,{language:"console"},`git switch solutions/${t}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",a.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`},"PR#",n)))}},6526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),l=(t(7294),t(3905)),r=t(7833);const i={title:"JavaStreamAPI01",description:""},s=void 0,o={unversionedId:"exercises/java-stream-api/java-stream-api01",id:"exercises/java-stream-api/java-stream-api01",title:"JavaStreamAPI01",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api01.md",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/java-stream-api01",permalink:"/java-docs/exercises/java-stream-api/java-stream-api01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api01.md",tags:[],version:"current",frontMatter:{title:"JavaStreamAPI01",description:""},sidebar:"exercisesSidebar",previous:{title:"Die Java Stream API",permalink:"/java-docs/exercises/java-stream-api/"},next:{title:"JavaStreamAPI02",permalink:"/java-docs/exercises/java-stream-api/java-stream-api02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Console",id:"hinweis-zur-klasse-console",level:2},{value:"Hinweise zur Klasse Queries",id:"hinweise-zur-klasse-queries",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Queries")," anhand des abgebildeten Klassendiagramms"),(0,l.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche alle erstellten Abfragen ausf\xfchrt und\ndie Ergebnisse auf der Konsole ausgibt")),(0,l.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,l.kt)("mermaid",{value:"classDiagram\n    Console o-- Maker\n    Queries o-- Console\n\n    class Maker {\n        <<enumeration>>\n        MICROSOFT\n        NINTENDO\n        SONY\n    }\n\n    class Console {\n        <<record>>\n        -title String\n        -maker Maker\n        -lifespan int\n        -soldUnitsInMillions double\n    }\n\n    class DataProvider {\n        +getConsoles() List~Console~\n    }\n\n    class Queries {\n        -consoles List~Console~\n        +Queries(consoles List~Console~)\n        +getAllCurrentConsoleNames() List~String~\n        +getAllConsolesSortedByLifespan() List~Console~\n        +isAnyConsoleWithMoreThan150MillionSoldUnits() boolean\n        +isAllConsolesWithMoreThan50MillionSoldUnits() boolean\n        +getNumberOfConsolesFromNintendo() long\n        +getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles() List~String~\n        +getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles() OptionalDouble\n        +getAllConsolesByMaker() Map~Maker&#44&#160List~Console~~\n        +getTotalSoldUnitsInMillionsPerMaker() Map~Maker&#44&#160Double~\n    }"}),(0,l.kt)("h2",{id:"hinweis-zur-klasse-console"},"Hinweis zur Klasse Console"),(0,l.kt)("p",null,"Konsolen, die aktuell noch verkauft werden, besitzen bei der Lebensspanne den\nWert ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," (Stand: 14.06.2023)"),(0,l.kt)("h2",{id:"hinweise-zur-klasse-queries"},"Hinweise zur Klasse Queries"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"List<String> getAllCurrentConsoleNames()")," soll die Namen aller\nKonsolen, die aktuell noch verkauft werden zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"Nintendo Switch,\nPlayStation 4, XBox One"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"List<VideoGameConsole> getAllConsolesSortedByLifespan()")," soll\nalle Konsolen absteigend sortiert nach der Lebensspanne zur\xfcckgeben\n(",(0,l.kt)("em",{parentName:"li"},"VideoGameConsole","[","title=Nintendo Wii, maker=NINTENDO, lifespan=13,\nsoldUnits=101.63]"),",...)"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean isAnyConsoleWithMoreThan150MillionSoldUnits()")," soll die\nAntwort auf die Frage, ob es eine Konsole mit mehr als 150 Millionen\nverkauften Einheiten gibt, zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"true"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean isAllConsolesWithMoreThan50MillionSoldUnits()")," soll die\nAntwort auf die Frage, ob von allen Konsolen mehr als 50 Millionen Einheiten\nverkauft wurden, zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"false"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"long getNumberOfConsolesFromNintendo()")," soll die Anzahl der\nKonsolen von Nintendo zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"8"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode\n",(0,l.kt)("inlineCode",{parentName:"li"},"List<String> getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()")," soll die\nNamen aller Konsolen, die nicht mehr verkauft werden sowie die Anzahl\nverkaufter Einheiten pro Jahr in Millionen zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"PlayStation 2\n(13.225)"),",...)"),(0,l.kt)("li",{parentName:"ul"},"Die Methode\n",(0,l.kt)("inlineCode",{parentName:"li"},"OptionalDouble getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()"),"\nsoll den Durchschnitt verkaufter Einheiten pro Jahr in Millionen aller\nKonsolen, die nicht mehr verkauft werden zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"9.900365412365412"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"Map<Maker, List<VideogameConsole>> getAllConsolesByMaker()")," soll\nalle Konsolen gruppiert nach den Herstellern zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"MICROSOFT:\n","[","VideoGameConsole","[","title=XBox 360, maker=MICROSOFT, lifespan=12,\nsoldUnitsInMillions=85.81]"),",...],...)"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"Map<Maker, Double> getTotalSoldUnitsInMillionsPerMaker()")," soll\ndie Anzahl verkaufter Einheiten pro Hersteller in Millionen zur\xfcckgeben\n(",(0,l.kt)("em",{parentName:"li"},"MICROSOFT: 137.07"),",...)")),(0,l.kt)(r.Z,{pullRequest:"71",branchSuffix:"stream-api/01",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);