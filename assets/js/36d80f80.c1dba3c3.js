"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},o=void 0,l={unversionedId:"documentation/comparators",id:"documentation/comparators",title:"Komparatoren",description:"",source:"@site/docs/documentation/comparators.md",sourceDirName:"documentation",slug:"/documentation/comparators",permalink:"/java-docs/documentation/comparators",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/comparators.md",tags:[{label:"comparators",permalink:"/java-docs/tags/comparators"}],version:"current",sidebarPosition:220,frontMatter:{title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},sidebar:"documentationSidebar",previous:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/documentation/interfaces"},next:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/documentation/exceptions"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit Hilfe der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compareTo(o: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>")," bzw. der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compare(o1: T, o2: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparator<T>")," k\xf6nnen Objekte einer Klasse miteinander verglichen werden. Der R\xfcckgabewert beider Methoden gibt die Ordnung der zu\nvergleichenden Objekte an:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert kleiner Null: das Vergleichsobjekt ist gr\xf6\xdfer"),(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert gleich Null: beide Objekte sind gleich gro\xdf"),(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert gr\xf6\xdfer Null: das Vergleichsobjekt ist kleiner")),(0,a.kt)("p",null,"Objekte der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," k\xf6nnen durch die Implementierung der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compareTo(o: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>")," miteinander verglichen werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Container.java" showLineNumbers',title:'"Container.java"',showLineNumbers:!0},"public class Container implements Comparable<Container> {\n\n  private String value;\n\n  public Container(String value) {\n    this.value = value;\n  }\n\n  public void setValue(String value) {\n    this.value = value;\n  }\n\n  public String getValue() {\n    return value;\n  }\n\n  @Override\n  public int compareTo(Container o) {\n    return value.compareTo(o.value);\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-Methode der Startklasse wird mit Hilfe der statischen Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"void sort(list: List<T>)")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Collections")," eine Liste mit Objekten der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," sortiert. Aufgrund der Implementierung der compareTo-Methode wird die Liste aufsteigend nach dem\nAttribut ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," sortiert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    ArrayList<Container> containers = new ArrayList<>();\n    containers.add(new Container("Winter"));\n    containers.add(new Container("is"));\n    containers.add(new Container("Coming"));\n\n    Collections.sort(containers);\n  }\n\n}\n')))}u.isMDXComponent=!0}}]);