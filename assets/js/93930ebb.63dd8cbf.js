"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1051],{5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(7462),n=r(7294),s=r(6010),o=r(2466),l=r(6775),u=r(1980),i=r(7392),c=r(12);function p(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=d(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,i]=m({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=u??p;return b({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),f(e)}),[i,f,s]),tabValues:s}}var v=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==l&&(p(t),u(a))},b=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:d},o,{className:(0,s.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),r??t)})))}function E(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=f(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(E,(0,a.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return n.createElement(x,(0,a.Z)({key:String(t)},e))}},7833:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7294),n=r(4866),s=r(5162),o=r(9960),l=r(814);function u(e){let{pullRequest:t,branchSuffix:r}=e;return a.createElement(n.Z,null,a.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(l.Z,{language:"console"},`git switch exercises/${r}`),a.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(s.Z,{value:"solution",label:"Solution"},a.createElement(l.Z,{language:"console"},`git switch solutions/${r}`),a.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",a.createElement(o.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},3878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),s=r(7833);const o={title:"Operators01",description:""},l=void 0,u={unversionedId:"exercises/operators/operators01",id:"exercises/operators/operators01",title:"Operators01",description:"",source:"@site/docs/exercises/operators/operators01.md",sourceDirName:"exercises/operators",slug:"/exercises/operators/operators01",permalink:"/java-docs/exercises/operators/operators01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/operators/operators01.md",tags:[],version:"current",frontMatter:{title:"Operators01",description:""},sidebar:"exercisesSidebar",previous:{title:"Operatoren",permalink:"/java-docs/exercises/operators/"},next:{title:"Operators02",permalink:"/java-docs/exercises/operators/operators02"}},i={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c},d="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche den ganzzahligen Quotienten sowie den Divisionsrest einer Division auf der Konsole ausgibt."),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"a: 13\nb: 4\nGanzzahliger Quotient von a/b: 3\nDivisionsrest von a/b: 1\n")),(0,n.kt)(s.Z,{pullRequest:"4",branchSuffix:"operators/01",mdxType:"Exercise"}))}b.isMDXComponent=!0}}]);