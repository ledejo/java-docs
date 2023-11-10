"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3891],{11342:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(85893),r=a(11151),t=a(74866),l=a(85162);const i={title:"(Dynamische) Polymorphie",description:"",sidebar_position:180,tags:["polymorphy"]},u=void 0,c={id:"documentation/polymorphy",title:"(Dynamische) Polymorphie",description:"",source:"@site/docs/documentation/polymorphy.mdx",sourceDirName:"documentation",slug:"/documentation/polymorphy",permalink:"/java-docs/pr-preview/pr-81/documentation/polymorphy",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/polymorphy.mdx",tags:[{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-81/tags/polymorphy"}],version:"current",sidebarPosition:180,frontMatter:{title:"(Dynamische) Polymorphie",description:"",sidebar_position:180,tags:["polymorphy"]},sidebar:"documentationSidebar",previous:{title:"Vererbung",permalink:"/java-docs/pr-preview/pr-81/documentation/inheritance"},next:{title:"Die Mutter aller Klassen",permalink:"/java-docs/pr-preview/pr-81/documentation/object"}},o={},d=[{value:"Upcast",id:"upcast",level:2},{value:"Downcast",id:"downcast",level:2},{value:"Der instanceof-Operator",id:"der-instanceof-operator",level:2}];function p(e){const s={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Unter (dynamischer) Polymorphie (griechisch f\xfcr Vielgestaltigkeit) versteht man,\ndass eine Referenzvariable zur Laufzeit durch Typumwandlung Referenzen auf\nObjekte unterschiedlicher Klassen besitzen kann und dass dadurch\nunterschiedliche Methodenimplementierungen aufgerufen werden k\xf6nnen. Man spricht\nin diesem Zusammenhang auch vom ",(0,n.jsx)(s.em,{children:"statischen Datentyp einer Referenzvariablen"}),"\n(der zur Designzeit festgelegt wird) und vom ",(0,n.jsx)(s.em,{children:"dynamischen Datentyp einer\nReferenzvariablen"})," (der zur Laufzeit zugewiesen wird). Der statische Typ legt\nfest, welche Methoden aufgerufen werden k\xf6nnen, der dynamische, welche\nMethodenimplementierung aufgerufen wird. Die Typumwandlung von der abgeleiteten\nUnterklasse zur Oberklasse bezeichnet man als ",(0,n.jsx)(s.em,{children:"Upcast"}),", die R\xfcckumwandlung als\n",(0,n.jsx)(s.em,{children:"Downcast"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"upcast",children:"Upcast"}),"\n",(0,n.jsx)(s.p,{children:"Beim Upcast wird die Objektreferenz der Unterklasse in eine Objektreferenz der\nOberklasse umgewandelt."}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.Z,{value:"superClass",label:"Oberklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"subClass",label:"Unterklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"mainClass",label:"Startklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n  }\n\n}\n"})})})]}),"\n",(0,n.jsx)(s.h2,{id:"downcast",children:"Downcast"}),"\n",(0,n.jsxs)(s.p,{children:["Beim Downcast wird die Objektreferenz der Oberklasse in eine Objektreferenz der\nUnterklasse umgewandelt. Im Gegensatz zum Upcast muss bei einem Downcast der Typ\nexplizit angegeben werden. Der Downcast einer nicht zuweisungskompatiblen\nReferenz f\xfchrt zu einer ",(0,n.jsx)(s.code,{children:"ClassCastException"}),"."]}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.Z,{value:"superClass",label:"Oberklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"subClass",label:"Unterklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"mainClass",label:"Startklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n    subClass = (SubClass) superClass; // Downcast\n  }\n\n}\n"})})})]}),"\n",(0,n.jsx)(s.h2,{id:"der-instanceof-operator",children:"Der instanceof-Operator"}),"\n",(0,n.jsxs)(s.p,{children:["Mit dem Operator ",(0,n.jsx)(s.code,{children:"instanceof"})," kann zur Laufzeit gepr\xfcft werden, ob eine\nObjektreferenz zuweisungskompatibel zu einer Klasse ist. Eine Objektreferenz ist\ndann zuweisungskompatibel zu einer Klasse, wenn die Klasse des referenzierten\nObjektes in einer Vererbungsbeziehung zur Klasse steht."]}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.Z,{value:"superClass",label:"Oberklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"subClass",label:"Unterklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"mainClass",label:"Startklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n    if (superClass instanceof SubClass) {\n      subClass = (SubClass) superClass; // Downcast\n    }\n  }\n\n}\n"})})})]}),"\n",(0,n.jsxs)(s.p,{children:["Seit Java 16 erm\xf6glicht der Mustervergleich bei ",(0,n.jsx)(s.code,{children:"instanceof"})," das Vermeiden\nnotwendiger Typumwandlungen und sorgt gleichzeitig f\xfcr eine sicherere\nProgrammierung."]}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.Z,{value:"superClass",label:"Oberklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"subClass",label:"Unterklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,n.jsx)(l.Z,{value:"mainClass",label:"Startklasse",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n    if (superClass instanceof SubClass s) { // Downcast\n    }\n  }\n\n}\n"})})})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,s,a)=>{a.d(s,{Z:()=>l});a(67294);var n=a(34334);const r={tabItem:"tabItem_Ymn6"};var t=a(85893);function l(e){let{children:s,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:s})}},74866:(e,s,a)=>{a.d(s,{Z:()=>w});var n=a(67294),r=a(34334),t=a(12466),l=a(16550),i=a(20469),u=a(91980),c=a(67392),o=a(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:r}}=e;return{value:s,label:a,attributes:n,default:r}}))}(a);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function h(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function b(e){let{queryString:s=!1,groupId:a}=e;const r=(0,l.k6)(),t=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,u._X)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function m(e){const{defaultValue:s,queryString:a=!1,groupId:r}=e,t=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[c,d]=b({queryString:a,groupId:r}),[m,f]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,o.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),g=(()=>{const e=c??m;return h({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,t]),tabValues:t}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function j(e){let{className:s,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),o=e=>{const s=e.currentTarget,a=u.indexOf(s),r=i[a].value;r!==n&&(c(s),l(r))},d=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;s=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;s=u[a]??u[u.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},s),children:i.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>u.push(e),onKeyDown:d,onClick:o,...t,className:(0,r.Z)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function C(e){let{lazy:s,children:a,selectedValue:r}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function x(e){const s=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...s}),(0,v.jsx)(C,{...e,...s})]})}function w(e){const s=(0,f.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(s))}},11151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>l});var n=a(67294);const r={},t=n.createContext(r);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);