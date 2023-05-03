"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9022],{5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(7462),n=r(7294),l=r(6010),s=r(2466),u=r(6775),o=r(1980),i=r(7392),c=r(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,i]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),h=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var h=r(2389);const v="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:u,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==u&&(d(t),o(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":u===t})}),r??t)})))}function E(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(E,(0,a.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},7833:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(4866),l=r(5162),s=r(9960),u=r(814);function o(e){let{pullRequest:t,branchSuffix:r}=e;return a.createElement(n.Z,null,a.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(u.Z,{language:"console"},`git switch exercises/${r}`),a.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"solution",label:"Solution"},a.createElement(u.Z,{language:"console"},`git switch solutions/${r}`),a.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",a.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),l=r(7833);const s={title:"Cases03",description:""},u=void 0,o={unversionedId:"exercises/control-structures/cases03",id:"exercises/control-structures/cases03",title:"Cases03",description:"",source:"@site/docs/exercises/control-structures/cases03.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/cases03",permalink:"/java-docs/exercises/control-structures/cases03",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/control-structures/cases03.md",tags:[],version:"current",frontMatter:{title:"Cases03",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases02",permalink:"/java-docs/exercises/control-structures/cases02"},next:{title:"Cases04",permalink:"/java-docs/exercises/control-structures/cases04"}},i={},c=[{value:"Regelwerk",id:"regelwerk",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche den Vornamen, den Nachnamen, das Alter\nsowie das Geschlecht einer Person einliest und je nach Fall eine andere\nBegr\xfc\xdfungsformel anzeigt."),(0,n.kt)("h2",{id:"regelwerk"},"Regelwerk"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Hallo Herr Nachname" f\xfcr M\xe4nner ab 18'),(0,n.kt)("li",{parentName:"ul"},'"Hallo Frau Nachname" f\xfcr Frauen ab 18'),(0,n.kt)("li",{parentName:"ul"},'"Hallo Vorname" f\xfcr Kinder, Jugendliche unter 18 und Diverse')),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte den Vornamen ein: Peter\nGib bitte den Nachnamen ein: M\xfcller\nGib bitte das Alter ein: 60\nGib bitte das Geschlecht ein (m, w, d): m\nHallo Herr M\xfcller\n")),(0,n.kt)(l.Z,{pullRequest:"9",branchSuffix:"cases/03",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);