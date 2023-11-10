"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7512],{30814:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=t(85893),s=t(11151),n=t(85521);const l={title:"Arrays02",description:""},i=void 0,u={id:"exercises/arrays/arrays02",title:"Arrays02",description:"",source:"@site/docs/exercises/arrays/arrays02.mdx",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays02",permalink:"/java-docs/pr-preview/pr-81/exercises/arrays/arrays02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays02.mdx",tags:[],version:"current",frontMatter:{title:"Arrays02",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays01",permalink:"/java-docs/pr-preview/pr-81/exercises/arrays/arrays01"},next:{title:"Arrays03",permalink:"/java-docs/pr-preview/pr-81/exercises/arrays/arrays03"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse zum Umdrehen von Feldern (d.h. das erste\nElement soll nach dem Umdrehen an letzter Position stehen, das letzte an erster\nPosition usw.)."}),"\n",(0,a.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-console",children:"Eingabe: 4 8 2 6 9 1\nAusgabe: 1 9 6 2 8 4\n"})}),"\n",(0,a.jsx)(n.Z,{pullRequest:"19",branchSuffix:"arrays/02"})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>l});t(67294);var a=t(34334);const s={tabItem:"tabItem_Ymn6"};var n=t(85893);function l(e){let{children:r,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,l),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>w});var a=t(67294),s=t(34334),n=t(12466),l=t(16550),i=t(20469),u=t(91980),o=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:s}}=e;return{value:r,label:t,attributes:a,default:s}}))}(t);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(n),(0,a.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(s.location.search);r.set(n,e),s.replace({...s.location,search:r.toString()})}),[n,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,n=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:n}))),[o,d]=b({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,n]=(0,c.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),v=(()=>{const e=o??f;return h({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,n]),tabValues:n}}var m=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:r,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.o5)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),s=i[t].value;s!==a&&(o(r),l(s))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...n,className:(0,s.Z)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:s}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=n.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=f(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...r}),(0,g.jsx)(j,{...e,...r})]})}function w(e){const r=(0,m.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(r))}},85521:(e,r,t)=>{t.d(r,{Z:()=>u});t(67294);var a=t(74866),s=t(85162),n=t(39960),l=t(9286),i=t(85893);function u(e){let{pullRequest:r,branchSuffix:t}=e;return(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);