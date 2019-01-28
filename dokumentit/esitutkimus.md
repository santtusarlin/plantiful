# Esitutkimus

- [Esitutkimus](#esitutkimus)
  - [Projektin tiedot](#projektin-tiedot)
    - [Termit ja lyhenteet](#termit-ja-lyhenteet)
    - [Viitteet](#viitteet)
  - [Johdanto](#johdanto)
  - [Visio](#visio)
  - [Käyttäjäkertomukset](#k%C3%A4ytt%C3%A4j%C3%A4kertomukset)
  - [Tekniset vaatimukset](#tekniset-vaatimukset)
  - [Ratkaisuvaihtoehdot](#ratkaisuvaihtoehdot)
    - [Ratkaisuvaihtoehto 1](#ratkaisuvaihtoehto-1)
      - [Toteutusympäristö](#toteutusymp%C3%A4rist%C3%B6)
      - [Toteutettavat kertomukset](#toteutettavat-kertomukset)
      - [Työmääräarviot](#ty%C3%B6m%C3%A4%C3%A4r%C3%A4arviot)
      - [Pros and Cons](#pros-and-cons)
  - [Yhteenveto](#yhteenveto)

## Projektin tiedot

### Plantiful

Tekijät:
- Miika Pollari
- Santtu Sarlin
- Mikko Hannukainen
- Mikko Poutanen

### Termit ja lyhenteet

| Termi | Kuvaus |
|---|---|
GIT | Versionhallintajärjestelmä
GitHub | Palvelu joka on rakennettu GIT versionhallinnan ympärille
Markdown | Merkkauskieli
HLTP | High Level Test Plan

### Viitteet

| Viittaus | Materiaali |
|---|---|
HLTP | [hltp.md](hltp.md)
Projektisuunnitelma | [projektisuunnitelma.md](projektisuunnitelma.md)

## Johdanto

Tämän dokumentin tarkoituksena on tuottaa esitutkimus Plantifulista. 

Luvussa 2. kerrotaan visio, luvussa 3. käydään läpi käyttäjäkertomukset ja niiden hyväksymiskriteerit, 4. listataan tekniset vaatimukset ja luvussa 5. listataan ratkaisuvaihtoehdot.


## Visio

Haluamme tulla käytetyimmäksi mielialanpäiväkirjaksi, joka auttaa ihmisiä tutkimaan eri asioiden vaikutuksia mielialaansa ja hyödyntämään tietoa itsehoidossa tai ammattilaisen apuna.

##### Slogan:
Plantify your mood

## Käyttäjäkertomukset

### Käyttäjäkertomus 1
#### Käyttäjänä haluan varmistusta omasta mielentilastani ja saan sitä sovelluksen tilastoista.
#### Hyväksymiskriteerit:
- Sovelluksen kalenterista näkee värikoodatusti muutoksia kuukauden ajalta
- Sovelluksen viivakaaviosta näkee muutokset tietyn ajan väliltä
 
### Käyttäjäkertomus 2
#### Käyttäjänä haluan nähdä kasvini jotta voin seurata sen tilaa.
#### Hyväksymiskriteerit:
- Kasvi muuttuu mood-kirjausten mukaan.
- Kasvi syntyy ensimmäisen kirjauksen jälkeen.
- Kasvi aukeaa päävalikosta
- Kasvi-näkymästä pääsee takaisin päävalikkoon

### Käyttäjäkertomus 3
#### Käyttäjänä haluan seurata mielentilani kehitystä, ja kasvi motivoi sovelluksen käytön jatkoa.
#### Hyväksymiskriteerit:
- Kasvi muuttuu mood-kirjausten mukaan.
- Tilastoja voi seurata sovelluksesta 

### Käyttäjäkertomus 4
#### Käyttäjänä haluan kirjata tämänhetkisen mielentilani ja valita sen ikoneista.
#### Hyväksymiskriteerit:
- Mood-kirjaus aukeaa päävalikosta.
- Mielentila valitaan ikonilla.
- Mood-kirjauksesta pääsee takaisin päävalikkoon

### Käyttäjäkertomus 5
#### Käyttäjänä haluan tehdä mood-kirjauksen ja valita päivän aikana tapahtuneet aktiviteetit, mielentilat ja olot ikoneista. 
#### Hyväksymiskriteerit:
- Kattava valikoima ikoneita useaan eri aktiviteettiin ja oloon.
- Mood-kirjaus aukeaa päävalikosta.
- Mood-kirjauksesta pääsee takaisin päävalikkoon

### Käyttäjäkertomus 6
#### Käyttäjänä haluan, että sovelluksessa on mahdollisimman vähän tekstiä
#### Hyväksymiskriteerit:
- Käytämme mielialan lisäämiseen iconeja
  
### Käyttäjäkertomus 7
#### Käyttäjänä haluan avata viivakaavion josta näen mielentilan muutokset ja valita ajanjakson.
#### Hyväksymiskriteerit:
- Mood-kirjausten historia näkyy viivakaaviona.
- Ajanjakson voi valita 7d, 30d, ½y, 1y.
- Viivakaavio aukeaa päävalikosta
- Viivakaaviosta pääsee takaisin päävalikkoon

### Käyttäjäkertomus 8
#### Käyttäjänä haluan, että sovellus muistuttaa minua merkitsemään merkinnät
#### Hyväksymiskriteerit:
- Sovellus muistuttaa käyttäjää hauluamanaan aikana
- Muistutus voidaan laittaa päältä/pois
- Muistutuksesta pääsee suoraan Mood-kirjausvalikkoon

### Käyttäjäkertomus 9
#### Sovelluksen kehittäjänä haluan saada kerätä dataa anynoyymisti käyttäjien merkinnöistä
#### Hyväksymiskriteerit:
- Sovellus kerää dataa anonyymisti

### Käyttäjäkertomus 10
#### Käyttäjänä haluan mahdollisuuden lisätä omia aktiviteetteja sovellukseen ja valita niille iconin
#### Hyväksymiskriteerit:
- Voidaan luoda uusia aktiviteetteja ja valita niille iconit

### Käyttäjäkertomus 11
#### Käyttäjänä haluan valita sovelluksen väriskeeman
#### Hyväksymiskriteerit:
- Asetukset-valikosta löytyy väriskeema valitsin
- Valitaan valmiista templaatista.

### Käyttäjäkertomus 12
#### Käyttäjänä haluan lisätä sovellukseen lukituksen
#### Hyväksymiskriteerit:
- Voin valita lukituksen pin-koodin itse
- Voin valita onko lukitus käytössä vai ei

### Käyttäjäkertomus 13
#### Käyttäjänä haluan nähdä kasvini tiedot ja tilastot
#### Hyväksymiskriteerit:
- Tiedoissa näkyy kasvin ikä, nimi ja kirjausten määrä
- Tietoihin/tilastoihin pääsee päävalikon kautta
- Tilastot-valikosta pääsee pois päävalikkoon

### Käyttäjäkertomus 14
#### Käyttäjänä haluan nähdä tilastoista kuinka monta päivää olen käyttänyt sovellusta putkeen
#### Hyväksymiskriteerit:
- Tilastot-valikosta löytää päivien määrän

## Tekniset vaatimukset


Esimerkiksi:

1. Applikaatio pyritään kehittämään toimimaan Android versiosta 4.4 ylöspäin, mutta  tämä ei välttämättä tule toteutumaan testauksessa käytettävien laitteiden avulla
2. Applikaation pitää osata siirtää data tarvittaessa pilveen ja saada oikea data takaisin pilvestä
2. Applikaation tulee toimia myös offline-tilassa.
3. Data pitää saada suojattua

## Ratkaisuvaihtoehdot

### Ratkaisuvaihtoehto 1

#### Toteutusympäristö

NativeScript
Angular
Google Firebase => Cloud Firestore & Cloud Functions

#### Toteutettavat kertomukset

Jokaisella ratkaisuvaihtoehdoilla käyttäjäkermotusten vaatimukset ovat toteuttamismahdollisia. 

#### Työmääräarviot

| Vaihe | Tunnit | Muuta?
|---|---|---|
Suunnittelu | 200 |
Toteutus | 2100 |
Testaus | 200 |
Päättäminen | 200 |
**Yht** | 2700 |


#### Pros and Cons

#### Pros
- Osaamme jo toimia Angularin parissa
- Saamme natiivitoiminnallisuuden helpoiten kykyihimme nähden
- Cloud Firestore tarjoaa kattavat tietokanta ominaisuudet mukaanlukien offline-toiminnalisuuden.
#### Cons
- Open Source kirjastot joita tulemme käyttämään ovat riippumattomia NativeScriptin omasta tuesta, ja näin saattavat olla huonosti päivitettyjä.

### Ratkaisuvaihtoehto 2

#### Toteutusympäristö

React Native + node.js + mongoDB TAI Google Firebase

#### Pros and Cons

#### Pros
- Sopisi projektiin ehkä paremmin minimalistisuutensa vuoksi
#### Cons
- Pitäisi opetella uutta teknologiaa

### Ratkaisuvaihtoehto 3

#### Toteutusympäristö

Google Flutter + Dart + Google Firebase

#### Pros and Cons

#### Pros
- Kauniin UI:n luominen olisi melko helppoa
#### Cons
- Pitäisi opetella uutta teknologiaa

### Ratkaisuvaihtoehto 4

#### Toteutusympäristö

Android Native app, Java/Kotlin

#### Pros and Cons

#### Pros
- Työelämän kannalta Javalla android applikaatioiden kehitys olisi hyödyllistä opetella
#### Cons
- Osaamme NativeScript + Angular kehityksen paremmin


## Yhteenveto

Päätimme ratkaisuvaihtoehdoksi vaihtoehdon 1, eli NativeScript + Angular. Olemme opiskelleet Angularin  käyttöä syksyn ajan, ja koemme että sillä saisimme luotua natiivinapplikaation helpoiten laadukkaimmaiksi ilman liian monen uuden asian opettelua. 
Käytämme myös tietojen tallentamiseen FireBasen tietokantaa, emmekä tallenna sitä lokaalisti vaihtoehtoisen pilvibackupin avustamana.
