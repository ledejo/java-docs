"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9302],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>g});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),d=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=t,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(g,s(s({ref:r},c),{},{components:n})):a.createElement(g,s({ref:r},c))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:t,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1606:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),t=(n(7294),n(3905));const i={title:"W\xf6rterbuch",description:"",tags:["interfaces","comparators","exceptions","records","maps","optionals","io-streams"]},s=void 0,o={unversionedId:"exam-exercises/exam-exercises-java2/dictionary",id:"exam-exercises/exam-exercises-java2/dictionary",title:"W\xf6rterbuch",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/dictionary.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/dictionary",permalink:"/java-docs/exam-exercises/exam-exercises-java2/dictionary",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/dictionary.md",tags:[{label:"interfaces",permalink:"/java-docs/tags/interfaces"},{label:"comparators",permalink:"/java-docs/tags/comparators"},{label:"exceptions",permalink:"/java-docs/tags/exceptions"},{label:"records",permalink:"/java-docs/tags/records"},{label:"maps",permalink:"/java-docs/tags/maps"},{label:"optionals",permalink:"/java-docs/tags/optionals"},{label:"io-streams",permalink:"/java-docs/tags/io-streams"}],version:"current",frontMatter:{title:"W\xf6rterbuch",description:"",tags:["interfaces","comparators","exceptions","records","maps","optionals","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Tante-Emma-Laden",permalink:"/java-docs/exam-exercises/exam-exercises-java2/corner-shop"},next:{title:"Personalverwaltung",permalink:"/java-docs/exam-exercises/exam-exercises-java2/human-resources"}},l={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Word",id:"hinweis-zur-klasse-word",level:2},{value:"Hinweise zur Klasse Dictionary",id:"hinweise-zur-klasse-dictionary",level:2},{value:"Beispielhafter Aufbau der W\xf6rterdatei",id:"beispielhafter-aufbau-der-w\xf6rterdatei",level:2}],c={toc:d},u="wrapper";function p(e){let{components:r,...n}=e;return(0,t.kt)(u,(0,a.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse und/oder eine Testklasse."),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("mermaid",{value:"classDiagram\n    Comparable~T~ <|.. Word\n    Word o-- Language\n    Dictionary o-- Word\n    Dictionary o-- Language\n\n    class Word {\n        <<record>>\n        -value String\n        -language Language\n        +compareTo(other Word) int\n    }\n\n    class Comparable~T~ {\n        <<interface>>\n        +compareTo(t T) int\n    }\n\n    class Language {\n        <<enumeration>>\n        DE = DE, Deutsch\n        EN = EN, Englisch\n        -code String\n        -description String\n    }\n\n    class Dictionary {\n        <<record>>\n        -sourceLanguage Language\n        -targetLanguage Language\n        -entries Map~Word&#44&#160Word~\n        +addEntry(sourceWord Word, targetWord Word) void\n        +importEntries(file File) void\n        +getTranslation(word String) Optional~String~\n    }"}),(0,t.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,t.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,t.kt)("h2",{id:"hinweis-zur-klasse-word"},"Hinweis zur Klasse Word"),(0,t.kt)("p",null,"Die Methode ",(0,t.kt)("inlineCode",{parentName:"p"},"int compareTo(other: Word)")," soll so implementiert werden, dass damit W\xf6rter aufsteigend nach ihrem Wert sortiert werden k\xf6nnen."),(0,t.kt)("h2",{id:"hinweise-zur-klasse-dictionary"},"Hinweise zur Klasse Dictionary"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void addEntry(sourceWord: Word, targetWord: Word)")," soll den Eintr\xe4gen des W\xf6rterbuches (",(0,t.kt)("inlineCode",{parentName:"li"},"entries"),") die eingehenden W\xf6rter als Eintrag hinzuf\xfcgen. F\xfcr\nden Fall, dass die Sprache des ersten eingehenden Wortes nicht der Quellsprache (",(0,t.kt)("inlineCode",{parentName:"li"},"sourceLanguage"),") entspricht, oder die Sprache des zweiten eingehenden Wortes\nnicht der Zielsprache (",(0,t.kt)("inlineCode",{parentName:"li"},"targetLanguage"),") entspricht, soll die Ausnahme ",(0,t.kt)("inlineCode",{parentName:"li"},"InvalidLanguageException")," ausgel\xf6st werden"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void importEntries(file: File)")," soll den Eintr\xe4gen des W\xf6rterbuches (",(0,t.kt)("inlineCode",{parentName:"li"},"entries"),") die W\xf6rter der eingehenden Datei als Eintr\xe4ge hinzuf\xfcgen. Die Ausnahme\n",(0,t.kt)("inlineCode",{parentName:"li"},"FileNotFoundException")," soll dabei weitergeleitet werden"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"Optional<String> getTranslation(word: String)")," soll die \xdcbersetzung zur eingehenden Zeichenkette als Optional zur\xfcckgeben")),(0,t.kt)("h2",{id:"beispielhafter-aufbau-der-w\xf6rterdatei"},"Beispielhafter Aufbau der W\xf6rterdatei"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"DE;Haus;EN;House\nDE;Maus;EN;Mouse\nDE;Baum;EN;Tree\n")))}p.isMDXComponent=!0}}]);