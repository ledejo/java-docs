"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstract-and-final"]},s=void 0,o={unversionedId:"documentation/abstract-and-final",id:"documentation/abstract-and-final",title:"Abstrakte und finale Klassen und Methoden",description:"",source:"@site/docs/documentation/abstract-and-final.md",sourceDirName:"documentation",slug:"/documentation/abstract-and-final",permalink:"/java-docs/documentation/abstract-and-final",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/abstract-and-final.md",tags:[{label:"abstract-and-final",permalink:"/java-docs/tags/abstract-and-final"}],version:"current",sidebarPosition:200,frontMatter:{title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstract-and-final"]},sidebar:"documentationSidebar",previous:{title:"Die Mutter aller Klassen",permalink:"/java-docs/documentation/object"},next:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/documentation/interfaces"}},l={},c=[{value:"Abstrakte Klassen",id:"abstrakte-klassen",level:2},{value:"Abstrakte Methoden",id:"abstrakte-methoden",level:2},{value:"Finale Klassen",id:"finale-klassen",level:2},{value:"Finale Methoden",id:"finale-methoden",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mit Hilfe der Schl\xfcsselw\xf6rter ",(0,r.kt)("inlineCode",{parentName:"p"},"abstract")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"final")," kann die Verwendung von Klassen vorgegeben bzw. eingesch\xe4nkt werden."),(0,r.kt)("h2",{id:"abstrakte-klassen"},"Abstrakte Klassen"),(0,r.kt)("p",null,"Abstrakte Klassen k\xf6nnen nicht instanziiert werden."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209166284-ad66e8a2-6a85-4cc4-afd6-a5424a0a6ad5.png",alt:"image"})),(0,r.kt)("h2",{id:"abstrakte-methoden"},"Abstrakte Methoden"),(0,r.kt)("p",null,"Abstrakte Methoden werden in abstrakten Klassen definiert, besitzen dort keinen Methodenrumpf und m\xfcssen in den abgeleiteten Klassen der abstrakten Klasse \xfcberschrieben werden."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209166331-be93409b-0501-4c0e-b1f1-0399e93c4d15.png",alt:"image"})),(0,r.kt)("h2",{id:"finale-klassen"},"Finale Klassen"),(0,r.kt)("p",null,"Finale Klassen k\xf6nnen nicht abgeleitet werden."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209166368-f9f79258-d0e8-49c7-8de3-55697583da6a.png",alt:"image"})),(0,r.kt)("h2",{id:"finale-methoden"},"Finale Methoden"),(0,r.kt)("p",null,"Finale Methoden k\xf6nnen nicht \xfcberschrieben werden."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209166415-492e73ef-c103-4859-a879-863dea21953b.png",alt:"image"})))}p.isMDXComponent=!0}}]);