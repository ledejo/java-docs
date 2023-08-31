"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2023],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),i=a(6775),u=a(1980),o=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,o]=f({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=u??d;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),b(e)}),[o,b,s]),tabValues:s}}var g=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=o[a].value;n!==i&&(d(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(4866),s=a(5162),l=a(9960),i=a(614);function u(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(r.Z,null,n.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(i.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"solution",label:"Solution"},n.createElement(i.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},2507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),s=a(7833);const l={title:"Interfaces01",description:""},i=void 0,u={unversionedId:"exercises/interfaces/interfaces01",id:"exercises/interfaces/interfaces01",title:"Interfaces01",description:"",source:"@site/docs/exercises/interfaces/interfaces01.md",sourceDirName:"exercises/interfaces",slug:"/exercises/interfaces/interfaces01",permalink:"/java-docs/exercises/interfaces/interfaces01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/interfaces/interfaces01.md",tags:[],version:"current",frontMatter:{title:"Interfaces01",description:""},sidebar:"exercisesSidebar",previous:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/exercises/interfaces/"},next:{title:"Komparatoren",permalink:"/java-docs/exercises/comparators/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse TravelAgency",id:"hinweise-zur-klasse-travelagency",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Rental")," aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/java-docs/exercises/abstract-and-final/abstract-and-final01"},"Abstract and Final 01")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"TravelAgency")," sowie die\nSchnittstelle ",(0,r.kt)("inlineCode",{parentName:"li"},"Partner")),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/java-docs/exercises/abstract-and-final/abstract-and-final01"},"Abstract and Final 01"),") so an, dass ein Reiseb\xfcro\nerzeugt wird, dass diesem die Autovermietung hinzugef\xfcgt wird und dass alle\nAttribute des Reiseb\xfcros ausgegeben werden")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209157029-141cc0aa-a425-4e36-a79b-34f6188fa223.png",alt:"image"})),(0,r.kt)("h2",{id:"hinweise-zur-klasse-travelagency"},"Hinweise zur Klasse TravelAgency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addPartner(partner: Partner)")," soll dem Reiseb\xfcro einen Partner\nhinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Reiseb\xfcro Schmidt\nUnsere Partner:\nFahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n")),(0,r.kt)(s.Z,{pullRequest:"46",branchSuffix:"interfaces/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);