"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=o(n),c=i,b=m["".concat(u,".").concat(c)]||m[c]||p[c]||a;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const a={title:"Datenstr\xf6me (IO-Streams)",description:"",sidebar_position:340,tags:[]},l=void 0,s={unversionedId:"documentation/io-streams",id:"documentation/io-streams",title:"Datenstr\xf6me (IO-Streams)",description:"",source:"@site/docs/documentation/io-streams.md",sourceDirName:"documentation",slug:"/documentation/io-streams",permalink:"/java-docs/documentation/io-streams",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/io-streams.md",tags:[],version:"current",sidebarPosition:340,frontMatter:{title:"Datenstr\xf6me (IO-Streams)",description:"",sidebar_position:340,tags:[]},sidebar:"documentationSidebar",previous:{title:"JavaFX-Anwendungen",permalink:"/java-docs/documentation/javafx"}},u={},o=[{value:"Standard-Datenstr\xf6me zur Ein- und Ausgabe",id:"standard-datenstr\xf6me-zur-ein--und-ausgabe",level:2},{value:"Schreiben und Lesen byteorientierter Daten",id:"schreiben-und-lesen-byteorientierter-daten",level:2},{value:"Schreiben byteorientierter Daten",id:"schreiben-byteorientierter-daten",level:3},{value:"Lesen byteorientierter Daten",id:"lesen-byteorientierter-daten",level:3},{value:"Schreiben und Lesen zeichenorientierter Daten",id:"schreiben-und-lesen-zeichenorientierter-daten",level:2},{value:"Schreiben zeichenorientierter Daten",id:"schreiben-zeichenorientierter-daten",level:3},{value:"Lesen zeichenorientierter Daten",id:"lesen-zeichenorientierter-daten",level:3},{value:"Schreiben und Lesen serialisierter Objekte",id:"schreiben-und-lesen-serialisierter-objekte",level:2},{value:"Schreiben serialisierter Objekte",id:"schreiben-serialisierter-objekte",level:3},{value:"Lesen serialisierter Objekte",id:"lesen-serialisierter-objekte",level:3},{value:"Versionierung bei der Serialisierung",id:"versionierung-bei-der-serialisierung",level:3},{value:"Die try-with-resources-Anweisung",id:"die-try-with-resources-anweisung",level:2}],d={toc:o},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Datenstr\xf6me (IO-Streams) sind unidirektionale Pipelines, die Schnittstellen eines Java-Programms nach au\xdfen darstellen. Daten k\xf6nnen unabh\xe4ngig von der Art der Quelle bzw. des Ziels vorne in einen Datenstrom geschrieben und hinten wieder ausgelesen werden. Ein\nDatenstrom kann dabei immer nur in eine Richtung verwendet werden (also entweder zur Ein- oder Ausgabe). Neben den Standard-Datenstr\xf6men zur Ein- und Ausgabe existieren verschiedene Klassen zum Schreiben und Lesen zeichenorientierter Daten, zum\nSchreiben und Lesen byteorientierter Daten und zum Schreiben und Lesen serialisierter Objekte. Das Arbeiten mit Datenstrom-Klassen kann dabei aufw\xe4ndig \xfcber "normale" try-catch-Anweisungen oder mit Hilfe von try-with-resources-Anweisungen realisiert werden.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209137344-814691e9-90c6-4ccf-95fa-5b50d55942aa.png",alt:"image"})),(0,i.kt)("h2",{id:"standard-datenstr\xf6me-zur-ein--und-ausgabe"},"Standard-Datenstr\xf6me zur Ein- und Ausgabe"),(0,i.kt)("p",null,"Java stellt Standard-Datenstr\xf6me f\xfcr die Eingabe (",(0,i.kt)("inlineCode",{parentName:"p"},"System.in"),"), die Ausgabe (",(0,i.kt)("inlineCode",{parentName:"p"},"System.out"),"), sowie die Fehlerausgabe (",(0,i.kt)("inlineCode",{parentName:"p"},"System.err"),") zur Verf\xfcgung."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    byte input[] = new byte[256];\n    int noBytes = 0;\n    String output = "";\n\n    try {\n      noBytes = System.in.read(input);\n    } catch (IOException e) {\n      System.err.println(e.getMessage());\n    }\n\n    if (noBytes > 0) {\n      output = new String(input, 0, noBytes);\n      System.out.println(output);\n    }\n  }\n\n}\n')),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Scanner"),", die ebenfalls auf dem Datenstrom-Konzept basiert, erm\xf6glicht eine einfache M\xf6glichkeit der Eingabe.")),(0,i.kt)("h2",{id:"schreiben-und-lesen-byteorientierter-daten"},"Schreiben und Lesen byteorientierter Daten"),(0,i.kt)("p",null,"F\xfcr die Verarbeitung von byteorientierten Daten (z.B. Bild- und Video-Dateien) stehen die abstrakten Basisklassen ",(0,i.kt)("inlineCode",{parentName:"p"},"InputStream")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputStream")," zur Verf\xfcgung."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Datenstromklasse"),(0,i.kt)("th",{parentName:"tr",align:null},"Ein- und Ausgabe in..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BufferedInputStream")," und ",(0,i.kt)("inlineCode",{parentName:"td"},"BufferedOutputStream")),(0,i.kt)("td",{parentName:"tr",align:null},"...einen Puffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FileInputStream")," und ",(0,i.kt)("inlineCode",{parentName:"td"},"FileOutputStream")),(0,i.kt)("td",{parentName:"tr",align:null},"...eine Datei")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"StringInputStream")," und ",(0,i.kt)("inlineCode",{parentName:"td"},"StringOutputStream")),(0,i.kt)("td",{parentName:"tr",align:null},"...eine Zeichenkette")))),(0,i.kt)("h3",{id:"schreiben-byteorientierter-daten"},"Schreiben byteorientierter Daten"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Datei-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"FileOutputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"BufferedOutputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"Daten schreiben")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.bin");\n\n    try (FileOutputStream fileOutputStream = new FileOutputStream(file);\n        BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(fileOutputStream)) {\n      bufferedOutputStream.write("Winter is Coming".getBytes());\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n')),(0,i.kt)("h3",{id:"lesen-byteorientierter-daten"},"Lesen byteorientierter Daten"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Datei-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"FileInputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"BufferedInputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"Werte auslesen")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.bin");\n\n    try (FileInputStream fileInputStream = new FileInputStream(file);\n        BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream)) {\n      byte[] input = bufferedInputStream.readAllBytes();\n      System.out.println(new String(input));\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n')),(0,i.kt)("h2",{id:"schreiben-und-lesen-zeichenorientierter-daten"},"Schreiben und Lesen zeichenorientierter Daten"),(0,i.kt)("p",null,"F\xfcr die Verarbeitung von zeichenorientierten Daten (z.B. Textdokumente) stehen die abstrakten Basisklassen ",(0,i.kt)("inlineCode",{parentName:"p"},"Reader")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Writer")," zur Verf\xfcgung."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Datenstromklasse"),(0,i.kt)("th",{parentName:"tr",align:null},"Ein- und Ausgabe in..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BufferedReader")," und ",(0,i.kt)("inlineCode",{parentName:"td"},"BufferedWriter")),(0,i.kt)("td",{parentName:"tr",align:null},"...einen Puffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FileReader")," und ",(0,i.kt)("inlineCode",{parentName:"td"},"FileWriter")),(0,i.kt)("td",{parentName:"tr",align:null},"...eine Datei")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"StringReader")," und ",(0,i.kt)("inlineCode",{parentName:"td"},"StringWriter")),(0,i.kt)("td",{parentName:"tr",align:null},"...eine Zeichenkette")))),(0,i.kt)("h3",{id:"schreiben-zeichenorientierter-daten"},"Schreiben zeichenorientierter Daten"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Datei-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"FileWriter-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"BufferedWriter-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"Daten schreiben")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n\n    try (FileWriter fileWriter = new FileWriter(file);\n        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {\n      bufferedWriter.write("Winter is Coming");\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n')),(0,i.kt)("h3",{id:"lesen-zeichenorientierter-daten"},"Lesen zeichenorientierter Daten"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Datei-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"FileReader-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"BufferedReader-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"Werte auslesen")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n\n    try (FileReader fileReader = new FileReader(file);\n        BufferedReader bufferedReader = new BufferedReader(fileReader)) {\n      String line;\n      while ((line = bufferedReader.readLine()) != null) {\n        System.out.println(line);\n      }\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n')),(0,i.kt)("h2",{id:"schreiben-und-lesen-serialisierter-objekte"},"Schreiben und Lesen serialisierter Objekte"),(0,i.kt)("p",null,"Um ein Objekt persistent zu machen (also zu sichern) und um ein Objekt durch das Netzwerk zu schicken (also f\xfcr entfernte Methodenaufrufe) ist es notwendig, das Objekt in einen Byte-Strom umzuwandeln. Die Umwandlung eines Objektes in einen Byte-Strom bezeichnet\nman als ",(0,i.kt)("em",{parentName:"p"},"Serialisierung")," die R\xfcckumwandlung als ",(0,i.kt)("em",{parentName:"p"},"Deserialisierung")," Die Serialisierung erfolgt \xfcber die writeObject-Methode der Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectOutputStream"),", die Deserialisierung \xfcber die readObject-Methode der Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectInputStream"),"."),(0,i.kt)("p",null,"Damit Objekte einer Klasse serialisiert werden k\xf6nnen, muss die entsprechende Klasse die Schnittstelle ",(0,i.kt)("inlineCode",{parentName:"p"},"Serializable")," implementieren. Die Schnittstelle ",(0,i.kt)("inlineCode",{parentName:"p"},"Serializable")," ist eine sogenannte Marker-Schnittstelle, d.h. sie besitzt keine zu implementierenden Methoden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo implements Serializable {\n\n}\n")),(0,i.kt)("h3",{id:"schreiben-serialisierter-objekte"},"Schreiben serialisierter Objekte"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Datei-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"FileOutputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"ObjectOutputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"Objekte schreiben")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    ArrayList<Foo> foos = new ArrayList<>();\n    foos.add(new Foo());\n    foos.add(new Foo());\n\n    File file = new File("foos.bin");\n\n    try (FileOutputStream fileOutputStream = new FileOutputStream(file);\n        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream)) {\n      for (Foo f : foos) {\n        objectOutputStream.writeObject(f);\n      }\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n')),(0,i.kt)("h3",{id:"lesen-serialisierter-objekte"},"Lesen serialisierter Objekte"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Datei-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"FileInputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"ObjectInputStream-Objekt erzeugen"),(0,i.kt)("li",{parentName:"ol"},"Objekte auslesen")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("foos.bin");\n\n    try (FileInputStream fileInputStream = new FileInputStream(file);\n        ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream)) {\n      while (true) {\n        Foo foo = (Foo) objectInputStream.readObject();\n        System.out.println(foo);\n      }\n    } catch (EOFException e) {\n      /* End of File */\n    } catch (IOException | ClassNotFoundException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n')),(0,i.kt)("h3",{id:"versionierung-bei-der-serialisierung"},"Versionierung bei der Serialisierung"),(0,i.kt)("p",null,"Die Konstante ",(0,i.kt)("inlineCode",{parentName:"p"},"serialVersionUID")," vom Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," dient zur eindeutigen Identifikation der Version einer serialisierbaren Klasse. Durch die Konstante kann sichergestellt werden, dass Empf\xe4nger von serialisierten Objekten typkompatibel zum Sender sind, d.h.\neine passende Klassenstruktur aufweisen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo implements Serializable {\n\n  public static final long serialVersionUID = 1L;\n\n}\n")),(0,i.kt)("admonition",{title:"Hinweis",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Obwohl jede serialisierbare Klasse automatisch eine ID erh\xe4lt, wird die manuelle Zuweisung dringend empfohlen.")),(0,i.kt)("h2",{id:"die-try-with-resources-anweisung"},"Die try-with-resources-Anweisung"),(0,i.kt)("p",null,'Bei einer "normalen" try-catch-Anweisung m\xfcssen die Datenstrom-Klassen manuell geschlossen werden, was sich als sehr aufw\xe4ndig darstellt.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n    FileWriter fileWriter = null;\n    BufferedWriter bufferedWriter = null;\n\n    try {\n      fileWriter = new FileWriter(file);\n      bufferedWriter = new BufferedWriter(fileWriter);\n      bufferedWriter.write("Winter is Coming");\n    } catch (IOException e) {\n      e.printStackTrace();\n    } finally {\n      if (bufferedWriter != null) {\n        try {\n          bufferedWriter.close();\n        } catch (IOException e) {\n          e.printStackTrace();\n        }\n      }\n    }\n  }\n\n}\n')),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Der finally-Block einer try-Anweisung wird in jedem Fall durchlaufen.")),(0,i.kt)("p",null,"Die try-with-resources-Anweisung erm\xf6glicht die Deklaration von Ressourcen, die am Ende des try-Blockes automatisch geschlossen werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n\n    try (FileWriter fileWriter = new FileWriter(file);\n        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {\n      bufferedWriter.write("Winter is Coming");\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n')),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Voraussetzung f\xfcr den Einsatz der try-with-resources-Anweisung ist, dass die Ressourcen-Klassen die Schnittstelle ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoCloseable")," implementiert haben.")))}p.isMDXComponent=!0}}]);