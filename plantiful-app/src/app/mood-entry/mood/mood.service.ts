import { Injectable } from "@angular/core";
 
export interface Mood {
  title: string,
  imageURL: string
}
 
@Injectable()
export class MoodService {
 
  getMoods(): Mood[] {
   let moods = [{
  "title": "1",
  "imageURL": "mood_icon-01.png"
}, {
  "title": "2",
  "imageURL": "mood_icon-02.png"
}, {
  "title": "3",
  "imageURL": "mood_icon-03.png"
}, {
  "title": "4",
  "imageURL": "mood_icon-04.png"
}, {
  "title": "5",
  "imageURL": "mood_icon-05.png"
}, ];
    /*for (let i = 0; i < 20; i++) {
      items.push({ title: "item " + i, imageURL: "item " + i })
    }*/
 
    return moods;
  }
}