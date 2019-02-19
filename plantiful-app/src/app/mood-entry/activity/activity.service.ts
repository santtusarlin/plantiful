import { Injectable } from "@angular/core";

export interface Item {
  name: string;
}

export interface ItemViewState {
    selected?: boolean;
  }

@Injectable()
export class ActivityService {

  getItems(): Item[] {
    let items = [];
    
    for (let i = 1; i < 31; i++) {
      items.push({ name: "item " + i })
    }

    return items;
  }
}