"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9202],{16650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(85893),s=t(11151),r=t(74866),i=t(85162);const l={title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20,tags:["class-structure"]},o=void 0,u={id:"documentation/class-structure",title:"Aufbau einer Java-Klasse",description:"",source:"@site/docs/documentation/class-structure.mdx",sourceDirName:"documentation",slug:"/documentation/class-structure",permalink:"/java-docs/pr-preview/pr-85/documentation/class-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/class-structure.mdx",tags:[{label:"class-structure",permalink:"/java-docs/pr-preview/pr-85/tags/class-structure"}],version:"current",sidebarPosition:20,frontMatter:{title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20,tags:["class-structure"]},sidebar:"documentationSidebar",previous:{title:"Softwaredesign",permalink:"/java-docs/pr-preview/pr-85/documentation/design"},next:{title:"Datentypen",permalink:"/java-docs/pr-preview/pr-85/documentation/data-types"}},c={},d=[{value:"Statische Methoden",id:"statische-methoden",level:2},{value:"Die main-Methode",id:"die-main-methode",level:2},{value:"Kommentare",id:"kommentare",level:2},{value:"Entwicklungspakete",id:"entwicklungspakete",level:2}];function m(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Klassen stellen den grundlegenden Rahmen f\xfcr Programme dar. Jede Klasse kann\nDaten (",(0,a.jsx)(n.em,{children:"Attribute"}),") und Routinen (",(0,a.jsx)(n.em,{children:"Methoden"}),") besitzen. Routinen bestehen dabei\naus Folgen von verzweigten und sich wiederholenden Anweisungen, wobei\nAnweisungen wohldefinierte Befehle darstellen, die der Interpreter zur Laufzeit\nausf\xfchrt. Anweisungen m\xfcssen in Java mit dem Semikolon abgeschlossen werden und\nk\xf6nnen zu Anweisungsbl\xf6cken zusammengefasst werden, die durch geschweifte\nKlammern umschlossen werden. Innerhalb eines Anweisungsblocks k\xf6nnen sich\nweitere Anweisungsbl\xf6cke befinden."]}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{value:"class",label:"Klasse",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'// highlight-start\npublic class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println("Winter is Coming");\n  }\n\n}\n// highlight-end\n'})})}),(0,a.jsx)(i.Z,{value:"method",label:"Methode",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  // highlight-start\n  public static void main(String[] args) {\n    System.out.println("Winter is Coming");\n  }\n  // highlight-end\n\n}\n'})})}),(0,a.jsx)(i.Z,{value:"statement",label:"Anweisung",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n  // highlight-start\n    System.out.println("Winter is Coming");\n  // highlight-end\n  }\n\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"statische-methoden",children:"Statische Methoden"}),"\n",(0,a.jsxs)(n.p,{children:["Statische Methoden sind abgeschlossene Programmteile, die Parameter enthalten\nund einen Wert zur\xfcckgeben k\xf6nnen. Sie m\xfcssen mit dem Schl\xfcsselwort ",(0,a.jsx)(n.code,{children:"static"}),"\ngekennzeichnet werden. Bei statischen Methoden, die einen Wert zur\xfcckgeben, muss\nder Datentyp des R\xfcckgabewertes angegeben werden; bei statische Methoden, die\nkeinen Wert zur\xfcckgeben, das Schl\xfcsselwort ",(0,a.jsx)(n.code,{children:"void"}),". Der Aufruf einer statischen\nMethode erfolgt \xfcber den Klassennamen gefolgt von einem Punkt."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    MainClass.printStarkMotto();\n    MainClass.printText("Winter is Coming");\n  }\n\n  public static void printStarkMotto() {\n    System.out.println("Winter is Coming");\n  }\n\n  public static void printText(String text) {\n    System.out.println(text);\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Die statischen Methoden einer Startklasse werden auch als ",(0,a.jsx)(n.em,{children:"Unterprogramme"}),"\nbezeichnet."]})}),"\n",(0,a.jsx)(n.h2,{id:"die-main-methode",children:"Die main-Methode"}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void main(args: String[])"})," ist eine spezielle Methode in Java und\nstellt Startpunkt sowie Endpunkt einer Anwendung bzw. eines Programms dar. Nur\nKlassen mit einer main-Methode k\xf6nnen von der Laufzeitumgebung ausgef\xfchrt\nwerden. Aus diesem Grund werden Klassen mit einer main-Methode auch als\n",(0,a.jsx)(n.em,{children:"ausf\xfchrbare Klassen"})," oder als ",(0,a.jsx)(n.em,{children:"Startklassen"})," bezeichnet."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println("Winter is Coming");\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"kommentare",children:"Kommentare"}),"\n",(0,a.jsxs)(n.p,{children:["Kommentare sollen die Lesbarkeit des Programms verbessern. Sie bewirken bei der\nAusf\xfchrung keine Aktion und werden vom Java-Compiler ignoriert. Java kennt\neinzeilige Kommentare mit ",(0,a.jsx)(n.code,{children:"//"}),", Kommentarbl\xf6cke mit ",(0,a.jsx)(n.code,{children:"/* */"})," und\nDokumentationskommentare mit ",(0,a.jsx)(n.code,{children:"/** */"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'/**\n * Beschreibung der Klasse\n *\n * @author Autor der Klasse\n * @version Version\n *\n */\npublic class MainClass {\n\n  /**\n   * Beschreibung der Methode\n   *\n   * @param args Beschreibung der Parameter\n   */\n  public static void main(String[] args) {\n    /* Kommentarblock */\n    System.out.println("Winter is Coming"); // Kommentar\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"entwicklungspakete",children:"Entwicklungspakete"}),"\n",(0,a.jsxs)(n.p,{children:["Entwicklungspakete erm\xf6glichen das hierarchische Strukturieren von Klassen. Um\ndie Klassen eines Entwicklungspaketes verwenden zu k\xf6nnen, m\xfcssen die jeweiligen\nKlassen explizit mit Hilfe des Schl\xfcsselworts ",(0,a.jsx)(n.code,{children:"import"})," importiert werden."]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart\n    java(java) --\x3e lang(lang)\n    java --\x3e util(util)\n    java --\x3e time(time)\n    lang --\x3e object[Object]\n    lang --\x3e system[System]\n    util --\x3e arraylist[ArrayList]\n    util --\x3e scanner[Scanner]\n    time --\x3e localdate(LocalDate)\n    time --\x3e localtime(LocalTime)"}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Die Klassen des Entwicklungspaketes ",(0,a.jsx)(n.code,{children:"java.lang"})," m\xfcssen nicht importiert werden."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(34334);const s={tabItem:"tabItem_Ymn6"};var r=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(67294),s=t(34334),r=t(12466),i=t(16550),l=t(20469),o=t(91980),u=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=p({queryString:t,groupId:s}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=u??g;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==a&&(u(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,s.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(j,{...e,...n}),(0,f.jsx)(x,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(67294);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);