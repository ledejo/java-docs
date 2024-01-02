"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9866],{13147:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=a(85893),i=a(11151);const t={title:"Raumstation",description:"",tags:["exceptions","records","maps","optionals"]},r=void 0,c={id:"exam-exercises/exam-exercises-java2/space-station",title:"Raumstation",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/space-station.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/space-station",permalink:"/java-docs/pr-preview/pr-104/exam-exercises/exam-exercises-java2/space-station",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/space-station.md",tags:[{label:"exceptions",permalink:"/java-docs/pr-preview/pr-104/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-104/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-104/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-104/tags/optionals"}],version:"current",frontMatter:{title:"Raumstation",description:"",tags:["exceptions","records","maps","optionals"]},sidebar:"examExercisesSidebar",previous:{title:"Einkaufsportal",permalink:"/java-docs/pr-preview/pr-104/exam-exercises/exam-exercises-java2/shopping-portal"},next:{title:"Panzer",permalink:"/java-docs/pr-preview/pr-104/exam-exercises/exam-exercises-java2/tanks"}},l={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>SpaceStation</em>",id:"hinweise-zur-klasse-spacestation",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    SpaceStation o-- SpaceFighter\n    SpaceFighter o-- Type\n\n    class SpaceStation {\n        <<record>>\n        name: String\n        bays: Map~Integer, SpaceFighter~\n        +land(bayNumber: Integer, spaceFighter: SpaceFighter) void\n        +getFastestSpaceFighter() Optional~SpaceFighter~\n    }\n\n    class SpaceFighter {\n        <<record>>\n        id: String\n        type: Type\n    }\n\n    class Type {\n        <<enumeration>>\n        A_WING = 1300\n        B_WING = 950\n        X_WING = 1050\n        Y_WING = 1000\n        TIE_FIGHTER = 1200\n        -maxSpeedInKmh: int &#123final&#125\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-spacestation",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"SpaceStation"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void land(bayNumber: Integer, spaceFighter: SpaceFighter)"})," soll\nden eingehenden Sternenj\xe4ger in der Bucht mit der eingehenden Buchtnummer\nlanden lassen. F\xfcr den Fall, dass der eingehende Sternenj\xe4ger bereits gelandet\nist (also bereits eine Bucht belegt), soll die Ausnahme\n",(0,s.jsx)(n.code,{children:"SpaceFighterAlreadyLandedException"})," ausgel\xf6st werden und f\xfcr den Fall, dass\ndie Bucht bereits belegt ist, die Ausnahme ",(0,s.jsx)(n.code,{children:"BayAlreadyLoadedException"})]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Optional<SpaceFighter> getFastestSpaceFighter()"})," soll den\nschnellsten Sternenj\xe4ger der Raumstation als Optional zur\xfcckgeben"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>r});var s=a(67294);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);