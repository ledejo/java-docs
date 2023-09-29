"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5006],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,v=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return t?n.createElement(v,s(s({ref:r},c),{},{components:t})):n.createElement(v,s({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3591:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const i={title:"Kreatur",description:"",tags:["oo","enumerations","io-streams"]},s=void 0,o={unversionedId:"exam-exercises/exam-exercises-java1/creature",id:"exam-exercises/exam-exercises-java1/creature",title:"Kreatur",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/creature.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/creature",permalink:"/java-docs/exam-exercises/exam-exercises-java1/creature",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/creature.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"enumerations",permalink:"/java-docs/tags/enumerations"},{label:"io-streams",permalink:"/java-docs/tags/io-streams"}],version:"current",frontMatter:{title:"Kreatur",description:"",tags:["oo","enumerations","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Pl\xe4tzchendose",permalink:"/java-docs/exam-exercises/exam-exercises-java1/cookie-jar"},next:{title:"W\xfcrfelspiele",permalink:"/java-docs/exam-exercises/exam-exercises-java1/dice-games"}},l={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse Creature",id:"hinweise-zur-klasse-creature",level:2},{value:"Hinweis zur Klasse CreaturesReader",id:"hinweis-zur-klasse-creaturesreader",level:2},{value:"Beispielhafter Aufbau der Kreaturendatei",id:"beispielhafter-aufbau-der-kreaturendatei",level:2}],c={toc:u},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("mermaid",{value:"classDiagram\n    Creature o-- Position\n    Creature o-- Type\n\n    class Creature {\n        -name String\n        -position Position\n        -type Type\n        +Creature(name String, position Position, type Type)\n        +moveUp() void\n        +moveDown() void\n        +moveLeft() void\n        +moveRight() void\n    }\n\n    class Type {\n        <<enumeration>>\n        MONSTER\n        SKELETON\n        VAMPIRE\n        ZOMBIE\n    }\n\n    class Position {\n        -x int\n        -y int\n        +Position(x int, y int)\n        +increaseY() void\n        +decreaseY() void\n        +increaseX() void\n        +decreaseX() void\n    }\n\n    class CreaturesReader {\n        +getCreatures(file File) ArrayList~Creature~\n    }"}),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-creature"},"Hinweise zur Klasse Creature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void moveUp()")," soll den Y-Wert der Position inkrementieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void moveDown()")," soll den Y-Wert der Position dekrementieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void moveLeft()")," soll den X-Wert der Position dekrementieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void moveRigth()")," soll den X-Wert der Position inkrementieren")),(0,a.kt)("h2",{id:"hinweis-zur-klasse-creaturesreader"},"Hinweis zur Klasse CreaturesReader"),(0,a.kt)("p",null,"Die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayList<Creature> getCreatures(file: File)")," soll alle Kreaturen der eingehenden Datei zur\xfcckgeben und die Kreaturen die Bewegungen der eingehenden Datei ausf\xfchren lassen."),(0,a.kt)("h2",{id:"beispielhafter-aufbau-der-kreaturendatei"},"Beispielhafter Aufbau der Kreaturendatei"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Frankensteins Monster;MONSTER;0;5\nDOWN;DOWN;LEFT;LEFT\nDracula;VAMPIRE;3;3\nUP;RIGHT;UP\nKurt;ZOMBIE;-2;-2\nDOWN\n")))}m.isMDXComponent=!0}}]);