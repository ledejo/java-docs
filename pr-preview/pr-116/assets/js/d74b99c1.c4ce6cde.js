"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9094],{21246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(85893),a=r(11151),l=r(85521);const i={title:"Polymorphy02",description:""},s=void 0,o={id:"exercises/polymorphy/polymorphy02",title:"Polymorphy02",description:"",source:"@site/docs/exercises/polymorphy/polymorphy02.mdx",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy02",permalink:"/java-docs/pr-preview/pr-116/exercises/polymorphy/polymorphy02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy02.mdx",tags:[],version:"current",frontMatter:{title:"Polymorphy02",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy01",permalink:"/java-docs/pr-preview/pr-116/exercises/polymorphy/polymorphy01"},next:{title:"Polymorphy03",permalink:"/java-docs/pr-preview/pr-116/exercises/polymorphy/polymorphy03"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Rental</em>",id:"hinweise-zur-klasse-rental",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,t.jsx)(n.code,{children:"Rental"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,t.jsx)(n.a,{href:"polymorphy01",children:"Polymorphy01"})," so\nan, dass alle erzeugten Autos und Lastwagen in einer Fahrzeugvermietung\nabgelegt und alle Attribute der Fahrzeugvermietung ausgegeben werden"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car\n    Vehicle <|-- Truck\n    Vehicle o-- Engine\n    Rental o-- Vehicle\n\n    class Vehicle {\n        -make: String &#123final&#125\n        -model: String &#123final&#125\n        -engine: Engine &#123final&#125\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make: String, model: String, engine: Engine)\n        +make() String\n        +model() String\n        +engine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void\n        +brake(valueInKmh: int) void\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String &#123final&#125\n    }\n\n    class Car {\n        -seats: int &#123final&#125\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +seats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        -cargo: int &#123final&#125\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +cargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String &#123final&#125\n        -vehicles: ArrayList~Vehicle~ &#123final&#125\n        +Rental(name: String)\n        +name() String\n        +vehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +toString() String\n    }"}),"\n",(0,t.jsxs)(n.h2,{id:"hinweise-zur-klasse-rental",children:["Hinweise zur Klasse ",(0,t.jsx)(n.em,{children:"Rental"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void addVehicle(vehicle: Vehicle)"})," soll der Fahrzeugvermietung\nein Fahrzeug hinzuf\xfcgen"]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void addAllVehicles(vehicles: Vehicle...)"})," soll der\nFahrzeugvermietung mehrere Fahrzeug hinzuf\xfcgen"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Fahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n"})}),"\n",(0,t.jsx)(l.Z,{pullRequest:"42",branchSuffix:"polymorphy/02"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(90512);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>S});var t=r(67294),a=r(90512),l=r(12466),i=r(16550),s=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:r,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=u??g;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function y(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=s[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function S(e){const n=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},85521:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(74866),a=r(85162),l=r(33692),i=r(9286),s=r(85893);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(i.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(i.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);