# High level test plan

Plantiful

Tekijät:
Santtu Sarlin
Miika Pollari
Mikko Hannukainen
Mikko Poutanen

## Viitteet

| Viittaus | Materiaali |
|---|---|
Projektisuunnitelma | [projektisuunnitelma.md](projektisuunnitelma.md)

## Intro

### Projekti lyhyesti

Projektin tarkoitus on tehdä mobiiliaplikaatio, joka toimii päiväkirjana. Sen päätoimintoihin kuuluu myös virtuaalinen kasvi, joka kasvaa jokaiselle käyttäjälle erilaiseksi käytön myötä.

### Tarkoitus

Tässä dokumentissa on tarkoitus selventää kuinka projektia testataan.

## Testistrategia


### Test items

- Ulkoasu
  - Heuristiikka
- Toiminnallisuus
- Datan kulku
  - Kyselyt tietokantaan
  - Yhteyden toiminnallisuus
  - Datan talletus paikallisesti


### Testing tasks

#### Tekniikka
Kehitysvaiheessa olevan sovelluksen komponenttia testataan ennen käyttöönottoa yksikkötesteillä. Hyväksynnän jälkeen ko. komponentti voidaan yhdistää gitissä master-haaraan, missä suoritetaan vielä integraatiotesti.

#### Ulkoasu ja käyttöliittymä

Käyttöliittymää testataan käyttäjätestein: Ensiksi suunnitteilla olevaa ulkoasua testataan paperisena toteutuksena. Toinen testi on ulkoasun kehityksen jälkeinen käytettävyystesti mobiililaitteella.


### Testattavat ominaisuudet

Sovelluksen luontevuuden vuoksi yksi tärkeimpiä testejä ovat ulkoasun funktionaalisuus ja heuristiikka. Kehitysvaiheessa pitää aina varmistaa, että jokainen sovelluksen elementti antaa loppukäyttäjälle sen tuloksen mitä elementille on ennaltaan määritetty. Tässä vaiheessa heuristiikkaa testataan myös sekä minimalistisuuden että käytettävyyden vuoksi.

Tekniikan osalta tärkeimpinä osina testauksessa ovat datan kulku sekä validointi, ja kasvin algoritmien oikeanlaisen luonnin ja sen mukaisen tuloksen saannin käyttöliittymälle. Tietokannasta saatava data pitää saapua mobiililaitteelle oikeassa muodossa virheettömästi, sekä datan siirto tietokantaan pitää tapahtua oikeassa muodossa ja ilman komplikaatioita. Kun datan siirtyminen toteutuu oikeanlaisesti, algoritmit osaavat täden luoda käyttäjälle oikeanlaisen kasvin.

Kasvin generointi pitää myös tapahtua oikeasti ja että siihen tarvittavat algoritmit osaavat muodostaa käyttäjän datasta oikeanlaisen rakenteen, mistä sitä kasvia voidaan lähteä buildaa.

### Ei testattavat ominaisuudet

Sovelluksen yleiset animaatiot sekä siirtymiset koetaan mitättömiksi tapauksiksi ryhtyä testaamaan. Kyseisten elementit eivät kuulu sovelluksen valmistumisen kriteereihin, eli mikäli ne eivät toimi tai käyttäjätestauksessa ne koetaan vaikuttavan negatiivisesti käyttäjäkokemukseen, voidaan tuolloin tehdä päätös joko niille tarvittavista muutokstista tai niiden poistosta.

### Lähestymistapa

Testauksessa käytetään mocha-ohjelmistokehystä, syinä jo pienehkö kokemus koulun puolesta ja Nativescript-tuki. Automatisointiin voidaan käyttää Appium-työkalua hyvän integraation ja helpon käyttöönoton vuoksi, mikäli taidot riittävät siihen. Tällöin voidaan taata automaattisen testauksen mobiiliympäristössä.

### Hyväksymiskriteerit

Hyväksymiskriteereinä toimii sovelluksen integraatiotestien läpäisy, sekä käyttäjätesteissä positiivinen tulos.

### Testauksen keskeytys ja jatkaminen

Mikäli testaajan koodin rakenne mahdollistaa testin kaatumiset ja muita komplikaatioita, tämä voidaan määrittää testin keskeytymiseksi. Kun koodi saadaan refaktoiroitua kunnolliseksi, testi voi jatkua.

## Tuotokset

Projektiryhmän muut jäsenet saavat tiedon/palautteen testien suoriutumisesta. Esim. jos käyttäjätestauksessa ilmenee virheitä, tästä ilmoitetaan sisällöntuottajalle.

## Ympäristö

Ympäristön osalta ei suuria muutoksia. Hyvä ergonomia ja rauhallinen asenne auttaa pitkälle.

## Velvollisuudet/vastuut

Ryhmän testivastaaja (Mikko Hannukainen) on vastuussa testien luonnista sekä niiden laadusta, mutta jokaisella on velvoite kirjoittaa testit omiin luotuihin komponentteihin.

## Osaaminen ja sen hankinta

Osaamista ryhmällä on vähän ja kokemusta testeistä on ainoastaan pienesti koulun puolesta. Jokainen ohjelmoija perehtyy testikehyksiin ja työkaluihin itsenäisesti tai testivastaajan kanssa.

## Aikataulut

Ryhmän kokemuksen puutteen vuoksi testaukseen käytetään resursseja testaajan näkökulman kannalta. Käyttäjätestausta varten tiimi valitsee demoa edeltävän päivän, jolloin käydään vielä viimeiset käyttäjätestaukset.

## Riskit

- List the risks that have been identified.
- Create a plan for each event that the identified risks may create when triggered.

FI: Mitä riskejä ja miten ne hallitaan. Perus PM kamaa.

#### 1. Kosmeettiset riskit

Kirjoitusvirheet, väärän muotoiset/väriset elementit. Eivät vaikuta sovelluksen toimintaan.

#### 2. Matalan tason riskit

Kirjoitusvirheet, väärän muotoiset/väriset 
elementit. Eivät vaikuta sovelluksen toimintaan.

#### 3. Keskitason riskit

Elementit ovat kohdistettu väärin, tai eivät näy. Painikkeet eivät toimi. Helposti korjattavissa olevat riskit.

#### 4. Korkean tason riskit

Data viedään tietokantaan väärässä muodossa, tai tieokannasta tuotu data on väärässä muodossa/ei löydy. Kasvi generoituu vääränlaisesti, algoritmit eivät toimi. Vaatii isompia toimenpiteitä.

#### 5. Vakavat riskit

Serveri tai backend kaatuu, frontendin virheellinen tulostus. Datan siirto aiheuttaa komponentin kaatumisen tai sovelluksen kehitysvaiheessa olevan komponentin integrointi rikkoo sovelluksen osia. Hyvin vakavasti otettavat riskit.

## Oletukset ja riippvuudet


