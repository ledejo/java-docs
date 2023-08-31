"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5248],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),s=a(6775),o=a(1980),u=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=o??d;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var v=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),o(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(k,(0,n.Z)({},e,t)),l.createElement(g,(0,n.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return l.createElement(N,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(4866),r=a(5162),i=a(9960),s=a(614);function o(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(l.Z,null,n.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(s.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(r.Z,{value:"solution",label:"Solution"},n.createElement(s.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),r=a(7833);const i=a.p+"assets/images/java-stream-api01-51a95d3848ec64784d9c827d3701fa46.png",s={title:"JavaStreamAPI01",description:""},o=void 0,u={unversionedId:"exercises/java-stream-api/java-stream-api01",id:"exercises/java-stream-api/java-stream-api01",title:"JavaStreamAPI01",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api01.md",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/java-stream-api01",permalink:"/java-docs/exercises/java-stream-api/java-stream-api01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api01.md",tags:[],version:"current",frontMatter:{title:"JavaStreamAPI01",description:""},sidebar:"exercisesSidebar",previous:{title:"Die Java Stream API",permalink:"/java-docs/exercises/java-stream-api/"},next:{title:"JavaStreamAPI02",permalink:"/java-docs/exercises/java-stream-api/java-stream-api02"}},c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Console",id:"hinweis-zur-klasse-console",level:2},{value:"Hinweise zur Klasse Queries",id:"hinweise-zur-klasse-queries",level:2}],m={toc:d},p="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Queries")," anhand des abgebildeten Klassendiagramms"),(0,l.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche alle erstellten Abfragen ausf\xfchrt und die Ergebnisse auf der Konsole ausgibt")),(0,l.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,l.kt)("img",{src:i}),(0,l.kt)("h2",{id:"hinweis-zur-klasse-console"},"Hinweis zur Klasse Console"),(0,l.kt)("p",null,"Konsolen, die aktuell noch verkauft werden, besitzen bei der Lebensspanne den Wert ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," (Stand: 14.06.2023)"),(0,l.kt)("h2",{id:"hinweise-zur-klasse-queries"},"Hinweise zur Klasse Queries"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"List<String> getAllCurrentConsoleNames()")," soll die Namen aller Konsolen, die aktuell noch verkauft werden zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"Nintendo Switch, PlayStation 4, XBox One"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"List<VideoGameConsole> getAllConsolesSortedByLifespan()")," soll alle Konsolen absteigend sortiert nach der Lebensspanne zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"VideoGameConsole","[","title=Nintendo Wii, maker=NINTENDO, lifespan=13, soldUnits=101.63]"),",...)"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean isAnyConsoleWithMoreThan150MillionSoldUnits()")," soll die Antwort auf die Frage, ob es eine Konsole mit mehr als 150 Millionen verkauften Einheiten gibt, zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"true"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean isAllConsolesWithMoreThan50MillionSoldUnits()")," soll die Antwort auf die Frage, ob von allen Konsolen mehr als 50 Millionen Einheiten verkauft wurden, zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"false"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"long getNumberOfConsolesFromNintendo()")," soll die Anzahl der Konsolen von Nintendo zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"8"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"List<String> getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()")," soll die Namen aller Konsolen, die nicht mehr verkauft werden sowie die Anzahl verkaufter Einheiten pro Jahr in Millionen zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"PlayStation 2 (13.225)"),",...)"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"OptionalDouble getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()")," soll den Durchschnitt verkaufter Einheiten pro Jahr in Millionen aller Konsolen, die nicht mehr verkauft werden zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"9.900365412365412"),")"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"Map<Maker, List<VideogameConsole>> getAllConsolesByMaker()")," soll alle Konsolen gruppiert nach den Herstellern zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"MICROSOFT: ","[","VideoGameConsole","[","title=XBox 360, maker=MICROSOFT, lifespan=12, soldUnitsInMillions=85.81]"),",...],...)"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"Map<Maker, Double> getTotalSoldUnitsInMillionsPerMaker()")," soll die Anzahl verkaufter Einheiten pro Hersteller in Millionen zur\xfcckgeben (",(0,l.kt)("em",{parentName:"li"},"MICROSOFT: 137.07"),",...)")),(0,l.kt)(r.Z,{pullRequest:"71",branchSuffix:"stream-api/01",mdxType:"Exercise"}))}h.isMDXComponent=!0}}]);