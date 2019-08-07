import { Component } from "@angular/core";
import { Uuid } from './uuid'

const firebase = require("nativescript-plugin-firebase");

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private uuid: Uuid) { }

    ngOnInit() {
        // Sovelluksen tietokannan yhteyden alustus
        firebase.init({}).then(() => {
                console.log("firebase.init done!");
            },
            firebase.login({
                /*
                    Koska sovelluksessa käytetään Firebase-palvelun
                    tarjoamaan anonyymia kirjautumista meidän ei tarvitse
                    pyytää käyttäjältä tunnuksia, vaan voidaan suorittaa
                    autentikaatio ilman ylimääräistä vaivaa
                */
                type: firebase.LoginType.ANONYMOUS
            }).then(user => {
                // console.log(`Uid on täsä: ${user.uid}`)
                // Kirjauksen onnistuttua siirretään käyttäjän
                // tunnus globaaliin muuttujaan.
                this.uuid.uuid = user.uid;
                
            }).catch((error) => {
                // Kakka jos iskee tuulettimeen
                console.log(`firebase.init error: ${error}`);
            }
        ));
    }
}
