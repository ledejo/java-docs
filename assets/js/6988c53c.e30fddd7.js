"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8050],{9283:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(7294);function a(e){let{children:n,initSlides:t,width:a,height:r}=e;return(0,l.useEffect)((()=>{t()})),l.createElement("div",{className:"reveal",style:{width:a??"100vw",height:r??"100vh"}},l.createElement("div",{className:"slides"},n))}},9545:(e,n,t)=>{t.d(n,{O:()=>l});const l=()=>{const e=t(2199),n=t(7251),l=t(977),a=t(2489);new(t(9197))({plugins:[e,n,l,a]}).initialize({hash:!0})}},1217:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var l=t(7294),a=t(9283),r=t(9545);function c(){return l.createElement(a.Z,{initSlides:r.O},l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Agenda"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Organisatorische \xc4nderungen"),l.createElement("li",{className:"fragment"},"Evaluierungsergebnisse"),l.createElement("li",{className:"fragment"},"Wiederholung Java I"),l.createElement("li",{className:"fragment"},"Besprechung Klausur")))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Organisatorische \xc4nderungen")),l.createElement("section",null,l.createElement("h2",null,"Informationen unter neuer URL verf\xfcgbar"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},l.createElement("span",null," Dokumentation unter ")," ",l.createElement("br",null),l.createElement("a",{target:"_blank",href:"https://jappuccini.github.io/java-docs/"},"jappuccini.github.io/java-docs")),l.createElement("li",{className:"fragment"},l.createElement("span",null," Quellcode der Dokumentation unter ")," ",l.createElement("br",null),l.createElement("a",{target:"_blank",href:"https://github.com/jappuccini/java-docs"},"github.com/jappuccini/java-docs")),l.createElement("li",{className:"fragment"},l.createElement("span",null," Quellcode der Aufgaben")," ",l.createElement("br",null),l.createElement("a",{target:"_blank",href:"https://github.com/jappuccini/java-exercises"},"github.com/jappuccini/java-exercises")))),l.createElement("section",null,l.createElement("h2",null,"Fragen stellen"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Komplett anonym"),l.createElement("li",{className:"fragment"},"Persistent"),l.createElement("li",{className:"fragment"},"Event Code: ",l.createElement("b",null,"JavaII"))))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Evaluierungsergebnisse"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Demos hochladen"),l.createElement("li",{className:"fragment"},"Angst Fragen zu stellen"),l.createElement("li",{className:"fragment"},"Etwas langsameres Tempo"),l.createElement("li",{className:"fragment"},"Gemeinsam programmieren")))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Wiederholung Java I"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Datentypen")),l.createElement("section",null,l.createElement("h2",null,"Primitive Datentypen"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"boolean"),l.createElement("li",{className:"fragment"},"byte, short, ",l.createElement("b",null,"int"),", long"),l.createElement("li",{className:"fragment"},"float, ",l.createElement("b",null,"double")),l.createElement("li",{className:"fragment"},"char"))),l.createElement("section",null,l.createElement("h2",null,"Komplexe Datentypen"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"String"),l.createElement("li",{className:"fragment"},"jede Klasse")),l.createElement("p",{className:"fragment"},"Tipp: Primitive Datentypen haben keine Methoden")),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Methoden")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Calculator {\n\n  public static int add(int x, int y) {\n    return x + y;\n  }\n\n}\n"}})),l.createElement("span",{className:"fragment fade-in-then-out"},"R\xfcckgabetyp"),l.createElement("span",{className:"fragment fade-in-then-out"},"Bezeichner"),l.createElement("span",{className:"fragment fade-in-then-out"},"Parameter"),l.createElement("span",{className:"fragment fade-in-then-out"},"Methodenrumpf")),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Operatoren")),l.createElement("section",null,l.createElement("h2",null,"Arithmetische Operatoren"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    int a = 3;\n    int b = 2;\n    int addition = a + b; // 5;\n    int subtraktion = a - b; // 1;\n    int multiplikation = a * b; // 6;\n    int division = a / b; // 1, nicht 1.5! Warum?;\n    int restwert = a % b; // 1;\n  }\n//...\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Arithmetische Operatoren II"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    int a = 3;\n    System.out.println(a++); // Log: 3, Wert: 4\n    System.out.println(++a); // Log: 5, Wert: 5\n    System.out.println(--a); // Log: 4, Wert: 4\n    System.out.println(a--); // Log: 4, Wert: 3\n  }\n//...\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"Vergleichsoperatoren"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean result;\n    result = 3 == 2; // false \n    result = 3 != 2; // true \n    result = 3 &gt; 2; // true \n    result = 2 &gt;= 2; // true \n    result = 2 &lt; 2; // false \n    result = 2 &lt= 2; // true \n  }\n//...\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"Logische Operatoren I - AND"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean t = true;\n    boolean f = false;\n    boolean result;\n\n    result = t && f; // false \n    result = t && t; // true \n    result = f && t; // false \n    result = f && f; // false \n  }\n//...\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Logische Operatoren II - OR"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean t = true;\n    boolean f = false;\n    boolean result;\n\n    result = f || t; // true \n    result = t || f; // true \n    result = f || f; // false \n    result = t || t; // true \n  }\n//...\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Logische Operatoren III - NOT"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean t = true;\n    boolean f = false;\n    boolean result;\n\n    result = !f; // true \n    result = !t; // false \n  }\n//...\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Kontrollstrukturen")),l.createElement("section",null,l.createElement("h2",null,"if"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    int age = 18;\n\n    if(age >= 18) {\n      // Ich krieg alles, was ich will\n    } else if(age >= 16) {\n      // Ich krieg Bier, Wein, Most &lt;3 und Sekt \n    } else  {\n      // Ich krieg Coca Zero\n    } \n  }\n//...\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"switch"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static void greet(String gender) {\n    switch(gender) {\n      case 'm':\n      case 'M':\n        // falls man ein Mann ist\n        break; \n      case 'F':\n        // falls man eine Frau ist\n        break; \n      default :\n        // falls man divers ist\n        break; \n    }\n  }\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"while-Schleife"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' }; \n    boolean found = false; \n    int i = 0; \n    while(!found && i &lt; cars.length) {\n      String car = cars[i];\n      if(car.equals(brand)) {\n        found = true;\n      } else {\n        i++;\n      }\n    }\n    return found; \n  }\n"}}))),l.createElement("section",null,l.createElement("h2",null,"do-while-Schleife"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' }; \n    boolean found = false; \n    int i = 0; \n    do {\n      String car = cars[i];\n      if(car.equals(brand)) {\n        found = true;\n      } else {\n        i++;\n      }\n    }\n    while(!found && i &lt; cars.length)\n    return found; \n  }\n"}}))),l.createElement("section",null,l.createElement("h2",null,"for-Schleife"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' } \n    for (int i = 0; i &lt; cars.length; i++) {\n      String car = cars[i];\n      if(car.equals(brand)) {\n        return true;\n      }\n    }\n    return false; \n  }\n"}}))),l.createElement("section",null,l.createElement("h2",null,"for-each-Schleife"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' } \n    for (String car : cars) {\n      if(car.equals(brand)) {\n        return true;\n      }\n    }\n    return false; \n  }\n"}}))),l.createElement("section",null,l.createElement("h2",null,"break und continue"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"break beendet die komplette Schleife"),l.createElement("li",{className:"fragment"},"continue \xfcberspringt den restlichen Code"))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Arrays")),l.createElement("section",null,l.createElement("h2",null,"Array"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static void example() {\n    String[] cars = { 'BMW', 'Audi', 'Benz' };\n    String car;\n    car = cars[0]; // lesen aus dem Array\n    cars[2] = 'Alfa'; // speichern in ein Array\n    String[] twoCars = new String[2]; // Array ohne Inhalt\n    int amountOfItems = twoCars.length;\n  }\n"}}))),l.createElement("section",null,l.createElement("h2",null,"ArrayList"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static void example() {\n    ArrayList&lt;String&gt; cars = new ArrayList&lt;&gt;();\n    cars.add('BMW');\n    cars.add('Audi');\n    cars.add('Benz');\n    String car;\n    car = cars.get(0); // lesen aus der Liste\n    cars.set(2,'Alfa'); // speichern in der Liste\n    int amountOfItems = cars.size();\n  }\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Klassen und Objekte")),l.createElement("section",null,l.createElement("h2",null,"Klassen"),l.createElement("span",{className:"fragment"},"Eine Klasse beschreibt gleichartige Objekte durch"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Attribute"),l.createElement("li",{className:"fragment"},"Methoden"))),l.createElement("section",null,l.createElement("h2",null,"Beispiel Klasse"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Human {\n  public String firstName;\n  public String lastName;\n \n  public String getFullName() {\n    return firstName + lastName;\n  }\n}"}}))),l.createElement("section",null,l.createElement("h2",null,"Objekte"),l.createElement("span",{className:"fragment"},"Ein Objekt ist eine m\xf6gliche Auspr\xe4gung einer Klasse"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"konkreter Wert f\xfcr ein Attribut"),l.createElement("li",{className:"fragment"},"konkretes Verhalten einer Methode"))),l.createElement("section",null,l.createElement("h2",null,"Beispiel Objekt"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'  Human steffen = new Human();\n  steffen.firstName = "Steffen";\n  steffen.lastName = "Merk";\n  String fullName = steffen.getFullName();\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"Konstruktor")),l.createElement("section",null,l.createElement("h2",null,"Konstruktor"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"beschreibt die Initialisierung eines Objektes"),l.createElement("li",{className:"fragment"},"Konstruktoren k\xf6nnen \xdcberladen werden"))),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Car {\n  private String color;\n  private char engineType;\n\n  public Car(String color) {\n    this.color = color;\n    this.engineType = 'b';\n  }\n\n  public Car(String color, char engineType) {\n    this.color = color;\n    this.engineType = engineType;\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Vererbung")),l.createElement("section",null,l.createElement("h2",null,"Vererbung"),l.createElement("p",null,"Durch ",l.createElement("span",null,"Generalisierung")," werden gemeinsame Attribute und Methoden von mehreren Klassen in eine weitere Klasse ausgelagert.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public String name;\n  public Dog(String name) {\n    this.name = name;\n  }\n  // more Dog specific methods\n}\npublic class Cat {\n  public String name;\n  public Cat(String name) {\n    this.name = name;\n  }\n  // more Cat specific methods\n}\n"}}))),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Animal {\n  public String name;\n  public Animal(String name) {\n    this.name = name;\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog extends Animal {\n  public Dog(String name) {\n    super(name);\n  }\n}\n\npublic class Cat extends Animal {\n  public Cat(String name) {\n    super(name);\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Schl\xfcsselw\xf6rter zur Vererbung"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"extends"),l.createElement("li",{className:"fragment"},"super"))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Polymorphie")),l.createElement("section",null,l.createElement("h2",null,"Polymorphie"),l.createElement("p",{className:"fragment"},"Eine Referenzvariable, die vom Typ einer generalisierten Klasse ist, kann mehrere (poly) Formen annehmen (Unterklassen)."),l.createElement("p",{className:"fragment"},"Eine Referenzvariable vom Typ Animal kann eine Katze oder ein Hund sein.")),l.createElement("section",null,l.createElement("h2",null,"Upcast"),l.createElement("p",{className:"fragment"},"Der Referenzvariable einer Oberklasse wird eine Referenzvariable einer Unterklasse zugewiesen."),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Cat();\nAnimal animal02 = new Dog();\n"}}))),l.createElement("section",null,l.createElement("p",null,"Ist eine Referenzvariable vom Typ einer generalisierten Klasse, k\xf6nnen nur die Methoden der generalisierten Klasse verwendet werden."),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Dog();\nanimal01.name = 'Bello'; // funktioniert\nanimal01.bark(); // funktioniert nicht \n"}}))),l.createElement("section",null,l.createElement("h2",null,"Downcast"),l.createElement("p",{className:"fragment"},"Der Referenzvariable einer Oberklasse wird eine Referenzvariable einer Unterklasse zugewiesen."),l.createElement("pre",{className:"fragment"},l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Dog();\nDog dog01 = (Dog) animal01;\ndog01.bark(); // funktioniert\n"}}))),l.createElement("section",null,l.createElement("h2",null,"instanceof operator"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Dog();\nif (animal01 instanceof Dog) {\n   // hundespezifischer Quellcode\n   Dog bello = (Dog) animal01;\n   bello.bark();\n}"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Modifier")),l.createElement("section",null,l.createElement("h2",null,"Public Modifier - Klasse"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  //...\n}\n"}})),l.createElement("p",null,"Klasse kann \xfcberall im Projekt verwendet werden.")),l.createElement("section",null,l.createElement("h2",null,"Kein Modifier - Klasse"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"class Dog {\n  //...\n}\n"}})),l.createElement("p",null,"Klasse kann nur im selben Paket verwendet werden.")),l.createElement("section",null,l.createElement("h2",null,"Abstract Modifier - Klasse"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public abstract class Dog {\n  //...\n}\n"}})),l.createElement("p",null,"Ein Objekt dieser Klasse kann nicht instanziiert werden.")),l.createElement("section",null,l.createElement("h2",null,"Final Modifier - Klasse"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public final class Dog {\n  //...\n}\n"}})),l.createElement("p",null,"Von dieser Klasse kann nicht geerbt werden.")),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"Public Modifier - Attribut"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public String name;\n  //...\n}\n"}})),l.createElement("p",null,"Das Attribut kann immer ge\xe4ndert werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog();\nbello.name = "Steffen"; // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert\n }\n //...\n}\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Private Modifier - Attribut"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  private String name;\n  //...\n  public void setName(String name) {\n    this.name = name; // funktioniert\n  }\n}\n"}})),l.createElement("p",null,"Das Attribut kann innerhalb der Klasse ge\xe4ndert werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog();\nbello.name = "Steffen"; // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert nicht\n }\n //...\n}\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Protected Modifier - Attribut"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  protected String name;\n  //...\n  public void setName(String name) {\n    this.name = name; // funktioniert\n  }\n}\n"}})),l.createElement("p",null,"Das Attribut kann innerhalb der Klasse und von allen erbenden Klassen ge\xe4ndert werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog();\nbello.name = "Steffen"; // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert\n }\n //...\n}\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Final Modifier - Attribut"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public final String name;\n  //...\n  public Dog(String name) {\n    this.name = name; // funktioniert\n  }\n\n  public void setName(String name) {\n    this.name = name; // funktioniert nicht\n  }\n}\n"}})),l.createElement("p",null,"Das Attribut kann nur im Konstruktor ge\xe4ndert werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog();\nbello.name = "Steffen"; // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert nicht\n }\n //...\n}\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Static Modifier - Attribut"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public static boolean hasHat = false;\n  //...\n}\n"}})),l.createElement("p",null,"Das Attribut geh\xf6rt zu der Klasse und nicht zu einem Objekt.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.hasHat = true; // funktioniert nicht\nDog.hasHat = true; // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void setHat(boolean hasHat) {\n   this.hasHat = hasHat; // funktioniert nicht\n   Dog.hasHat = hasHat; // funktioniert\n }\n //...\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!")),l.createElement("section",null,l.createElement("h2",null,"Public Modifier - Methode"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public void bark() {\n    //...\n  }\n  //...\n}\n"}})),l.createElement("p",null,"Die Methode kann immer verwendet werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.bark(); // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.bark(); // funktioniert\n }\n //...\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Private Modifier - Methode"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  private void bark() {\n    //...\n  }\n  //...\n}\n"}})),l.createElement("p",null,"Die Methode kann innerhalb der Klasse verwendet werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.bark(); // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.bark(); // funktioniert nicht\n }\n //...\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Protected Modifier - Methode"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  protected void bark() {\n    //...\n  }\n  //...\n}\n"}})),l.createElement("p",null,"Das Attribut kann innerhalb der Klasse und von allen erbenden Klassen verwendet werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.bark(); // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.bark(); // funktioniert\n }\n //...\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Final Modifier - Methode"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public final void bark() {\n    //...\n  }\n  //...\n}\n"}})),l.createElement("p",null,"Die Methode kann nicht \xfcberschrieben werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class MonsterDog extends Dog {\n //...\n public void bark() { // funktioniert nicht \n   //...\n }\n //...\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Static Modifier - Methode"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public static hasHat = ture;\n  public static isCool = true;\n  public static boolean isCoolAndHasHat() {\n    return Dog.isCool && Dog.hasHat;\n  }\n  //...\n}\n"}})),l.createElement("p",null,"Die Methode geh\xf6rt zu der Klasse und nicht zu einem Objekt. Es kann nur auf statische Attribute zugegriffen werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.isCoolAndHasHat(); // funktioniert nicht\nDog.isCoolAndHasHat(); // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.isCoolAndHasHat(); // funktioniert nicht\n   Dog.isCoolAndHasHat(); // funktioniert\n }\n //...\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Abstract Modifier - Methode"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public abstract class Animal {\n  //...\n  public abstract void makeSound();{\n}\n"}})),l.createElement("p",null,"Die Methode muss von der erbenden Klasse implementiert werden. Abstrakte Methoden k\xf6nnen nur in abstrakten Klassen definiert werden.")),l.createElement("section",null,l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class MonsterDog extends Dog {\n // funktioniert nicht, makeSound muss implementiert werden\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Enumeration")),l.createElement("section",null,l.createElement("h2",null,"Enumeration"),l.createElement("p",null,"Eine Enumeration ist eine Klasse mit Attributen und Methoden. Sie definiert zus\xe4tzlich alle m\xf6glichen Auspr\xe4gungen dieser Klasse.")),l.createElement("section",null,l.createElement("h2",null,"Enumeration implementieren"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'public enum Gender {\n MALE("Mann"),\n FEMALE("Frau"),\n DIVERS("Divers");\n \n public final String text;\n \n Gender(String text) {\n   this.text = text;\n }\n \n public boolean isBinary() {\n   return this === Gender.MALE || this === Gender.FEMALE;\n }\n}\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Enumeration als Typ verwenden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Human {\n public final Gender gender;\n \n public Human(Gender gender) {\n   this.gender = gender;\n }\n public doSomethingBinaryRelated() {\n   if(this.gender.isBinary())\n   //...\n }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Enumeration als Wert setzen"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Human steffen = new Human(Gender.MALE);\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Interfaces")),l.createElement("section",null,l.createElement("h2",null,"Interfaces"),l.createElement("p",null,"Definieren Attribute und Methoden unabh\xe4ngig von der Vererbungshierarchie."),l.createElement("p",{className:"fragment"},"Dient als Schnittstelle zwischen Ersteller und Verwender einer Funktionalit\xe4t.")),l.createElement("section",null,l.createElement("h2",null,"Interface (Ersteller)"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Item {\n  public String getName(); \n}\n\npublic class ShoppingList {\n  ArrayList&lt;Item&gt; items = new ArrayList&lt;&gt;();\n  public void add(Item item) {\n    this.items.add(item);\n  }\n  public void print() {\n    for(Item item : items) {\n      System.out.println(item.getName();\n    }\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Interface (Verwender) I"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'public class Human implements Item {\n  public final String firstName;\n  public final String lastName;\n  \n  public Human(String firstName, String lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  \n  public String getName() {\n    return firstName + " " + lastName;\n  }\n}\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Interface (Verwender) II "),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'ShoppingList shoppingList = new ShoppingList();\nHuman steffen = new Human("Steffen", "Merk");\nshoppingList.add(steffen);\nshoppingList.print(); // "Steffen Merk"\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Comparator")),l.createElement("section",null,l.createElement("h2",null,"Comparator"),l.createElement("p",{className:"fragment"},"Definiert wie eine Liste von Elementen sortiert wird."),l.createElement("p",{className:"fragment"},"Vergleicht immer zwei Elemente miteinander, bei dem angegeben wird, wo das erste Element im Vergleich zum zweiten Element positioniert wird (Zahlenstrahl).")),l.createElement("section",null,l.createElement("h2",null,"Comparator implementieren"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class AgeAscComparator implements Comparator&lt;Human&gt; {\n  \n  public int compare(Human h1, Human h2) {\n    if(h1.getAge() > h2.getAge()) {\n     return 1;\n    } else if (h1.getAge() &lt; h2.getAge()) {;\n      return -1;\n    } else {\n      return 0;\n    } \n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Comparator verwenden"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"ArrayList&lt;Human&gt; developers = new ArrayList&lt;&gt;();\ndevelopers.add(new Human(28);\ndevelopers.add(new Human(24);\nCollections.sort(developers, new AgeAscComparator());\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Exceptions")),l.createElement("section",null,l.createElement("h2",null,"Exceptions"),l.createElement("p",{className:"fragment"},"Sind Fehler, die w\xe4hrend der Ausf\xfchrung des Programms auftreten k\xf6nnen und dienen zur Kommunikation."),l.createElement("p",{className:"fragment"},"Fehler k\xf6nnen mitgeteilt (throws) und verarbeitet werden (catch).")),l.createElement("section",null,l.createElement("h2",null,"Exception implementieren"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class TooYoungException extends Exception {\n  \n  public final int yearsTillAllowed;\n  \n  public TooYoungException(int yearsTillAllowed) {\n    super();\n    this.yearsTillAllowed = yearsTillAllowed;\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Exception ausl\xf6sen"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class ShoppingList {\n  Human buyer;\n  //...\n  public addItem(Item item) throws TooYoungException {\n    if(item.isAlcohol() && this.buyer.getAge() &lt; 21) {\n      throw new TooYoungException(21 - buyer.getAge());\n    }\n  }\n}\n"}}))),l.createElement("section",null,l.createElement("h2",null,"Exception behandeln"),l.createElement("pre",null,l.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'public class Main {\n  public static void main(String[] args) {\n    ShoppingList sl = new ShoppingList();\n    Beer corona = new Beer();\n    try {\n      sl.add(corona);\n    } catch (TooYoungException e) {\n      System.out.println("Du bist" + e.yearsTillAllowed + "zu jung");\n    } finally {\n      System.out.println("Einkauf beendet. (Immer)");\n    }\n  }\n}\n'}}))),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Klassendiagramme (Doku)")),l.createElement("section",null,l.createElement("h2",null,"Frag jetzt!"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Klausurbesprechung"))),l.createElement("section",null,l.createElement("section",null,l.createElement("h2",null,"Rest of the day"),l.createElement("ul",null,l.createElement("li",{className:"fragment"},"Wiederholung Java I"),l.createElement("li",{className:"fragment"},"Entwicklungsumgebung einrichten")))))}}}]);