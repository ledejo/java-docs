"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6383],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=a,s=m["".concat(p,".").concat(c)]||m[c]||k[c]||l;return n?r.createElement(s,i(i({ref:e},u),{},{components:n})):r.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7019:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Operatoren",description:"",sidebar_position:60,tags:["operators"]},i=void 0,o={unversionedId:"documentation/operators",id:"documentation/operators",title:"Operatoren",description:"",source:"@site/docs/documentation/operators.md",sourceDirName:"documentation",slug:"/documentation/operators",permalink:"/java-docs/documentation/operators",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/operators.md",tags:[{label:"operators",permalink:"/java-docs/tags/operators"}],version:"current",sidebarPosition:60,frontMatter:{title:"Operatoren",description:"",sidebar_position:60,tags:["operators"]},sidebar:"documentationSidebar",previous:{title:"Zeichenketten (Strings)",permalink:"/java-docs/documentation/strings"},next:{title:"Mathematische Berechnungen",permalink:"/java-docs/documentation/calculations"}},p={},d=[{value:"Arithmetische Operatoren",id:"arithmetische-operatoren",level:2},{value:"Bitweise Operatoren",id:"bitweise-operatoren",level:2},{value:"Logische Operatoren",id:"logische-operatoren",level:2},{value:"Vergleichsoperatoren",id:"vergleichsoperatoren",level:2},{value:"Priorit\xe4t von Operatoren",id:"priorit\xe4t-von-operatoren",level:2}],u={toc:d},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operatoren sind Zeichen, mit denen Daten manipuliert werden k\xf6nnen. Mit Hilfe\nvon Operanden und Operatoren k\xf6nnen beliebig komplexe Ausdr\xfccke abgebildet\nwerden. Operatoren mit einem, zwei oder drei Operanden werden als ",(0,a.kt)("em",{parentName:"p"},"un\xe4re\nOperatoren")," ",(0,a.kt)("em",{parentName:"p"},"bin\xe4re Operatoren")," und ",(0,a.kt)("em",{parentName:"p"},"tern\xe4re Operatoren")," bezeichnet. Man\nunterscheidet zudem zwischen arithmetischen, bitweisen und logischen Operatoren\nsowie Vergleichsoperatoren."),(0,a.kt)("h2",{id:"arithmetische-operatoren"},"Arithmetische Operatoren"),(0,a.kt)("p",null,"F\xfcr die arithmetischen Grundrechenarten stehen verschiedene arithmetische\nOperatoren zur Verf\xfcgung."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x + y"),(0,a.kt)("td",{parentName:"tr",align:null},"Addiere y zu x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x - y"),(0,a.kt)("td",{parentName:"tr",align:null},"Subtrahiere y von x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x ","*"," y"),(0,a.kt)("td",{parentName:"tr",align:null},"Multipliziere x mit y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x / y"),(0,a.kt)("td",{parentName:"tr",align:null},"Dividiere x durch y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x % y"),(0,a.kt)("td",{parentName:"tr",align:null},"Divisionsrest von x / y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x++"),(0,a.kt)("td",{parentName:"tr",align:null},"Inkrementiere x und gib den alten Wert an den Ausdruck zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"++x"),(0,a.kt)("td",{parentName:"tr",align:null},"Inkrementiere x und gib den neuen Wert an den Ausdruck zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x--"),(0,a.kt)("td",{parentName:"tr",align:null},"Dekrementiere x und gib den alten Wert an den Ausdruck zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--x"),(0,a.kt)("td",{parentName:"tr",align:null},"Dekrementiere x und gib den neuen Wert an den Ausdruck zur\xfcck")))),(0,a.kt)("h2",{id:"bitweise-operatoren"},"Bitweise Operatoren"),(0,a.kt)("p",null,"Bitweise Operatoren k\xf6nnen dazu verwendet werden, Bin\xe4roperationen auf Operanden\ndurchzuf\xfchren."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a & b"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweise AND-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a ","|"," b"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweise OR-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a ^ b"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweise XOR-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~a"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweises NOT")))),(0,a.kt)("h2",{id:"logische-operatoren"},"Logische Operatoren"),(0,a.kt)("p",null,"Logische Operatoren k\xf6nnen dazu verwendet werden, logische Aussagen miteinander\nzu verkn\xfcpfen."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a && b"),(0,a.kt)("td",{parentName:"tr",align:null},"Logische AND-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a ","|","|"," b"),(0,a.kt)("td",{parentName:"tr",align:null},"Logische OR-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"!a"),(0,a.kt)("td",{parentName:"tr",align:null},"Logisches NOT")))),(0,a.kt)("h2",{id:"vergleichsoperatoren"},"Vergleichsoperatoren"),(0,a.kt)("p",null,"Logische Bedingungen f\xfcr zwei Werte eines elementaren Datentyps k\xf6nnen durch\nVergleichsoperatoren realisiert werden."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x == y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist gleich y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x != y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist ungleich y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x ",">"," y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist gr\xf6\xdfer y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x < y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist kleiner y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x ",">","= y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist gr\xf6\xdfer gleich y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x <= y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist kleiner gleich y")))),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Da der Vergleichsoperator ",(0,a.kt)("inlineCode",{parentName:"p"},"==")," auf referenzielle Gleichheit pr\xfcft, sollte zum\nVergleich von zwei Objekten die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean equals(object: Object)"),"\nverwendet werden.")),(0,a.kt)("h2",{id:"priorit\xe4t-von-operatoren"},"Priorit\xe4t von Operatoren"),(0,a.kt)("p",null,"Operatoren werden gem\xe4\xdf ihrer Priorit\xe4t verarbeitet."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Priorit\xe4t"),(0,a.kt)("th",{parentName:"tr",align:null},"Operator"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"++, --, Vorzeichenplus, Vorzeichenminus, ","~",", !, (",(0,a.kt)("em",{parentName:"td"},"Datentyp"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"*",", /, %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"+, -")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"<, <=, ",">",", ",">","=")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"==, !=")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"&")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"^")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"&&")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"|","|")))))}k.isMDXComponent=!0}}]);