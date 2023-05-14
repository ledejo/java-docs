"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(y,l(l({ref:t},s),{},{components:n})):a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={title:"Datentypen",description:"",sidebar_position:30,tags:[]},l=void 0,p={unversionedId:"documentation/data-types",id:"documentation/data-types",title:"Datentypen",description:"",source:"@site/docs/documentation/data-types.md",sourceDirName:"documentation",slug:"/documentation/data-types",permalink:"/java-docs/documentation/data-types",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/data-types.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Datentypen",description:"",sidebar_position:30,tags:[]},sidebar:"documentationSidebar",previous:{title:"Aufbau einer Java-Klasse",permalink:"/java-docs/documentation/class-structure"},next:{title:"Datenobjekte",permalink:"/java-docs/documentation/data-objects"}},d={},o=[{value:"Primitive Datentypen",id:"primitive-datentypen",level:2},{value:"Komplexe Datentypen",id:"komplexe-datentypen",level:2},{value:"Generische Datentypen",id:"generische-datentypen",level:2},{value:"Abstrakte Datentypen",id:"abstrakte-datentypen",level:2}],s={toc:o},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Datentypen legen neben der Gr\xf6\xdfe des Arbeitsspeichers, die ein Datenobjekt ben\xf6tigt, auch die Art der Information fest, die im Datenobjekt gespeichert werden kann."),(0,r.kt)("h2",{id:"primitive-datentypen"},"Primitive Datentypen"),(0,r.kt)("p",null,"Primitve Datentypen sind fest in der Programmiersprache verankert und k\xf6nnen durch entsprechende Schl\xfcsselw\xf6rter angesprochen werden. Java kennt 8 solcher primitver Datentypen. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,r.kt)("th",{parentName:"tr",align:null},"Gr\xf6\xdfe"),(0,r.kt)("th",{parentName:"tr",align:null},"Wertbereich"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"true, false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"2 Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\\","u0000 bis ","\\","uFFFF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"1 Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"-128 bis +127")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short"),(0,r.kt)("td",{parentName:"tr",align:null},"2 Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"-32.768 bis +32.767")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"4 Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"-2.147.483.648 bis +2.147.483.647")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"-9.233.372.036.854.775.808 bis +9.233.372.036.854.775.807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"4 Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"+/-1,4e-45 bis +/-3,4028235e+38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"+/-4,9e-324 bis +/-1,7976931348623157e+308")))),(0,r.kt)("h2",{id:"komplexe-datentypen"},"Komplexe Datentypen"),(0,r.kt)("p",null,"Klassen, die \xfcber mehrere Attribute verf\xfcgen, k\xf6nnen im Gegensatz zu den primitiven Datentypen nicht nur eine Information speichern und werden daher als komplexe Datentypen bezeichnet."),(0,r.kt)("h2",{id:"generische-datentypen"},"Generische Datentypen"),(0,r.kt)("p",null,"Klassen, die \xfcber einen oder mehrere formale Typparameter verf\xfcgen, werden als generische Klassen bezeichnet. Generische Klassen k\xf6nnen mit verschiedenen Datentypen verwendet werden und erm\xf6glichen dadurch die Wiederverwendung von Code unter Beibehaltung\nstatischer Typsicherheit. Unter Typsicherheit versteht man, dass Datentypen gem\xe4\xdf ihrer Definition verwendet werden und dabei keine Typverletzungen auftreten. Bei statisch typisierten Sprachen findet die Typpr\xfcfung bei der Kompilierung statt. Beispiele f\xfcr\ngenerische Klassen sind die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList<E>")," sowie die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>"),"."),(0,r.kt)("h2",{id:"abstrakte-datentypen"},"Abstrakte Datentypen"),(0,r.kt)("p",null,"Abstrakte Datentypen sind Sammlungen von Daten samt den dazugeh\xf6rigen Operationen wie Einf\xfcgen, L\xf6schen etc. Beispiele f\xfcr abstrakte Datentypen sind Listen (z.B. die Klassen ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList<E>")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedList<E>"),"), Mengen (z.B. die Klassen ",(0,r.kt)("inlineCode",{parentName:"p"},"HashSet<E>")," und\n",(0,r.kt)("inlineCode",{parentName:"p"},"TreeSet<E>"),"), Warteschlangen (z.B. die Klassen ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedList<E>")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"PriorityQueue<E>"),") sowie Assoziativspeicher (z.B. die Klassen ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeMap<K, V>"),")."))}c.isMDXComponent=!0}}]);