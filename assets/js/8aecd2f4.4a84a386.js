"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1358],{49527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var l=n(85893),r=n(11151),s=n(74866),c=n(85162);const i={title:"DataObjects02",description:""},a=void 0,d={id:"exercises/data-objects/data-objects02",title:"DataObjects02",description:"",source:"@site/docs/exercises/data-objects/data-objects02.mdx",sourceDirName:"exercises/data-objects",slug:"/exercises/data-objects/data-objects02",permalink:"/java-docs/exercises/data-objects/data-objects02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/data-objects/data-objects02.mdx",tags:[],version:"current",frontMatter:{title:"DataObjects02",description:""},sidebar:"exercisesSidebar",previous:{title:"DataObjects01",permalink:"/java-docs/exercises/data-objects/data-objects01"},next:{title:"Operatoren",permalink:"/java-docs/exercises/operators/"}},o={},x=[{value:"Coding",id:"coding",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"}),"\n",(0,l.jsx)(t.h2,{id:"coding",children:"Coding"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'int a = 101;\nint b = 0b101;\nint c = 0x101;\nint d = 0xAFFE;\nint e = 128;\nbyte f = (byte) e;\ndouble g = 9.87654321;\nint h = (int) g;\n\nSystem.out.println("a: " + a);\nSystem.out.println("b: " + b);\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("f: " + f);\nSystem.out.println("h: " + h);\n'})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(c.Z,{value:"a",label:"a",default:!0,children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-console",children:"a: 101\n"})})}),(0,l.jsxs)(c.Z,{value:"b",label:"0b101",children:[(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"4"}),(0,l.jsx)(t.th,{children:"2"}),(0,l.jsx)(t.th,{children:"1"}),(0,l.jsx)(t.th,{})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"1"}),(0,l.jsx)(t.td,{children:"0"}),(0,l.jsx)(t.td,{children:"1"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.strong,{children:"5"})})]})})]}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-console",children:"b: 5\n"})})]}),(0,l.jsxs)(c.Z,{value:"c",label:"0x101",children:[(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"4096"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"256"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"16"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.th,{})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.strong,{children:"257"})})]})})]}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-console",children:"c: 257\n"})})]}),(0,l.jsxs)(c.Z,{value:"d",label:"0xAFFE",children:[(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"4096"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"256"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"16"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.th,{})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"14"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.strong,{children:"45.054"})})]})})]}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-console",children:"d: 45054\n"})})]}),(0,l.jsxs)(c.Z,{value:"f",label:"f",children:[(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"}}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"128"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"64"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"32"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"16"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"8"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"2"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.th,{style:{textAlign:"center"}})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"128"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"~"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"+"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-128"})]})]})]}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-console",children:"f: -128\n"})})]}),(0,l.jsx)(c.Z,{value:"h",label:"h",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-console",children:"h: 9\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var l=n(34334);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function c(e){let{children:t,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,c),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(67294),r=n(34334),s=n(12466),c=n(16550),i=n(20469),a=n(91980),d=n(67392),o=n(50012);function x(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return x(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[c,a]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[d,x]=j({queryString:n,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),y=(()=>{const e=d??g;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{y&&a(y)}),[y]);return{selectedValue:c,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),x(e),b(e)}),[x,b,s]),tabValues:s}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(85893);function f(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),o=e=>{const t=e.currentTarget,n=a.indexOf(t),r=i[n].value;r!==l&&(d(t),c(r))},x=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>a.push(e),onKeyDown:x,onClick:o,...s,className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function m(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function A(e){const t=g(e);return(0,p.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,p.jsx)(f,{...e,...t}),(0,p.jsx)(m,{...e,...t})]})}function v(e){const t=(0,b.Z)();return(0,p.jsx)(A,{...e,children:x(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var l=n(67294);const r={},s=l.createContext(r);function c(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);