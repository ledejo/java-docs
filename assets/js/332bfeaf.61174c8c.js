"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6693],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"Einkaufsportal",description:"",tags:["interfaces","records","inner-classes","generics"]},s=void 0,l={unversionedId:"exam-exercises/exam-exercises-java2/shopping-portal",id:"exam-exercises/exam-exercises-java2/shopping-portal",title:"Einkaufsportal",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/shopping-portal.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/shopping-portal",permalink:"/java-docs/exam-exercises/exam-exercises-java2/shopping-portal",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/shopping-portal.md",tags:[{label:"interfaces",permalink:"/java-docs/tags/interfaces"},{label:"records",permalink:"/java-docs/tags/records"},{label:"inner-classes",permalink:"/java-docs/tags/inner-classes"},{label:"generics",permalink:"/java-docs/tags/generics"}],version:"current",frontMatter:{title:"Einkaufsportal",description:"",tags:["interfaces","records","inner-classes","generics"]},sidebar:"examExercisesSidebar",previous:{title:"Planeten",permalink:"/java-docs/exam-exercises/exam-exercises-java2/planets"},next:{title:"Raumstation",permalink:"/java-docs/exam-exercises/exam-exercises-java2/space-station"}},o={},p=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Item",id:"hinweis-zur-klasse-item",level:2},{value:"Hinweise zur Klasse ShoppingCart",id:"hinweise-zur-klasse-shoppingcart",level:2},{value:"Hinweise zur Klasse ShoppingPortal",id:"hinweise-zur-klasse-shoppingportal",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse und/oder eine Testklasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/212542562-b4a3c38a-6a91-47f7-a01e-99f0c5ce5e70.png",alt:"image"})),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,a.kt)("h2",{id:"hinweis-zur-klasse-item"},"Hinweis zur Klasse Item"),(0,a.kt)("p",null,"Die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"double getSubTotal()")," soll die Zwischensumme des Warenkorbeintrags gem\xe4\xdf der Formel ",(0,a.kt)("em",{parentName:"p"},"Produktpreis ","*"," Anzahl")," zur\xfcckgeben."),(0,a.kt)("h2",{id:"hinweise-zur-klasse-shoppingcart"},"Hinweise zur Klasse ShoppingCart"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addItem(sellable: T, amount: int)")," soll den Eintr\xe4gen des Warenkorbs (",(0,a.kt)("inlineCode",{parentName:"li"},"items"),") das eingehende verk\xe4ufliche Objekt und die eingehende Anzahl als Eintrag hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void removeItem(sellable: T)")," soll das eingehende verk\xe4ufliche Objekt aus den Eintr\xe4gen des Warenkorbs (",(0,a.kt)("inlineCode",{parentName:"li"},"items"),") entfernen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"double getTotal()")," soll die Gesamtsumme des Warenkorbs zur\xfcckgeben")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-shoppingportal"},"Hinweise zur Klasse ShoppingPortal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addProductToShoppingCart(product: Product, amount: int)")," soll dem Warenkorb (",(0,a.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") das eingehende Produkt und die eingehende Anzahl als\nEintrag hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void removeProductFromShoppingCart(product: Product)")," soll das eingehende Produkt aus dem Warenkorb (",(0,a.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") entfernen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void clearShoppingCart()")," soll alle Eintr\xe4ge des Warenkorbs (",(0,a.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") entfernen")))}m.isMDXComponent=!0}}]);