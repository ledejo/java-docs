"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3309],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4334);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),r=n(7294),l=n(4334),o=n(2466),s=n(6775),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},7833:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4866),l=n(5162),o=n(9960),s=n(614);function i(e){let{pullRequest:t,branchSuffix:n}=e;return a.createElement(r.Z,null,a.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(s.Z,{language:"console"},`git switch exercises/${n}`),a.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"solution",label:"Solution"},a.createElement(s.Z,{language:"console"},`git switch solutions/${n}`),a.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",a.createElement(o.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},8091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(7833);const o={title:"Maps02",description:""},s=void 0,i={unversionedId:"exercises/maps/maps02",id:"exercises/maps/maps02",title:"Maps02",description:"",source:"@site/docs/exercises/maps/maps02.md",sourceDirName:"exercises/maps",slug:"/exercises/maps/maps02",permalink:"/java-docs/exercises/maps/maps02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps02.md",tags:[],version:"current",frontMatter:{title:"Maps02",description:""},sidebar:"exercisesSidebar",previous:{title:"Maps01",permalink:"/java-docs/exercises/maps/maps01"},next:{title:"Optionals",permalink:"/java-docs/exercises/optionals/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse BookCollection",id:"hinweise-zur-klasse-bookcollection",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,r.kt)("inlineCode",{parentName:"li"},"Author"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"BookCollection")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"DuplicateKeyException")," anhand des abgebildeten Klassendiagramms"),(0,r.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche eine B\xfcchersammlung mit mehreren Autoren und B\xfcchern erzeugt und den flei\xdfigsten Autoren auf der Konsole ausgibt")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("mermaid",{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n\n    class Author {\n        <<record>>\n        -name String\n    }\n\n    class Book {\n        <<record>>\n        -title String\n    }\n\n    class BookCollection {\n        <<record>>\n        -collection Map~Author&#44&#160List~Book~~\n        +addAuthor(author Author) void\n        +addBook(author Author, book Book) void\n        +getMostDiligentAuthor() Author\n        +getBookByTitle(title String) Book\n    }"}),(0,r.kt)("h2",{id:"hinweise-zur-klasse-bookcollection"},"Hinweise zur Klasse BookCollection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addAuthor(author: Author)")," soll den eingehenden Autor der B\xfcchersammlung hinzuf\xfcgen. F\xfcr den Fall, dass der Autor bereits in der B\xfcchersammlung\nvorhanden ist, soll die Ausnahme ",(0,r.kt)("inlineCode",{parentName:"li"},"DuplicateKeyException")," ausgel\xf6st werden"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addBook(author: Author, book: Book)")," soll das eingehende Buch der B\xfcchersammlung hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Author getMostDiligentAuthor()")," soll den Autoren mit den meisten B\xfcchern in der B\xfcchersammlung zur\xfcckgeben"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Book getBookByTitle(title: String)")," soll das Buch zum eingehenden Buchtitel zur\xfcckgeben")),(0,r.kt)(l.Z,{pullRequest:"66",branchSuffix:"maps/02",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);