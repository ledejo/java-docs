"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[45],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>g});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),p=r,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return i?t.createElement(g,o(o({ref:n},c),{},{components:i})):t.createElement(g,o({ref:n},c))}));function g(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=i[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9409:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(7462),r=(i(7294),i(3905));const a={title:"Pl\xe4tzchendose",description:"",tags:["oo","enumerations","inheritance","polymorphy","io-streams"]},o=void 0,l={unversionedId:"additional-material/exam-exercises1/cookie-jar",id:"additional-material/exam-exercises1/cookie-jar",title:"Pl\xe4tzchendose",description:"",source:"@site/docs/additional-material/exam-exercises1/cookie-jar.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/cookie-jar",permalink:"/java-docs/additional-material/exam-exercises1/cookie-jar",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises1/cookie-jar.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"enumerations",permalink:"/java-docs/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"},{label:"io-streams",permalink:"/java-docs/tags/io-streams"}],version:"current",frontMatter:{title:"Pl\xe4tzchendose",description:"",tags:["oo","enumerations","inheritance","polymorphy","io-streams"]},sidebar:"additionalMaterialSidebar",previous:{title:"Weihnachtsbaum",permalink:"/java-docs/additional-material/exam-exercises1/christmas-tree"},next:{title:"Kreatur",permalink:"/java-docs/additional-material/exam-exercises1/creature"}},s={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Cookie",id:"hinweis-zur-klasse-cookie",level:2},{value:"Hinweis zur Klasse StuffedCookie",id:"hinweis-zur-klasse-stuffedcookie",level:2},{value:"Hinweis zur Klasse Recipe",id:"hinweis-zur-klasse-recipe",level:2},{value:"Hinweise zur Klasse CookieJar",id:"hinweise-zur-klasse-cookiejar",level:2},{value:"Hinweis zur Klasse IngredientsReader",id:"hinweis-zur-klasse-ingredientsreader",level:2},{value:"Beispielhafter Aufbau der Zutatendatei",id:"beispielhafter-aufbau-der-zutatendatei",level:2}],c={toc:d},u="wrapper";function m(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("mermaid",{value:"classDiagram\n    CookieJar o-- Cookie\n    Cookie <|-- StuffedCookie\n    Cookie o-- Recipe\n    StuffedCookie o-- Recipe\n    Recipe o-- Ingredient\n\n    class CookieJar {\n        -cookies ArrayList~Cookie~\n        +CookieJar()\n        +addCookie(cookie Cookie) void\n        +getStuffedCookie() StuffedCookie\n        +getCookieByName(name String) Cookie\n    }\n\n    class Cookie {\n        -name String\n        -dough Recipe\n        +Cookie(name String, dough Recipe)\n        +getIngredients() ArrayList~Ingredient~\n    }\n\n    class StuffedCookie {\n        -jam Recipe\n        +StuffedCookie(name String, dough Recipe, jam Recipe)\n        +getIngredients() ArrayList~Ingredient~\n    }\n\n    class Recipe {\n        -name String\n        -ingredients ArrayList~Ingredient~\n        +Recipe(name String)\n        +addIngredient(ingredient Ingredient) void\n    }\n\n    class Ingredient {\n        -name String\n        +Ingredient(name String)\n    }\n\n    class IngredientsReader {\n        +readIngredients(file File) ArrayList~Ingredient~\n    }"}),(0,r.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,r.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden"),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h2",{id:"hinweis-zur-klasse-cookie"},"Hinweis zur Klasse Cookie"),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList<Ingredient> getIngredients()")," soll alle Zutaten des Teigs zur\xfcckgeben."),(0,r.kt)("h2",{id:"hinweis-zur-klasse-stuffedcookie"},"Hinweis zur Klasse StuffedCookie"),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList<Ingredient> getIngredients()")," soll alle Zutaten des Teigs sowie der F\xfcllung zur\xfcckgeben."),(0,r.kt)("h2",{id:"hinweis-zur-klasse-recipe"},"Hinweis zur Klasse Recipe"),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"void addIngredient(ingredient: Ingredient)")," soll dem Rezept die eingehende Zutat hinzuf\xfcgen."),(0,r.kt)("h2",{id:"hinweise-zur-klasse-cookiejar"},"Hinweise zur Klasse CookieJar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addCookie(cookie: Cookie)")," soll der Pl\xe4tzchendose das eingehende Pl\xe4tzchen hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"StuffedCookie getStuffedCookie()")," soll ein beliebiges gef\xfclltes Pl\xe4tzchen der Pl\xe4tzchendose zur\xfcckgeben"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Cookie getCookieByName(name: String)")," soll ein Pl\xe4tzchen der Pl\xe4tzchendose zum eingehenden Namen zur\xfcckgeben")),(0,r.kt)("h2",{id:"hinweis-zur-klasse-ingredientsreader"},"Hinweis zur Klasse IngredientsReader"),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList<Ingredient> readIngredients()")," soll alle Zutaten der eingehenden Datei auslesen und zur\xfcckgeben."),(0,r.kt)("h2",{id:"beispielhafter-aufbau-der-zutatendatei"},"Beispielhafter Aufbau der Zutatendatei"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"200g Butter\n300g Mehl\n1 Prise Salz\n100g gemahlene Mandeln\n150g Zucker\n1 Pck. Vanillezucker\n2 Eier\n")))}m.isMDXComponent=!0}}]);