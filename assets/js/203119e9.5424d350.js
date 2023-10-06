"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const r={title:"UnitTests04",description:""},s=void 0,a={unversionedId:"exercises/unit-tests/unit-tests04",id:"exercises/unit-tests/unit-tests04",title:"UnitTests04",description:"",source:"@site/docs/exercises/unit-tests/unit-tests04.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests04",permalink:"/java-docs/exercises/unit-tests/unit-tests04",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/unit-tests/unit-tests04.md",tags:[],version:"current",frontMatter:{title:"UnitTests04",description:""},sidebar:"exercisesSidebar",previous:{title:"UnitTests03",permalink:"/java-docs/exercises/unit-tests/unit-tests03"},next:{title:"Datenstr\xf6me (IO-Streams)",permalink:"/java-docs/exercises/io-streams/"}},l={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <code>BookCollectionTest</code>",id:"hinweise-zur-klasse-bookcollectiontest",level:2},{value:"Hinweis",id:"hinweis",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Erstelle die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"BookCollectionTest")," anhand des abgebildeten\nKlassendiagramms."),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("mermaid",{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n    BookCollectionTest o-- BookCollection\n\n    class Author {\n        <<record>>\n        -name String\n    }\n\n    class Book {\n        <<record>>\n        -title String\n    }\n\n    class BookCollection {\n        <<record>>\n        -collection Map~Author&#44&#160List~Book~~\n        +addAuthor(author Author) void\n        +addBook(author Author, book Book) void\n        +getMostDiligentAuthor() Optional~Author~\n        +getBookByTitle(title String) Optional~Book~\n    }\n\n    class BookCollectionTest {\n        -bookCollection BookCollection\n        -stephenKing Author\n        -georgeRRMartin Author\n        -it Book\n        -aGameOfThrones Book\n        -aClashOfKings Book\n        +setUp void\n        +testAddAuthor() void\n        +testAddBook() void\n        +testGetMostDiligentAuthor1() void\n        +testGetMostDiligentAuthor2() void\n        +testGetBookByTitle() void\n    }"}),(0,i.kt)("h2",{id:"hinweise-zur-klasse-bookcollectiontest"},"Hinweise zur Klasse ",(0,i.kt)("inlineCode",{parentName:"h2"},"BookCollectionTest")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Lebenszyklus-Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void setUp()")," soll den Attributen der Testklasse\npassende Werte zuweisen"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testAddAuthor()")," soll pr\xfcfen, ob beim Ausf\xfchren der\nMethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void addAuthor(author: Author)")," mit einem Autoren, der bereits in der\nB\xfcchersammlung vorhanden ist, die Ausnahme ",(0,i.kt)("inlineCode",{parentName:"li"},"DuplicateKeyException")," ausgel\xf6st\nwird"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testAddBook()")," soll pr\xfcfen, ob nach dem Ausf\xfchren der\nMethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void addBook(author: Author, book: Book)")," der entsprechende Eintrag\naktualisiert wurde"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testGetMostDiligentAuthor1()")," soll pr\xfcfen, ob beim\nAusf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"Optional<Author> getMostDiligentAuthor()")," auf eine\nbef\xfcllte B\xfcchersammlung der Autor mit den meisten B\xfcchern in der\nB\xfcchersammlung als Optional zur\xfcckgegeben wird"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testGetMostDiligentAuthor2()")," soll pr\xfcfen, ob beim\nAusf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"Optional<Author> getMostDiligentAuthor()")," auf eine\nleere B\xfcchersammlung ein leeres Optional zur\xfcckgegeben wird"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testGetBookByTitle()")," soll pr\xfcfen, ob beim Ausf\xfchren der\nMethode ",(0,i.kt)("inlineCode",{parentName:"li"},"Optional<Book> getBookByTitle(title: String)")," mit einem Buchtitel zu\neinem vorhandenen Buch das entsprechende Buch als Optional zur\xfcckgegeben wird\nund ob beim Ausf\xfchren der Methode\n",(0,i.kt)("inlineCode",{parentName:"li"},"Optional<Book> getBookByTitle(title: String)")," mit einem Buchtitel zu einem\nnicht vorhandenen Buch ein leeres Optional zur\xfcckgegeben wird")),(0,i.kt)("h2",{id:"hinweis"},"Hinweis"),(0,i.kt)("p",null,"Verweden die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"BookCollection")," aus \xdcbungsaufgabe\n",(0,i.kt)("a",{parentName:"p",href:"/java-docs/exercises/optionals/optionals01"},"Optionals01"),"."))}p.isMDXComponent=!0}}]);