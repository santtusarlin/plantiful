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
  - Ulkoasu/käyttöliittymä
  - Heuristiikka

### Testattavat ominaisuudet

Testattavia ominaisuuksia sovelluksessa ovat toiminnallisuuden testaaminen, sekä käyttäjäkokemus ja -liittymä. Toiminnallisuudesta esimerkiksi kasvi on sovelluksen yksi tärkeimmistä featureista, joten sen toimivuus on yksi tiimimme prioriteeteista saada testattua ja hyväksyttyä käyttöönottoa varten. Käyttäjäkokemus ja siihen liittyvät ulkoasun ja käyttöliittymän komponentit ovat tarpeellisia saada testattua toimiviksi, koska sovelluksemme on pääosin ulkoasupainoitteinen. Datan kulku tietokannan ja mobiililaitteen välillä on kanssa soveliasta testata toimivaksi.

Skaalautuvuus eri laitteille on nice to have, joten sitä testataan jos aikataulu sitä suosii.

Toimintoja ja datan kulkua testataan yksikkötestein. Käyttäjäkokemusta testataan ajoittain julkaisemalla sovelluksesta demo, mitä sitten voidaan testauttaa käyttäjillä. Ennen demon luontia pitää olla käyttäjäkokemusta varten kaikki siihen liittyvät toiminnallisuudet, sekä ulkoasun että käyttöliittymän komponentit, testattuna.

### Ei testattavat ominaisuudet

Tietoturva on meidän ominaisuuksista vähäisin tarve, sillä meidän sovelluksessa ei kulje edes takaisin mitään arvokasta tietoa. Tietokantaan siirtyy vaan dataa kasvista ja sen kasvutavasta, mikä varmuuskopioidaan talteen sitä varten, jos tietomurto tapahtuu.

### Lähestymistapa

Yksikkkötestauksessa käytetään mocha-ohjelmistokehystä, syinä jo pienehkö kokemus koulun puolesta ja Nativescript-tuki. Käyttöliittymän mockupista luodaan malli Adobe XD:llä, jolla voidaan suorittaa käyttäjätestaus. Manuaalitestaus harjoitetaan tarvittaessa.

### Hyväksymiskriteerit

Yksittäinen stoori voidaan todeta hyväksytyksi kun siihen kohdistetut testitapaukset on ajettu ja 	tärkeimmät bugit on korjattu

### Testauksen keskeytys ja jatkaminen

Kriittisen virheen sattuessa testi keskeytetään niin pitkäksi aikaa, kunnes virhe on saatu korjattua.

## Tuotokset

Projektin aikana tapahtuvan testauksen myötä syntyy dokumentaatiota testien suoriutumisesta ja bugiraporteista.

## Ympäristö

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

