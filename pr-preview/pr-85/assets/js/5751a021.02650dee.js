"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7979],{24616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=a(85893),n=a(11151),s=a(85521);const u={title:"Arrays05",description:""},l=void 0,i={id:"exercises/arrays/arrays05",title:"Arrays05",description:"",source:"@site/docs/exercises/arrays/arrays05.mdx",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays05",permalink:"/java-docs/pr-preview/pr-85/exercises/arrays/arrays05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays05.mdx",tags:[],version:"current",frontMatter:{title:"Arrays05",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays04",permalink:"/java-docs/pr-preview/pr-85/exercises/arrays/arrays04"},next:{title:"Arrays06",permalink:"/java-docs/pr-preview/pr-85/exercises/arrays/arrays06"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche es erm\xf6glicht, Aufgaben hinzuzuf\xfcgen,\nzu l\xf6schen und auf der Konsole auszugeben."}),"\n",(0,r.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"Optionen\n1: Aufgabe hinzuf\xfcgen\n2: Aufgabe l\xf6schen\n3: Aufgaben ausgeben\n4: Beenden\n\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: W\xe4sche waschen\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: Hausaufgaben machen\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: W\xe4sche waschen\n1: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 2\nGib bitte ein, welche Aufgabe gel\xf6scht werden soll: 0\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 4\n"})}),"\n",(0,r.jsx)(s.Z,{pullRequest:"22",branchSuffix:"arrays/05"})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>u});a(67294);var r=a(34334);const n={tabItem:"tabItem_Ymn6"};var s=a(85893);function u(e){let{children:t,hidden:a,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,u),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(67294),n=a(34334),s=a(12466),u=a(16550),l=a(20469),i=a(91980),o=a(67392),c=a(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=h(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,d]=b({queryString:a,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),m=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function x(e){let{className:t,block:a,selectedValue:r,selectValue:u,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),n=l[a].value;n!==r&&(o(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},85521:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var r=a(74866),n=a(85162),s=a(39960),u=a(9286),l=a(85893);function i(e){let{pullRequest:t,branchSuffix:a}=e;return(0,l.jsxs)(r.Z,{children:[(0,l.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(u.Z,{language:"console",children:`git switch exercises/${a}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(u.Z,{language:"console",children:`git switch solutions/${a}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);