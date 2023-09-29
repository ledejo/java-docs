"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[93],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>g});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return t?a.createElement(g,o(o({ref:r},m),{},{components:t})):a.createElement(g,o({ref:r},m))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6208:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const i={title:"Lego-Baustein",description:"",tags:["inheritance","polymorphy","interfaces","comparators"]},o=void 0,s={unversionedId:"exam-exercises/exam-exercises-java2/lego-brick",id:"exam-exercises/exam-exercises-java2/lego-brick",title:"Lego-Baustein",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/lego-brick.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/lego-brick",permalink:"/java-docs/exam-exercises/exam-exercises-java2/lego-brick",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/lego-brick.md",tags:[{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"},{label:"interfaces",permalink:"/java-docs/tags/interfaces"},{label:"comparators",permalink:"/java-docs/tags/comparators"}],version:"current",frontMatter:{title:"Lego-Baustein",description:"",tags:["inheritance","polymorphy","interfaces","comparators"]},sidebar:"examExercisesSidebar",previous:{title:"Stellenangebot",permalink:"/java-docs/exam-exercises/exam-exercises-java2/job-offer"},next:{title:"Bibliothek",permalink:"/java-docs/exam-exercises/exam-exercises-java2/library"}},l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse LegoBrickVolumeComparator",id:"hinweis-zur-klasse-legobrickvolumecomparator",level:2}],m={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse und/oder eine Testklasse."),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/212029643-3c811cad-8f71-482b-88b1-547e3983a944.png",alt:"image"})),(0,n.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,n.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,n.kt)("h2",{id:"hinweis-zur-klasse-legobrickvolumecomparator"},"Hinweis zur Klasse LegoBrickVolumeComparator"),(0,n.kt)("p",null,"Die Methode ",(0,n.kt)("inlineCode",{parentName:"p"},"int compare(legoBrick1: LegoBrick, legoBrick2: LegoBrick)")," soll so implementiert werden, dass damit Lego-Bausteine aufsteigend nach ihrem Volumen sortiert werden k\xf6nnen."))}u.isMDXComponent=!0}}]);