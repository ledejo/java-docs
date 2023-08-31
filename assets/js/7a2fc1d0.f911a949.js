"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2154],{9283:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);function l(e){let{children:n,initSlides:t,width:l,height:r}=e;return(0,a.useEffect)((()=>{t()})),a.createElement("div",{className:"reveal",style:{width:l??"100vw",height:r??"100vh"}},a.createElement("div",{className:"slides"},n))}},9545:(e,n,t)=>{t.d(n,{O:()=>a});const a=()=>{const e=t(2199),n=t(7251),a=t(977),l=t(2489);new(t(9197))({plugins:[e,n,a,l]}).initialize({hash:!0})}},1983:(e,n,t)=>{t.d(n,{K:()=>l});var a=t(7294);const l=()=>a.createElement("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0}},"*NKR")},6361:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var a=t(7294),l=t(9283),r=t(1983),m=t(9545);function c(){return a.createElement(l.Z,{initSlides:m.O},a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Agenda"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Intro Java Stream API"),a.createElement("li",{className:"fragment"},"Allgemeine Funktionale Interfaces"),a.createElement("li",{className:"fragment"},"Methodenreferenzen"),a.createElement("li",{className:"fragment"},"Java Stream API Aufbau"),a.createElement("li",{className:"fragment"},"Quellen"),a.createElement("li",{className:"fragment"},"Intermediate Operations"),a.createElement("li",{className:"fragment"},"Terminal Operations")))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Intro Java Stream API")),a.createElement("section",null,a.createElement("h2",null,"Collection"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"ArrayList<Student>"),a.createElement("li",{className:"fragment"},"ArrayList<Car>"),a.createElement("li",{className:"fragment"},"ArrayList<Animal>")),a.createElement("p",{className:"fragment"},"Collections bieten einen direkten Zugriff auf die Elemente um Sie zu verwalten.")),a.createElement("section",null,a.createElement("h2",null,"Collection II"),a.createElement("ul",null,a.createElement("li",null,"Daten abfragen -> Name des \xe4ltesten Studenten"),a.createElement("li",null,"Daten \xe4ndern -> Preis eines Produkts erh\xf6hen"))),a.createElement("section",null,a.createElement("h2",null,"Was ist ein Java Stream?"),a.createElement("p",{className:"fragment"},"Eine Sequenz (Abfolge) von Elementen, die funktionale Operationen (Funktionale Interfaces) unterst\xfctzt, um Daten zu verarbeiten, transformieren und aggregieren")),a.createElement("section",null,a.createElement("h2",null,"Streams vs Collection"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Streams k\xf6nnen Daten nicht direkt bearbeiten"),a.createElement("li",{className:"fragment"},"Streams verarbeiten Daten verz\xf6gert (lazy)"),a.createElement("li",{className:"fragment"},"Streams verarbeiten Daten parallel"))),a.createElement("section",null,a.createElement("h2",null,"Demo"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Anzahl Studenten"),a.createElement("li",{className:"fragment"},"\xc4lter als 24"),a.createElement("li",{className:"fragment"},"Vorname mindestens 4 Zeichen"),a.createElement("li",{className:"fragment"},"Fullname mehr als 10 Zeichen"),a.createElement("li",{className:"fragment"},"Jetzt mit Streams")))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Allgemeine Funktionale Interfaces")),a.createElement("section",null,a.createElement("h2",null,"Grundkategorien von Funktionalen Interfaces"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Consumer"),a.createElement("li",{className:"fragment"},"Function"),a.createElement("li",{className:"fragment"},"Predicate"),a.createElement("li",{className:"fragment"},"Supplier"))),a.createElement("section",null,a.createElement("h2",null,"Consumer"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Consumer&lt;T&gt; {\n  public void accept(T t);\n}\n"}})),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiConsumer&lt;T, U&gt; {\n  public void accept(T t, U u);\n}\n"}})),a.createElement("p",{className:"fragment"},"Code ausf\xfchren ohne Daten weiterzugeben.")),a.createElement("section",null,a.createElement("h2",null,"Function"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Function&lt;T, R&gt; {\n  public R apply(T t);\n}\n"}})),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiFunction&lt;T, U, R&gt; {\n  public R apply(T t, U u);\n}\n"}})),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface UnaryOperator&lt;T&gt; {\n  public T apply(T t);\n}\n"}})),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BinaryOperator&lt;T&gt; {\n  public T apply(T t1, T t2);\n}\n"}})),a.createElement("p",{className:"fragment"},"Code ausf\xfchren, der Daten zur\xfcckgibt.")),a.createElement("section",null,a.createElement("h2",null,"Predicate"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Predicate&lt;T&gt; {\n  public boolean test(T t);\n}\n"}})),a.createElement("p",{className:"fragment"},"Code ausf\xfchren, der true oder false zur\xfcckgibt.")),a.createElement("section",null,a.createElement("h2",null,"Supplier"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Supplier&lt;T&gt; {\n  public T get();\n}\n"}})),a.createElement("p",{className:"fragment"},"Code ausf\xfchren, der Daten vom Typ T zur\xfcckgibt."),a.createElement(r.K,null)),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!")),a.createElement("section",null,a.createElement("h2",null,"Demo Lambda Funktionen Auslagern"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Attribut: minimumFirstName"),a.createElement("li",{className:"fragment"},"Attribut: olderThan24Years"),a.createElement("li",{className:"fragment"},"Attribut: toFullName"),a.createElement("li",{className:"fragment"},"Methode: olderThanYears"),a.createElement("li",{className:"fragment"},"Methode: fullNameIsLongerThan"))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!"))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Methodenreferenzen")),a.createElement("section",null,a.createElement("h2",null,"Warum Methodenreferenzen?"),a.createElement("p",{className:"fragment"},"Mit Methodenreferenzen kann man noch weniger Code schreiben."),a.createElement("p",{className:"fragment"},"Hat ein Parameter die gleiche Signatur, wie eine Methode, kann diese Methode als Methodenreferenz \xfcbergeben werden.")),a.createElement("section",null,a.createElement("h2",null,"Beispiel ArrayList"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    // lambda funktion\n    names.forEach((name) -&gt System.out.println(name));\n    \n    // methodenreferenz\n    names.forEach(System.out::println);\n }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Verwenden von Methodenreferenzen?"),a.createElement("p",{className:"fragment"},"Anstatt die Methode \xfcber einen Punkt aufzurufen, wird ein zweifacher Doppelpunkt verwendet."),a.createElement("p",{className:"fragment"},'Mit dem "new" nach dem zweifachen Doppelpunkt kann auch der Konstruktor einer Klasse referenziert werden.'),a.createElement(r.K,null)),a.createElement("section",null,a.createElement("h2",null,"Demo Methodenreferenzen"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Methodensignatur Sysout"),a.createElement("li",{className:"fragment"},"OneTimePrinter"))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!")),a.createElement("section",null,a.createElement("h2",null,"Demo Composed Lambdas"),a.createElement(r.K,null))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Java Stream API")),a.createElement("section",null,a.createElement("h2",null,"Was is eine Stream Pipeline"),a.createElement("pre",null,a.createElement("code",{"data-line-numbers":"5-9|5|6-8|9",className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    names.stream() // source\n      .filter(name -&gt; name.length > 4) //inter-\n      .map(name -&gt; name.toUpperCase()) //mediate\n      .limit(12)                      //operations\n      .forEach(System.out::println) // terminal operation\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h4",null,"Charakteristika einer Stream Pipeline"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Intermediate Operations sind optional"),a.createElement("li",{className:"fragment"},"Terminal Operation ist erforderlich"),a.createElement("li",{className:"fragment"},"Terminal Operation f\xfchrt die Pipeline aus"),a.createElement("li",{className:"fragment"},"Pipeline kann nur einmal genutzt werden"))),a.createElement("section",null,a.createElement("h2",null,"Demo Stream API"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Intermediate Optional"),a.createElement("li",{className:"fragment"},"Terminal erforderlich, sonst passiert nichts"),a.createElement("li",{className:"fragment"},"Pipeline nur einmal Nutzbar"),a.createElement("li",{className:"fragment"},"Intermediate Reihenfolge"))),a.createElement("section",null,a.createElement("h2",null,"Aufbau einer Pipeline"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Quelle"),a.createElement("li",{className:"fragment"},"Intermediate Operations"),a.createElement("li",{className:"fragment"},"Terminal Operations"))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!"))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Quellen")),a.createElement("section",null,a.createElement("h2",null,"Erzeugen von Quellen I"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Collection.stream(); // interface\n    // --\x3e Klassen die Collection implementieren:\n    ArrayList&lt;Student&gt; students = new ArrayList&lt;&gt;();\n    students.stream();\n    \n    HashMap&lt;String, Student&gt; map = new HashMap&lt;&gt;();\n    map.keySet().stream();\n    map.entrySet().stream();\n    map.values().stream();\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Erzeugen von Quellen II"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Array in ein Stream konvertieren:\n    // Arrays.stream(T[])\n    Stream&lt;Integer&gt; num1 = Arrays.stream({ 1, 2, 3, 4 });\n    \n    int[] numArray = { 1, 2, 3, 4 };\n    Stream&lt;Integer&gt; num2 = Arrays.stream(numArray);\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Erzeugen von Quellen III"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Gleichartige Werte in ein Stream kovertieren:\n    // Stream.of(T...);\n    Stream&lt;Integer&gt; num1 = Stream.of(1, 2, 3, 4);\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!"))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Intermediate Operations")),a.createElement("section",null,a.createElement("h2",null,"Intermediate Operations"),a.createElement("p",null,"sind Methoden eines Streams, die als R\xfcckgabewert einen Stream zur\xfcckgeben."),a.createElement("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html"},"Stream Klasse")),a.createElement("section",null,a.createElement("h2",null,"filter - Methode"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate)"}})),a.createElement("p",{className:"fragment"},"Der Parameter predicate muss das"," ",a.createElement("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html"},"Predicate Interface")," ","implementieren.")),a.createElement("section",null,a.createElement("h2",null,"filter - Verwendung"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 3);\n      // nur 4 bleibt \xfcbrig\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"map - Methode"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"&lt;R&gt; Stream&lt;R&gt; map(Function&lt;? super T,? extends R&gt; mapper)"}})),a.createElement("p",{className:"fragment"},"Der Parameter mapper muss das"," ",a.createElement("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html"},"Function Interface")," ","implementieren."),a.createElement("p",{className:"fragment"},"Die Eingabe vom Typ T definiert der vorherige Stream. Der R\xfcckgabetyp des mapper Parameters definiert den R\xfcckgabetyp des Streams.")),a.createElement("section",null,a.createElement("h2",null,"map - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .map(number -> number * 2);\n    // R\xfcckgabetyp: Stream&lt;Integer&gt;\n    Stream.of(1, 2, 3, 4)\n      .map(number -> String.valueOf(number));\n    // R\xfcckgabetyp: Stream&lt;String&gt;\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"limit - Methode"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; limit(long maxSize)"}})),a.createElement("p",{className:"fragment"},'Es werden maximal "maxSize" Elemente des vorherigen Streams weitergegeben.')),a.createElement("section",null,a.createElement("h2",null,"limit - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .limit(2);\n      // nur 1 & 2 werden weitergegeben\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"skip - Methode"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; skip(long n)"}})),a.createElement("p",{className:"fragment"},"Es werden n-Elemente \xfcbersprungen.")),a.createElement("section",null,a.createElement("h2",null,"skip - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .skip(2);\n      // nur 3 & 4 werden weitergegeben\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"sorted - Methode"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; sorted(Comparator&lt;? super T&gt; comparator)"}})),a.createElement("p",{className:"fragment"},"Der Parameter comparator muss das"," ",a.createElement("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html"},"Comparator Interface")," ","implementieren.")),a.createElement("section",null,a.createElement("h2",null,"sorted - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(4, 3, 2, 1)\n      .sorted((n1, n2) -> Integer.compare(n1, n2));\n      // 1, 2, 3, 4\n      // Sagt Bye Bye zu Collections.sort()\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"distinct - Methode"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; distinct()"}})),a.createElement("p",{className:"fragment"},"Es werden nur einzigartige Werte im Stream beibehalten. Diese werden Mithilfe von .equals identifiziert.")),a.createElement("section",null,a.createElement("h2",null,"distinct - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 1, 4)\n      .distinct();\n      // nur 1, 2 & 4 werden weitergegeben\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Review von Stream Api Examples"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Student Example ohne Auslagerung"),a.createElement("li",{className:"fragment"},"Number Example Limit und Reihenfolge"))),a.createElement("section",null,a.createElement("h2",null,"Von Stream zu Stream"),a.createElement("p",null,"Intermediate Operations werden auf einem Stream aufgerufen und geben immer einen Stream zur\xfcck.")),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!"))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Terminal Operations")),a.createElement("section",null,a.createElement("h2",null,"Terminal Operations"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Matching und Suchen"),a.createElement("li",{className:"fragment"},"Transformationen"),a.createElement("li",{className:"fragment"},"Statistik"),a.createElement("li",{className:"fragment"},"Verarbeitung"))),a.createElement("section",null,a.createElement("h2",null,"Matching"),a.createElement("p",null,"Mit Matching kann abgefragt werden ob bestimmte Elemente einer Bedingung entsprechen.")),a.createElement("section",null,a.createElement("h2",null,"Matching - Methoden"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"boolean  allMatch(Predicate&lt;T&gt; predicate) // alle\nboolean noneMatch(Predicate&lt;T&gt; predicate) // keiner\nboolean  anyMatch(Predicate&lt;T&gt; predicate) // mindestens einer\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Matching - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .allMatch(number -> number > 3); // false\n    \n    Stream.of(1, 2, 3, 4)\n      .noneMatch(number -> number > 4); // true\n    \n    Stream.of(1, 2, 3, 4)\n      .anyMatch(number -> number > 2); // true\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Suchen"),a.createElement("p",null,"Mit findAny und findFirst wird das erste Element in einem Stream zur\xfcckgegeben.")),a.createElement("section",null,a.createElement("h2",null,"Suchen - Methoden"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Optional&lt;T&gt; findAny() // nicht deterministisch\nOptional&lt;T&gt; findFirst() // deterministisch\n"}})),a.createElement("p",null,"Haupts\xe4chlich wichtig bei parallelen Streams")),a.createElement("section",null,a.createElement("h2",null,"Suchen - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findAny() // 2, 3 oder 4\n    \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findFirst() // immer 2\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Transformationen"),a.createElement("p",null,"Die Ergebnismenge wird gesammelt.")),a.createElement("section",null,a.createElement("h2",null,"Transformationen - Methoden"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"List&lt;T&gt; toList()\nT[] toArray()\n\nT reduce(T identity, BinaryOperator&lt;T&gt; accumulator)\n\nR collect(Collector&lt;T,A,R&gt; collector)\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Transformationen - Verwendung I "),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toList() // List&lt;Integer&gt;\n    \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toArray() // Object[]\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Transformationen - Verwendung II "),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .reduce(0, (a, b) -> a + b);  // int *NKR\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Transformationen - Verwendung III "),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents().\n      .stream()\n      .collect(Collectors.toList());\n      // nur Collectors.toMap ist Klausurrelevant\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Demo"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},a.createElement("a",{href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Collectors.html"},"Collectors Klasse")),a.createElement("li",{className:"fragment"},"ArrayList to Map"))),a.createElement("section",null,a.createElement("h2",null,"Statistik"),a.createElement("p",null,"Mit Statistik Operationen lassen sich Anzahl, Minimum, Maximum, Summe und Durchschnitt berechnen.")),a.createElement("section",null,a.createElement("h2",null,"Statistik - Methoden"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"long count()\n\nOptional&lt;T&gt; min(Comparator&lt;T&gt;)\nOptional&lt;T&gt; max(Comparator&lt;T&gt;)\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik - Verwendung I"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .count(); // 4\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik - Verwendung II"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; min = Stream.of(1, 2, 3, 4)\n      .min((n1, n2) -> Integer.compare(n1, n2));\n    \n    min.ifPresent(System.out::println); // 1\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik - Verwendung III"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; max = Stream.of(1, 2, 3, 4)\n      .max((n1, n2) -> Integer.compare(n1, n2));\n    \n    max.ifPresent(System.out::println); // 4\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik Streams Erzeugen"),a.createElement("p",null,"F\xfcr die Methoden Durchschnitt und Summe werden spezifische Streams ben\xf6tigt:"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"IntStream"),a.createElement("li",{className:"fragment"},"LongStream"),a.createElement("li",{className:"fragment"},"DoubleStream"))),a.createElement("section",null,a.createElement("h2",null,"Statistik Streams Erzeugen - Methoden"),a.createElement("p",null,"Um einen Statistik Stream zu erzeugen gibt es Intermediate Operations"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"DoubleStream mapToDouble(ToDoubleFunction&lt;T&gt; mapper)\nIntStream    mapToInt(ToIntFunction&lt;T&gt; mapper)\nLongStream   mapToLong(ToLongFunction&lt;T&gt; mapper)\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik Streams Erzeugen - Verwenden"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents();\n    IntStream studentAges = students\n      .mapToInt(student -> student.age());\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik Streams - Methoden"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"long sum()\n                           \nOptional&lt;T&gt; average()\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik Streams - Verwendung I"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    int sum = manyNumbers.sum();\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Statistik - Verwendung II"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    manyNumbers.average()\n      .ifPresent(System.out::println);\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Verarbeitung"),a.createElement("p",null,"Mit forEach kann jedes einzelne Element nacheinander weiterverarbeitet werden.")),a.createElement("section",null,a.createElement("h2",null,"Verarbeitung - Methoden"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"void forEach(Consumer&lt;T&gt; consumer)\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Verarbeitung - Verwendung"),a.createElement("pre",null,a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(System.out::println)\n \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(n -> System.out.println(n));\n  }\n}\n"}})))),a.createElement("section",null,a.createElement("h2",null,"Rest of the Day"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Generics"),a.createElement("li",{className:"fragment"},"Maps"))))}}}]);