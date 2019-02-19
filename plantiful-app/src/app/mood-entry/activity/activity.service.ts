import { Injectable } from "@angular/core";

export interface Item {
  name: string,
  surname: string
}

export interface ItemViewState {
    selected?: boolean;
  }

@Injectable()
export class ActivityService {

  getItems(): Item[] {
    let items = [];
    
    for (let i = 0; i < 20; i++) {
      items.push({ name: "item " + i, surname: "item " + i })
    }

    return items;
  }
}