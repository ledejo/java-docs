"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9927],{5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),s=t(4334);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(l.tabItem,r),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(7462),s=t(7294),l=t(4334),r=t(2466),i=t(6775),u=t(1980),o=t(7392),c=t(12);function d(e){return function(e){var a;return(null==(a=s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:s}}=e;return{value:a,label:t,attributes:n,default:s}}))}function m(e){const{values:a,children:t}=e;return(0,s.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(l),(0,s.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=m(e),[r,i]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[u,o]=g({queryString:t,groupId:n}),[d,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Nk)(t);return[n,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),b=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,s.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),h(e)}),[o,h,l]),tabValues:l}}var b=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=o[t].value;n!==i&&(d(a),u(n))},p=e=>{var a;let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}null==(a=t)||a.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},o.map((e=>{let{value:a,label:t,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:p,onClick:m},r,{className:(0,l.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===a})}),t??a)})))}function k(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=h(e);return s.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},s.createElement(f,(0,n.Z)({},e,a)),s.createElement(k,(0,n.Z)({},e,a)))}function y(e){const a=(0,b.Z)();return s.createElement(w,(0,n.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(7294),s=t(4866),l=t(5162),r=t(9960),i=t(614);function u(e){let{pullRequest:a,branchSuffix:t}=e;return n.createElement(s.Z,null,n.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(i.Z,{language:"console"},`git switch exercises/${t}`),n.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"solution",label:"Solution"},n.createElement(i.Z,{language:"console"},`git switch solutions/${t}`),n.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},7760:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),l=t(7833);const r={title:"ClassDiagrams02",description:""},i=void 0,u={unversionedId:"exercises/uml/class-diagrams02",id:"exercises/uml/class-diagrams02",title:"ClassDiagrams02",description:"",source:"@site/docs/exercises/uml/class-diagrams02.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams02",permalink:"/java-docs/exercises/uml/class-diagrams02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/uml/class-diagrams02.md",tags:[],version:"current",frontMatter:{title:"ClassDiagrams02",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams01",permalink:"/java-docs/exercises/uml/class-diagrams01"},next:{title:"ClassDiagrams03",permalink:"/java-docs/exercises/uml/class-diagrams03"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Player",id:"hinweis-zur-klasse-player",level:2},{value:"Hinweise zur Klasse DiceGame",id:"hinweise-zur-klasse-dicegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},m="wrapper";function p(e){let{components:a,...t}=e;return(0,s.kt)(m,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,s.kt)("inlineCode",{parentName:"li"},"Player")," aus \xdcbungsaufgabe\n",(0,s.kt)("a",{parentName:"li",href:"/java-docs/exercises/uml/class-diagrams01"},"ClassDiagrams01")," anhand des abgebildeten Klassendiagramms\nan und erstelle die Klasse ",(0,s.kt)("inlineCode",{parentName:"li"},"DiceGame")),(0,s.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche beliebig vielen Spielern erm\xf6glicht,\nabwechselnd mit 3 W\xfcrfeln zu w\xfcrfeln. F\xfcr jedes gew\xfcrfelte Auge bekommt der\njeweilige Spieler einen Punkt. Ziel des Spieles ist es, so nah wie m\xf6glich an\n50 Punkte heranzukommen, ohne allerdings die 50 Punkte zu \xfcberschreiten")),(0,s.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,s.kt)("mermaid",{value:"classDiagram\n    DiceGame o-- Dice\n    DiceGame o-- Player\n    DiceGame o-- DiceCup\n\n    class Player {\n        -name String\n        -score int\n        -isActive boolean\n        +Player(name String)\n        +getName() String\n        +getScore() int\n        +setScore(int score) void\n        +isActive() boolean\n        +setActive(isActive boolean) void\n    } \n\n    class Dice {\n        -id int\n        -value int\n        +Dice(id int)\n        +getId() int\n        +getValue() int\n        +rollTheDice() void\n    }\n\n    class DiceCup {\n        +rollTheDices(dices Dice...) void\n    }\n\n    class DiceGame {\n        -diceCup DiceCup\n        -dices ArrayList~Dice~\n        -players ArrayList~Player~\n        -scanner Scanner\n        +DiceGame(players ArrayList~Player~)\n        +start() void\n        +move(player Player) void\n    }"}),(0,s.kt)("h2",{id:"hinweis-zur-klasse-player"},"Hinweis zur Klasse Player"),(0,s.kt)("p",null,"Passe den Konstruktor so an, dass auch weiterhin alle Attribute initialisiert\nwerden."),(0,s.kt)("h2",{id:"hinweise-zur-klasse-dicegame"},"Hinweise zur Klasse DiceGame"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,s.kt)("li",{parentName:"ul"},"Die Methode ",(0,s.kt)("inlineCode",{parentName:"li"},"void start()")," soll die Spieler abwechselnd einen Spielzug\nmachen lassen und am Ende den Sieger des Spiels auf der Konsole ausgeben"),(0,s.kt)("li",{parentName:"ul"},"Die Methode ",(0,s.kt)("inlineCode",{parentName:"li"},"void move(player: Player)")," soll es dem Spieler erm\xf6glichen zu w\xfcrfeln,\nbzw. seinen Spielzug zu beenden")),(0,s.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 8 Punkte\nHans hat insgesamt 8 Punkte\n\u2026\nHans hat aktuell 43 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: false\nLisa hat aktuell 41 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 10 Punkte\nLisa hat insgesamt 51 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 43 Punkte\n")),(0,s.kt)(l.Z,{pullRequest:"37",branchSuffix:"class-diagrams/02",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);