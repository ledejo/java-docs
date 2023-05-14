"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,h=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={title:"Weihnachtsbaum",description:"",tags:["oo","inheritance","polymorphy"]},l=void 0,s={unversionedId:"additional-material/exam-exercises1/christmas-tree",id:"additional-material/exam-exercises1/christmas-tree",title:"Weihnachtsbaum",description:"",source:"@site/docs/additional-material/exam-exercises1/christmas-tree.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/christmas-tree",permalink:"/java-docs/additional-material/exam-exercises1/christmas-tree",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises1/christmas-tree.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"}],version:"current",frontMatter:{title:"Weihnachtsbaum",description:"",tags:["oo","inheritance","polymorphy"]},sidebar:"additionalMaterialSidebar",previous:{title:"Kassensystem",permalink:"/java-docs/additional-material/exam-exercises1/cashier-system"},next:{title:"W\xfcrfelspiele",permalink:"/java-docs/additional-material/exam-exercises1/dice-games"}},o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse ChristmasTree",id:"hinweise-zur-klasse-christmastree",level:2},{value:"Hinweise zur Klasse Candle",id:"hinweise-zur-klasse-candle",level:2},{value:"Hinweise zur Klasse ElectricCandle",id:"hinweise-zur-klasse-electriccandle",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209168771-b4782665-b98f-4ed6-8e8d-59c5826a8c64.png",alt:"image"})),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-christmastree"},"Hinweise zur Klasse ChristmasTree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addCandle(candle: Candle)")," soll der Kerzenliste (",(0,a.kt)("inlineCode",{parentName:"li"},"candles"),") die eingehende Kerze hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void lightChristmasTree()"),' soll alle Kerzen "entz\xfcnden"'),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"int getNumberOfElectricCandles()")," soll die Anzahl elektrischer Kerzen zur\xfcckgeben")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-candle"},"Hinweise zur Klasse Candle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void lightACandle()"),' soll die Kerze "entz\xfcnden"'),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void turnOffACandle()"),' soll die Kerze "ausmachen"')),(0,a.kt)("h2",{id:"hinweise-zur-klasse-electriccandle"},"Hinweise zur Klasse ElectricCandle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Konstruktor soll die Energie (",(0,a.kt)("inlineCode",{parentName:"li"},"power"),") auf den Wert ",(0,a.kt)("em",{parentName:"li"},"100")," setzen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void lightACandle()"),' soll die elektrische Kerze "entz\xfcnden", wenn diese noch \xfcber Energie verf\xfcgt und die Energie um den Wert ',(0,a.kt)("em",{parentName:"li"},"10")," reduzieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void recharge()")," soll die Energie der elektrische Kerze wieder auf den Wert ",(0,a.kt)("em",{parentName:"li"},"100")," setzen")))}u.isMDXComponent=!0}}]);