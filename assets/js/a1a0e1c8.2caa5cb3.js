"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2023],{5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(4334);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(7462),r=t(7294),i=t(4334),l=t(2466),s=t(6775),o=t(1980),u=t(7392),c=t(12);function d(e){return function(e){var n;return(null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[o,u]=g({queryString:t,groupId:a}),[d,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=o??d;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var b=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(d(n),o(a))},p=e=>{var n;let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,i.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function E(e){const n=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function S(e){const n=(0,b.Z)();return r.createElement(E,(0,a.Z)({key:String(n)},e))}},7833:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(4866),i=t(5162),l=t(9960),s=t(614);function o(e){let{pullRequest:n,branchSuffix:t}=e;return a.createElement(r.Z,null,a.createElement(i.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(s.Z,{language:"console"},`git switch exercises/${t}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(i.Z,{value:"solution",label:"Solution"},a.createElement(s.Z,{language:"console"},`git switch solutions/${t}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(i.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",a.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`},"PR#",n)))}},2507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),i=t(7833);const l={title:"Interfaces01",description:""},s=void 0,o={unversionedId:"exercises/interfaces/interfaces01",id:"exercises/interfaces/interfaces01",title:"Interfaces01",description:"",source:"@site/docs/exercises/interfaces/interfaces01.md",sourceDirName:"exercises/interfaces",slug:"/exercises/interfaces/interfaces01",permalink:"/java-docs/exercises/interfaces/interfaces01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/interfaces/interfaces01.md",tags:[],version:"current",frontMatter:{title:"Interfaces01",description:""},sidebar:"exercisesSidebar",previous:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/exercises/interfaces/"},next:{title:"Komparatoren",permalink:"/java-docs/exercises/comparators/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse TravelAgency",id:"hinweise-zur-klasse-travelagency",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Rental")," aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/java-docs/exercises/abstract-and-final/abstract-and-final01"},"Abstract and Final 01")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"TravelAgency")," sowie die\nSchnittstelle ",(0,r.kt)("inlineCode",{parentName:"li"},"Partner")),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/java-docs/exercises/abstract-and-final/abstract-and-final01"},"Abstract and Final 01"),") so an, dass ein Reiseb\xfcro\nerzeugt wird, dass diesem die Autovermietung hinzugef\xfcgt wird und dass alle\nAttribute des Reiseb\xfcros ausgegeben werden")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("mermaid",{value:"classDiagram\n    Vehicle <|-- Car\n    Vehicle <|-- Truck\n    Vehicle o-- Engine\n    Rental o-- Vehicle\n    Partner <|.. Rental\n    TravelAgency o-- Partner\n\n    class Vehicle {\n        <<abstract>>\n        -make String\n        -model String\n        -engine Engine\n        #speed double\n        -numberOfVehicles int$\n        +Vehicle(make String, model String, engine Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeed() double\n        +accelerate(value int) void\n        +brake(value int) void\n        +print()* void\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description String\n    }\n\n    class Car {\n        -seats int\n        +Car(make String, model String, engine Engine, seats int)\n        +getSeats() int\n        +doATurboBoost() void\n        +print() void\n    }\n\n    class Truck {\n        -cargo int\n        -isTransformed boolean\n        +Truck(make String, model String, engine Engine, cargo int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +print() void\n    }\n\n    class Rental {\n        -name String\n        -vehicles ArrayList~Vehicle~\n        +Rental(name String)\n        +addVehicle(vehicle Vehicle) void\n        +addAllVehicles(vehicles Vehicle...) void\n        +transformAllTrucks() void\n        +print() void\n    }\n\n    class Partner {\n        <<interface>>\n        +print() void\n    }\n\n    class TravelAgency {\n        -name String\n        -partners ArrayList~Partner~\n        +TravelAgency(name String)\n        +addPartner(partner Partner) void\n        +print() void\n    }"}),(0,r.kt)("h2",{id:"hinweise-zur-klasse-travelagency"},"Hinweise zur Klasse TravelAgency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addPartner(partner: Partner)")," soll dem Reiseb\xfcro einen Partner\nhinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Reiseb\xfcro Schmidt\nUnsere Partner:\nFahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n")),(0,r.kt)(i.Z,{pullRequest:"46",branchSuffix:"interfaces/01",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);