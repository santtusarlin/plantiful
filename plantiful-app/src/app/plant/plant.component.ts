import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Image, PlantService } from './plant.service';
import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { topmost } from 'tns-core-modules/ui/frame/frame';

@Component({
  selector: 'ns-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  moduleId: module.id,
})
export class PlantComponent extends Observable implements OnInit {

  private _plantItems: ObservableArray<Image>
  

  constructor(private page: Page, private plantService: PlantService) {
    super();
  }

  get plantItems(): ObservableArray<Image> {
    return this.get("_plantItems");
  } 

  ngOnInit() {
    this.page.actionBarHidden = true;
    this._plantItems = new ObservableArray(this.plantService.getImages());
    
  }
}
