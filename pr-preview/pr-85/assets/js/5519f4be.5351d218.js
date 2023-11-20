"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8759],{8994:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=t(85893),r=t(11151),s=t(85521);const i={title:"JavaAPI01",description:""},l=void 0,u={id:"exercises/java-api/java-api01",title:"JavaAPI01",description:"",source:"@site/docs/exercises/java-api/java-api01.mdx",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/java-api01",permalink:"/java-docs/pr-preview/pr-85/exercises/java-api/java-api01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api01.mdx",tags:[],version:"current",frontMatter:{title:"JavaAPI01",description:""},sidebar:"exercisesSidebar",previous:{title:"Die Java API",permalink:"/java-docs/pr-preview/pr-85/exercises/java-api/"},next:{title:"JavaAPI02",permalink:"/java-docs/pr-preview/pr-85/exercises/java-api/java-api02"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den Sinus von 0.0 bis 1.0 in\nZehnerschritten tabellarisch auf der Konsole ausgibt."}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"x = 0.0, sin(x) = 0.0\nx = 0.1, sin(x) = 0.1\nx = 0.2, sin(x) = 0.2\nx = 0.3, sin(x) = 0.3\nx = 0.4, sin(x) = 0.4\nx = 0.5, sin(x) = 0.5\nx = 0.6, sin(x) = 0.6\nx = 0.7, sin(x) = 0.6\nx = 0.8, sin(x) = 0.7\nx = 0.9, sin(x) = 0.8\nx = 1.0, sin(x) = 0.8\n"})}),"\n",(0,n.jsx)(s.Z,{pullRequest:"30",branchSuffix:"java-api/01"})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>i});t(67294);var n=t(34334);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:a,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(67294),r=t(34334),s=t(12466),i=t(16550),l=t(20469),u=t(91980),o=t(67392),c=t(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[o,d]=b({queryString:t,groupId:r}),[v,x]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=o??v;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function g(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const a=e.currentTarget,t=u.indexOf(a),r=l[t].value;r!==n&&(o(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function w(e){const a=v(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(g,{...e,...a}),(0,m.jsx)(j,{...e,...a})]})}function y(e){const a=(0,x.Z)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(a))}},85521:(e,a,t)=>{t.d(a,{Z:()=>u});t(67294);var n=t(74866),r=t(85162),s=t(39960),i=t(9286),l=t(85893);function u(e){let{pullRequest:a,branchSuffix:t}=e;return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${t}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${t}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);