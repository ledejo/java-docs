"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1017],{73610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),r=t(11151);const s={title:"Datentypen",description:"",sidebar_position:30,tags:["data-types"]},d=void 0,a={id:"documentation/data-types",title:"Datentypen",description:"",source:"@site/docs/documentation/data-types.md",sourceDirName:"documentation",slug:"/documentation/data-types",permalink:"/java-docs/pr-preview/pr-86/documentation/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/data-types.md",tags:[{label:"data-types",permalink:"/java-docs/pr-preview/pr-86/tags/data-types"}],version:"current",sidebarPosition:30,frontMatter:{title:"Datentypen",description:"",sidebar_position:30,tags:["data-types"]},sidebar:"documentationSidebar",previous:{title:"Aufbau einer Java-Klasse",permalink:"/java-docs/pr-preview/pr-86/documentation/class-structure"},next:{title:"Datenobjekte",permalink:"/java-docs/pr-preview/pr-86/documentation/data-objects"}},c={},l=[{value:"Primitive Datentypen",id:"primitive-datentypen",level:2},{value:"Komplexe Datentypen",id:"komplexe-datentypen",level:2},{value:"Generische Datentypen",id:"generische-datentypen",level:2},{value:"Abstrakte Datentypen",id:"abstrakte-datentypen",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Datentypen legen neben der Gr\xf6\xdfe des Arbeitsspeichers, die ein Datenobjekt\nben\xf6tigt, auch die Art der Information fest, die im Datenobjekt gespeichert\nwerden kann."}),"\n",(0,i.jsx)(n.h2,{id:"primitive-datentypen",children:"Primitive Datentypen"}),"\n",(0,i.jsx)(n.p,{children:"Primitve Datentypen sind fest in der Programmiersprache verankert und k\xf6nnen\ndurch entsprechende Schl\xfcsselw\xf6rter angesprochen werden. Java kennt 8 solcher\nprimitver Datentypen."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datentyp"}),(0,i.jsx)(n.th,{children:"Gr\xf6\xdfe"}),(0,i.jsx)(n.th,{children:"Wertbereich"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"true, false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"char"}),(0,i.jsx)(n.td,{children:"2 Byte"}),(0,i.jsx)(n.td,{children:"\\u0000 bis \\uFFFF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"byte"}),(0,i.jsx)(n.td,{children:"1 Byte"}),(0,i.jsx)(n.td,{children:"-128 bis +127"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"short"}),(0,i.jsx)(n.td,{children:"2 Byte"}),(0,i.jsx)(n.td,{children:"-32.768 bis +32.767"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"4 Byte"}),(0,i.jsx)(n.td,{children:"-2.147.483.648 bis +2.147.483.647"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"8 Byte"}),(0,i.jsx)(n.td,{children:"-9.233.372.036.854.775.808 bis +9.233.372.036.854.775.807"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"4 Byte"}),(0,i.jsx)(n.td,{children:"+/-1,4e-45 bis +/-3,4028235e+38"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"double"}),(0,i.jsx)(n.td,{children:"8 Byte"}),(0,i.jsx)(n.td,{children:"+/-4,9e-324 bis +/-1,7976931348623157e+308"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"komplexe-datentypen",children:"Komplexe Datentypen"}),"\n",(0,i.jsx)(n.p,{children:"Klassen, die \xfcber mehrere Attribute verf\xfcgen, k\xf6nnen im Gegensatz zu den\nprimitiven Datentypen nicht nur eine Information speichern und werden daher als\nkomplexe Datentypen bezeichnet."}),"\n",(0,i.jsx)(n.h2,{id:"generische-datentypen",children:"Generische Datentypen"}),"\n",(0,i.jsxs)(n.p,{children:["Klassen, die \xfcber einen oder mehrere formale Typparameter verf\xfcgen, werden als\ngenerische Klassen bezeichnet. Generische Klassen k\xf6nnen mit verschiedenen\nDatentypen verwendet werden und erm\xf6glichen dadurch die Wiederverwendung von\nCode unter Beibehaltung statischer Typsicherheit. Unter Typsicherheit versteht\nman, dass Datentypen gem\xe4\xdf ihrer Definition verwendet werden und dabei keine\nTypverletzungen auftreten. Bei statisch typisierten Sprachen findet die\nTyppr\xfcfung bei der Kompilierung statt. Beispiele f\xfcr generische Klassen sind die\nKlasse ",(0,i.jsx)(n.code,{children:"ArrayList<E>"})," sowie die Klasse ",(0,i.jsx)(n.code,{children:"HashMap<K, V>"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"abstrakte-datentypen",children:"Abstrakte Datentypen"}),"\n",(0,i.jsxs)(n.p,{children:["Abstrakte Datentypen sind Sammlungen von Daten samt den dazugeh\xf6rigen\nOperationen wie Einf\xfcgen, L\xf6schen etc. Beispiele f\xfcr abstrakte Datentypen sind\nListen (z.B. die Klassen ",(0,i.jsx)(n.code,{children:"ArrayList<E>"})," und ",(0,i.jsx)(n.code,{children:"LinkedList<E>"}),"), Mengen (z.B. die\nKlassen ",(0,i.jsx)(n.code,{children:"HashSet<E>"})," und ",(0,i.jsx)(n.code,{children:"TreeSet<E>"}),"), Warteschlangen (z.B. die Klassen\n",(0,i.jsx)(n.code,{children:"LinkedList<E>"})," und ",(0,i.jsx)(n.code,{children:"PriorityQueue<E>"}),") sowie Assoziativspeicher (z.B. die\nKlassen ",(0,i.jsx)(n.code,{children:"HashMap<K, V>"})," und ",(0,i.jsx)(n.code,{children:"TreeMap<K, V>"}),")."]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var i=t(67294);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);