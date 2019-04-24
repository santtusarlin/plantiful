import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
const firebase = require("nativescript-plugin-firebase/app");
import { Uuid } from "../../uuid"

@Component({
  selector: 'ns-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  moduleId: module.id,
  providers: [],
})
export class EntriesComponent implements OnInit {

  private _entries: Array<any>

    constructor(private page: Page, private uuid: Uuid) { }

    get entries(): Array<any> {
      return this._entries;
    }

    getFbEntries(): Array<any> {
      const collection = firebase.firestore().collection(`${this.uuid.uuid}`).orderBy("date", "desc");
      let entries = [];
      collection.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
           this.entries.push(doc.data())
           });
         });
         return entries;
    }

    ngOnInit() {
      this._entries = (this.getFbEntries());
    }
}