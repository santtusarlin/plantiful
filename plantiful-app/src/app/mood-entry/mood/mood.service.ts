import { Injectable } from "@angular/core";
 
export interface Mood {
  title: number,
  imageURL: string,
  selected: boolean
}
 
@Injectable()
export class MoodService {
 
  getMoods(): Mood[] {
   let moods = [{
  "title": 5,
  "imageURL": "mood_icon-05.png",
  "selected": false
}, {
  "title": 4,
  "imageURL": "mood_icon-04.png",
  "selected": false
}, {
  "title": 3,
  "imageURL": "mood_icon-03.png",
  "selected": false
}, {
  "title": 2,
  "imageURL": "mood_icon-02.png",
  "selected": false
}, {
  "title": 1,
  "imageURL": "mood_icon-01.png",
  "selected": false
}, ];
    /*for (let i = 0; i < 20; i++) {
      items.push({ title: "item " + i, imageURL: "item " + i })
    }*/
 
    return moods;
  }
}