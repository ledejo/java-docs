"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={title:"UnitTests02",description:""},a=void 0,l={unversionedId:"exercises/unit-tests/unit-tests02",id:"exercises/unit-tests/unit-tests02",title:"UnitTests02",description:"",source:"@site/docs/exercises/unit-tests/unit-tests02.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests02",permalink:"/java-docs/exercises/unit-tests/unit-tests02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/unit-tests/unit-tests02.md",tags:[],version:"current",frontMatter:{title:"UnitTests02",description:""},sidebar:"exercisesSidebar",previous:{title:"UnitTests01",permalink:"/java-docs/exercises/unit-tests/unit-tests01"},next:{title:"UnitTests03",permalink:"/java-docs/exercises/unit-tests/unit-tests03"}},o={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Rental",id:"hinweis-zur-klasse-rental",level:2},{value:"Hinweise zur Klasse RentalTest",id:"hinweise-zur-klasse-rentaltest",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Erstelle die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"RentalTest")," und erweitere die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Rental")," aus \xdcbungsaufgabe ",(0,i.kt)("a",{parentName:"p",href:"/java-docs/exercises/exceptions/exceptions01"},"Exceptions01")," anhand des abgebildeten Klassendiagramms."),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209158670-4f8867ce-fbb1-4a4e-b842-f47c1b4038df.png",alt:"image"})),(0,i.kt)("h2",{id:"hinweis-zur-klasse-rental"},"Hinweis zur Klasse Rental"),(0,i.kt)("p",null,"Die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"void accelerateAllVehicles(value: int)")," soll alle Fahrzeuge der Fahrzeugvermietung um den eingehenden Wert beschleunigen."),(0,i.kt)("h2",{id:"hinweise-zur-klasse-rentaltest"},"Hinweise zur Klasse RentalTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Lebenszyklus-Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void setUp()")," soll eine Fahrzeugvermietung samt dazugeh\xf6riger Fahrzeuge erzeugen"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testTransformAllTrucks()")," soll pr\xfcfen, ob nach Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void transformAllTrucks()")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Rental")," alle Lastwagen in Autobots umgewandelt werden und nach erneutem Ausf\xfchren wieder zur\xfcckverwandelt werden"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testAccelerateAllVehicles(int)")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void accelerateAllVehicles(value: int)")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Rental")," mit einem negativen Wert die Ausnahme ",(0,i.kt)("inlineCode",{parentName:"li"},"InvalidValueException")," ausgel\xf6st wird")))}p.isMDXComponent=!0}}]);