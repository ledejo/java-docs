"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7997],{9283:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);function l(e){let{children:n,initSlides:t,width:l,height:r}=e;return(0,a.useEffect)((()=>{t()})),a.createElement("div",{className:"reveal",style:{width:l??"100vw",height:r??"100vh"}},a.createElement("div",{className:"slides"},n))}},9545:(e,n,t)=>{t.d(n,{O:()=>a});const a=()=>{const e=t(2199),n=t(7251),a=t(977),l=t(2489);new(t(9197))({plugins:[e,n,a,l]}).initialize({hash:!0})}},8764:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(7294),l=t(9283),r=t(9545),m=t(9960);function s(){return a.createElement(l.Z,{initSlides:r.O},a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Agenda"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Innere Klassen"),a.createElement("li",{className:"fragment"},"Lambdafunktionen")))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Innere Klassen")),a.createElement("section",null,a.createElement("h2",null,"Innere Klassen"),a.createElement("p",{className:"fragment"},"Dateien die ausschlie\xdflich eine einzige Klasse beinhalten nennt man",a.createElement("span",null," \xc4u\xdfere Klassen"),"."),a.createElement("p",{className:"fragment"},"Wird eine Klasse innerhalb einer anderen Klasse definiert, nennt man diese ",a.createElement("span",null," Innere Klasse "),".")),a.createElement("section",null,a.createElement("h2",null,"Arten von Inneren Klassen"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Geschachtelte Klassen"),a.createElement("li",{className:"fragment"},"Element Klassen"),a.createElement("li",{className:"fragment"},"Lokale Klassen"),a.createElement("li",{className:"fragment"},"Anonyme Klassen"))),a.createElement("section",null,a.createElement("h2",null,"Geschachtelte Klasse - Definition"),a.createElement("p",{className:"fragment"},"Die innere Klasse wird innerhalb der Klassendefinition erstellt und mit dem Schl\xfcsselwort ",a.createElement("span",null," static")," markiert."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class HumanComparator {\n //...\n public static class AgeDescComparator \n   implements Comparator&lt;Human&gt; {\n   //...\n }\n //...\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Geschachtelte Klasse - Verwendung"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n\nHumanComparator.AgeDescComparator comparator;\ncomparator = new HumanComparator.AgeDescComparator();\n\nCollections.sort(humans, comparator);\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Element Klasse - Definition"),a.createElement("p",{className:"fragment"},"Die innere Klasse wird innerhalb der Klassendefinition erstellt."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class HumanComparator {\n //...\n public class AgeDescComparator \n   implements Comparator&lt;Human&gt; {\n   //...\n }\n //...\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Element Klasse - Verwendung"),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n\nHumanComparator humanComparator = new HumanComparator();\n\nCollections.sort(humans, humanComparator.new AgeDescComparator());\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Lokale Klasse"),a.createElement("p",{className:"fragment"},"Die lokale Klasse wird innerhalb einer Methode erstellt und mit keinem Schl\xfcsselwort markiert. Sie kann nur in der erstellten Methode verwendet verwendet."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:" //...\n public static void main(String[] args) {\n   class AgeDescComparator implements Comparator&lt;Human&gt; {\n     //...\n   }\n   AgeDescComparator comparator = new AgeDescComparator();\n }\n //...\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Anonyme Klasse"),a.createElement("p",{className:"fragment"},"Die innere Klasse wird innerhalb des Methodenaufrufs definiert und instanziiert."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"Collections.sort(humans, new Comparator&lt;Human&gt;() {\n  public int compare(Human h1, Human h2) {\n    // Implementierung der Comparatorlogik\n  }\n});\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!")),a.createElement("section",null,a.createElement("h2",null,"Demo"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Geschachtelte Klassen"),a.createElement("li",{className:"fragment"},"Element Klassen"),a.createElement("li",{className:"fragment"},"Lokale Klassen"),a.createElement("li",{className:"fragment"},"Anonyme Klassen"),a.createElement("li",{className:"fragment"},"Ausblick Lambdafunktion"))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!"))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"Lambdafunktionen")),a.createElement("section",null,a.createElement("h2",null,"Lambdafunktion"),a.createElement("p",{className:"fragment"},"Eine Lambdafunktion ist eine Methode ohne Name, die wie eine Referenzvariable verwendet werden kann."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    BinaryOperator&lt;Integer&gt; add = (x, y) -> x + y;\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Funktionales Interface"),a.createElement("p",{className:"fragment"},"Ein funktionales Interface ist ein Interface mit genau einer abstrakten Methode."),a.createElement("p",{className:"fragment"},"Das funkionale Interface wird f\xfcr die Typisierung einer Lambdafunktion verwendet."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    BinaryOperator&lt;Integer&gt; add = (x, y) -> x + y;\n  }\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Nicht Funktionales Interface"),a.createElement("p",{className:"fragment"},"Nicht jedes Interface mit einer einzigen abstrakten Methode ist funktional, z.B."," ",a.createElement(m.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html"},"Comparable")),a.createElement("p",{className:"fragment"},"Funktionale Interfaces werden mit @FunctionalInterface markiert, z.B."," ",a.createElement(m.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html"},"Comparator")),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"@FunctionalInterface\npublic interface NameChangesConsumer {\n  public void nameChanges(String changedName);\n}\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Syntax Lambdafunktion - Kein Parameter"),a.createElement("p",{className:"fragment"},"Hat das funktionale Interface keinen Parameter, werden runde Klammern ben\xf6tigt."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.cleared(() -&gt; {\n  System.out.println("Liste wurde geleert.");\n});\n'}}))),a.createElement("section",null,a.createElement("h2",null,"Syntax Lambdafunktion - Ein Parameter"),a.createElement("p",{className:"fragment"},"Hat das funktionale Interface einen Parameter, werden keine runden Klammern ben\xf6tigt."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.itemAdded(item -&gt; {\n  System.out.println(item.getName() + " wurde hinzugef\xfcgt.");\n});\n'}}))),a.createElement("section",null,a.createElement("h2",null,"Syntax Lambdafunktion - Mehrere Parameter"),a.createElement("p",{className:"fragment"},"Hat das funktionale Interface mehrere Parameter, werden runden Klammern ben\xf6tigt."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.getData((int sum, int count) -&gt; {\n  System.out.println("Warenwert: " + sum);\n  System.out.println("Artikelanzahl: " + count);\n});\n'}}))),a.createElement("section",null,a.createElement("h2",null,"Syntax Lambdafunktion - Mehrere Anweisungen"),a.createElement("p",{className:"fragment"},"Besteht die Lambdafunktion aus mehrern Anweisungen sind geschweifte Klammern notwendig."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.getData((int sum, int count) -&gt; {\n  System.out.println("Warenwert: " + sum);\n  System.out.println("Artikelanzahl: " + count);\n});\n'}}))),a.createElement("section",null,a.createElement("h2",null,"Syntax Lambdafunktion - Eine Anweisung"),a.createElement("p",{className:"fragment"},"Besteht die Lambdafunktion aus einer Anweisung sind keine geschweifte Klammern notwendig."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.getData((int sum, int count) -&gt; \n  System.out.println("Wert: " + sum + " Anzahl: " + count);\n);\n'}}))),a.createElement("section",null,a.createElement("h2",null,"Syntax Lambdafunktion - return-Anweisung"),a.createElement("p",{className:"fragment"},"Besteht die Lambdafunktion aus einer einzelnen return Anweisung, sind keine geschweifte Klammern notwendig und das return Statement kann weggelassen werden."),a.createElement("pre",{className:"fragment"},a.createElement("code",{className:"java",dangerouslySetInnerHTML:{__html:"shoppingList.calculate((int a, int b) -&gt; a + b);\n"}}))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!")),a.createElement("section",null,a.createElement("h2",null,"Demo"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Intro Shopping List Example"),a.createElement("li",{className:"fragment"},"After List Printed (kein Parameter)"),a.createElement("li",{className:"fragment"},"After Item Added (ein Parameter)"),a.createElement("li",{className:"fragment"},"Items Changed (mehrere Parameter)"))),a.createElement("section",null,a.createElement("h2",null,"Frag jetzt!"))),a.createElement("section",null,a.createElement("h2",null,"Rest of the Day"),a.createElement("ul",null,a.createElement("li",{className:"fragment"},"Java I Wiederholung"),a.createElement("li",{className:"fragment"},"Aufgaben: Innere Klassen"))))}}}]);