"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9354],{24748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(85893),r=s(11151);const a={title:"Team",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","records","generics","maps","optionals"]},t=void 0,o={id:"exam-exercises/exam-exercises-java2/team",title:"Team",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/team.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/team",permalink:"/java-docs/pr-preview/pr-116/exam-exercises/exam-exercises-java2/team",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/team.md",tags:[{label:"inheritance",permalink:"/java-docs/pr-preview/pr-116/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-116/tags/polymorphy"},{label:"interfaces",permalink:"/java-docs/pr-preview/pr-116/tags/interfaces"},{label:"comparators",permalink:"/java-docs/pr-preview/pr-116/tags/comparators"},{label:"exceptions",permalink:"/java-docs/pr-preview/pr-116/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-116/tags/records"},{label:"generics",permalink:"/java-docs/pr-preview/pr-116/tags/generics"},{label:"maps",permalink:"/java-docs/pr-preview/pr-116/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-116/tags/optionals"}],version:"current",frontMatter:{title:"Team",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","records","generics","maps","optionals"]},sidebar:"examExercisesSidebar",previous:{title:"Panzer",permalink:"/java-docs/pr-preview/pr-116/exam-exercises/exam-exercises-java2/tanks"},next:{title:"Videosammlung",permalink:"/java-docs/pr-preview/pr-116/exam-exercises/exam-exercises-java2/video-collection"}},l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Sportsman</em>",id:"hinweise-zur-klasse-sportsman",level:2},{value:"Hinweise zur Klasse <em>Team</em>",id:"hinweise-zur-klasse-team",level:2}];function m(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Sportsman <|-- Footballer\n    Team~T extends Sportsman~ o-- Position\n    Comparable~Footballer~ <|.. Sportsman\n\n    class Footballer {\n        -numberOfGoals: int\n        -numberOfAssists: int\n        +Footballer(name: String, numberOfGoals: int, numberOfAssists: int)\n        +getScorerPoints() int\n    }\n\n    class Position {\n        <<enumeration>>\n        DEFENDER\n        GOALKEEPER\n        MIDFIELDER\n        STRIKER\n    }\n\n    class Sportsman {\n        <<abstract>>\n        -name: String &#123final&#125\n        +Sportsman(name: String)\n        +getScorerPoints() int &#123abstrakt&#125\n        +compareTo(other: Sportsman) int\n    }\n\n    class Team~T extends Sportsman~ {\n        <<record>>\n        name: String\n        members: Map~T, Position~\n        +addTeamMember(member: T, position: Position) void\n        +getBestScorer() Optional~T~\n        +getAllTeamMembersByPosition(position: Position) List~T~\n    }\n\n    class Comparable~Sportsman~ {\n        <<interface>>\n        +compareTo(o: Sportsman) int\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-sportsman",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"Sportsman"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"int compareTo(other: Sportsman)"})," soll so implementiert werden,\ndass Sportler absteigend nach ihren Scorer-Punkten sortiert werden k\xf6nnen"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-team",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"Team"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Der Assoziativspeicher ",(0,i.jsx)(n.code,{children:"members"})," beinhaltet als Schl\xfcssel alle Mitglieder der\nMannschaft sowie als Wert deren Position"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addTeamMember(member: T, position: Position)"})," soll der\nMannschaft den eingehenden Sportler als Mitglied mit der eingehenden Position\nhinzuf\xfcgen. F\xfcr den Fall, dass der Sportler bereits Teil der Mannschaft ist,\nsoll die Ausnahme ",(0,i.jsx)(n.code,{children:"DuplicateKeyException"})," ausgel\xf6st werden"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Optional<T> getBestScorer()"})," soll den Sportler mit den meisten\nScorer-Punkten als Optional zur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<T> getAllTeamMembersByPosition(position: Position)"})," soll\nalle Sportler zur eingehenden Position als Liste zur\xfcckgeben"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(67294);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);