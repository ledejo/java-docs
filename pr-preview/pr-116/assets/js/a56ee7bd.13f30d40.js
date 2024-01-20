"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4522],{42540:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>u,toc:()=>o});var n=s(85893),r=s(11151),i=s(85521);const t={title:"ClassDiagrams02",description:""},l=void 0,u={id:"exercises/class-diagrams/class-diagrams02",title:"ClassDiagrams02",description:"",source:"@site/docs/exercises/class-diagrams/class-diagrams02.mdx",sourceDirName:"exercises/class-diagrams",slug:"/exercises/class-diagrams/class-diagrams02",permalink:"/java-docs/pr-preview/pr-116/exercises/class-diagrams/class-diagrams02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams02.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams02",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams01",permalink:"/java-docs/pr-preview/pr-116/exercises/class-diagrams/class-diagrams01"},next:{title:"ClassDiagrams03",permalink:"/java-docs/pr-preview/pr-116/exercises/class-diagrams/class-diagrams03"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Hinweise zur Klasse <em>DiceGame</em>",id:"hinweise-zur-klasse-dicegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Passe die Klasse ",(0,n.jsx)(a.code,{children:"Player"})," aus \xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"class-diagrams01",children:"ClassDiagrams01"})," anhand des abgebildeten Klassendiagramms\nan und erstelle die Klasse ",(0,n.jsx)(a.code,{children:"DiceGame"})]}),"\n",(0,n.jsx)(a.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche beliebig vielen Spielern erm\xf6glicht,\nabwechselnd mit 3 W\xfcrfeln zu w\xfcrfeln. F\xfcr jedes gew\xfcrfelte Auge bekommt der\njeweilige Spieler einen Punkt. Ziel des Spieles ist es, so nah wie m\xf6glich an\n50 Punkte heranzukommen, ohne allerdings die 50 Punkte zu \xfcberschreiten"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(a.mermaid,{value:"classDiagram\n    DiceGame o-- Dice\n    DiceGame o-- Player\n    DiceGame o-- DiceCup\n\n    class Player {\n        -name: String &#123final&#125\n        -score: int\n        -isActive: boolean\n        +Player(name: String)\n        +name() String\n        +getScore() int\n        +setScore(int: score) void\n        +isActive() boolean\n        +setActive(isActive: boolean) void\n    }\n\n    class Dice {\n        -id: int &#123final&#125\n        -value: int\n        +Dice(id: int)\n        +id() int\n        +getValue() int\n        +rollTheDice() void\n    }\n\n    class DiceCup {\n        +rollTheDices(dices: Dice...) void\n    }\n\n    class DiceGame {\n        -diceCup: DiceCup &#123final&#125\n        -dices: ArrayList~Dice~ &#123final&#125\n        -players: ArrayList~Player~ &#123final&#125\n        -scanner: Scanner &#123final&#125\n        +DiceGame(players: ArrayList~Player~)\n        +start() void\n        +move(player: Player) void\n    }"}),"\n",(0,n.jsxs)(a.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,n.jsx)(a.em,{children:"Player"})]}),"\n",(0,n.jsx)(a.p,{children:"Passe den Konstruktor so an, dass auch weiterhin alle Attribute initialisiert\nwerden."}),"\n",(0,n.jsxs)(a.h2,{id:"hinweise-zur-klasse-dicegame",children:["Hinweise zur Klasse ",(0,n.jsx)(a.em,{children:"DiceGame"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"void start()"})," soll die Spieler abwechselnd einen Spielzug machen\nlassen und am Ende den Sieger des Spiels auf der Konsole ausgeben"]}),"\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"void move(player: Player)"})," soll es dem Spieler erm\xf6glichen zu\nw\xfcrfeln, bzw. seinen Spielzug zu beenden"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 8 Punkte\nHans hat insgesamt 8 Punkte\n\u2026\nHans hat aktuell 43 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: false\nLisa hat aktuell 41 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 10 Punkte\nLisa hat insgesamt 51 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 43 Punkte\n"})}),"\n",(0,n.jsx)(i.Z,{pullRequest:"37",branchSuffix:"class-diagrams/02"})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,a,s)=>{s.d(a,{Z:()=>t});s(67294);var n=s(90512);const r={tabItem:"tabItem_Ymn6"};var i=s(85893);function t(e){let{children:a,hidden:s,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,t),hidden:s,children:a})}},74866:(e,a,s)=>{s.d(a,{Z:()=>k});var n=s(67294),r=s(90512),i=s(12466),t=s(16550),l=s(20469),u=s(91980),c=s(67392),o=s(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:s}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:s,attributes:n,default:r}}=e;return{value:a,label:s,attributes:n,default:r}}))}(s);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,s])}function m(e){let{value:a,tabValues:s}=e;return s.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:s}=e;const r=(0,t.k6)(),i=function(e){let{queryString:a=!1,groupId:s}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:a,groupId:s});return[(0,u._X)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})}),[i,r])]}function g(e){const{defaultValue:a,queryString:s=!1,groupId:r}=e,i=h(e),[t,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[c,d]=p({queryString:s,groupId:r}),[g,b]=function(e){let{groupId:a}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,i]=(0,o.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:t,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=s(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(85893);function x(e){let{className:a,block:s,selectedValue:n,selectValue:t,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),o=e=>{const a=e.currentTarget,s=u.indexOf(a),r=l[s].value;r!==n&&(c(a),t(r))},d=e=>{let a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;a=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;a=u[s]??u[u.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},a),children:l.map((e=>{let{value:a,label:s,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:d,onClick:o,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===a}),children:s??a},a)}))})}function j(e){let{lazy:a,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function w(e){const a=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...a}),(0,v.jsx)(j,{...e,...a})]})}function k(e){const a=(0,b.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(a))}},85521:(e,a,s)=>{s.d(a,{Z:()=>u});s(67294);var n=s(74866),r=s(85162),i=s(33692),t=s(9286),l=s(85893);function u(e){let{pullRequest:a,branchSuffix:s}=e;return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(t.Z,{language:"console",children:`git switch exercises/${s}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(t.Z,{language:"console",children:`git switch solutions/${s}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);