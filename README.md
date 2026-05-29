# Programmerings-dokumentation for LUMINA Audio

## Kort beskrivelse af projektet

Projektet er en landing page til den fiktive Bluetooth-højtaler LUMINA One. Formålet med projektet har været at skabe en moderne og brugervenlig hjemmeside, der præsenterer produktet og dets funktioner på en overskuelig måde.

Til udviklingen af siden har jeg brugt HTML, CSS og JavaScript. HTML er brugt til at opbygge sidens struktur, CSS til design og layout, og JavaScript til at skabe interaktive funktioner. Brugeren kan blandt andet læse om produktet, se de forskellige farvevarianter og skifte mellem farverne ved at klikke på farvecirklerne.

## Fil- og mappestruktur

Mit projekt er organiseret i forskellige filer og mapper, så det er nemmere at holde overblik over koden.

`index.html` indeholder selve strukturen på hjemmesiden, for eksempel navbar, hero-sektion, produktsektion, billeder og tekstindhold.

`css/style.css` bruges til at style hjemmesiden. Her ligger alt designet, for eksempel farver, typografi, layout, spacing og hover-effekter.

`js/script.js` bruges til sidens interaktive funktioner. Det er blandt andet JavaScript, der gør det muligt at skifte farve på højtaleren, når brugeren klikker på farvecirklerne.

`img`-mappen indeholder alle billeder. Her har jeg også lavet undermapper, så billederne er delt op efter de sektioner, de hører til, for eksempel footer, social-connect, specs, trustpilot og speakers-color.

Jeg har valgt denne struktur, fordi den gør projektet mere overskueligt. Det bliver lettere at finde rundt i filerne, og det gør det også nemmere at rette i koden senere.

<img width="166" height="387" alt="image" src="https://github.com/user-attachments/assets/6843f9c3-1eb9-49b5-b1ed-a19e277a1fa5" />



## Validering af CSS

Jeg har valideret min CSS-fil (`style.css`) ved hjælp af W3C CSS Validator.

Formålet med valideringen var at kontrollere, om der var fejl i CSS-koden. Valideringen viste ingen fejl eller advarsler, og CSS-filen blev derfor godkendt uden problemer.

Valideringen har hjulpet med at sikre, at koden er skrevet korrekt og følger de gældende standarder.

### Resultat af validering
<img width="1469" height="476" alt="image" src="https://github.com/user-attachments/assets/df650dd4-7b83-472e-99a5-6eb0b5cfda1d" />


## Validering af HTML

Jeg har valideret min HTML-fil (`index.html`) ved hjælp af Nu Html Checker.

Under valideringen fandt jeg nogle fejl i min brug af overskrifter. Jeg havde blandt andet brugt flere `h1`-overskrifter forkert, hvilket gav fejl i valideringen. Disse fejl blev rettet ved at tilpasse overskriftshierarkiet, så strukturen blev mere semantisk korrekt.

Efter rettelserne viste valideringen ingen fejl. Der er dog stadig enkelte advarsler om section-elementer uden overskrifter.

### Resultat af validering

<img width="992" height="589" alt="image" src="https://github.com/user-attachments/assets/eab51763-bc05-4385-8369-b2eac8dec0fb" />
<img width="1356" height="276" alt="image" src="https://github.com/user-attachments/assets/3c9c165b-b673-476b-a901-d6ab6178f6a3" />



## JavaScript datastruktur

I mit projekt bruger jeg JavaScript til at gøre produktsiden mere interaktiv. Jeg arbejder blandt andet med data om højtalerens forskellige farver, såsom farvenavn, billede og baggrundsgradient.

Jeg har ikke brugt arrays eller objekter i min løsning. I stedet har jeg lavet en funktion, som genbruges til alle farveknapperne. På den måde undgår jeg at skrive den samme kode flere gange, og det gør koden mere overskuelig.

## Eksempel på JavaScript-kode

```js
chooseColor(
    document.getElementById("sage-btn"),
    "img/speakers-color/sage-green.png",
    "Sage Green",
    "linear-gradient(90deg, #A8B8A0 0%, #F1F5EF 35%, #FBF9F7 70%)"
);
```

## Hvad gør koden?

Koden bruges til farvevælgeren i produktsektionen. Først henter den den farveknap, som brugeren kan klikke på. Derefter sendes information om farven videre til funktionen, blandt andet hvilket billede der skal vises, hvad farven hedder, og hvilken baggrund der skal bruges.

Når brugeren klikker på en farve, bliver højtalerens billede og farvenavn opdateret på siden. På den måde reagerer siden på brugerens valg og giver en mere interaktiv oplevelse.

Jeg har valgt denne løsning, fordi den gør koden mere overskuelig og nemmere at vedligeholde. Samtidig gør den det muligt for brugeren hurtigt at se de forskellige farvevarianter af LUMINA One.

