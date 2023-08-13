"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Einkaufsportal",description:"",tags:["interfaces","records","inner-classes","generics"]},l=void 0,s={unversionedId:"additional-material/exam-exercises2/shopping-portal",id:"additional-material/exam-exercises2/shopping-portal",title:"Einkaufsportal",description:"",source:"@site/docs/additional-material/exam-exercises2/shopping-portal.md",sourceDirName:"additional-material/exam-exercises2",slug:"/additional-material/exam-exercises2/shopping-portal",permalink:"/java-docs/additional-material/exam-exercises2/shopping-portal",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises2/shopping-portal.md",tags:[{label:"interfaces",permalink:"/java-docs/tags/interfaces"},{label:"records",permalink:"/java-docs/tags/records"},{label:"inner-classes",permalink:"/java-docs/tags/inner-classes"},{label:"generics",permalink:"/java-docs/tags/generics"}],version:"current",frontMatter:{title:"Einkaufsportal",description:"",tags:["interfaces","records","inner-classes","generics"]},sidebar:"additionalMaterialSidebar",previous:{title:"Planeten",permalink:"/java-docs/additional-material/exam-exercises2/planets"},next:{title:"Raumstation",permalink:"/java-docs/additional-material/exam-exercises2/space-station"}},o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Item",id:"hinweis-zur-klasse-item",level:2},{value:"Hinweise zur Klasse ShoppingCart",id:"hinweise-zur-klasse-shoppingcart",level:2},{value:"Hinweise zur Klasse ShoppingPortal",id:"hinweise-zur-klasse-shoppingportal",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse und/oder eine Testklasse."),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/212542562-b4a3c38a-6a91-47f7-a01e-99f0c5ce5e70.png",alt:"image"})),(0,r.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,r.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,r.kt)("h2",{id:"hinweis-zur-klasse-item"},"Hinweis zur Klasse Item"),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"double getSubTotal()")," soll die Zwischensumme des Warenkorbeintrags gem\xe4\xdf der Formel ",(0,r.kt)("em",{parentName:"p"},"Produktpreis * Anzahl")," zur\xfcckgeben."),(0,r.kt)("h2",{id:"hinweise-zur-klasse-shoppingcart"},"Hinweise zur Klasse ShoppingCart"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addItem(sellable: T, amount: int)")," soll den Eintr\xe4gen des Warenkorbs (",(0,r.kt)("inlineCode",{parentName:"li"},"items"),") das eingehende verk\xe4ufliche Objekt und die eingehende Anzahl als Eintrag hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void removeItem(sellable: T)")," soll das eingehende verk\xe4ufliche Objekt aus den Eintr\xe4gen des Warenkorbs (",(0,r.kt)("inlineCode",{parentName:"li"},"items"),") entfernen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"double getTotal()")," soll die Gesamtsumme des Warenkorbs zur\xfcckgeben")),(0,r.kt)("h2",{id:"hinweise-zur-klasse-shoppingportal"},"Hinweise zur Klasse ShoppingPortal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addProductToShoppingCart(product: Product, amount: int)")," soll dem Warenkorb (",(0,r.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") das eingehende Produkt und die eingehende Anzahl als\nEintrag hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void removeProductFromShoppingCart(product: Product)")," soll das eingehende Produkt aus dem Warenkorb (",(0,r.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") entfernen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void clearShoppingCart()")," soll alle Eintr\xe4ge des Warenkorbs (",(0,r.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") entfernen")))}m.isMDXComponent=!0}}]);