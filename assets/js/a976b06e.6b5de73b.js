"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1115],{5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7462),a=r(7294),l=r(6010),s=r(2466),o=r(6775),u=r(1980),i=r(7392),c=r(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=b({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),h=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var h=r(2389);const v="tabList__CuJ",g="tabItem_LNqP";function E(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==o&&(p(t),u(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":o===t})}),r??t)})))}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v)},a.createElement(E,(0,n.Z)({},e,t)),a.createElement(x,(0,n.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},7833:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),a=r(4866),l=r(5162),s=r(9960),o=r(814);function u(e){let{pullRequest:t,branchSuffix:r}=e;return n.createElement(a.Z,null,n.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(o.Z,{language:"console"},`git switch exercises/${r}`),n.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"solution",label:"Solution"},n.createElement(o.Z,{language:"console"},`git switch solutions/${r}`),n.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},5300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),l=r(7833);const s={title:"Loops02",description:""},o=void 0,u={unversionedId:"exercises/control-structures/loops02",id:"exercises/control-structures/loops02",title:"Loops02",description:"",source:"@site/docs/exercises/control-structures/loops02.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops02",permalink:"/java-docs/exercises/control-structures/loops02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/control-structures/loops02.md",tags:[],version:"current",frontMatter:{title:"Loops02",description:""},sidebar:"exercisesSidebar",previous:{title:"Loops01",permalink:"/java-docs/exercises/control-structures/loops01"},next:{title:"Loops03",permalink:"/java-docs/exercises/control-structures/loops03"}},i={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche ermittelt, ob es sich bei einer\neingegebenen Zahl um eine Primzahl handelt oder nicht."),(0,a.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte eine ganze Zahl ein 13\nErgebnis: Die eingegebene Zahl ist eine Primzahl\n")),(0,a.kt)(l.Z,{pullRequest:"13",branchSuffix:"loops/02",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);