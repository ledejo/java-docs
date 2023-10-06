"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(a),f=n,p=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return a?r.createElement(p,s(s({ref:t},u),{},{components:a})):r.createElement(p,s({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:n,s[1]=c;for(var o=2;o<i;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2991:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(7294),n=a(4334),i=a(3438),s=a(9960),c=a(3919),l=a(5999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:a}=e;return r.createElement(s.Z,{href:t,className:(0,n.Z)("card padding--lg",o.cardContainer)},a)}function m(e){let{href:t,icon:a,title:i,description:s}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",o.cardTitle),title:i},a," ",i),s&&r.createElement("p",{className:(0,n.Z)("text--truncate",o.cardDescription),title:s},s))}function d(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?r.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:a,title:t.label,description:t.description??n?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const a=(0,i.jA)();return r.createElement(b,{items:a.items,className:t})}function b(e){const{items:t,className:a}=e;if(!t)return r.createElement(g,e);const s=(0,i.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",a)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(p,{item:e})))))}},507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),i=a(2991);const s={title:"Darstellung von Klassen und Programmabl\xe4ufen",description:"",sidebar_position:110,tags:["uml","class-diagrams","activity-diagrams"]},c=void 0,l={unversionedId:"exercises/uml/uml",id:"exercises/uml/uml",title:"Darstellung von Klassen und Programmabl\xe4ufen",description:"",source:"@site/docs/exercises/uml/uml.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/",permalink:"/java-docs/exercises/uml/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/uml/uml.md",tags:[{label:"uml",permalink:"/java-docs/tags/uml"},{label:"class-diagrams",permalink:"/java-docs/tags/class-diagrams"},{label:"activity-diagrams",permalink:"/java-docs/tags/activity-diagrams"}],version:"current",sidebarPosition:110,frontMatter:{title:"Darstellung von Klassen und Programmabl\xe4ufen",description:"",sidebar_position:110,tags:["uml","class-diagrams","activity-diagrams"]},sidebar:"exercisesSidebar",previous:{title:"Enumerations01",permalink:"/java-docs/exercises/enumerations/enumerations01"},next:{title:"ActivityDiagrams01",permalink:"/java-docs/exercises/uml/activity-diagrams01"}},o={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],m={toc:u},d="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,n.kt)(i.Z,{mdxType:"DocCardList"}),(0,n.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_bildr%C3%B6hre_mit_fernsehger%C3%A4t_verbinden"},"I-6-1.5.1")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_radios_mit_einer_1n_assoziation_auf_das_schiff_aufnehmen"},"I-6-1.5.2")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_aufz%C3%A4hlung_f%C3%BCr_s%C3%BC%C3%9Fwaren"},"I-8-1.2.1")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_zuf%C3%A4llige_s%C3%BC%C3%9Fwaren_liefern"},"I-8-1.2.2")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_s%C3%BC%C3%9Fwaren_mit_suchtfaktor_auszeichnen"},"I-8-1.2.3"))))}f.isMDXComponent=!0}}]);