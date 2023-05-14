"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5188],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(b,s(s({ref:n},p),{},{components:t})):r.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={title:"Vererbung",description:"",sidebar_position:170,tags:[]},s=void 0,o={unversionedId:"documentation/inheritance",id:"documentation/inheritance",title:"Vererbung",description:"",source:"@site/docs/documentation/inheritance.md",sourceDirName:"documentation",slug:"/documentation/inheritance",permalink:"/java-docs/documentation/inheritance",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/inheritance.md",tags:[],version:"current",sidebarPosition:170,frontMatter:{title:"Vererbung",description:"",sidebar_position:170,tags:[]},sidebar:"documentationSidebar",previous:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/documentation/uml/activity-diagrams"},next:{title:"(Dynamische) Polymorphie",permalink:"/java-docs/documentation/polymorphy"}},l={},u=[{value:"Implementieren von Vererbung",id:"implementieren-von-vererbung",level:2},{value:"\xdcberschreiben von Methoden",id:"\xfcberschreiben-von-methoden",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bei der Modellierung von Klassen stellt man h\xe4ufig fest, dass sich einige Klassen der Struktur und dem Verhalten nach \xe4hneln. In solchen F\xe4llen hat man die M\xf6glichkeit, die gemeinsamen Strukturen und Verhaltensweisen aus den speziellen Klassen zu extrahieren\nund in einer allgemeineren Klasse unterzubringen. Dies wird als ",(0,i.kt)("em",{parentName:"p"},"Generalisierung")," bezeichnet. Umgekehrt gibt es oftmals auch Bedarf, eine bestehende Klasse um zus\xe4tzliche Attribute und/oder Methoden zu erweitern. Dies bezeichnet man als ",(0,i.kt)("em",{parentName:"p"},"Spezialisierung"),"\nDie Beziehung zwischen einer speziellen Klasse und einer allgemeinen Klasse wird ",(0,i.kt)("em",{parentName:"p"},"Vererbung")," bezeichnet. Die speziellen Klasse einer Vererbung werden als ",(0,i.kt)("em",{parentName:"p"},"Unterklassen")," (Sub Classes), die allgemeinen Klassen als ",(0,i.kt)("em",{parentName:"p"},"Oberklassen")," (Super Classes) bezeichnet."),(0,i.kt)("h2",{id:"implementieren-von-vererbung"},"Implementieren von Vererbung"),(0,i.kt)("p",null,"Die Vererbung wird mit dem Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," realisiert. In der Oberklasse k\xf6nnen Attribute und Methoden mit dem Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"protected")," als gesch\xfctzt festlegt werden. Unterklassen k\xf6nnen auf alle \xf6ffentlichen und gesch\xfctzten Attribute und Methoden der\nOberklasse zugreifen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',title:'"SuperClass.java"',showLineNumbers:!0},"public class SuperClass {\n\n  public String foo;\n  protected String bar;\n  private String baz;\n\n  public SuperClass(String foo, String bar, String baz) {\n    this.foo = foo;\n    this.bar = bar;\n    this.baz = baz;\n  }\n\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SubClass.java" showLineNumbers',title:'"SubClass.java"',showLineNumbers:!0},"public class SubClass extends SuperClass {\n\n  public SubClass(String foo, String bar, String baz) {\n    super(foo, bar, baz);\n  }\n\n  public void foobar() {\n    System.out.println(foo);\n    System.out.println(bar);\n    System.out.println(baz); // Kompilierungsfehler\n  }\n\n}\n")),(0,i.kt)("admonition",{title:"Hinweis",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"In den Konstruktoren der Unterklasse muss ein Konstruktor der Oberklasse mit Hilfe von ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," aufgerufen werden.")),(0,i.kt)("h2",{id:"\xfcberschreiben-von-methoden"},"\xdcberschreiben von Methoden"),(0,i.kt)("p",null,"Wird in einer Unterklasse eine Methode definiert, die der Signatur einer Methode der Oberklasse entspricht, wird die Methode der Oberklasse ",(0,i.kt)("em",{parentName:"p"},"\xfcberschrieben"),", d.h. von der Unterklasse neu implementiert. Bei Bedarf kann die urspr\xfcngliche Methodenimplementierung\nder Oberklasse mit Hilfe der Objektreferenz ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," aufgerufen werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',title:'"SuperClass.java"',showLineNumbers:!0},'public class SuperClass {\n\n  public void foo() {\n    System.out.print("foo");\n  }\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SubClass.java" showLineNumbers',title:'"SubClass.java"',showLineNumbers:!0},'public class SubClass extends SuperClass {\n\n  @Override\n  public void foo() {\n    super.foo();\n    System.out.println("bar");\n  }\n\n}\n')),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Die Annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@Override")," sorgt bei fehlerhaftem \xdcberschreiben der Methode f\xfcr entsprechende Kompilierungsfehler.")))}d.isMDXComponent=!0}}]);