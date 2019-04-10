import { Component } from "@angular/core";
import { Uuid } from './uuid'
import * as sessionStorage from "nativescript-localstorage";
import { getViewData } from "@angular/core/src/render3/state";

const firebase = require("nativescript-plugin-firebase");
const firestore = require("nativescript-plugin-firebase/app");

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private uuid: Uuid) { }

    ngOnInit() {
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        }).then(
            () => {
                console.log("firebase.init done!");
            },
            firebase.login({
                type: firebase.LoginType.ANONYMOUS
            }).then(user => {
                console.log(`Uid on täsä: ${user.uid}`)
                this.uuid.uuid = user.uid;
                this.getData();
            }
            ).catch((error) => {
                console.log(`firebase.init error: ${error}`);
            }
            ))
    }

    // Hankitaan data valmiiksi sovelluksen käyttöä varten.
    getData() {
        const collection = firestore.firestore().collection(`${this.uuid.uuid}`).orderBy("date", "desc");
        let data = [];
        collection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                data.push(doc.data())
            });
            const ruukkudate = new Date("2000-03-23T11:59:35.511Z");

            const imageURL = {
                mood: 3,
                activities: [],
                freeText: "",
                imageURL: "ruukku.png",
                date: ruukkudate
            }

            data.push(imageURL)
            sessionStorage.setItemObject("data", data);

        })
    }
}
