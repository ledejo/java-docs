"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2026],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),i=a(6010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(n,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(7462),i=a(7294),n=a(6010),s=a(2466),l=a(6775),u=a(1980),o=a(7392),c=a(12);function m(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:i}}=e;return{value:t,label:a,attributes:r,default:i}}))}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=d(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[u,o]=v({queryString:a,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(a);return[r,(0,i.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),b=(()=>{const e=u??m;return p({value:e,tabValues:n})?e:null})();(0,i.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),g(e)}),[o,g,n]),tabValues:n}}var b=a(2389);const f="tabList__CuJ",h="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==l&&(m(t),u(r))},p=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},s,{className:(0,n.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=g(e);return i.createElement("div",{className:(0,n.Z)("tabs-container",f)},i.createElement(k,(0,r.Z)({},e,t)),i.createElement(y,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return i.createElement(E,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),i=a(4866),n=a(5162),s=a(9960),l=a(814);function u(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(i.Z,null,r.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(l.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(n.Z,{value:"solution",label:"Solution"},r.createElement(l.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",r.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=a(7462),i=(a(7294),a(3905)),n=a(7833);const s={title:"ActivityDiagrams01",description:""},l=void 0,u={unversionedId:"exercises/uml/activity-diagrams01",id:"exercises/uml/activity-diagrams01",title:"ActivityDiagrams01",description:"",source:"@site/docs/exercises/uml/activity-diagrams01.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/activity-diagrams01",permalink:"/java-docs/exercises/uml/activity-diagrams01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/uml/activity-diagrams01.md",tags:[],version:"current",frontMatter:{title:"ActivityDiagrams01",description:""},sidebar:"exercisesSidebar",previous:{title:"Darstellung von Klassen und Programmabl\xe4ufen",permalink:"/java-docs/exercises/uml/"},next:{title:"ClassDiagrams01",permalink:"/java-docs/exercises/uml/class-diagrams01"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t main",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-main",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t move",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-move",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t play",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-play",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Erstelle die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"MainClass")," anhand des abgebildeten Klassendiagramms sowie den abgebildeten Aktivit\xe4tsdiagrammen."),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/235862155-d542ea65-c2c9-4c97-a8c0-765fe05a8767.png",alt:"image"})),(0,i.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-main"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t main"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209174497-a0de686c-04e0-4d8f-b0c9-6e1d6b7c9557.png",alt:"image"})),(0,i.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-move"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t move"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/235862326-cd1ab75f-5a9d-43fd-962d-6ae134211c88.png",alt:"image"})),(0,i.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-play"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t play"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209174541-bab788f7-7fb2-42f2-8b0f-269db393a8c0.png",alt:"image"})),(0,i.kt)(n.Z,{pullRequest:"35",branchSuffix:"activity-diagrams/01",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);