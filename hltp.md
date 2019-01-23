# High level test plan

Plantiful

Tekijät:
Santtu Sarlin
Miika Pollari
Mikko Hannukainen
Mikko Poutanen

## Viitteet

<\Esimerkiksi:>
| Viittaus | Materiaali |
|---|---|
Projektisuunnitelma | \<linkki  projektisuunnitelmaan>

## Intro

### Projekti lyhyesti

Projektin tarkoitus on tehdä mobiiliaplikaatio, joka toimii päiväkirjana. Sen päätoimintoihin kuuluu myös virtuaalinen kasvi, joka kasvaa jokaiselle käyttäjälle erilaiseksi käytön myötä.

### Tarkoitus

Tässä dokumentissa on tarkoitus selventää kuinka projektia testataan.

## Testistrategia

### Test items

- Ulkoasu
  - Heuristiikka
- ToiminnallisuusMak
- Datan kulku
  - Kyselyt tietokantaan
  - Yhteyden toiminnallisuus
  - Datan talletus paikallisesti


### Testing tasks

#### Tekniikka
Kehitysvaiheessa olevan sovelluksen komponenttia testataan ennen käyttöönottoa. Hyväksynnän jälkeen ko. komponentti voidaan yhdistää gitissä master-haaraan, missä suoritetaan vielä integraatiotesti.

#### Ulkoasu ja käyttöliittymä
Käyttöliittymää testataan käyttäjätestein: Ensiksi suunnitteilla olevaa ulkoasua testataan paperisena toteutuksena. Toinen testi on ulkoasun kehityksen jälkeinen käytettävyystesti mobiililaitteella.


### Testattavat ominaisuudet

Sovelluksen luontevuuden vuoksi yksi tärkeimpiä testejä ovat ulkoasun funktionaalisuus ja heurestiikka. Kehitysvaiheessa pitää aina varmistaa, että jokainen sovelluksen elementti antaa loppukäyttäjälle sen tuloksen mitä elementille on ennaltaan määritetty. Tässä vaiheessa heurestiikkaa testataan myös sekä minimalistisuuden että käytettävyyden vuoksi.

Tekniikan osalta tärkeimpinä osina testauksessa ovat datan kulku sekä validointi, ja kasvin algoritmien oikeanlaisen luonnin ja sen mukaisen tuloksen saannin käyttöliittymälle. Tietokannasta saatava data pitää saapua mobiililaitteelle oikeassa muodossa virheettömästi, sekä datan siirto tietokantaan pitää tapahtua oikeassa muodossa ja ilman komplikaatioita. Kun datan siirtyminen toteutuu oikeanlaisesti, algoritmit osaavat täden luoda käyttäjälle oikeanlaisen kasvin.

Kasvin generointi pitää myös tapahtua oikeasti ja että siihen tarvittavat algoritmit osaavat muodostaa käyttäjän datasta oikeanlaisen rakenteen, mistä sitä kasvia voidaan lähteä buildaa.

### Ei testattavat ominaisuudet

Sovelluksen yleiset animaatiot sekä siirtymiset koetaan mitättömiksi tapauksiksi ryhtyä testaamaan. Kyseisten elementit eivät kuulu sovelluksen valmistumisen kriteereihin, eli mikäli ne eivät toimi tai käyttäjätestauksessa ne koetaan vaikuttavan negatiivisesti käyttäjäkokemukseen, voidaan tuolloin tehdä päätös joko niille tarvittavista muutokstista tai niiden poistosta.

### Lähestymistapa

- Activities, techniques and tools
- What principles are used on testing
- Identify constraints (staff, environment, deadlines) for the testing.

 - Jenkins
 - Appium

FI: Lähestymiskulma. Mitä toimintoja, tekniikoita ja työkaluja käytetään. Harrastetaanko testiautomaatiota vai not? Onko esim. TDD prinsiippinä? Testauksen rajoitteet mukaan myös.

### Hyväksymiskriteerit

- Specify the criteria that will be used to determine whether each test item (software/product) has passed or failed testing.
- What criteria we use on testing? You  can define the criteria for each testable level (component, integration in the small, system etc.) separately
- Remember that you can use metrics as a passing criteria also!

FI: Millä tavalla jokin testaustaso voidaan todeta päättyneeksi? Mittaristo sille, että testaus on suoritettu.

### Testauksen keskeytys ja jatkaminen

- For all or part of testing activities. When the testing is suspended and why?
- Which activities must be repeated on resumption? Smoke tests etc?

FI: Kriteeristö sille milloin testaus keskeytetään ja milloin se voidaan uudelleen aloittaa. Esimerkkejä?

## Tuotokset

- List test deliverables, and links to them if available, including the following:
  - Plans and specifications
  - All kinds of test reports
  - Logs
  - Scripts and testing data
  - Basically define everything the testing activities is producing to the customer

FI: Samoin kuin projektisuunnitelmassa projektin osalta. Mitä asiakas/muu ryhmä saa testauksen aikana käsiinsä.

## Ympäristö

- All environmental requirements like
  - Security
  - Office space
  - Hardware
  - Software
  - Tools

FI: Ympäristön vaatimukset. Jos eroavat eri testaustasoilla, niin pitää kirjata erikseen jokaiseen testaukseen liittyen.

## Velvollisuudet/vastuut

- What are the roles and responsibilities of the testing team members?
- What responsibilities the development team has towards the testing team?
- 3rd party responsibilities?

FI: Vastuut. Yksinkertaisesti. Tässä meillä?

## Osaaminen ja sen hankinta

- How the team is prepared for tasks ahead?
- Do they know what to do?
- Define every skill the team must have to accomplish exellent testing! Remember roles.

FI: Mitä osaamista tarvitaan ja miten se hankitaan jos sitä ei ole.

## Aikataulut

- Milestones (following the project milestones). General dates and checkpoints.
- Item transmittal milestones. When components are ready for testing? When a certain document is to be delivered?
- Environmental milestones. F.ex. when a certain tool is delivered?
- Resource milestones (what is needed and when). Also includes testing personnel! It might be so that a key test designer is in another project in the beginning.

FI: Testauksen aikataulutusta.

## Riskit

- List the risks that have been identified.
- Create a plan for each event that the identified risks may create when triggered.

FI: Mitä riskejä ja miten ne hallitaan. Perus PM kamaa.

## Oletukset ja riippvuudet

- List the assumptions that have been made during the preparation of this plan.
- List the dependencies.

FI: Listaa olettamukset ja mahdolliset riippuvuudet
