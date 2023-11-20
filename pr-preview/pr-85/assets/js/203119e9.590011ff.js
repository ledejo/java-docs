"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[626],{11730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(85893),s=n(11151);const i={title:"UnitTests04",description:""},r=void 0,l={id:"exercises/unit-tests/unit-tests04",title:"UnitTests04",description:"",source:"@site/docs/exercises/unit-tests/unit-tests04.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests04",permalink:"/java-docs/pr-preview/pr-85/exercises/unit-tests/unit-tests04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/unit-tests/unit-tests04.md",tags:[],version:"current",frontMatter:{title:"UnitTests04",description:""},sidebar:"exercisesSidebar",previous:{title:"UnitTests03",permalink:"/java-docs/pr-preview/pr-85/exercises/unit-tests/unit-tests03"},next:{title:"Datenstr\xf6me (IO-Streams)",permalink:"/java-docs/pr-preview/pr-85/exercises/io-streams/"}},d={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>BookCollectionTest</em>",id:"hinweise-zur-klasse-bookcollectiontest",level:2},{value:"Hinweis",id:"hinweis",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Erstelle die JUnit5-Testklasse ",(0,o.jsx)(t.code,{children:"BookCollectionTest"})," anhand des abgebildeten\nKlassendiagramms."]}),"\n",(0,o.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,o.jsx)(t.mermaid,{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n    BookCollectionTest o-- BookCollection\n\n    class Author {\n        <<record>>\n        name: String\n    }\n\n    class Book {\n        <<record>>\n        title: String\n    }\n\n    class BookCollection {\n        <<record>>\n        collection: Map~Author&sbquo; List~Book~~\n        +addAuthor(author: Author) void\n        +addBook(author: Author, book: Book) void\n        +getMostDiligentAuthor() Optional~Author~\n        +getBookByTitle(title: String) Optional~Book~\n    }\n\n    class BookCollectionTest {\n        -bookCollection: BookCollection\n        -stephenKing: Author\n        -georgeRRMartin: Author\n        -it: Book\n        -aGameOfThrones: Book\n        -aClashOfKings: Book\n        +setUp void\n        +testAddAuthor() void\n        +testAddBook() void\n        +testGetMostDiligentAuthor1() void\n        +testGetMostDiligentAuthor2() void\n        +testGetBookByTitle() void\n    }"}),"\n",(0,o.jsxs)(t.h2,{id:"hinweise-zur-klasse-bookcollectiontest",children:["Hinweise zur Klasse ",(0,o.jsx)(t.em,{children:"BookCollectionTest"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Die Lebenszyklus-Methode ",(0,o.jsx)(t.code,{children:"void setUp()"})," soll den Attributen der Testklasse\npassende Werte zuweisen"]}),"\n",(0,o.jsxs)(t.li,{children:["Die Testmethode ",(0,o.jsx)(t.code,{children:"void testAddAuthor()"})," soll pr\xfcfen, ob beim Ausf\xfchren der\nMethode ",(0,o.jsx)(t.code,{children:"void addAuthor(author: Author)"})," mit einem Autoren, der bereits in der\nB\xfcchersammlung vorhanden ist, die Ausnahme ",(0,o.jsx)(t.code,{children:"DuplicateKeyException"})," ausgel\xf6st\nwird"]}),"\n",(0,o.jsxs)(t.li,{children:["Die Testmethode ",(0,o.jsx)(t.code,{children:"void testAddBook()"})," soll pr\xfcfen, ob nach dem Ausf\xfchren der\nMethode ",(0,o.jsx)(t.code,{children:"void addBook(author: Author, book: Book)"})," der entsprechende Eintrag\naktualisiert wurde"]}),"\n",(0,o.jsxs)(t.li,{children:["Die Testmethode ",(0,o.jsx)(t.code,{children:"void testGetMostDiligentAuthor1()"})," soll pr\xfcfen, ob beim\nAusf\xfchren der Methode ",(0,o.jsx)(t.code,{children:"Optional<Author> getMostDiligentAuthor()"})," auf eine\nbef\xfcllte B\xfcchersammlung der Autor mit den meisten B\xfcchern in der\nB\xfcchersammlung als Optional zur\xfcckgegeben wird"]}),"\n",(0,o.jsxs)(t.li,{children:["Die Testmethode ",(0,o.jsx)(t.code,{children:"void testGetMostDiligentAuthor2()"})," soll pr\xfcfen, ob beim\nAusf\xfchren der Methode ",(0,o.jsx)(t.code,{children:"Optional<Author> getMostDiligentAuthor()"})," auf eine\nleere B\xfcchersammlung ein leeres Optional zur\xfcckgegeben wird"]}),"\n",(0,o.jsxs)(t.li,{children:["Die Testmethode ",(0,o.jsx)(t.code,{children:"void testGetBookByTitle()"})," soll pr\xfcfen, ob beim Ausf\xfchren der\nMethode ",(0,o.jsx)(t.code,{children:"Optional<Book> getBookByTitle(title: String)"})," mit einem Buchtitel zu\neinem vorhandenen Buch das entsprechende Buch als Optional zur\xfcckgegeben wird\nund ob beim Ausf\xfchren der Methode\n",(0,o.jsx)(t.code,{children:"Optional<Book> getBookByTitle(title: String)"})," mit einem Buchtitel zu einem\nnicht vorhandenen Buch ein leeres Optional zur\xfcckgegeben wird"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,o.jsxs)(t.p,{children:["Verweden die Klasse ",(0,o.jsx)(t.code,{children:"BookCollection"})," aus \xdcbungsaufgabe\n",(0,o.jsx)(t.a,{href:"../optionals/optionals01",children:"Optionals01"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var o=n(67294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);