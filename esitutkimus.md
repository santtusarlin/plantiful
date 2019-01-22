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

### Viitteet

| Viittaus | Materiaali |
|---|---|
HLTP | \<linkki hltp dokumenttiin>
GDD | \<linkki gamedesign dokumenttiin>

## Johdanto

\<Tämän dokumentin tarkoituksena on tuottaa esitutkimus tietojärjestelmästä X. Tietojärjestelmä X on …

Luvussa 2. listataan vaatimukset, luvussa 3. käyttötapaukset…>

## Visio

Haluamme tulla käytetyimmäksi mielialanpäiväkirjaksi, joka auttaa ihmisiä tutkimaan eri asioiden vaikutuksia mielialaansa ja hyödyntämään tietoa itsehoidossa tai ammattilaisen apuna.

Plantify your mood

## Käyttäjäkertomukset

\<Listaa käyttäjäkertomukset ja niiden hyväksymiskriteeristö>
### Käyttäjäkertomus 1
#### Masentuneena käyttäjänä haluan varmistusta omasta mielentilastani ja saan sitä sovelluksen tilastoista.
#### Hyväksymiskriteerit:
- Sovelluksen kalenterista näkee värikoodatusti muutoksia kuukauden ajalta
 
### Käyttäjäkertomus 2
#### Käyttäjänä haluan nähdä kasvini jotta voin seurata sen tilaa.
#### Hyväksymiskriteerit:
- Kasvi muuttuu mood-kirjausten mukaan.
- Kasvi syntyy ensimmäisen kirjauksen jälkeen.
- Kasvi aukeaa päävalikosta
- Kasvi-näkymästä pääsee takaisin päävalikkoon

### Käyttäjäkertomus 3
#### Psykoterapian aloittaneena käyttäjänä haluan seurata mielentilani kehitystä, ja kasvi motivoi sovelluksen käytön jatkoa.
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
#### Lukihäiriöisenä haluan, että sovelluksessa on mahdollisimman vähän tekstiä
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
#### Huonomuistisena käyttäjänä haluan, että sovellus muistuttaa minua merkitsemään merkinnät
#### Hyväksymiskriteerit:
- Sovellus muistuttaa käyttäjää hauluamanaan aikana
- Muistutuksen voidaan laittaa päältä/pois

### Käyttäjäkertomus 9
#### Sovelluksen kehittäjänä haluan saada kerätä dataa anynoyymisti käyttäjien merkinnöistä
#### Hyväksymiskriteerit:
- Sovellus kerää dataa anonyymisti

### Käyttäjäkertomus 10
#### Paljon tekevänä käyttäjä haluan mahdollisuuden lisätä omia aktiviteetteja sovellukseen ja valita niille iconin
#### Hyväksymiskriteerit:
- Voidaan luoda uusia aktiviteetteja ja valita niille iconit

### Käyttäjäkertomus 11
#### Käyttäjänä haluan luoda varmuuskopion tilastoistani.
#### Hyväksymiskriteerit:
- Valikosta voi valita varmuuskopion luonnin
- Valikosta voi valita varmuuskopion palautuksen
- Varmuuskopion voi luoda pilveen käyttäjän omaan Google Driveen

### Käyttäjäkertomus 12
#### Käyttäjänä haluan valita sovelluksen väriskeeman
#### Hyväksymiskriteerit:
- Asetukset-valikosta löytyy väriskeema valitsin
- Voin valita värit itse tai valmiista templaatista.

### Käyttäjäkertomus 13
#### Käyttäjänä haluan lisätä sovellukseen lukitksen
#### Hyväksymiskriteerit:
- Voin valita lukituksen pin-koodin itse
- Voin valita onko lukitus käytössä vai ei

## Tekniset vaatimukset

\<Lista projektin teknisistä vaatimuksista>

Esimerkiksi:

1. Applikaation täytyy toimia vähintään Androidin versiosta 7.0 ylöspäin


## Ratkaisuvaihtoehdot

\<Listaa niin monta ratkaisuvaihtoehtoa kuin niitä tulee ilmi>

### Ratkaisuvaihtoehto 1

#### Toteutusympäristö

\<Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi>

NativeScript + Angular + Google Firebase (?) TAI mongoDB + node.js-server

#### Toteutettavat kertomukset

\<Tässä aliluvussa kerrotaan mitä kertomuksia kyseisellä tekniikalla pystytään toteuttamaan ja mitä ei>

#### Työmääräarviot

<Tähän arvioidaan hyvin karkealla tasolla työhön kuluva aika. Tehkää arviot käyttäen hyväksi seurantaraportin Työmäärien arviointi -välilehteä (SeurantaRaportti_Projektin_nimi.xls). Työmäärien arvioinnissa jokainen projektin jäsen tekee omat arvionsa ja sen jälkeen keskustellaan arviot läpi, jolloin päätetään vaiheeseen arvioitavat tunnit.>

<\Esimerkiksi:>
| Vaihe | Tunnit | Muuta?
|---|---|---|
Käynnistys | 10 | Jee
Suunnittelu | 10 | Jee
**Yht** | 20 | Paljon tunteja

#### Pros and Cons

#### Pros
- Osaamme jo toimia Angularin parissa
- Saamme natiivitoiminnallisuuden helpoiten kykyihimme nähden
#### Cons
- 

### Ratkaisuvaihtoehto 2

#### Toteutusympäristö

\<Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi>

React Native + node.js + mongoDB TAI Google Firebase

#### Toteutettavat kertomukset

\<Tässä aliluvussa kerrotaan mitä kertomuksia kyseisellä tekniikalla pystytään toteuttamaan ja mitä ei>

#### Työmääräarviot

<Tähän arvioidaan hyvin karkealla tasolla työhön kuluva aika. Tehkää arviot käyttäen hyväksi seurantaraportin Työmäärien arviointi -välilehteä (SeurantaRaportti_Projektin_nimi.xls). Työmäärien arvioinnissa jokainen projektin jäsen tekee omat arvionsa ja sen jälkeen keskustellaan arviot läpi, jolloin päätetään vaiheeseen arvioitavat tunnit.>

<\Esimerkiksi:>
| Vaihe | Tunnit | Muuta?
|---|---|---|
Käynnistys | 10 | Jee
Suunnittelu | 10 | Jee
**Yht** | 20 | Paljon tunteja

#### Pros and Cons

#### Pros
- Sopisi projektiin ehkä paremmin minimalistisuutensa vuoksi
#### Cons
- Pitäisi opetella uutta teknologiaa

### Ratkaisuvaihtoehto 3

#### Toteutusympäristö

\<Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi>

Google Flutter + Dart + Google Firebase

#### Toteutettavat kertomukset

\<Tässä aliluvussa kerrotaan mitä kertomuksia kyseisellä tekniikalla pystytään toteuttamaan ja mitä ei>

#### Työmääräarviot

<Tähän arvioidaan hyvin karkealla tasolla työhön kuluva aika. Tehkää arviot käyttäen hyväksi seurantaraportin Työmäärien arviointi -välilehteä (SeurantaRaportti_Projektin_nimi.xls). Työmäärien arvioinnissa jokainen projektin jäsen tekee omat arvionsa ja sen jälkeen keskustellaan arviot läpi, jolloin päätetään vaiheeseen arvioitavat tunnit.>

<\Esimerkiksi:>
| Vaihe | Tunnit | Muuta?
|---|---|---|
Käynnistys | 10 | Jee
Suunnittelu | 10 | Jee
**Yht** | 20 | Paljon tunteja

#### Pros and Cons

#### Pros
- Sopisi projektiin ehkä paremmin minimalistisuutensa vuoksi
#### Cons
- Pitäisi opetella uutta teknologiaa

### Ratkaisuvaihtoehto 4

#### Toteutusympäristö

\<Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi>

Android Native app, Java/Kotlin

#### Toteutettavat kertomukset

\<Tässä aliluvussa kerrotaan mitä kertomuksia kyseisellä tekniikalla pystytään toteuttamaan ja mitä ei>

#### Työmääräarviot

<Tähän arvioidaan hyvin karkealla tasolla työhön kuluva aika. Tehkää arviot käyttäen hyväksi seurantaraportin Työmäärien arviointi -välilehteä (SeurantaRaportti_Projektin_nimi.xls). Työmäärien arvioinnissa jokainen projektin jäsen tekee omat arvionsa ja sen jälkeen keskustellaan arviot läpi, jolloin päätetään vaiheeseen arvioitavat tunnit.>

<\Esimerkiksi:>
| Vaihe | Tunnit | Muuta?
|---|---|---|
Käynnistys | 10 | Jee
Suunnittelu | 10 | Jee
**Yht** | 20 | Paljon tunteja

#### Pros and Cons

#### Pros
- Sopisi projektiin ehkä paremmin minimalistisuutensa vuoksi
#### Cons
- Pitäisi opetella uutta teknologiaa


## Yhteenveto

\<Tässä luvussa tehdään ehdotus järjestelmän toteutustavasta (siis jokin edellä esitellyistä vaihtoehdoista) ja perustellaan ko. valinta.>
