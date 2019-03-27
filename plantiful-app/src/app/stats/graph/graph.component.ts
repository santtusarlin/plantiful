import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { MockgraphService } from './mockgraph.service';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Image } from '../../plant/plant.service';
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: 'ns-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  moduleId: module.id,
  providers: [MockgraphService],
})
export class GraphComponent implements OnInit {

  public entries: Array<any> = [];

    constructor(private page: Page) { }

    ngOnInit() {

        // this._dateTimeSource = new ObservableArray(this._dataService.getDateTimeSource());
        // console.log(this.dateTimeSource);
        
        const collection = firebase.firestore().collection("users").orderBy("date", "desc");

        collection.get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.entries.push(doc.data())
          });
        }); 
        console.log(this.entries);
    }
}
