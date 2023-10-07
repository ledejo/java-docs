"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5873],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>h});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=t,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?a.createElement(h,o(o({ref:n},p),{},{components:r})):a.createElement(h,o({ref:n},p))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:t,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4260:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),t=(r(7294),r(3905));const s={title:"Smartphone-Shop",description:"",tags:["records","maps","optionals","java-stream-api"]},o=void 0,i={unversionedId:"exam-exercises/exam-exercises-java2/phone-store",id:"exam-exercises/exam-exercises-java2/phone-store",title:"Smartphone-Shop",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/phone-store.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/phone-store",permalink:"/java-docs/exam-exercises/exam-exercises-java2/phone-store",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/phone-store.md",tags:[{label:"records",permalink:"/java-docs/tags/records"},{label:"maps",permalink:"/java-docs/tags/maps"},{label:"optionals",permalink:"/java-docs/tags/optionals"},{label:"java-stream-api",permalink:"/java-docs/tags/java-stream-api"}],version:"current",frontMatter:{title:"Smartphone-Shop",description:"",tags:["records","maps","optionals","java-stream-api"]},sidebar:"examExercisesSidebar",previous:{title:"Messdaten",permalink:"/java-docs/exam-exercises/exam-exercises-java2/measurement-data"},next:{title:"Planeten",permalink:"/java-docs/exam-exercises/exam-exercises-java2/planets"}},l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse PhoneStore",id:"hinweise-zur-klasse-phonestore",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,t.kt)(u,(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("mermaid",{value:"classDiagram\n    Phone o-- ConnectionType\n    Phone o-- Brand\n    PhoneStore o-- Phone\n\n    class ConnectionType {\n        <<enumeration>>\n        USB_C = USB C, true\n        USB_MICRO = USB Micro, false\n        THUNDERBOLT = Thunderbolt, true\n        -description String\n        -isModern boolean\n    }\n\n    class Brand {\n        <<enumeration>>\n        SAMSUNG\n        APPLE\n        HUAWEI\n    }\n\n    class Phone {\n        <<record>>\n        -brand Brand\n        -conncetionType ConnectionType\n        -numberOfCameras int\n        -batteryCapacityInMAh int\n        -cpuPowerInGHz double\n        -priceInEuro double\n    }\n\n    class DataProvider {\n        +getPhones() List~Phone~\n    }\n\n    class PhoneStore {\n        <<record>>\n        -phones List~Phone~\n        +query1() List~Phone~\n        +query2() OptionalDouble\n        +query3(maxPriceInEuro double) List~Phone~\n        +query4() Map~String&#44&#160Phone~\n        +query5() Map~ConnectionTyp&#44&#160List~Phone~~\n    }"}),(0,t.kt)("h2",{id:"hinweise-zur-klasse-phonestore"},"Hinweise zur Klasse PhoneStore"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"List<Phone> query1()")," soll die drei leistungsst\xe4rksten\nSmartphones mit 3 Kameras der Marke Huawei, absteigend nach dem Preis,\nzur\xfcckgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"OptionalDouble query2()")," soll die durchschnittliche Anzahl\nKameras aller Smartphones zur\xfcckgeben, die eine Akkukapazit\xe4t von 2500 mAh\noder mehr haben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"List<Phone> query3(maxPriceInEuro: double)")," soll alle Smartphones\naufsteigend nach Preis zur\xfcckgeben, die den eingehenden H\xf6chstpreis nicht\n\xfcberschreiten, einen modernen Anschlusstyp haben und weniger als 2,4 GHz\nLeistung besitzen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"Map<String, Phone> query4()")," soll alle Smartphones gruppiert nach\nder zusammengesetzten Zeichenkette aus Marke und Anschlusstyp zur\xfcckgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"Map<ConnectionType, Phone> query4()")," soll alle Smartphones\ngruppiert nach dem Anschlusstyp zur\xfcckgeben")))}m.isMDXComponent=!0}}]);