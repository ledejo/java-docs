"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,h=u["".concat(o,".").concat(p)]||u[p]||c[p]||r;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={title:"Kassensystem",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},s=void 0,l={unversionedId:"additional-material/exam-exercises1/cashier-system",id:"additional-material/exam-exercises1/cashier-system",title:"Kassensystem",description:"",source:"@site/docs/additional-material/exam-exercises1/cashier-system.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/cashier-system",permalink:"/java-docs/additional-material/exam-exercises1/cashier-system",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises1/cashier-system.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"enumerations",permalink:"/java-docs/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"}],version:"current",frontMatter:{title:"Kassensystem",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},sidebar:"additionalMaterialSidebar",previous:{title:"Kartenausteiler",permalink:"/java-docs/additional-material/exam-exercises1/cards-dealer"},next:{title:"Weihnachtsbaum",permalink:"/java-docs/additional-material/exam-exercises1/christmas-tree"}},o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Item",id:"hinweis-zur-klasse-item",level:2},{value:"Hinweise zur Klasse ShoppingCart",id:"hinweise-zur-klasse-shoppingcart",level:2},{value:"Hinweise zur Klasse CashierSystem",id:"hinweise-zur-klasse-cashiersystem",level:2}],m={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209168669-32e3b92c-94bd-4b33-9973-0806ea0c63dd.png",alt:"image"})),(0,i.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,i.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,i.kt)("h2",{id:"hinweis-zur-klasse-item"},"Hinweis zur Klasse Item"),(0,i.kt)("p",null,"Die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"double getSubTotal()")," soll die Zwischensumme gem\xe4\xdf der Formel ",(0,i.kt)("em",{parentName:"p"},"Anzahl * Preis")," zur\xfcckgeben"),(0,i.kt)("h2",{id:"hinweise-zur-klasse-shoppingcart"},"Hinweise zur Klasse ShoppingCart"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void createItem(goods: Goods, amount: int)")," soll den Eintr\xe4gen des Warenkorbs (",(0,i.kt)("inlineCode",{parentName:"li"},"items"),") die eingehende Ware und die eingehende Anzahl als Eintrag hinzuf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"double getTotal()")," soll die Gesamtsumme zur\xfcckgeben")),(0,i.kt)("h2",{id:"hinweise-zur-klasse-cashiersystem"},"Hinweise zur Klasse CashierSystem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void addGoods(goods: Goods)")," soll der Warenliste (",(0,i.kt)("inlineCode",{parentName:"li"},"goods"),") die eingehende Ware hinzuf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void addCashier(cashier: Cashier)")," soll der Kassiererliste (",(0,i.kt)("inlineCode",{parentName:"li"},"cashiers"),") den eingehenden Kassierer hinzuf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void login(id: int)"),' soll den Kassierer zur eingehenden Kassierernummer an der Kasse "registrieren"'),(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void createShoppingCart()")," soll an der Kasse einen neuen Warenkorb erstellen"),(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void addItem(id: int, amount: int)")," soll dem Warenkorb (",(0,i.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") anhand der eingehenden Produktnummer und anhand der eingehenden Anzahl\neinen neuen Warenkorbeintrag hinzuf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void printBon()")," soll alle relevanten Informationen zum Warenkorb auf der Konsole ausgeben")))}c.isMDXComponent=!0}}]);