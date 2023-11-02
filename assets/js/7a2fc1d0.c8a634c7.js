"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2154],{9283:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);function l(e){let{children:n,initSlides:t,width:l,height:r}=e;return(0,a.useEffect)((()=>{t()})),a.createElement("div",{className:"reveal reveal-viewport",style:{width:l??"100vw",height:r??"100vh"}},a.createElement("div",{className:"slides"},n))}},9545:(e,n,t)=>{t.d(n,{O:()=>a});const a=()=>{const e=t(2199),n=t(7251),a=t(977),l=t(2489);new(t(9197))({plugins:[e,n,a,l]}).initialize({hash:!0})}},1983:(e,n,t)=>{t.d(n,{K:()=>l});var a=t(7294);const l=()=>a.createElement("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0}},"*NKR")},6361:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(9960),l=t(7294),r=t(9283),m=t(9545),c=t(1983);function s(){return l.createElement(r.Z,{initSlides:m.O},l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Agenda"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Intro Java Stream API"),l.createElement("li",{className:"fragment"},"Allgemeine Funktionale Interfaces"),l.createElement("li",{className:"fragment"},"Methodenreferenzen"),l.createElement("li",{className:"fragment"},"Java Stream API Aufbau"),l.createElement("li",{className:"fragment"},"Quellen"),l.createElement("li",{className:"fragment"},"Intermediate Operations"),l.createElement("li",{className:"fragment"},"Terminal Operations")))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Intro Java Stream API")),l.createElement("section",null,l.createElement("h2",null,"Collection"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"ArrayList<Student>"),l.createElement("li",{className:"fragment"},"ArrayList<Car>"),l.createElement("li",{className:"fragment"},"ArrayList<Animal>")),l.createElement("p",{className:"fragment"},"Collections bieten einen direkten Zugriff auf die Elemente um Sie zu verwalten.")),l.createElement("section",null,l.createElement("h2",null,"Collection II"),l.createElement("ul",null,l.createElement("li",null,"Daten abfragen -> Name des \xe4ltesten Studenten"),l.createElement("li",null,"Daten \xe4ndern -> Preis eines Produkts erh\xf6hen"))),l.createElement("section",null,l.createElement("h2",null,"Was ist ein Java Stream?"),l.createElement("p",{className:"fragment"},"Eine Sequenz (Abfolge) von Elementen, die funktionale Operationen (Funktionale Interfaces) unterst\xfctzt, um Daten zu verarbeiten, transformieren und aggregieren")),l.createElement("section",null,l.createElement("h2",null,"Streams vs Collection"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Streams k\xf6nnen Daten nicht direkt bearbeiten"),l.createElement("li",{className:"fragment"},"Streams verarbeiten Daten verz\xf6gert (lazy)"),l.createElement("li",{className:"fragment"},"Streams verarbeiten Daten parallel"))),l.createElement("section",null,l.createElement("h2",null,"Demo"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Anzahl Studenten"),l.createElement("li",{className:"fragment"},"\xc4lter als 24"),l.createElement("li",{className:"fragment"},"Vorname mindestens 4 Zeichen"),l.createElement("li",{className:"fragment"},"Fullname mehr als 10 Zeichen"),l.createElement("li",{className:"fragment"},"Jetzt mit Streams")))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Allgemeine Funktionale Interfaces")),l.createElement("section",null,l.createElement("h2",null,"Grundkategorien von Funktionalen Interfaces"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Consumer"),l.createElement("li",{className:"fragment"},"Function"),l.createElement("li",{className:"fragment"},"Predicate"),l.createElement("li",{className:"fragment"},"Supplier"))),l.createElement("section",null,l.createElement("h2",null,"Consumer"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Consumer&lt;T&gt; {\n  public void accept(T t);\n}\n"}})),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiConsumer&lt;T, U&gt; {\n  public void accept(T t, U u);\n}\n"}})),l.createElement("p",{className:"fragment"},"Code ausf\xfchren ohne Daten weiterzugeben.")),l.createElement("section",null,l.createElement("h2",null,"Function"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Function&lt;T, R&gt; {\n  public R apply(T t);\n}\n"}})),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiFunction&lt;T, U, R&gt; {\n  public R apply(T t, U u);\n}\n"}})),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface UnaryOperator&lt;T&gt; {\n  public T apply(T t);\n}\n"}})),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BinaryOperator&lt;T&gt; {\n  public T apply(T t1, T t2);\n}\n"}})),l.createElement("p",{className:"fragment"},"Code ausf\xfchren, der Daten zur\xfcckgibt.")),l.createElement("section",null,l.createElement("h2",null,"Predicate"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Predicate&lt;T&gt; {\n  public boolean test(T t);\n}\n"}})),l.createElement("p",{className:"fragment"},"Code ausf\xfchren, der true oder false zur\xfcckgibt.")),l.createElement("section",null,l.createElement("h2",null,"Supplier"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Supplier&lt;T&gt; {\n  public T get();\n}\n"}})),l.createElement("p",{className:"fragment"},"Code ausf\xfchren, der Daten vom Typ T zur\xfcckgibt."),l.createElement(c.K,null)),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"Demo Lambda Funktionen Auslagern"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Attribut: minimumFirstName"),l.createElement("li",{className:"fragment"},"Attribut: olderThan24Years"),l.createElement("li",{className:"fragment"},"Attribut: toFullName"),l.createElement("li",{className:"fragment"},"Methode: olderThanYears"),l.createElement("li",{className:"fragment"},"Methode: fullNameIsLongerThan"))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Methodenreferenzen")),l.createElement("section",null,l.createElement("h2",null,"Warum Methodenreferenzen?"),l.createElement("p",{className:"fragment"},"Mit Methodenreferenzen kann man noch weniger Code schreiben."),l.createElement("p",{className:"fragment"},"Hat ein Parameter die gleiche Signatur, wie eine Methode, kann diese Methode als Methodenreferenz \xfcbergeben werden.")),l.createElement("section",null,l.createElement("h2",null,"Beispiel ArrayList"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    // lambda funktion\n    names.forEach((name) -&gt System.out.println(name));\n    \n    // methodenreferenz\n    names.forEach(System.out::println);\n }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Verwenden von Methodenreferenzen?"),l.createElement("p",{className:"fragment"},"Anstatt die Methode \xfcber einen Punkt aufzurufen, wird ein zweifacher Doppelpunkt verwendet."),l.createElement("p",{className:"fragment"},'Mit dem "new" nach dem zweifachen Doppelpunkt kann auch der Konstruktor einer Klasse referenziert werden.'),l.createElement(c.K,null)),l.createElement("section",null,l.createElement("h2",null,"Demo Methodenreferenzen"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Methodensignatur Sysout"),l.createElement("li",{className:"fragment"},"OneTimePrinter"))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"Demo Composed Lambdas"),l.createElement(c.K,null))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Java Stream API")),l.createElement("section",null,l.createElement("h2",null,"Was is eine Stream Pipeline"),l.createElement("pre",null,l.createElement("code",{"data-line-numbers":"5-9|5|6-8|9",className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    names.stream() // source\n      .filter(name -&gt; name.length > 4) //inter-\n      .map(name -&gt; name.toUpperCase()) //mediate\n      .limit(12)                      //operations\n      .forEach(System.out::println) // terminal operation\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h4",null,"Charakteristika einer Stream Pipeline"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Intermediate Operations sind optional"),l.createElement("li",{className:"fragment"},"Terminal Operation ist erforderlich"),l.createElement("li",{className:"fragment"},"Terminal Operation f\xfchrt die Pipeline aus"),l.createElement("li",{className:"fragment"},"Pipeline kann nur einmal genutzt werden"))),l.createElement("section",null,l.createElement("h2",null,"Demo Stream API"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Intermediate Optional"),l.createElement("li",{className:"fragment"},"Terminal erforderlich, sonst passiert nichts"),l.createElement("li",{className:"fragment"},"Pipeline nur einmal Nutzbar"),l.createElement("li",{className:"fragment"},"Intermediate Reihenfolge"))),l.createElement("section",null,l.createElement("h2",null,"Aufbau einer Pipeline"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Quelle"),l.createElement("li",{className:"fragment"},"Intermediate Operations"),l.createElement("li",{className:"fragment"},"Terminal Operations"))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Quellen")),l.createElement("section",null,l.createElement("h2",null,"Erzeugen von Quellen I"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Collection.stream(); // interface\n    // --\x3e Klassen die Collection implementieren:\n    ArrayList&lt;Student&gt; students = new ArrayList&lt;&gt;();\n    students.stream();\n    \n    HashMap&lt;String, Student&gt; map = new HashMap&lt;&gt;();\n    map.keySet().stream();\n    map.entrySet().stream();\n    map.values().stream();\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Erzeugen von Quellen II"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Array in ein Stream konvertieren:\n    // Arrays.stream(T[])\n    Stream&lt;Integer&gt; num1 = Arrays.stream({ 1, 2, 3, 4 });\n    \n    int[] numArray = { 1, 2, 3, 4 };\n    Stream&lt;Integer&gt; num2 = Arrays.stream(numArray);\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Erzeugen von Quellen III"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Gleichartige Werte in ein Stream kovertieren:\n    // Stream.of(T...);\n    Stream&lt;Integer&gt; num1 = Stream.of(1, 2, 3, 4);\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Intermediate Operations")),l.createElement("section",null,l.createElement("h2",null,"Intermediate Operations"),l.createElement("p",null,"sind Methoden eines Streams, die als R\xfcckgabewert einen Stream zur\xfcckgeben."),l.createElement(a.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Stream.html"},"Stream Klasse")),l.createElement("section",null,l.createElement("h2",null,"filter - Methode"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate)"}})),l.createElement("p",{className:"fragment"},"Der Parameter predicate muss das"," ",l.createElement(a.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Predicate.html"},"Predicate Interface")," ","implementieren.")),l.createElement("section",null,l.createElement("h2",null,"filter - Verwendung"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 3);\n      // nur 4 bleibt \xfcbrig\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"map - Methode"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"&lt;R&gt; Stream&lt;R&gt; map(Function&lt;? super T,? extends R&gt; mapper)"}})),l.createElement("p",{className:"fragment"},"Der Parameter mapper muss das"," ",l.createElement(a.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Function.html"},"Function Interface")," ","implementieren."),l.createElement("p",{className:"fragment"},"Die Eingabe vom Typ T definiert der vorherige Stream. Der R\xfcckgabetyp des mapper Parameters definiert den R\xfcckgabetyp des Streams.")),l.createElement("section",null,l.createElement("h2",null,"map - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .map(number -> number * 2);\n    // R\xfcckgabetyp: Stream&lt;Integer&gt;\n    Stream.of(1, 2, 3, 4)\n      .map(number -> String.valueOf(number));\n    // R\xfcckgabetyp: Stream&lt;String&gt;\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"limit - Methode"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; limit(long maxSize)"}})),l.createElement("p",{className:"fragment"},'Es werden maximal "maxSize" Elemente des vorherigen Streams weitergegeben.')),l.createElement("section",null,l.createElement("h2",null,"limit - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .limit(2);\n      // nur 1 & 2 werden weitergegeben\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"skip - Methode"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; skip(long n)"}})),l.createElement("p",{className:"fragment"},"Es werden n-Elemente \xfcbersprungen.")),l.createElement("section",null,l.createElement("h2",null,"skip - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .skip(2);\n      // nur 3 & 4 werden weitergegeben\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"sorted - Methode"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; sorted(Comparator&lt;? super T&gt; comparator)"}})),l.createElement("p",{className:"fragment"},"Der Parameter comparator muss das"," ",l.createElement(a.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html"},"Comparator Interface")," ","implementieren.")),l.createElement("section",null,l.createElement("h2",null,"sorted - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(4, 3, 2, 1)\n      .sorted((n1, n2) -> Integer.compare(n1, n2));\n      // 1, 2, 3, 4\n      // Sagt Bye Bye zu Collections.sort()\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"distinct - Methode"),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; distinct()"}})),l.createElement("p",{className:"fragment"},"Es werden nur einzigartige Werte im Stream beibehalten. Diese werden Mithilfe von .equals identifiziert.")),l.createElement("section",null,l.createElement("h2",null,"distinct - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 1, 4)\n      .distinct();\n      // nur 1, 2 & 4 werden weitergegeben\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Review von Stream Api Examples"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Student Example ohne Auslagerung"),l.createElement("li",{className:"fragment"},"Number Example Limit und Reihenfolge"))),l.createElement("section",null,l.createElement("h2",null,"Von Stream zu Stream"),l.createElement("p",null,"Intermediate Operations werden auf einem Stream aufgerufen und geben immer einen Stream zur\xfcck.")),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Terminal Operations")),l.createElement("section",null,l.createElement("h2",null,"Terminal Operations"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Matching und Suchen"),l.createElement("li",{className:"fragment"},"Transformationen"),l.createElement("li",{className:"fragment"},"Statistik"),l.createElement("li",{className:"fragment"},"Verarbeitung"))),l.createElement("section",null,l.createElement("h2",null,"Matching"),l.createElement("p",null,"Mit Matching kann abgefragt werden ob bestimmte Elemente einer Bedingung entsprechen.")),l.createElement("section",null,l.createElement("h2",null,"Matching - Methoden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"boolean  allMatch(Predicate&lt;T&gt; predicate) // alle\nboolean noneMatch(Predicate&lt;T&gt; predicate) // keiner\nboolean  anyMatch(Predicate&lt;T&gt; predicate) // mindestens einer\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Matching - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .allMatch(number -> number > 3); // false\n    \n    Stream.of(1, 2, 3, 4)\n      .noneMatch(number -> number > 4); // true\n    \n    Stream.of(1, 2, 3, 4)\n      .anyMatch(number -> number > 2); // true\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Suchen"),l.createElement("p",null,"Mit findAny und findFirst wird das erste Element in einem Stream zur\xfcckgegeben.")),l.createElement("section",null,l.createElement("h2",null,"Suchen - Methoden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Optional&lt;T&gt; findAny() // nicht deterministisch\nOptional&lt;T&gt; findFirst() // deterministisch\n"}})),l.createElement("p",null,"Haupts\xe4chlich wichtig bei parallelen Streams")),l.createElement("section",null,l.createElement("h2",null,"Suchen - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findAny() // 2, 3 oder 4\n    \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findFirst() // immer 2\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Transformationen"),l.createElement("p",null,"Die Ergebnismenge wird gesammelt.")),l.createElement("section",null,l.createElement("h2",null,"Transformationen - Methoden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"List&lt;T&gt; toList()\nT[] toArray()\n\nT reduce(T identity, BinaryOperator&lt;T&gt; accumulator)\n\nR collect(Collector&lt;T,A,R&gt; collector)\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Transformationen - Verwendung I "),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    List&lt;Integer&gt; nums = Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toList() // List&lt;Integer&gt;\n    \n    Object[] nums2 = Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toArray() // Object[]\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Transformationen - Verwendung II "),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .reduce(0, (a, b) -> a + b);  // int *NKR\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Transformationen - Verwendung III "),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents()\n      .stream()\n      .collect(Collectors.toList());\n      // Collectors.toMap ist Klausurrelevant\n      // Collectors.groupingBy ist Klausurrelevant\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Demo"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},l.createElement(a.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Collectors.html"},"Collectors Klasse")),l.createElement("li",{className:"fragment"},"Collectors.toMap"),l.createElement("li",{className:"fragment"},"Collectors.groupingBy"))),l.createElement("section",null,l.createElement("h2",null,"Statistik"),l.createElement("p",null,"Mit Statistik Operationen lassen sich Anzahl, Minimum, Maximum, Summe und Durchschnitt berechnen.")),l.createElement("section",null,l.createElement("h2",null,"Statistik - Methoden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"long count()\n\nOptional&lt;T&gt; min(Comparator&lt;T&gt;)\nOptional&lt;T&gt; max(Comparator&lt;T&gt;)\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik - Verwendung I"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .count(); // 4\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik - Verwendung II"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; min = Stream.of(1, 2, 3, 4)\n      .min((n1, n2) -> Integer.compare(n1, n2));\n    \n    min.ifPresent(System.out::println); // 1\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik - Verwendung III"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; max = Stream.of(1, 2, 3, 4)\n      .max((n1, n2) -> Integer.compare(n1, n2));\n    \n    max.ifPresent(System.out::println); // 4\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik Streams Erzeugen"),l.createElement("p",null,"F\xfcr die Methoden Durchschnitt und Summe werden spezifische Streams ben\xf6tigt:"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"IntStream"),l.createElement("li",{className:"fragment"},"LongStream"),l.createElement("li",{className:"fragment"},"DoubleStream"))),l.createElement("section",null,l.createElement("h2",null,"Statistik Streams Erzeugen - Methoden"),l.createElement("p",null,"Um einen Statistik Stream zu erzeugen gibt es Intermediate Operations"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"DoubleStream mapToDouble(ToDoubleFunction&lt;T&gt; mapper)\nIntStream    mapToInt(ToIntFunction&lt;T&gt; mapper)\nLongStream   mapToLong(ToLongFunction&lt;T&gt; mapper)\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik Streams Erzeugen - Verwenden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents();\n    IntStream studentAges = students.stream()\n      .mapToInt(student -> student.age());\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik Streams - Methoden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"long sum()\n                           \nOptionalDouble average()\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik Streams - Verwendung I"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    long sum = manyNumbers.sum();\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Statistik - Verwendung II"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    manyNumbers.average()\n      .ifPresent(System.out::println);\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Verarbeitung"),l.createElement("p",null,"Mit forEach kann jedes einzelne Element nacheinander weiterverarbeitet werden.")),l.createElement("section",null,l.createElement("h2",null,"Verarbeitung - Methoden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"void forEach(Consumer&lt;T&gt; consumer)\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Verarbeitung - Verwendung"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(System.out::println)\n \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(n -> System.out.println(n));\n  }\n}\n"}})))),l.createElement("section",null,l.createElement("h2",null,"Rest of the Day"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Lambda Aufgaben"),l.createElement("li",{className:"fragment"},"Stream API Aufgaben"))))}}}]);