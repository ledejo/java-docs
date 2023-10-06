"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9410],{3905:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>g});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},m=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),p=a,g=c["".concat(u,".").concat(p)]||c[p]||d[p]||i;return n?t.createElement(g,o(o({ref:r},m),{},{components:n})):t.createElement(g,o({ref:r},m))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(7294),a=n(4334);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:r,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},r)}},4866:(e,r,n)=>{n.d(r,{Z:()=>P});var t=n(7462),a=n(7294),i=n(4334),o=n(2466),l=n(6775),u=n(1980),s=n(7392),m=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}function d(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??c(n);return function(e){const r=(0,s.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const t=(0,l.k6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})}),[i,t])]}function h(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[u,s]=g({queryString:n,groupId:t}),[c,h]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,i]=(0,m.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:t}),v=(()=>{const e=u??c;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var v=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:r,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const r=e.currentTarget,n=m.indexOf(r),t=s[n].value;t!==l&&(c(r),u(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;r=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;r=m[n]??m[m.length-1];break}}r?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},r)},s.map((e=>{let{value:r,label:n,attributes:o}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,key:r,ref:e=>m.push(e),onKeyDown:p,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===r})}),n??r)})))}function k(e){let{lazy:r,children:n,selectedValue:t}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t}))))}function y(e){const r=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(f,(0,t.Z)({},e,r)),a.createElement(k,(0,t.Z)({},e,r)))}function P(e){const r=(0,v.Z)();return a.createElement(y,(0,t.Z)({key:String(r)},e))}},7079:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=n(7462),a=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={title:"Programmieren",description:"",sidebar_position:10,tags:["programming"]},u=void 0,s={unversionedId:"documentation/programming",id:"documentation/programming",title:"Programmieren",description:"",source:"@site/docs/documentation/programming.md",sourceDirName:"documentation",slug:"/documentation/programming",permalink:"/java-docs/documentation/programming",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/programming.md",tags:[{label:"programming",permalink:"/java-docs/tags/programming"}],version:"current",sidebarPosition:10,frontMatter:{title:"Programmieren",description:"",sidebar_position:10,tags:["programming"]},sidebar:"documentationSidebar",previous:{title:"Einf\xfchrung",permalink:"/java-docs/"},next:{title:"Softwaredesign",permalink:"/java-docs/documentation/design"}},m={},c=[{value:"Programmierparadigmen",id:"programmierparadigmen",level:2},{value:"Imperative Programmierung",id:"imperative-programmierung",level:3},{value:"Deklarative Programmierung",id:"deklarative-programmierung",level:3},{value:"Objektorientierte Programmierung",id:"objektorientierte-programmierung",level:3},{value:"Programmausf\xfchrung",id:"programmausf\xfchrung",level:2},{value:"Programmiersprachen",id:"programmiersprachen",level:2},{value:"Die Programmiersprache Java",id:"die-programmiersprache-java",level:2},{value:"Die Geschichte von Java",id:"die-geschichte-von-java",level:3},{value:"JDK und JRE",id:"jdk-und-jre",level:3}],d={toc:c},p="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Als ein Teilbereich der Softwareentwicklung umfasst das Programmieren vor allem die Umsetzung eines Softwareentwurfes in Quellcode. Generell versteht man unter Programmieren die Umsetzung von Algorithmen in lauff\xe4hige Computer-Programme."),(0,a.kt)("mermaid",{value:"flowchart LR\n    Analyse --\x3e Entwurf --\x3e Umsetzung --\x3e Auslieferung --\x3e Wartung --\x3e Analyse"}),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Ein Algorithmus ist eine Handlungsvorschrift zur L\xf6sung eines Problems.")),(0,a.kt)("h2",{id:"programmierparadigmen"},"Programmierparadigmen"),(0,a.kt)("p",null,"Unter einem Programmierparadigma versteht man die grundlegende Herangehensweise, Probleme mit Hilfe einer Programmiersprache zu l\xf6sen:"),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Auch wenn Programmiersprachen oft anhand ihrer grundlegenden Merkmale genau einem Programmierparadigma zugeordnet werden, unterst\xfctzen viele Programmiersprachen mehrere Programmierparadigmen.")),(0,a.kt)("h3",{id:"imperative-programmierung"},"Imperative Programmierung"),(0,a.kt)("p",null,"Bei der imperativen Programmierung bestehen Programme aus verzweigten und sich wiederholenden Folgen von Anweisungen, die den Programmablauf steuern."),(0,a.kt)("mermaid",{value:'stateDiagram-v2\n    state "Ausgabe: Zahl gr\xf6\xdfer Null eingeben" as activity1\n    state "Eingabe: Zahl" as activity2\n    state "Ausgabe: Zahl ist nicht gr\xf6\xdfer Null" as activity3\n    state "Ausgabe: Zahl ist gr\xf6\xdfer Null" as activity4\n    state if <<choice>>\n\n    [*] --\x3e activity1\n    activity1--\x3e activity2\n    activity2 --\x3e if\n    if --\x3e activity3 : Zahl kleiner gleich Null\n    if --\x3e activity4 : Zahl gr\xf6\xdfer Null\n    activity3 --\x3e activity1\n    activity4 --\x3e [*]'}),(0,a.kt)("h3",{id:"deklarative-programmierung"},"Deklarative Programmierung"),(0,a.kt)("p",null,'Die deklarative Programmierung stellt einen Gegenentwurf zur imperativen Programmierung dar, bei der nicht das "Wie", sondern das "Was" im Vordergrund steht.'),(0,a.kt)("mermaid",{value:"flowchart TD\n    subgraph Ausgangsmenge\n        direction LR\n        p1 -.- p2 -.- p3 -.- p4\n        p1(Hans, 42, m, Stuttgart)\n        p2(Peter, 17, m, Freiburg)\n        p3(Lisa, 19, w, Berlin)\n        p4(Maria, 33, w, Freiburg)\n    end\n    subgraph Ergebnismenge\n        direction LR\n        p5 -.- p6\n        p5(Maria, 33)\n        p6(Peter, 17)\n    end\n    Ausgangsmenge --\x3e|\"SELECT Name, Age FROM Person WHERE City = 'Freiburg' ORDER BY Name\"| Ergebnismenge"}),(0,a.kt)("h3",{id:"objektorientierte-programmierung"},"Objektorientierte Programmierung"),(0,a.kt)("p",null,"Die ojektorientierte Programmierung baut auf der imperativen Programmierung auf, setzt den Fokus aber auf abstrakte Datentypen und die Verbindung von Daten und Routinen."),(0,a.kt)("mermaid",{value:"classDiagram\n    Person --o Team\n    class Person {\n        -name String\n        +Person(name String)\n        +name() String\n    }\n    class Team {\n        -members List~Person~\n        +addMember(person Person) void\n        +members() List~Person~\n    }"}),(0,a.kt)("h2",{id:"programmausf\xfchrung"},"Programmausf\xfchrung"),(0,a.kt)("p",null,"Programme auf einem Computer k\xf6nnen auf unterschiedliche Arten ausgef\xfchrt werden: Compilersprachen \xfcbersetzen den Quellcode in eine Datei, die vom jeweiligen Betriebssystem ausgef\xfchrt werden kann, Interpretersprachen \xfcbersetzen den Quellcode direkt in den Arbeitsspeicher und f\xfchren das Programm sofort aus und Just-In-Time Compilersprachen (JIT) \xfcbersetzen den Quellcode mit Hilfe eines Compilers zun\xe4chst in den sogenannten Bytecode und \xfcbersetzen diesen bei der Ausf\xfchrung in den Arbeitsspeicher. Compilersprachen wie z.B. C++ sind dabei deutlich performanter und erm\xf6glichen eine sicherere Entwicklung, Interpretersprachen wie z.B. PHP sind dagegen plattformunabh\xe4ngig und Just-In-Time Compliersprachen vereinen die Vorteile von beiden."),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In Java wird der Interpreter als ",(0,a.kt)("em",{parentName:"p"},"Java Virtual Machine")," bezeichnet.")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"compiler",label:"Compilersprachen",default:!0,mdxType:"TabItem"},(0,a.kt)("mermaid",{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    machinecode[/Maschinencode/]\n    compiler(Compiler)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode -.-> compiler -.-> machinecode\n    end\n    subgraph Laufzeit\n        cpu\n    end\n    machinecode -.-> cpu"})),(0,a.kt)(o.Z,{value:"interpreter",label:"Interpretersprachen",default:!0,mdxType:"TabItem"},(0,a.kt)("mermaid",{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    interpreter(Interpreter)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode\n    end\n    subgraph Laufzeit\n        interpreter -.-> cpu\n    end\n    sourcecode -.-> interpreter"})),(0,a.kt)(o.Z,{value:"jit",label:"Just-In-Time Compilersprachen",default:!0,mdxType:"TabItem"},(0,a.kt)("mermaid",{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    bytecode[/Bytecode/]\n    compiler(Compiler)\n    interpreter(Interpreter)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode -.-> compiler -.-> bytecode\n    end\n    subgraph Laufzeit\n        interpreter -.-> cpu\n    end\n    bytecode -.-> interpreter"}))),(0,a.kt)("h2",{id:"programmiersprachen"},"Programmiersprachen"),(0,a.kt)("p",null,"Maschinen sind im Vergleich zu menschlichen Gehirnen sehr primitive Gebilde. Die Diskrepanz zwischen der menschlichen Denkweise und der Arbeitsweise von Maschinen bezeichnet mal als ",(0,a.kt)("em",{parentName:"p"},"Semantische L\xfccke"),". Programmiersprachen erm\xf6glichen es, Problemstellungen der\nrealen Welt abstrahiert und maschinengerecht abzubilden und damit die Semantische L\xfccke zu verringern. Je h\xf6her die Abstraktion einer Programmiersprache dabei ist, desto mehr kann die Semantische L\xfccke verringert werden: Maschinenorientierte Programmiersprachen\n(wie z.B. Assembler) abstrahieren kaum und sind daher f\xfcr den Menschen schwerer verst\xe4ndlich, problemorientierte Programmiersprachen (wie z.B. Java) abstrahieren stark und sind daher f\xfcr den Menschen leichter verst\xe4ndlich."),(0,a.kt)("p",null,"Die Programmiersprachen Java, Python und JavaScript geh\xf6ren zu den am weitesten verbreiteten bzw. beliebtesten Programmiersprachen."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"TIOBE"),(0,a.kt)("th",{parentName:"tr",align:null},"RedMonk"),(0,a.kt)("th",{parentName:"tr",align:null},"PYPL"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Python"),(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,a.kt)("td",{parentName:"tr",align:null},"Python")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C"),(0,a.kt)("td",{parentName:"tr",align:null},"Python"),(0,a.kt)("td",{parentName:"tr",align:null},"Java")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Java"),(0,a.kt)("td",{parentName:"tr",align:null},"Java"),(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C++"),(0,a.kt)("td",{parentName:"tr",align:null},"PHP"),(0,a.kt)("td",{parentName:"tr",align:null},"C#")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C#"),(0,a.kt)("td",{parentName:"tr",align:null},"C++"),(0,a.kt)("td",{parentName:"tr",align:null},"C/C++")))),(0,a.kt)("admonition",{title:"Quellen",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Tiobe Programming Community Index November 2021, RedMonk Programming Language Rankings Juni 2021, PopularitY of Programming Language November 2021")),(0,a.kt)("h2",{id:"die-programmiersprache-java"},"Die Programmiersprache Java"),(0,a.kt)("p",null,"Die Programmiersprache Java geh\xf6rt zu den problemorientierten Programmiersprachen und ist daher einfacher zu erlernen und einfacher zu verstehen als maschinenorientierte Programmiersprachen. Bei der Entwicklung von Java verfolgte man das Ziel, eine einfache,\nobjektorientierte, robuste, architekturneutrale und parallelisierbare Programmiersprache zu entwickeln. Java wurde haupts\xe4chlich von C und C++ beeinflusst, ist allerdings im Gegensatz zu C und C++ nicht darauf ausgelegt, m\xf6glichst leistungsf\xe4hige Programme zu\nerzeugen, sondern m\xf6glichst sichere und fehlerfreie Programme."),(0,a.kt)("h3",{id:"die-geschichte-von-java"},"Die Geschichte von Java"),(0,a.kt)("p",null,"Anfang der 90er begannen bei der Firma Sun Microsystems unter Federf\xfchrung des Chefentwicklers James Gosling die Arbeiten an einem Projekt mit dem Codenamen ",(0,a.kt)("em",{parentName:"p"},"The Green Project")," mit dem Ziel, eine vollst\xe4ndige Betriebssystemumgebung f\xfcr unterschiedliche Zwecke\n(interaktives Kabelfernsehen, intelligente Kaffeemaschinen etc.) zu entwickeln. Die daraus entstehende Programmiersprache sollte urspr\xfcnglich den Namen ",(0,a.kt)("em",{parentName:"p"},"Oak")," (Object Application Kernel) tragen, wurde aber schlie\xdflich im Mai 1995 unter dem Namen ",(0,a.kt)("em",{parentName:"p"},"Java"),"\nver\xf6ffentlicht. Der gro\xdfe Durchbruch von Java kam 1996 durch eine Kooperation mit der Firma Netscape zustande, die eine Integration von Java-Applets mit Hilfe von JavaScript in den Browser Netscape Navigator 2.0 erm\xf6glichte. Weitere wichtige Meilensteine in der\nGeschichte von Java waren die Ver\xf6ffentlichungen der Google-Entwicklungsumgebung Android 2008 sowie des Computerspiels Minecraft 2009."),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Java war der Name der beliebtesten Kaffeesorte der Entwickler.")),(0,a.kt)("h3",{id:"jdk-und-jre"},"JDK und JRE"),(0,a.kt)("p",null,"Das JDK (Java Development Kit) stellt die wichtigste Komponente zum Programmieren von Java-Programmen dar. Es enth\xe4lt neben dem Compiler und Debugger weitere wichtige Werkzeuge sowie umfangreiche Bibliotheken (siehe ",(0,a.kt)("a",{parentName:"p",href:"/java-docs/documentation/java-api/"},"Die Java API"),"). Die\nJRE (Java Runtime Environment) enth\xe4lt den Interpreter (die ",(0,a.kt)("em",{parentName:"p"},"Java Virtual Machine"),") und wird zum Ausf\xfchren von Java-Applikationen ben\xf6tigt."))}g.isMDXComponent=!0}}]);