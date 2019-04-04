import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { ObservableArray } from "tns-core-modules/data/observable-array";
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: 'ns-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  moduleId: module.id,
  providers: [],
})
export class EntriesComponent implements OnInit {

  //public entriesx: Array<any> = [{ date: new Date, mood: 1}, { date: new Date, mood: 3}];
  private _entries: ObservableArray<any>

    constructor(private page: Page) { }

    get entries(): ObservableArray<any> {
      return this._entries;
    }

    getEntries() {

      const date1 = new Date('January 23, 2019 15:24:00');
      const date2 = new Date('January 25, 2019 15:24:00');
      const date3 = new Date('February 23, 2019 15:24:00');
      let mockdata = [
              { 
              date: date1.toLocaleDateString(), mood: 1, 
              activities: [
                { imageURL: "beer.png",
                  title: "beer",
                  selected: "true"
                },
                { imageURL: "beer.png",
                  title: "beer",
                  selected: "true"
                },
                { imageURL: "beer.png",
                  title: "beer",
                  selected: "true"
                }
              ],
              freeText: "lol xd1",
              moodImageURL: "mood_icon-01.png",
              imageURL: "Flower1.png"
              },
              { 
              date: date2.toLocaleDateString(), mood: 2, activities: [
                { imageURL: "beer.png",
                  title: "beer",
                  selected: "true"
                }
              ],
              freeText: "lol xd2",
              moodImageURL: "mood_icon-02.png",
              imageURL: "Flower2.png"
              },
              { 
              date: date3.toLocaleDateString(), mood: 3, activities: [
                { imageURL: "hiking.png",
                  title: "hiking",
                  selected: "true"
                }
              ],
              freeText: "lol xd3",
              moodImageURL: "mood_icon-03.png",
              imageURL: "Flower3.png"
              }
            ];
            console.log(mockdata);
            return mockdata;
    }

    ngOnInit() {
      this._entries = new ObservableArray(this.getEntries());
    
    }
}
