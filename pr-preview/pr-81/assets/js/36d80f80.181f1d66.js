"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9270],{20991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(85893),i=t(11151);const o={title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},a=void 0,s={id:"documentation/comparators",title:"Komparatoren",description:"",source:"@site/docs/documentation/comparators.md",sourceDirName:"documentation",slug:"/documentation/comparators",permalink:"/java-docs/pr-preview/pr-81/documentation/comparators",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/comparators.md",tags:[{label:"comparators",permalink:"/java-docs/pr-preview/pr-81/tags/comparators"}],version:"current",sidebarPosition:220,frontMatter:{title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},sidebar:"documentationSidebar",previous:{title:"Listen",permalink:"/java-docs/pr-preview/pr-81/documentation/lists"},next:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/pr-preview/pr-81/documentation/exceptions"}},c={},d=[];function l(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Mit Hilfe der Methode ",(0,r.jsx)(n.code,{children:"int compareTo(o: T)"})," der Schnittstelle ",(0,r.jsx)(n.code,{children:"Comparable<T>"}),"\nbzw. der Methode ",(0,r.jsx)(n.code,{children:"int compare(o1: T, o2: T)"})," der Schnittstelle ",(0,r.jsx)(n.code,{children:"Comparator<T>"}),"\nk\xf6nnen Objekte einer Klasse miteinander verglichen werden. Der R\xfcckgabewert\nbeider Methoden gibt die Ordnung der zu vergleichenden Objekte an:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"R\xfcckgabewert kleiner Null: das Vergleichsobjekt ist gr\xf6\xdfer"}),"\n",(0,r.jsx)(n.li,{children:"R\xfcckgabewert gleich Null: beide Objekte sind gleich gro\xdf"}),"\n",(0,r.jsx)(n.li,{children:"R\xfcckgabewert gr\xf6\xdfer Null: das Vergleichsobjekt ist kleiner"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Objekte der Klasse ",(0,r.jsx)(n.code,{children:"Foo"})," k\xf6nnen durch die Implementierung der Methode\n",(0,r.jsx)(n.code,{children:"int compareTo(o: T)"})," der Schnittstelle ",(0,r.jsx)(n.code,{children:"Comparable<T>"})," miteinander verglichen\nwerden."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Container.java" showLineNumbers',children:"public class Container implements Comparable<Container> {\n\n  private String value;\n\n  public Container(String value) {\n    this.value = value;\n  }\n\n  public void setValue(String value) {\n    this.value = value;\n  }\n\n  public String getValue() {\n    return value;\n  }\n\n  @Override\n  public int compareTo(Container o) {\n    return value.compareTo(o.value);\n  }\n\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In der main-Methode der Startklasse wird mit Hilfe der statischen Methode\n",(0,r.jsx)(n.code,{children:"void sort(list: List<T>)"})," der Klasse ",(0,r.jsx)(n.code,{children:"Collections"})," eine Liste mit Objekten der\nKlasse ",(0,r.jsx)(n.code,{children:"Foo"})," sortiert. Aufgrund der Implementierung der compareTo-Methode wird\ndie Liste aufsteigend nach dem Attribut ",(0,r.jsx)(n.code,{children:"bar"})," sortiert."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<Container> containers = new ArrayList<>();\n    containers.add(new Container("Winter"));\n    containers.add(new Container("is"));\n    containers.add(new Container("Coming"));\n\n    Collections.sort(containers);\n  }\n\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);