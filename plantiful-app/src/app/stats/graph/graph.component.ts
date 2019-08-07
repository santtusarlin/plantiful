import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Image } from '../../models/image';
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: 'ns-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  moduleId: module.id,
  providers: [],
})
export class GraphComponent implements OnInit {

  //public entriesx: Array<any> = [{ date: new Date, mood: 1}, { date: new Date, mood: 3}];
  private _entries: ObservableArray<any>
    constructor(private page: Page) { }

    get entries(): ObservableArray<any> {
      return this._entries;
    }

    getEntries() {
      // let entries = [];
      // const collection = firebase.firestore().collection("users").orderBy("date", "desc");

      // collection.get().then(querySnapshot => {
      // querySnapshot.forEach(doc => {
      //   entries.push(doc.data())
      //   });
      // console.log(entries);
      // return entries;
      // }); 
      const date1 = new Date('January 23, 2019 15:24:00');
      const date2 = new Date('January 25, 2019 15:24:00');
      const date3 = new Date('February 23, 2019 15:24:00');
      let mockdata = [
              { 
              date: date1, mood: 1, 
              activities: [
                { imageURL: "beer.png",
                  title: "beer",
                  selected: "true"
                }
              ],
              freeText: "lol xd1",
              imageURL: "Flower1.png"
              },
              { 
              date: date2, mood: 2, activities: [
                { imageURL: "beer.png",
                  title: "beer",
                  selected: "true"
                }
              ],
              freeText: "lol xd2",
              imageURL: "Flower2.png"
              },
              { 
              date: date3, mood: 3, activities: [
                { imageURL: "hiking.png",
                  title: "hiking",
                  selected: "true"
                }
              ],
              freeText: "lol xd3",
              imageURL: "Flower3.png"
              }
            ];
            console.log(mockdata);
            return mockdata;
    }

    ngOnInit() {
      this._entries = new ObservableArray(this.getEntries());
    
        // this._dateTimeSource = new ObservableArray(this._dataService.getDateTimeSource());
        // console.log(this.dateTimeSource);
        
        // const collection = firebase.firestore().collection("users").orderBy("date", "desc");

        // collection.get().then(querySnapshot => {
        //   querySnapshot.forEach(doc => {
        //     this.entries.push(doc.data())
        //   });
        //   console.log(this.entries);
        // }); 
    }
}
