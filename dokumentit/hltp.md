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

- Dokumentit
  - Hltp
  - Liiketaloussuunnitelma
  - Bmc
  - Projektisuunnitelma
- Kanta Firebase-palveluun
- Nettisivut
- Mockup
- Client

### Testing tasks

Jokainen testaamiseen osallistuva työntekijä (testausvastaava tai ohjelmoija) seuraa alla olevia ohjeistuksia:
- Suunnittele testattavaa komponenttia varten testaus
  - Mitä testataan?
  - Millä? Mitä tarvitaan? (ympäristö, testauskirjasto jne.)
  - Kuinka laajasti testataan?
- Toteuta testit
- Dokumentoi

### Testattavat ominaisuudet

#### Käyttöliittymä

Käyttöliittymä testataan perusteellisesti, koska sovelluksen ulkoasu ja käyttäjäkokemus ovat projektimme tärkeimmistä arvoista. Näissä otetaan huomioon esimerkiksi sovelluksen heuristinen näkökulma ja minimalistisuuden toteutus.

#### Siirrettävyys

Koska sovelluskehitysympäristönä toimii tietokoneet, siirrettävyys on hyvä testata ennenkun sovellus otetaan käyttöön mobiili- tai tablettilaitteessa. Käyttöjärjestelmänä kyseisissä laitteissa on tähtäimessä ainoastaan Android.

#### Suorituskyky

Suorituskyky varmistetaan clientissa, jotta pystytään takaamaan käyttäjälle minimalistinen ja nopeasti suoriutuva palvelu. Takkuava komponentti hidastaa palvelun käyttöä, mikä samalla vähentää käyttäjän mielenkiintoa sovellusta kohtaan.

#### Kuormitus

Kuormitus on suositeltavaa testata, jotta voidaan taata clientin ja serverin välinen yhteys kestämään useampaa pyyntöä yhtä aikaa. Ilman tämän ominaisuuden testausta emme voi olla varmoja pystyykö palvelumme tarjoamaan käyttäjän pyyntöjen suoritusta nopeasti.

#### Luotettavuus

Mikäli sovellus kaatuu joko oman yllättävän komplikaation, tai jonkun ulkopuolisen syyn vuoksi, täytyy näitä tilanteita varten suorittaa luotettavuustestausta. Tämän avulla pystytään varmistamaan sen, ettei käyttäjän data missään vaiheessa katoa tai korruptoidu.

### Ei testattavat ominaisuudet


#### Tietoturva

Tietoturva on meidän ominaisuuksista vähäisin tarve, sillä meidän sovelluksessa ei kulje edes takaisin mitään arvokasta tietoa. Tietokantaan siirtyy vaan dataa kasvista ja sen kasvutavasta, mikä varmuuskopioidaan talteen sitä varten, jos tietomurto tapahtuu.

#### Skaalautuvuus

Skaalautuvuus on nice to have, mutta demoympäristössä, sekä ilmaisen pilvipalvelun rajoitteiden vuoksi sitä ei ole mitään merkitystä testata.

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

