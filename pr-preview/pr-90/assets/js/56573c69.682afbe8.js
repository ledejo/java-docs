"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5822],{48728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=t(85893),a=t(11151),s=t(74866),i=t(85162);const l={title:"Klassendiagramme",description:"",sidebar_position:10,tags:["uml","class-diagrams"]},d=void 0,u={id:"documentation/uml/class-diagrams",title:"Klassendiagramme",description:"",source:"@site/docs/documentation/uml/class-diagrams.mdx",sourceDirName:"documentation/uml",slug:"/documentation/uml/class-diagrams",permalink:"/java-docs/pr-preview/pr-90/documentation/uml/class-diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/uml/class-diagrams.mdx",tags:[{label:"uml",permalink:"/java-docs/pr-preview/pr-90/tags/uml"},{label:"class-diagrams",permalink:"/java-docs/pr-preview/pr-90/tags/class-diagrams"}],version:"current",sidebarPosition:10,frontMatter:{title:"Klassendiagramme",description:"",sidebar_position:10,tags:["uml","class-diagrams"]},sidebar:"documentationSidebar",previous:{title:"Darstellung von Klassen und Programmabl\xe4ufen",permalink:"/java-docs/pr-preview/pr-90/documentation/uml/"},next:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/pr-preview/pr-90/documentation/uml/activity-diagrams"}},o={},c=[{value:"Darstellung von Klassen",id:"darstellung-von-klassen",level:2},{value:"Darstellung spezieller Klassen",id:"darstellung-spezieller-klassen",level:2},{value:"Darstellung von Assoziationen",id:"darstellung-von-assoziationen",level:2},{value:"Darstellung von Vererbungs-und Realisierungs-Beziehungen",id:"darstellung-von-vererbungs-und-realisierungs-beziehungen",level:2},{value:"Darstellung von Multiplizit\xe4ten",id:"darstellung-von-multiplizit\xe4ten",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Klassendiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich der\nStrukturdiagramme. Das Klassendiagramm dient zur leicht lesbaren Dokumentation\ndes Aufbaus von Klassen und deren Beziehungen (Relationen). Klassendiagramme\nk\xf6nnen Informationen zu den Attributen, den Methoden und weiteren\nKlassen-Bestandteilen enthalten."}),"\n",(0,r.jsx)(n.h2,{id:"darstellung-von-klassen",children:"Darstellung von Klassen"}),"\n",(0,r.jsx)(n.p,{children:"Klassen werden im Klassendiagramm als Rechteck mit verschiedenen Bereichen\n(Klassenname, Attribute, Methoden und weitere Klassen-Bestandteile) dargestellt:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Klassenname wird zentriert, fett gedruckt und mit einem Gro\xdfbuchstaben\nbeginnend dargestellt"}),"\n",(0,r.jsxs)(n.li,{children:["Attribute werden nach dem Muster ",(0,r.jsx)(n.em,{children:"[Sichtbarkeit]"})," ",(0,r.jsx)(n.em,{children:"Attributname: Datentyp [=\nStandardwert] [{Eigenschaft}]"})," dargestellt"]}),"\n",(0,r.jsxs)(n.li,{children:["Methoden nach dem Muster ",(0,r.jsx)(n.em,{children:"[Sichtbarkeit]"})," ",(0,r.jsx)(n.em,{children:"Methoden-Signatur: Datentyp des\nR\xfcckgabewertes [{Eigenschaft}]"})," dargestellt"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Sichtbarkeit von Attributen und Methoden wird durch (farbige) Symbole\ndargestellt:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,r.jsx)(n.code,{children:"public"})," wird durch das Symbol ",(0,r.jsx)(n.em,{children:"+"})," bzw. die Farbe ",(0,r.jsx)(n.em,{children:"gr\xfcn"}),"\ndargestellt"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,r.jsx)(n.code,{children:"protected"})," wird durch das Symbol ",(0,r.jsx)(n.em,{children:"#"})," bzw. die Farbe ",(0,r.jsx)(n.em,{children:"gelb"}),"\ndargestellt"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,r.jsx)(n.code,{children:"packaged"})," wird durch das Symbol ",(0,r.jsx)(n.em,{children:"~"})," bzw. die Farbe ",(0,r.jsx)(n.em,{children:"blau"}),"\ndargestellt"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,r.jsx)(n.code,{children:"private"})," wird durch das Symbol ",(0,r.jsx)(n.em,{children:"-"})," bzw. die Farbe ",(0,r.jsx)(n.em,{children:"rot"}),"\ndargestellt"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Statische Attribute und Methoden werden durch Unterstriche kenntlich gemacht"}),"\n",(0,r.jsxs)(n.li,{children:["Finale Attribute und Methoden werden durch die Eigenschaft ",(0,r.jsx)(n.em,{children:"final"})," kenntlich\ngemacht"]}),"\n",(0,r.jsxs)(n.li,{children:["Abstrakte Methoden werden entweder kursiv dargestellt oder durch die\nEigenschaft ",(0,r.jsx)(n.em,{children:"abstract"})," kenntlich gemacht"]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    class Person {\n        -name: String &#123final&#125\n        -age: int &#123final&#125\n        -gender: char &#123final&#125\n        -numberOfPersons: int$\n        +Person(name: String, age: int, gender: char)\n        +name() String\n        +age() int\n        +gender() char\n        +numberOfPersons()$ int\n    }"}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsxs)(n.p,{children:["Da es in der aktuellen Version von Mermaid einen Fehler bei der Darstellung\nstatischer Attribute gibt, werden diese aktuell durch das Symbol ",(0,r.jsx)(n.code,{children:"$"}),"\ndargestellt."]})}),"\n",(0,r.jsx)(n.h2,{id:"darstellung-spezieller-klassen",children:"Darstellung spezieller Klassen"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(i.Z,{value:"enumerations",label:"Aufz\xe4hlungen",default:!0,children:[(0,r.jsxs)(n.p,{children:["Aufz\xe4hlungen werden im Klassendiagramm durch den Stereotypen ",(0,r.jsx)(n.code,{children:"enumeration"}),"\nkenntlich gemacht. Die Aufz\xe4hlungskonstanten werden in einem zus\xe4tzlichen\nBereich aufgef\xfchrt. Der Stereotyp impliziert, dass die Aufz\xe4hlung einen privaten\nKonstruktor sowie ggbfs. passende Setter und Getter besitzt."]}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    class WeekDay {\n        <<enumeration>>\n        MONDAY = Monday\n        TUESDAY = Tuesday\n        WEDNESDAY = Wednesday\n        THURSDAY = Thursday\n        FRIDAY = Friday\n        SATURDAY = Saturday\n       SUNDAY = Sunday\n        -description: String &#123final&#125\n    }"})]}),(0,r.jsxs)(i.Z,{value:"abstractAndFinalClasses",label:"Abstrakte und finale Klassen",children:[(0,r.jsxs)(n.p,{children:["Abstrakte und finale Klassen werden durch die Stereotypen ",(0,r.jsx)(n.code,{children:"abstract"})," bzw.\n",(0,r.jsx)(n.code,{children:"final"})," kenntlich gemacht."]}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Foo <|-- Bar\n    class Foo {\n        <<abstract>>\n    }\n    class Bar {\n        <<final>>\n    }"})]}),(0,r.jsxs)(i.Z,{value:"interfaces",label:"Schnittstellen",default:!0,children:[(0,r.jsxs)(n.p,{children:["Schnittstellen werden im Klassendiagramm durch den Stereotypen ",(0,r.jsx)(n.code,{children:"interface"}),"\nkenntlich gemacht. Dieser impliziert, dass alle Methoden der Schnittstelle\nabstrakt sind."]}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    class Comparable~T~ {\n        <<interface>>\n        +compareTo(o: T) int\n    }"})]}),(0,r.jsxs)(i.Z,{value:"records",label:"Datenklassen",default:!0,children:[(0,r.jsxs)(n.p,{children:["Datenklassen werden im Klassendiagramm durch den Stereotypen ",(0,r.jsx)(n.code,{children:"record"})," kenntlich\ngemacht. Dieser impliziert, dass die Datenklasse einen entsprechenden\nKonstruktor, Getter zu allen Attributen sowie entsprechende Implementierungen\nf\xfcr die Object-Methoden besitzt, dass s\xe4mtliche Attribute private und\nunver\xe4nderlich sind und dass die Klasse selbst unver\xe4nderlich ist."]}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    class Person {\n        <<record>>\n        name: String\n        age: int\n        gender: char\n    }"})]}),(0,r.jsxs)(i.Z,{value:"generics",label:"Generische Klassen",default:!0,children:[(0,r.jsx)(n.p,{children:"Die formalen Typparameter einer generischen Klassen werden in einem zus\xe4tzlichen\nRechteck dargestellt."}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    class Box~T~ {\n        -content: T\n        +setContent(content: T) void\n        +getContent() T\n    }"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"darstellung-von-assoziationen",children:"Darstellung von Assoziationen"}),"\n",(0,r.jsx)(n.p,{children:"Assoziationen stellen allgemeine Relationen zwischen zwei Klassen dar, bei der\neine Klasse eine andere Klasse verwendet. Assoziationen k\xf6nnen in eine Richtung\n(unidirektional) und in beide Richtungen (bidirektional) vorliegen."}),"\n",(0,r.jsx)(n.p,{children:"Aggregationen und Kompositionen stellen spezielle Formen von Assoziationen dar,\nbei denen ein Objekt der einen Klasse Teil einer anderen Klasse ist. Im\nGegensatz zu Aggregationen h\xe4ngen bei Kompositionen die Teile von der Existenz\ndes Ganzen ab. Aggregationen werden daher auch als ist-Teil-von-Relationen,\nKompositionen als existenzabh\xe4ngige ist-Teil-von-Relationen bezeichnet."}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(i.Z,{value:"associations",label:"Assoziationen",default:!0,children:[(0,r.jsx)(n.p,{children:"Assoziationen werden mit einem offenen Pfeil hin zur verwendeten Klasse\ndargestellt."}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Persons --\x3e Person\n    class Persons {\n        +getPersons() List~Person~\n    }"})]}),(0,r.jsxs)(i.Z,{value:"aggregations",label:"Aggregationen",default:!0,children:[(0,r.jsx)(n.p,{children:"Aggregationen werden mit einer nicht ausgef\xfcllten Raute hin zur besitzenden\nKlasse dargestellt."}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Person --o Team\n    class Team {\n        +members List~Person~\n    }"})]}),(0,r.jsxs)(i.Z,{value:"compositions",label:"Kompositionen",default:!0,children:[(0,r.jsx)(n.p,{children:"Kompositionen werden mit einer ausgef\xfcllten Raute hin zur besitzenden Klasse\ndargestellt."}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n    OrderItem --* Order\n    class Order {\n        +items List~OrderItem~\n    }"})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(n.p,{children:"Assoziationen k\xf6nnen gerichtet und ungerichtet dargestellt werden."})}),"\n",(0,r.jsx)(n.h2,{id:"darstellung-von-vererbungs-und-realisierungs-beziehungen",children:"Darstellung von Vererbungs-und Realisierungs-Beziehungen"}),"\n",(0,r.jsx)(n.p,{children:"Vererbungs-Beziehungen werden mit einem geschlossenen Pfeil hin zur Oberklasse\nsowie einer durchgezogenen Linie dargestellt, Realisierungs-Beziehungen mit\neinem geschlossenen Pfeil hin zur Schnittstelle sowie einer gestrichelten Linie."}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Person <|-- Student\n    Person <|-- Lecturer\n    Comparable~T~ <|.. Person\n    Serializable <|.. Person"}),"\n",(0,r.jsx)(n.h2,{id:"darstellung-von-multiplizit\xe4ten",children:"Darstellung von Multiplizit\xe4ten"}),"\n",(0,r.jsxs)(n.p,{children:["Die Multiplizit\xe4t einer Beziehung legt fest, mit wie vielen Objekten der\ngegen\xfcberliegenden Klasse ein Objekt in Beziehung stehen kann. Die Multiplizit\xe4t\nwird als Intervall aus nicht-negativen ganzen Zahlen dargestellt und wird in der\nForm ",(0,r.jsx)(n.em,{children:"[untere Schranke]..[obere Schranke]"})," angegeben. Besitzen beide Schranken\nden gleichen Wert, muss nur eine der beiden Schranken angegeben werden. Eine\nnach oben unbeschr\xe4nkte Schranke wird mit ",(0,r.jsx)(n.strong,{children:"*"})," angegeben."]}),"\n",(0,r.jsx)(n.mermaid,{value:'classDiagram\n    Student "0..*" -- "1..1" Course'})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(34334);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(34334),s=t(12466),i=t(16550),l=t(20469),d=t(91980),u=t(67392),o=t(50012);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,c]=g({queryString:t,groupId:a}),[b,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=u??b;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&d(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),c(e),p(e)}),[c,p,s]),tabValues:s}}var p=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),a=l[t].value;a!==r&&(u(n),i(a))},c=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:c,onClick:o,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function w(e){const n=(0,p.Z)();return(0,f.jsx)(k,{...e,children:c(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);