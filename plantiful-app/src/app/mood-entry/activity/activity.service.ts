import { Injectable } from "@angular/core";

export interface Item {
  title: string,
  imageURL: string
}

export interface ItemViewState {
  selected?: boolean;
}

@Injectable()
export class ActivityService {

  getItems(): Item[] {
   let items = [{
  "title": "Art",
  "imageURL": "art.png"
}, {
  "title": "Beer",
  "imageURL": "beer.png"
}, {
  "title": "Bicycle",
  "imageURL": "bicycle-rider.png"
}, {
  "title": "Cake",
  "imageURL": "cake.png"
}, {
  "title": "Cart",
  "imageURL": "cart.png"
}, {
  "title": "Coffee",
  "imageURL": "coffee.png"
}, {
  "title": "Computer",
  "imageURL": "computer.png"
}, {
  "title": "Cooking",
  "imageURL": "cooking.png"
}, {
  "title": "Dog",
  "imageURL": "dog.png"
}, {
  "title": "Eating",
  "imageURL": "eating.png"
}, {
  "title": "Fastfood",
  "imageURL": "fastfood.png"
}, {
  "title": "Gaming",
  "imageURL": "gaming.png"
}, {
  "title": "Gym",
  "imageURL": "gym.png"
}, {
  "title": "Headphone",
  "imageURL": "headphone.png"
}, {
  "title": "Hiking",
  "imageURL": "hiking.png"
}, {
  "title": "Movie",
  "imageURL": "movie.png"
}, {
  "title": "Music",
  "imageURL": "music.png"
}, {
  "title": "Phone",
  "imageURL": "phone.png"
}, {
  "title": "Reading",
  "imageURL": "reading.png"
}, {
  "title": "Repair",
  "imageURL": "repair.png"
}, {
  "title": "Running",
  "imageURL": "running.png"
}, {
  "title": "School",
  "imageURL": "school.png"
}, {
  "title": "Shopping",
  "imageURL": "shopping.png"
}, {
  "title": "Sleep",
  "imageURL": "sleep.png"
}, {
  "title": "Stretching",
  "imageURL": "stretching.png"
}, {
  "title": "Swimming",
  "imageURL": "swimming.png"
}, {
  "title": "Television",
  "imageURL": "television.png"
}, {
  "title": "Wine",
  "imageURL": "wine.png"
}];

    /*for (let i = 0; i < 20; i++) {
      items.push({ title: "item " + i, imageURL: "item " + i })
    }*/

    return items;
  }
}