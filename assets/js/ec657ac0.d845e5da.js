"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5853],{5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(4334);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(7462),a=r(7294),s=r(4334),l=r(2466),o=r(6775),u=r(1980),i=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=d(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,i]=m({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=u??p;return b({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),h(e)}),[i,h,s]),tabValues:s}}var f=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==o&&(p(t),u(n))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:d},l,{className:(0,s.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":o===t})}),r??t)})))}function E(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(E,(0,n.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},7833:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),a=r(4866),s=r(5162),l=r(9960),o=r(614);function u(e){let{pullRequest:t,branchSuffix:r}=e;return n.createElement(a.Z,null,n.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(o.Z,{language:"console"},`git switch exercises/${r}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"solution",label:"Solution"},n.createElement(o.Z,{language:"console"},`git switch solutions/${r}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",n.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),s=r(7833);const l={title:"Loops05",description:""},o=void 0,u={unversionedId:"exercises/control-structures/loops05",id:"exercises/control-structures/loops05",title:"Loops05",description:"",source:"@site/docs/exercises/control-structures/loops05.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops05",permalink:"/java-docs/exercises/control-structures/loops05",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/control-structures/loops05.md",tags:[],version:"current",frontMatter:{title:"Loops05",description:""},sidebar:"exercisesSidebar",previous:{title:"Loops04",permalink:"/java-docs/exercises/control-structures/loops04"},next:{title:"Loops06",permalink:"/java-docs/exercises/control-structures/loops06"}},i={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c},d="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche es dem Anwender erm\xf6glicht, eine\nZufallszahl zwischen 1 und 100 zu erraten. Dazu soll er solange Zahlen\neingeben, bis er die gesuchte Zahl erraten hat oder das Spiel freiwillig\nbeendet."),(0,a.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte Deinen Tipp ein: 23\nLeider falsch, die gesuchte Zahl ist gr\xf6\xdfer\nM\xf6chtest Du nochmals raten (true, false)?: true\nGib bitte Deinen Tipp ein: 55\nLeider falsch, die gesuchte Zahl ist kleiner\nM\xf6chtest Du nochmals raten (true, false)?: true\nGib bitte Deinen Tipp eingeben: 47\nRichtig. Du hast 3 Versuche ben\xf6tigt\n")),(0,a.kt)(s.Z,{pullRequest:"14",branchSuffix:"loops/05",mdxType:"Exercise"}))}b.isMDXComponent=!0}}]);