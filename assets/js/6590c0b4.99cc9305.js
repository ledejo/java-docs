"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1146],{24428:(d,e,c)=>{c.r(e),c.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>j});var s=c(85893),r=c(11151);const n={title:"Cheatsheet",description:"",sidebar_position:40,tags:[]},i=void 0,l={id:"additional-material/daniel-java2/cheatsheet",title:"Cheatsheet",description:"",source:"@site/docs/additional-material/daniel-java2/cheatsheet.md",sourceDirName:"additional-material/daniel-java2",slug:"/additional-material/daniel-java2/cheatsheet",permalink:"/java-docs/additional-material/daniel-java2/cheatsheet",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel-java2/cheatsheet.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Cheatsheet",description:"",sidebar_position:40,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"Musterklausur",permalink:"/java-docs/additional-material/daniel-java2/sample-exam"},next:{title:"Klausurergebnisse",permalink:"/java-docs/additional-material/daniel-java2/exam-results"}},t={},j=[{value:"Java API",id:"java-api",level:2},{value:"Java Collections Framework",id:"java-collections-framework",level:2},{value:"Funktionale Schnittstellen",id:"funktionale-schnittstellen",level:2},{value:"Java Stream API",id:"java-stream-api",level:2},{value:"JUnit 5",id:"junit-5",level:2}];function x(d){const e={code:"code",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...d.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"java-api",children:"Java API"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Klasse"}),(0,s.jsx)(e.th,{children:"Methode"}),(0,s.jsx)(e.th,{children:"Statisch"}),(0,s.jsx)(e.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Aufz\xe4hlung"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"valueOf(arg0: String)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:"Aufz\xe4hlung"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Aufz\xe4hlung"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"values()"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:"Aufz\xe4hlung[]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Boolean"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"valueOf(s: String)"}),", ",(0,s.jsx)(e.code,{children:"valueOf(b: boolean)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Double"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"valueOf(s: String)"}),", ",(0,s.jsx)(e.code,{children:"valueOf(d: double)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Double"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Integer"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"valueOf(s: String)"}),", ",(0,s.jsx)(e.code,{children:"valueOf(i: int)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Integer"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalDate"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"getDayOfMonth()"}),", ",(0,s.jsx)(e.code,{children:"getDayOfYear()"}),", ",(0,s.jsx)(e.code,{children:"getMonthValue()"}),", ",(0,s.jsx)(e.code,{children:"getYear()"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalDate"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"now()"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalDate"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalDate"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"of(year: int, month: int, dayOfMonth: int)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalDate"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalTime"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"getHour()"}),", ",(0,s.jsx)(e.code,{children:"getMinute()"}),", ",(0,s.jsx)(e.code,{children:"getSecond()"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalTime"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"now()"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalTime"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalTime"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"of(hour: int, minute: int, second: int)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"LocalTime"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Object"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"equals(object: Object)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Object"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"hashCode()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Object"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"toString()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"empty()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"get()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"T"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ifPresent(action: Consumer<T>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ifPresentOrElse(action: Consumer<T>, emptyAction: Runnable)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"isPresent()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"of(t: T), ofNullable(t: T)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"orElse(other: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"T"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"empty()"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"getAsDouble()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"double"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ifPresent(action: DoubleConsumer)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ifPresentOrElse(action: DoubleConsumer, emptyAction: Runnable)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"isPresent()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"of(value: double)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"orElse(other: double)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"double"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PrintStream"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"print(obj: Object)"}),", ",(0,s.jsx)(e.code,{children:"println()"}),", ",(0,s.jsx)(e.code,{children:"println(x: Object)"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Random"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"nextInt(bound: int)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Scanner"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"hasNextLine()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Scanner"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"next()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Scanner"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"nextBoolean()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Scanner"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"nextDouble()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"double"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Scanner"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"nextInt()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Scanner"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"nextLine()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"charAt(index: int)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"char"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"length()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"split(regex: String)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String[]"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"toLowerCase()"}),", ",(0,s.jsx)(e.code,{children:"toUpperCase()"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"System"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"currentTimeMillis()"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"long"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"java-collections-framework",children:"Java Collections Framework"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Klasse"}),(0,s.jsx)(e.th,{children:"Methode"}),(0,s.jsx)(e.th,{children:"Statisch"}),(0,s.jsx)(e.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"add(e: E)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"add(index: int, element: E)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"contains(o: Object)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"forEach(action: Consumer<T>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"get(index: int)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"E"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"remove(index: int)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"E"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"remove(o: Object)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ArrayList<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"size()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Collections"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"sort(list: List<T>)"}),", ",(0,s.jsx)(e.code,{children:"sort(list: List<T>, c: Comparator<T>)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Entry<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"getKey()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"K"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Entry<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"getValue()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"V"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"HashMap<K, V>"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"containsKey(key: Object)"}),", ",(0,s.jsx)(e.code,{children:"containsValue(value: Object)"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"entrySet()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Set<Entry<K, V>>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"forEach(action: BiConsumer<K, V>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"get(key: Object)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"V"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"keySet()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Set<K>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"put(key: K, value: V)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"V"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"values()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Collection<V>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"List<E>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"of(elements: E...)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"List<E>"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"funktionale-schnittstellen",children:"Funktionale Schnittstellen"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Klasse"}),(0,s.jsx)(e.th,{children:"Methode"}),(0,s.jsx)(e.th,{children:"Statisch"}),(0,s.jsx)(e.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"BiConsumer"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"accept(t: T, u: U)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Comparable<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"compareTo(o: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Comparator<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"compare(o1: T, o2: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Consumer<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"accept(t: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"DoubleConsumer"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"accept(value: double)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Executable"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"execute()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Function<T, R>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"apply(t: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"R"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Predicate<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"test(t: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ToDoubleFunction<T, R>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"applyAsDouble(value: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"double"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ToIntFunction<T, R>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"applyAsInt(value: T)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"java-stream-api",children:"Java Stream API"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Klasse"}),(0,s.jsx)(e.th,{children:"Methode"}),(0,s.jsx)(e.th,{children:"Statisch"}),(0,s.jsx)(e.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Collectors"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"groupingBy(classifier: Function<T, K>)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Collector<T, ?, Map<K, List<T>>>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Collectors"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"toMap(keyMapper: Function<T, K>, valueMapper: Function<T, U>)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Collector<T, ?, Map<K, U>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"DoubleStream"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"average()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"DoubleStream"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"sum()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"double"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"IntStream"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"average()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"IntStream"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"sum()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"int"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"allMatch(predicate: Predicate<T>)"}),", ",(0,s.jsx)(e.code,{children:"anyMatch(predicate: Predicate<T>)"}),", ",(0,s.jsx)(e.code,{children:"noneMatch(predicate: Predicate<T>)"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"boolean"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"collect(collector: Collector<T, A, R>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"R"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"count()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"long"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"distinct()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"filter(predicate: Predicate<T>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"findAny()"}),", ",(0,s.jsx)(e.code,{children:"findFirst()"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"forEach(action: Consumer<T>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"limit(maxSize: long)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"map(mapper: Function<T, R>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<R>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"mapToDouble(mapper: ToDoubleFunction<T, R>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"DoubleStream"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"mapToInt(mapper: ToIntFunction<T, R>)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"IntStream"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"max(comparator: Comparator<T>)"}),", ",(0,s.jsx)(e.code,{children:"min(comparator: Comparator<T>)"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"skip(n: long)"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"sorted()"}),", ",(0,s.jsx)(e.code,{children:"sorted(comparator: Comparator<T>)"})]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Stream<T>"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"toList()"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"List<T>"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"junit-5",children:"JUnit 5"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Klasse"}),(0,s.jsx)(e.th,{children:"Methode"}),(0,s.jsx)(e.th,{children:"Statisch"}),(0,s.jsx)(e.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Assertions"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"assertEquals(expected: Object, actual: Object)"}),", ",(0,s.jsx)(e.code,{children:"assertNotEquals(expected: Object, actual: Object)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Assertions"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"assertNull(actual: Object)"}),", ",(0,s.jsx)(e.code,{children:"assertNotNull(actual: Object)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Assertions"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"assertSame(expected: Object, actual: Object)"}),", ",(0,s.jsx)(e.code,{children:"assertNotSame(expected: Object, actual: Object)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Assertions"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"assertThrows(expectedType: Class<T>, executable: Executable)"})}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"T"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Assertions"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"assertTrue(condition: boolean)"}),", ",(0,s.jsx)(e.code,{children:"assertFalse(condition: boolean)"})]}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"void"})})]})]})]})]})}function h(d={}){const{wrapper:e}={...(0,r.a)(),...d.components};return e?(0,s.jsx)(e,{...d,children:(0,s.jsx)(x,{...d})}):x(d)}},11151:(d,e,c)=>{c.d(e,{Z:()=>l,a:()=>i});var s=c(67294);const r={},n=s.createContext(r);function i(d){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function l(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:i(d.components),s.createElement(n.Provider,{value:e},d.children)}}}]);