import { Injectable } from "@angular/core";

export interface Item {
  title: string,
  imageURL: string,
  selected: boolean;
}

@Injectable()
export class ActivityService {

  getItems(): Item[] {
   let items = [{
  "title": "Art",
  "imageURL": "art.png",
  "selected": false
}, {
  "title": "Beer",
  "imageURL": "beer.png",
  "selected": false
}, {
  "title": "Bicycle",
  "imageURL": "bicycle-rider.png",
  "selected": false
}, {
  "title": "Cake",
  "imageURL": "cake.png",
  "selected": false
}, {
  "title": "Cart",
  "imageURL": "cart.png",
  "selected": false
}, {
  "title": "Coffee",
  "imageURL": "coffee.png",
  "selected": false
}, {
  "title": "Computer",
  "imageURL": "computer.png",
  "selected": false
}, {
  "title": "Cooking",
  "imageURL": "cooking.png",
  "selected": false
}, {
  "title": "Dog",
  "imageURL": "dog.png",
  "selected": false
}, {
  "title": "Eating",
  "imageURL": "eating.png",
  "selected": false
}, {
  "title": "Fastfood",
  "imageURL": "fastfood.png",
  "selected": false
}, {
  "title": "Gaming",
  "imageURL": "gaming.png",
  "selected": false
}, {
  "title": "Gym",
  "imageURL": "gym.png",
  "selected": false
}, {
  "title": "Headphone",
  "imageURL": "headphone.png",
  "selected": false
}, {
  "title": "Hiking",
  "imageURL": "hiking.png",
  "selected": false
}, {
  "title": "Movie",
  "imageURL": "movie.png",
  "selected": false
}, {
  "title": "Music",
  "imageURL": "music.png",
  "selected": false
}, {
  "title": "Phone",
  "imageURL": "phone.png",
  "selected": false
}, {
  "title": "Reading",
  "imageURL": "reading.png",
  "selected": false
}, {
  "title": "Repair",
  "imageURL": "repair.png",
  "selected": false
}, {
  "title": "Running",
  "imageURL": "running.png",
  "selected": false
}, {
  "title": "School",
  "imageURL": "school.png",
  "selected": false
}, {
  "title": "Shopping",
  "imageURL": "shopping.png",
  "selected": false
}, {
  "title": "Sleep",
  "imageURL": "sleep.png",
  "selected": false
}, {
  "title": "Stretching",
  "imageURL": "stretching.png",
  "selected": false
}, {
  "title": "Swimming",
  "imageURL": "swimming.png",
  "selected": false
}, {
  "title": "Television",
  "imageURL": "television.png",
  "selected": false
}, {
  "title": "Wine",
  "imageURL": "wine.png",
  "selected": false
}];

    /*for (let i = 0; i < 20; i++) {
      items.push({ title: "item " + i, imageURL: "item " + i })
    }*/

    return items;
  }
}