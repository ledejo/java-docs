"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6345],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>k});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=s,k=c["".concat(o,".").concat(p)]||c[p]||m[p]||r;return a?t.createElement(k,i(i({ref:n},d),{},{components:a})):t.createElement(k,i({ref:n},d))}));function k(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:s,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2665:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=a(7462),s=(a(7294),a(3905));const r={title:"Innere Klassen (Inner Classes)",description:"",sidebar_position:260,tags:["inner-classes"]},i=void 0,l={unversionedId:"documentation/inner-classes",id:"documentation/inner-classes",title:"Innere Klassen (Inner Classes)",description:"",source:"@site/docs/documentation/inner-classes.md",sourceDirName:"documentation",slug:"/documentation/inner-classes",permalink:"/java-docs/documentation/inner-classes",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/inner-classes.md",tags:[{label:"inner-classes",permalink:"/java-docs/tags/inner-classes"}],version:"current",sidebarPosition:260,frontMatter:{title:"Innere Klassen (Inner Classes)",description:"",sidebar_position:260,tags:["inner-classes"]},sidebar:"documentationSidebar",previous:{title:"Datenklassen (Records)",permalink:"/java-docs/documentation/records"},next:{title:"Lambda-Ausdr\xfccke (Lambdas)",permalink:"/java-docs/documentation/lambdas"}},o={},u=[{value:"Geschachtelte Klassen (Nested Classes)",id:"geschachtelte-klassen-nested-classes",level:2},{value:"Elementklassen (Member Classes)",id:"elementklassen-member-classes",level:2},{value:"Lokale Klassen",id:"lokale-klassen",level:2},{value:"Anonyme Klassen",id:"anonyme-klassen",level:2}],d={toc:u},c="wrapper";function m(e){let{components:n,...a}=e;return(0,s.kt)(c,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Java bietet die M\xf6glichkeit, Klassen und Schnittstellen zu verschachteln. Das Ziel von inneren Klassen ist eine Definition von Hilfsklassen m\xf6glichst nahe an der Stelle, wo sie gebraucht werden. Beispiele f\xfcr Hilfsklassen sind Ausnahmeklassen, Komparatoren und\nEreignisbehandler. Alle bisherigen Klassen werden auch als ",(0,s.kt)("em",{parentName:"p"},"\xe4u\xdferer Klassen")," bzw. ",(0,s.kt)("em",{parentName:"p"},"Top-Level-Klassen")," bezeichnet."),(0,s.kt)("h2",{id:"geschachtelte-klassen-nested-classes"},"Geschachtelte Klassen (Nested Classes)"),(0,s.kt)("p",null,"Geschachtelte Klassen sind Top-Level-Klassen, die zur Strukturierung des Namensraumes in anderen Top-Level-Klassen definiert sind. Ein Namensraum ist die vollst\xe4ndige Pfadangabe zur Klasse (z.B. ",(0,s.kt)("inlineCode",{parentName:"p"},"java.lang"),"). Geschachtelte Klassen m\xfcssen statisch definiert\nwerden und sind daher im eigentlichen Sinne keine richtigen inneren Klassen."),(0,s.kt)("p",null,"Zun\xe4chst wird die \xe4u\xdfere Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"OuterClass")," samt der geschachtelten Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"InnerClass")," definiert."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="OuterClass.java" showLineNumbers',title:'"OuterClass.java"',showLineNumbers:!0},"public class OuterClass {\n\n  public static class InnerClass {\n  }\n\n}\n")),(0,s.kt)("p",null,"In der main-Methode der Startklasse kann die innere Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"InnerClass")," nur durch Angabe des vollst\xe4ndigen Namensraumes verwendet werden, was die Angabe der \xe4u\xdferer Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"OuterClass")," miteinschlie\xdft."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n      OuterClass o = new OuterClass();\n      OuterClass.InnerClass i = new OuterClass.InnerClass();\n  }\n\n}\n")),(0,s.kt)("h2",{id:"elementklassen-member-classes"},"Elementklassen (Member Classes)"),(0,s.kt)("p",null,"Objekte von Elementklassen sind immer mit einem Objekt der umgebenden Klasse verbunden. Dies erm\xf6glicht die Umsetzung von Kompositionen (siehe ",(0,s.kt)("a",{parentName:"p",href:"/java-docs/documentation/uml/class-diagrams"},"Klassendiagramme")," - Darstellung von Assoziationen). Sie haben Zugriff auf alle Variablen\nund Methoden der sie umgebenden Klasse und d\xfcrfen keine statischen Elemente enthalten."),(0,s.kt)("p",null,"Zun\xe4chst wird die \xe4u\xdfere Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"OuterClass")," samt der Elementklasse ",(0,s.kt)("inlineCode",{parentName:"p"},"InnerClass")," definiert. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="OuterClass.java" showLineNumbers',title:'"OuterClass.java"',showLineNumbers:!0},"public class OuterClass {\n\n  public class InnerClass {\n  }\n\n}\n")),(0,s.kt)("p",null,"In der main-Methode der Startklasse kann ein Objekt der Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"InnerClass")," nur auf ein bestehendes Objekt der Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"OuterClass")," erzeugt werden."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    OuterClass o = new OuterClass();\n    OuterClass.InnerClass i = new OuterClass.InnerClass(); // Kompilierungsfehler\n    OuterClass.InnerClass i = o.new InnerClass();\n  }\n\n}\n")),(0,s.kt)("h2",{id:"lokale-klassen"},"Lokale Klassen"),(0,s.kt)("p",null,"Lokale Klassen werden innerhalb einer Methode definiert und k\xf6nnen auch nur dort verwendet werden. Sie d\xfcrfen nicht als ",(0,s.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"protected"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"private")," oder ",(0,s.kt)("inlineCode",{parentName:"p"},"static")," definiert werden, d\xfcrfen keine statischen Elemente enthalten und k\xf6nnen nur die mit ",(0,s.kt)("inlineCode",{parentName:"p"},"final"),"\nmarkierten Variablen und Parameter der umgebenden Methode verwenden."),(0,s.kt)("p",null,"Zun\xe4chst wird die Schnittstelle ",(0,s.kt)("inlineCode",{parentName:"p"},"Qux")," samt der Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"void quux(s: String)"),"definiert."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Qux.java" showLineNumbers',title:'"Qux.java"',showLineNumbers:!0},"public interface Qux {\n\n  void quux(String s);\n\n}\n")),(0,s.kt)("p",null,"Die Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"Foo")," soll die Verwenderklasse der Schnittstelle ",(0,s.kt)("inlineCode",{parentName:"p"},"Qux")," darstellen."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  public static void bar(String s, Qux q) {\n    q.quux(s);\n  }\n\n}\n")),(0,s.kt)("p",null,"In der main-Methode der Startklasse soll die Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"void bar(s: String, q: Qux)")," der Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"Foo")," aufgerufen werden, wof\xfcr eine konkrete Implementierung der Schnittstelle ",(0,s.kt)("inlineCode",{parentName:"p"},"Qux")," ben\xf6tigt wird. Die Implementierung erfolgt in Form der lokalen Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"LocalClass"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    class LocalClass implements Qux {\n      @Override\n      public void quux(String s) {\n        System.out.println(s);\n      }\n    }\n\n    LocalClass l = new LocalClass();\n    Foo.bar("Winter is Coming", l);\n  }\n\n}\n')),(0,s.kt)("h2",{id:"anonyme-klassen"},"Anonyme Klassen"),(0,s.kt)("p",null,"Anonyme Klassen besitzen im Gegensatz zu lokalen Klassen keinen Namen und werden innerhalb eines Ausdrucks definiert und instanziiert; Klassendeklaration und Objekterzeugung sind also in einem Sprachkonstrukt vereint. Wird als Datentyp eine Schnittstelle\nben\xf6tigt, implementiert die anonyme Klasse diese Schnittstelle, wird als Datentyp eine Klasse ben\xf6tigt, so wird die anonyme Klasse daraus abgeleitet."),(0,s.kt)("p",null,"Zun\xe4chst wird die Schnittstelle ",(0,s.kt)("inlineCode",{parentName:"p"},"Qux")," samt der Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"void quux(s: String)"),"definiert."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Qux.java" showLineNumbers',title:'"Qux.java"',showLineNumbers:!0},"public interface Qux {\n\n  void quux(String s);\n\n}\n")),(0,s.kt)("p",null,"Die Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"Foo")," soll die Verwenderklasse der Schnittstelle ",(0,s.kt)("inlineCode",{parentName:"p"},"Qux")," darstellen."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  public static void bar(String s, Qux q) {\n    q.quux(s);\n  }\n\n}\n")),(0,s.kt)("p",null,"In der main-Methode der Startklasse soll die Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"void bar(s: String, q: Qux)")," der Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"Foo")," aufgerufen werden, wof\xfcr eine konkrete Implementierung der Schnittstelle ",(0,s.kt)("inlineCode",{parentName:"p"},"Qux")," ben\xf6tigt wird. Die Implementierung erfolgt in Form einer anonymen Klasse."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo.bar("Winter is Coming", new Qux() {\n      @Override\n      public void quux(String s) {\n        System.out.println(s);\n      }\n    });\n  }\n\n}\n')))}m.isMDXComponent=!0}}]);