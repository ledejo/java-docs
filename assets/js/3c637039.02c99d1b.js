"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Zeichenketten (Strings)",description:"",sidebar_position:50,tags:[]},l=void 0,o={unversionedId:"documentation/strings",id:"documentation/strings",title:"Zeichenketten (Strings)",description:"",source:"@site/docs/documentation/strings.md",sourceDirName:"documentation",slug:"/documentation/strings",permalink:"/java-docs/documentation/strings",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/strings.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Zeichenketten (Strings)",description:"",sidebar_position:50,tags:[]},sidebar:"documentationSidebar",previous:{title:"Datenobjekte",permalink:"/java-docs/documentation/data-objects"},next:{title:"Operatoren",permalink:"/java-docs/documentation/operators"}},c={},s=[{value:"Escape-Sequenzen",id:"escape-sequenzen",level:2},{value:"Textbl\xf6cke",id:"textbl\xf6cke",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ketten von beliebigen Zeichen werden durch die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," realisiert. Diese stellt einige hilfreiche Methoden zur Verf\xfcgung, die bei der Analyse und der Verarbeitung von Zeichenketten Verwendung finden. Die Angabe einer Zeichenkette erfolgt \xfcber die\nAnf\xfchrungszeichen."),(0,a.kt)("mermaid",{value:"flowchart\n    subgraph text\n        a[Index: 0\\nWert: W] -.- b[Index: 1\\nWert: i]\n        b -.- c[Index: 2\\nWert: n]\n        c -.- d[Index: 3\\nWert: t]\n        d -.- e[Index: 4\\nWert: e]\n        e -.- f[Index: 5\\nWert: r]\n    end"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    String text = "Winter";\n    String text2 = "Coming";\n\n    String text3 = text + " is " + text2;\n\n    int length = text3.length();\n    char charAt1 = text3.charAt(0);\n    String upperCase = text3.toUpperCase();\n  }\n\n}\n')),(0,a.kt)("h2",{id:"escape-sequenzen"},"Escape-Sequenzen"),(0,a.kt)("p",null,"Steuer- und Sonderzeichen in Zeichenketten k\xf6nnen mit Hilfe einer Escape-Sequenz realisiert werden."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Escape-Squenz"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\\","n"),(0,a.kt)("td",{parentName:"tr",align:null},"Zeilensprung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\\","t"),(0,a.kt)("td",{parentName:"tr",align:null},"Tabulatorsprung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\\","\\"),(0,a.kt)("td",{parentName:"tr",align:null},"Schr\xe4ger rechts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\\",'"'),(0,a.kt)("td",{parentName:"tr",align:null},"Anf\xfchrungszeichen")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\\","'"),(0,a.kt)("td",{parentName:"tr",align:null},"Hochkomma")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\\","u0000 bis ","\\","uFFFF"),(0,a.kt)("td",{parentName:"tr",align:null},"Unicode-Zeichen")))),(0,a.kt)("h2",{id:"textbl\xf6cke"},"Textbl\xf6cke"),(0,a.kt)("p",null,"Seit Java 15 erm\xf6glichen Textbl\xf6cke mehrzeilige Zeichenketten ohne umst\xe4ndliche Umwege."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    String text = """\n        <html>\n          <body>\n            <p>Winter is Coming</p>\n          </body>\n        </html>""";\n    System.out.println(text);\n  }\n\n}\n')))}d.isMDXComponent=!0}}]);