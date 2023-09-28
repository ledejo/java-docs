"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=o,p=u["".concat(l,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"Fast Food",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},i=void 0,s={unversionedId:"additional-material/exam-exercises1/fast-food",id:"additional-material/exam-exercises1/fast-food",title:"Fast Food",description:"",source:"@site/docs/additional-material/exam-exercises1/fast-food.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/fast-food",permalink:"/java-docs/additional-material/exam-exercises1/fast-food",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises1/fast-food.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"enumerations",permalink:"/java-docs/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"}],version:"current",frontMatter:{title:"Fast Food",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},sidebar:"additionalMaterialSidebar",previous:{title:"W\xfcrfelspiele",permalink:"/java-docs/additional-material/exam-exercises1/dice-games"},next:{title:"Geschenkesack",permalink:"/java-docs/additional-material/exam-exercises1/gift-bag"}},l={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse FastFood",id:"hinweise-zur-klasse-fastfood",level:2},{value:"Hinweise zur Klasse FastFoodShop",id:"hinweise-zur-klasse-fastfoodshop",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,o.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,o.kt)("mermaid",{value:"classDiagram\n    Food o-- FoodCategory\n    Food <|-- FastFood\n    FastFood <|-- Burger\n    FastFoodShop o-- FastFood\n\n    class FoodCategory {\n        <<enumeration>>\n        BEVERAGES = Getr\xe4nke, 1\n        VEGETABLES = Gem\xfcse, 2\n        FRUITS = Obst, 2\n        GRAIN_PRODUCTS = Getreideprodukte, 3\n        POTATOES = Kartoffeln, 3\n        DAIRY_PRODUCTS = Milchprodukte, 4\n        MEAT = Fleisch, 4\n        FISH = Fisch, 4\n        EGGS = Eier, 4\n        FATS_AND_OILS = Fette und \xd6le, 5\n        SWEETS = S\xfc\xdfigkeiten, 6\n        -description String\n        -points int\n    }\n\n    class Food {\n        -name String\n        -foodCategory FoodCategory\n        -calories double\n        +Food(name String, foodCategory FoodCategory, calories double)\n    }\n\n    class FastFood {\n        -isVegetarian boolean\n        -ratings ArrayList~Integer~\n        +FastFood(name String, foodCategory FoodCategory, calories double, isVegetarian boolean)\n        +addRating(rating int) void\n        +getAverageRating() double\n    }\n\n    class Burger {\n        +Burger(name String, calories double, isVegetarian boolean)\n    }\n\n    class FastFoodShop {\n        -name String\n        -fastFood ArrayList~FastFood~\n        +FastFoodShop(name String)\n        +addFastFood(fastFood FastFood) void\n        +rateFastFood(fastFood FastFood, rating int) void\n        +getBestRatedBurger() Burger\n    }"}),(0,o.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,o.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,o.kt)("h2",{id:"hinweise-zur-klasse-fastfood"},"Hinweise zur Klasse FastFood"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"void addRating(rating: int)")," soll den Bewertungen (",(0,o.kt)("inlineCode",{parentName:"li"},"ratings"),") die eingehende Bewertung hinzuf\xfcgen"),(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"double getAverageRating()")," soll die durchschnittliche Bewertung zur\xfcckgeben")),(0,o.kt)("h2",{id:"hinweise-zur-klasse-fastfoodshop"},"Hinweise zur Klasse FastFoodShop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"void addFastFood(fastFood: FastFood)")," soll das eingehende Fast Food zum Sortiment hinzuf\xfcgen"),(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"void rateFastFood(fastFood: FastFood, rating: int)")," soll dem eingehenden Fast Food die eingehende Bewertung hinzuf\xfcgen"),(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"Burger getBestRatedBurger()")," soll den Burger mit der h\xf6chsten Bewertung zur\xfcckgeben")))}m.isMDXComponent=!0}}]);