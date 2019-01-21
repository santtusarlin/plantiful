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

\Plantiful

Tekijät:
Miika Pollari
Santtu Sarlin
Mikko Hannukainen
Mikko Poutanen

### Termit ja lyhenteet

<\Esimerkiksi:>
| Termi | Kuvaus |
|---|---|
GIT | Versionhallintajärjestelmä
GitHub | Palvelu joka on rakennettu GIT versionhallinnan ympärille
Markdown | Merkkauskieli

### Viitteet

<\Esimerkiksi:>
| Viittaus | Materiaali |
|---|---|
HLTP | \<linkki hltp dokumenttiin>
GDD | \<linkki gamedesign dokumenttiin>

## Johdanto

\<Tämän dokumentin tarkoituksena on tuottaa esitutkimus tietojärjestelmästä X. Tietojärjestelmä X on …

Luvussa 2. listataan vaatimukset, luvussa 3. käyttötapaukset…>

## Visio

Visiomme mukaan me autamme ihmisiä heidän joka päiväisessä elämässään. Käyttäjien elämä helpottuu ja huolet hoituvat.

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
 
### Käyttäjäkertomus 3
#### Psykoterapian aloittaneena käyttäjänä haluan seurata mielentilani kehitystä, ja kasvi motivoi sovelluksen käytön jatkoa.
#### Hyväksymiskriteerit:
- Kasvi muuttuu mood-kirjausten mukaan.
- Tilastoja voi seurata sovelluksesta 

### Käyttäjäkertomus
#### Käyttäjänä haluan kirjata tämänhetkisen mielentilani ja valita sen ikoneista.
#### Hyväksymiskriteerit:
- Mood-kirjaus aukeaa päävalikosta.
- Mielentila valitaan ikonilla.

### Käyttäjäkertomus
#### Käyttäjänä haluan tehdä mood-kirjauksen ja valita päivän aikana tapahtuneet aktiviteetit, mielentilat ja olot ikoneista. 
#### Hyväksymiskriteerit:
- Kattava valikoima ikoneita useaan eri aktiviteettiin ja oloon.
- Mood-kirjaus aukeaa päävalikosta.
  


## Tekniset vaatimukset

\<Lista projektin teknisistä vaatimuksista>

Esimerkiksi:

1. Applikaation/sivuston tulee käyttää TLS/SLS salausta
2. Pelin tulee toimi sulavasti (>60fps) Samsung Galaxy S2 puhelimella

## Ratkaisuvaihtoehdot

\<Listaa niin monta ratkaisuvaihtoehtoa kuin niitä tulee ilmi>

### Ratkaisuvaihtoehto 1

#### Toteutusympäristö

\<Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi>

NativeScript + Angular

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

\<Tässä aliluvussa kerrotaan ratkaisuvaihtoehdon hyvät ja huonot puolet objektiivisesti>

### Ratkaisuvaihtoehto 2

#### Toteutusympäristö

\<Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi>

React Native

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

\<Tässä aliluvussa kerrotaan ratkaisuvaihtoehdon hyvät ja huonot puolet objektiivisesti>

### Ratkaisuvaihtoehto 3

#### Toteutusympäristö

\<Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi>

Google Flutter + Dart

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

\<Tässä aliluvussa kerrotaan ratkaisuvaihtoehdon hyvät ja huonot puolet objektiivisesti>

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

\<Tässä aliluvussa kerrotaan ratkaisuvaihtoehdon hyvät ja huonot puolet objektiivisesti>


## Yhteenveto

\<Tässä luvussa tehdään ehdotus järjestelmän toteutustavasta (siis jokin edellä esitellyistä vaihtoehdoista) ja perustellaan ko. valinta.>
