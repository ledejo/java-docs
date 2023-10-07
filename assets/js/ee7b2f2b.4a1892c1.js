"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1804],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),o=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,u=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=o(t),p=r,b=g["".concat(s,".").concat(p)]||g[p]||c[p]||u;return t?n.createElement(b,i(i({ref:a},m),{},{components:t})):n.createElement(b,i({ref:a},m))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var u=t.length,i=new Array(u);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<u;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2991:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(7294),r=t(4334),u=t(3438),i=t(9960),l=t(3919),s=t(5999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:a,children:t}=e;return n.createElement(i.Z,{href:a,className:(0,r.Z)("card padding--lg",o.cardContainer)},t)}function g(e){let{href:a,icon:t,title:u,description:i}=e;return n.createElement(m,{href:a},n.createElement("h2",{className:(0,r.Z)("text--truncate",o.cardTitle),title:u},t," ",u),i&&n.createElement("p",{className:(0,r.Z)("text--truncate",o.cardDescription),title:i},i))}function c(e){let{item:a}=e;const t=(0,u.Wl)(a);return t?n.createElement(g,{href:t,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:a.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function p(e){let{item:a}=e;const t=(0,l.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,u.xz)(a.docId??void 0);return n.createElement(g,{href:a.href,icon:t,title:a.label,description:a.description??r?.description})}function b(e){let{item:a}=e;switch(a.type){case"link":return n.createElement(p,{item:a});case"category":return n.createElement(c,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function f(e){let{className:a}=e;const t=(0,u.jA)();return n.createElement(h,{items:t.items,className:a})}function h(e){const{items:a,className:t}=e;if(!a)return n.createElement(f,e);const i=(0,u.MN)(a);return n.createElement("section",{className:(0,r.Z)("row",t)},i.map(((e,a)=>n.createElement("article",{key:a,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},8482:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=t(7462),r=(t(7294),t(3905)),u=t(2991);const i={title:"Kontrollstrukturen",description:"",sidebar_position:60,tags:["control-structures","cases","loops"]},l=void 0,s={unversionedId:"exercises/control-structures/control-structures",id:"exercises/control-structures/control-structures",title:"Kontrollstrukturen",description:"",source:"@site/docs/exercises/control-structures/control-structures.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/",permalink:"/java-docs/exercises/control-structures/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/control-structures/control-structures.md",tags:[{label:"control-structures",permalink:"/java-docs/tags/control-structures"},{label:"cases",permalink:"/java-docs/tags/cases"},{label:"loops",permalink:"/java-docs/tags/loops"}],version:"current",sidebarPosition:60,frontMatter:{title:"Kontrollstrukturen",description:"",sidebar_position:60,tags:["control-structures","cases","loops"]},sidebar:"exercisesSidebar",previous:{title:"ConsoleApplications02",permalink:"/java-docs/exercises/console-applications/console-applications02"},next:{title:"Cases01",permalink:"/java-docs/exercises/control-structures/cases01"}},o={},m=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2},{value:"\xdcbungsaufgaben der Uni Koblenz-Landau",id:"\xfcbungsaufgaben-der-uni-koblenz-landau",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}],g={toc:m},c="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,r.kt)(u.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/intro.html#_java_programme_portieren"},"I-2-1.3.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_pr%C3%BCfen_ob_beute_fair_aufgeteilt_werden_kann"},"I-2-1.3.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_besitzen_zwei_zahlen_gleiche_ziffern"},"I-2-1.3.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_w%C3%A4hrungsbetrag_in_m%C3%BCnzen_umrechnen"},"I-2-1.3.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_eine_flasche_rum_10_flaschen_rum"},"I-2-1.3.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_zahltag"},"I-2-1.4.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_einundzwanzig"},"I-2-1.4.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_literangaben_umrechnen"},"I-2-1.4.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_eingegebene_zeichenfolgen_f%C3%BCr_eine_zustimmung_auswerten"},"I-2-1.4.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_switch_anweisung_in_switch_ausdruck_umschreiben_neu"},"I-2-1.4.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_zahlen_von_der_kommandozeile_summieren"},"I-2-1.5.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_ein_mathematisches_ph%C3%A4nomen_durchlaufen"},"I-2-1.5.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_produkte_f%C3%BCr_fakult%C3%A4ten_berechnen"},"I-2-1.5.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_feststellen_ob_eine_zahl_durch_fakult%C3%A4t_gebildet_wurde"},"I-2-1.5.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_kleinste_und_gr%C3%B6%C3%9Fte_ziffer_einer_zahl_finden"},"I-2-1.5.7")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_ein_wimpel_im_wind_durch_geschachtelte_schleifen"},"I-2-1.5.8")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_einfaches_schachbrett_ausgeben"},"I-2-1.5.9")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_es_weihnachtet_sehr_b%C3%A4ume_mit_schmuck_darstellen"},"I-2-1.5.10")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_fischige_stickmotive_zeichnen"},"I-2-1.5.11")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_ausprobieren_statt_denken"},"I-2-1.5.12")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_anzahl_ziffern_einer_zahl_ermitteln"},"I-2-1.5.13")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_herzen_zeichnen"},"I-2-1.6.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_%C3%BCberladene_linien_methoden_implementieren"},"I-2-1.6.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_alles_im_lot"},"I-2-1.6.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_collatz_folge_berechnen"},"I-2-1.6.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_multiplikationstabelle_erstellen"},"I-2-1.6.6"))),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-der-uni-koblenz-landau"},"\xdcbungsaufgaben der Uni Koblenz-Landau"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"B1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"B2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"B3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"B4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"B5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"C1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"C2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"C3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"C4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"C5"))),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm"},"\xdcbungsaufgaben der Technischen Hochschule Ulm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Verzweigungen01")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Verzweigungen02")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Verzweigungen03")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Verzweigungen04")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Verzweigungen05")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Schleifen01")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Schleifen02")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Schleifen03")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Schleifen04")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Schleifen05"))))}p.isMDXComponent=!0}}]);