import { Component } from "@angular/core";
import { Uuid } from './uuid'

const firebase = require("nativescript-plugin-firebase");

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private uuid: Uuid) {}

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
            })
            .then(user => {
                console.log(`Uid on täsä: ${user.uid}`)
                this.uuid.uuid = user.uid;
            })
        ).catch(
            (error) => {
                console.log(`firebase.init error: ${error}`);
            }
        )
    }
}
