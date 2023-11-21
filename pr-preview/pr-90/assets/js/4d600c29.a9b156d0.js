"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9216],{98772:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=a(85893),i=a(11151);const s={title:"Tiefgarage",description:"",tags:["oo","inheritance","polymorphy"]},t=void 0,l={id:"exam-exercises/exam-exercises-java1/parking-garage",title:"Tiefgarage",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/parking-garage.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/parking-garage",permalink:"/java-docs/pr-preview/pr-90/exam-exercises/exam-exercises-java1/parking-garage",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/parking-garage.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-90/tags/oo"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-90/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-90/tags/polymorphy"}],version:"current",frontMatter:{title:"Tiefgarage",description:"",tags:["oo","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"Geschenkesack",permalink:"/java-docs/pr-preview/pr-90/exam-exercises/exam-exercises-java1/gift-bag"},next:{title:"Geometrische Form",permalink:"/java-docs/pr-preview/pr-90/exam-exercises/exam-exercises-java1/shape"}},d={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>ParkingGarage</em>",id:"hinweise-zur-klasse-parkinggarage",level:2}];function g(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    ParkingGarage o-- ParkingSpot\n    ParkingSpot o-- Vehicle\n    Vehicle <|-- Car\n    Vehicle <|-- Bus\n\n    class ParkingSpot {\n        -vehicle: Vehicle &#123final&#125\n        -lengthInM: double &#123final&#125\n        -heightInM: double &#123final&#125\n        -isForBusesOnly: boolean &#123final&#125\n        +ParkingSpot(lengthInM: double, heightInM: double, isForBusesOnly: boolean)\n    }\n\n    class Vehicle {\n        -make: String &#123final&#125\n        -model: String &#123final&#125\n        -lengthInM: double &#123final&#125\n        -heightInM: double &#123final&#125\n        +Vehicle(make: String, model: String, lengthInM: double, heightInM: double)\n    }\n\n    class Car {\n        +Car(make: String, model: String, lengthInM: double, heightInM: double)\n    }\n\n    class Bus {\n        +Bus(make: String, model: String, lengthInM: double, heightInM: double)\n    }\n\n    class ParkingGarage {\n        -parkingSpots: ParkingSpot[] &#123final&#125\n        +ParkingGarage(numberOfParkingSpots: int)\n        +parkIn(car: Car, parkingSpotNumber: int) String\n        +parkOut(car: Car) String\n        +getNextFreeParkingSpotNumber() int\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-parkinggarage",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ParkingGarage"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"String parkIn(car: Car, parkingSpotNumber: int)"})," soll das\neingehende Fahrzeug dem Parkplatz mit der eingehenden Parkplatznummer zuweisen\nund eine enstprechende Erfolgsmeldung zur\xfcckgegeben. F\xfcr den Fall, dass der\nParkplatz bereits besetzt ist, oder dass es sich bei dem eingehenden Fahrzeug\num ein Auto handelt, der Parkplatz aber nur f\xfcr Busse ist, oder dass der\nParkplatz zu klein ist, soll eine entsprechende Fehlermeldung zur\xfcckgegeben\nwerden"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"String parkOut(car: Car)"}),' soll das eingehende Fahrzeug\n"ausparken" und eine enstsprechende Erfolgsmeldung zur\xfcckgeben. F\xfcr den Fall,\ndass das Fahrzeug in der Tiefgarage nicht vorhanden ist, soll eine\nentsprechende Fehlermeldung zur\xfcckgegeben werden']}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"int getNextFreeParkingSpotNumber()"})," soll die Nummer des n\xe4chsten\nfreien Parkplatzes zur\xfcckgeben"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>t});var r=a(67294);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);