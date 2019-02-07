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

Projektin tarkoitus on tehdä mobiiliaplikaatio, joka toimii päiväkirjana. Sen päätoimintoihin kuuluu myös virtuaalinen kasvi, joka kasvaa jokaiselle käyttäjälle erilaiseksi käytön myötä. Tarkoituksena on tuoda käyttäjille mahdollisuus kirjata päivän mielialat vaivattomasti ja kerätä heille kooste näistä kirjauksista. Näin käyttäjä voi tarkastella omaa mielialaansa isompina kokonaisuuksina, eikä pelkästään yhden päivän mukaan. Tämän toivotaan antavan käyttäjälle näkökulmaa siitä, että kaikki päivät eivät ole toinen toistaan kamalia.

Testaus tässä projektissa on tarkoitus varmistaa sovelluksen vaadittu laatu sekä toimivuus, millä taataan käyttäjille tuotteemme visio.


### Tarkoitus

Tässä dokumentissa on tarkoitus selventää kuinka projektia testataan.

## Testistrategia


### Test items

- Toiminnallisuus
- Käyttäjäkokemus
  - Ulkoasu
  - Heuristiikka

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

Yksikkkötestauksessa käytetään mocha-ohjelmistokehystä, syinä jo pienehkö kokemus koulun puolesta ja Nativescript-tuki. Käyttöliittymän mockupista luodaan malli Adobe XD:llä, jolla voidaan suorittaa käyttäjätestaus. Manuaalitestaus harjoitetaan tarvittaessa.

### Hyväksymiskriteerit

Yksittäinen stoori voidaan todeta hyväksytyksi kun siihen kohdistetut testitapaukset on ajettu ja 	tärkeimmät bugit on korjattu

### Testauksen keskeytys ja jatkaminen

Kriittisen virheen sattuessa testi keskeytetään niin pitkäksi aikaa, kunnes virhe on saatu korjattua.

## Tuotokset

Projektin aikana tapahtuvan testauksen myötä syntyy dokumentaatiota testien suoriutumisesta ja bugiraporteista.

## Ympäristö
mitään ympäristöä testaamista varten. Kaikki yksikkö
Projektin testauksessa ei tulla luomaan erillistä ympäristöä.

## Velvollisuudet/vastuut

Olemme vastuussa tuotteen laadun varmistamisesta, ettei mikään sovelluksen osa integroida päähaaran buildiin ilman laadunvarmistusta.

## Osaaminen ja sen hankinta

Osaamista haetaan tarvittaessa yhdessä testivastaajan ja opetusta tarvitsevan kanssa joko verkkomateriaalia tutkien, tai opettajana avulla.

## Aikataulut

Kun task on siirretty in progressista review:n, sen taskin testi tulee suorittaa ennen lopullista hyväksyntää.

## Riskit

Testien riskinhallinta toteutetaan yhdessä projektin riskinhallintaprosessin kanssa, jossa testaaja voi esittää omia näkökulmia.

## Bugitasot

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
N/A

