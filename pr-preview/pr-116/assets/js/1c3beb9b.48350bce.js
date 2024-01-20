"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9263],{77877:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var t=a(85893),r=a(11151),i=a(85521);const s={title:"AbstractAndFinal01",description:""},l=void 0,o={id:"exercises/abstract-and-final/abstract-and-final01",title:"AbstractAndFinal01",description:"",source:"@site/docs/exercises/abstract-and-final/abstract-and-final01.mdx",sourceDirName:"exercises/abstract-and-final",slug:"/exercises/abstract-and-final/abstract-and-final01",permalink:"/java-docs/pr-preview/pr-116/exercises/abstract-and-final/abstract-and-final01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/abstract-and-final/abstract-and-final01.mdx",tags:[],version:"current",frontMatter:{title:"AbstractAndFinal01",description:""},sidebar:"exercisesSidebar",previous:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/java-docs/pr-preview/pr-116/exercises/abstract-and-final/"},next:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/pr-preview/pr-116/exercises/interfaces/"}},c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Passe die Klassen ",(0,t.jsx)(n.code,{children:"Vehicle"}),", ",(0,t.jsx)(n.code,{children:"Car"})," und ",(0,t.jsx)(n.code,{children:"Truck"})," aus \xdcbungsaufgabe\n",(0,t.jsx)(n.a,{href:"../polymorphy/polymorphy03",children:"Polymorphy03"})," anhand des abgebildeten\nKlassendiagramms an."]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car\n    Vehicle <|-- Truck\n    Vehicle o-- Engine\n    Rental o-- Vehicle\n\n    class Vehicle {\n        <<abstract>>\n        -make: String &#123final&#125\n        -model: String &#123final&#125\n        -engine: Engine &#123final&#125\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make String, model String, engine Engine)\n        +make() String\n        +model() String\n        +engine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void &#123final&#125\n        +brake(valueInKmh: int) void &#123final&#125\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String &#123final&#125\n    }\n\n    class Car {\n        <<final>>\n        -seats: int &#123final&#125\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +seats() int\n        +doATurboBoost() void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Truck {\n        <<final>>\n        -cargo: int &#123final&#125\n        -isTransformed boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +cargo() int\n        +isTransformed() boolean\n        +transform() void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Rental {\n        -name: String &#123final&#125\n        -vehicles: ArrayList~Vehicle~ &#123final&#125\n        +Rental(name: String)\n        +name() String\n        +vehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }"}),"\n",(0,t.jsx)(i.Z,{pullRequest:"45",branchSuffix:"abstract-and-final/01"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>s});a(67294);var t=a(90512);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function s(e){let{children:n,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(67294),r=a(90512),i=a(12466),s=a(16550),l=a(20469),o=a(91980),c=a(67392),u=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function b(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=h(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:a,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),g=(()=>{const e=c??f;return b({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function x(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=l[a].value;r!==t&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(n))}},85521:(e,n,a)=>{a.d(n,{Z:()=>o});a(67294);var t=a(74866),r=a(85162),i=a(33692),s=a(9286),l=a(85893);function o(e){let{pullRequest:n,branchSuffix:a}=e;return(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(s.Z,{language:"console",children:`git switch exercises/${a}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(s.Z,{language:"console",children:`git switch solutions/${a}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);