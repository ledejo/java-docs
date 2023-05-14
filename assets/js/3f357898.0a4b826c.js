"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9213],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(f,s(s({ref:n},d),{},{components:t})):a.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={title:"Dateien und Verzeichnisse",description:"",sidebar_position:30,tags:["java-api","files"]},s=void 0,o={unversionedId:"documentation/java-api/files",id:"documentation/java-api/files",title:"Dateien und Verzeichnisse",description:"",source:"@site/docs/documentation/java-api/files.md",sourceDirName:"documentation/java-api",slug:"/documentation/java-api/files",permalink:"/java-docs/documentation/java-api/files",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/java-api/files.md",tags:[{label:"java-api",permalink:"/java-docs/tags/java-api"},{label:"files",permalink:"/java-docs/tags/files"}],version:"current",sidebarPosition:30,frontMatter:{title:"Dateien und Verzeichnisse",description:"",sidebar_position:30,tags:["java-api","files"]},sidebar:"documentationSidebar",previous:{title:"Datums- und Zeitangaben",permalink:"/java-docs/documentation/java-api/dates-and-times"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/java-docs/documentation/enumerations"}},l={},c=[{value:"Lesen von Dateien mit Hilfe der Klasse <code>Scanner</code>",id:"lesen-von-dateien-mit-hilfe-der-klasse-scanner",level:2},{value:"Absolute und relative Pfadangaben",id:"absolute-und-relative-pfadangaben",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," erm\xf6glicht die Arbeit mit Dateien und Verzeichnissen. Mit Hilfe der Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean exists()")," kann beispielsweise gepr\xfcft werden, ob ein entsprechendes Verzeichnis bzw. eine entsprechende Datei existiert oder nicht. Die Klasse bietet zudem M\nethoden zum Erstellen und L\xf6schen von Verzeichnissen bzw. Dateien. Zum Erzeugen eines File-Objekts wird entweder ein Pfad zu einem Verzeichnis bzw. zu einer Datei oder ein ",(0,i.kt)("em",{parentName:"p"},"URI")," (Unified Resource Identifier) ben\xf6tigt."),(0,i.kt)("h2",{id:"lesen-von-dateien-mit-hilfe-der-klasse-scanner"},"Lesen von Dateien mit Hilfe der Klasse ",(0,i.kt)("inlineCode",{parentName:"h2"},"Scanner")),(0,i.kt)("p",null,"Zum Lesen einer Datei k\xf6nnen entweder ",(0,i.kt)("a",{parentName:"p",href:"/java-docs/documentation/io-streams"},"Datenstromklassen")," oder die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Scanner")," verwendet werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) throws FileNotFoundException {\n    File file = new File("text.txt");\n    Scanner scanner = new Scanner(file);\n\n    while (scanner.hasNextLine()) {\n      String line = scanner.nextLine();\n      System.out.println(line);\n    }\n\n    scanner.close();\n  }\n\n}\n')),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Nach der letzten Verwendung sollte die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"void close()")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Scanner")," aufgerufen werden.")),(0,i.kt)("h2",{id:"absolute-und-relative-pfadangaben"},"Absolute und relative Pfadangaben"),(0,i.kt)("p",null,"Beim Zugriff auf Verzeichnisse bzw. Dateien unterscheidet man zwischen absoluten und relativen Pfadangaben. Bei absoluten Pfadangaben wird der vollst\xe4ndige Pfad von der Wurzel des jeweiligen Verzeichnissystems bis zum Ziel angegeben, bei relativen der Weg von\neinem festgelegten Bezugspunkt bis zum Ziel."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209096722-dce8f11a-851b-4535-af37-0b987929c2e3.png",alt:"image"})),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Alle Klassen im Paket ",(0,i.kt)("inlineCode",{parentName:"p"},"java.io")," verwenden als Bezugspunkt das Arbeitsverzeichnis des Benutzers (Systemeigenschaft ",(0,i.kt)("inlineCode",{parentName:"p"},"user.dir"),").")))}p.isMDXComponent=!0}}]);