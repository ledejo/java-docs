"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7855],{515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(85893),a=r(11151),s=r(85521);const l={title:"Lambdas03",description:""},i=void 0,u={id:"exercises/lambdas/lambdas03",title:"Lambdas03",description:"",source:"@site/docs/exercises/lambdas/lambdas03.mdx",sourceDirName:"exercises/lambdas",slug:"/exercises/lambdas/lambdas03",permalink:"/java-docs/pr-preview/pr-85/exercises/lambdas/lambdas03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas03.mdx",tags:[],version:"current",frontMatter:{title:"Lambdas03",description:""},sidebar:"exercisesSidebar",previous:{title:"Lambdas02",permalink:"/java-docs/pr-preview/pr-85/exercises/lambdas/lambdas02"},next:{title:"Lambdas04",permalink:"/java-docs/pr-preview/pr-85/exercises/lambdas/lambdas04"}},o={},c=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Passe die gegebene Klasse ",(0,n.jsx)(t.code,{children:"FilteredStudents"})," so an, dass Verwender der Klasse\nselber entscheiden k\xf6nnen, wie die Liste der Studenten verarbeitet wird.\nErsetze hierzu die Methode ",(0,n.jsx)(t.code,{children:"void printStudents()"})," durch die Methode\n",(0,n.jsx)(t.code,{children:"void forEach(consumer: Consumer<Student>)"}),". Implementiere in der Methode eine\nfor-each-Schleife, in der f\xfcr jeden Studenten die Methode ",(0,n.jsx)(t.code,{children:"void accept(t: T)"}),"\ndes eingehenden Verwenders aufgerufen wird"]}),"\n",(0,n.jsxs)(t.li,{children:["Passe die gegebene Klasse ",(0,n.jsx)(t.code,{children:"Exercise"})," so an, dass erwachsende Studenten in\nGro\xdfbuchstaben und jugendliche Studenten in Kleinbuchstaben auf der Konsole\nausgegeben werden"]}),"\n"]}),"\n",(0,n.jsx)(s.Z,{pullRequest:"69",branchSuffix:"lambdas/03"})]})}function b(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var n=r(34334);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(34334),s=r(12466),l=r(16550),i=r(20469),u=r(91980),o=r(67392),c=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=b(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,d]=h({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=o??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,r)=>{r.d(t,{Z:()=>u});r(67294);var n=r(74866),a=r(85162),s=r(39960),l=r(9286),i=r(85893);function u(e){let{pullRequest:t,branchSuffix:r}=e;return(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);