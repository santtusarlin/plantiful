import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Image, PlantService } from './plant.service';
import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: 'ns-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  moduleId: module.id,
})
export class PlantComponent extends Observable implements OnInit {

  private _plantItems: ObservableArray<Image>
  shitti: Array<any> = [];


  constructor(private page: Page, private plantService: PlantService) {
    super();
  }

  get plantItems(): ObservableArray<Image> {
    return this.get("_plantItems");
  }

  ngOnInit() {
    let taulukko = [];
    const collection = firebase.firestore().collection("users").orderBy("mood", "desc");
    const imageURL = {
      mood: 3,
      activities: [],
      freeText: "",
      imageURL: "ruukku.png"
    }
    this.page.actionBarHidden = true;
    collection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.shitti.push(doc.data())
      });

      this.shitti.push(imageURL)

      console.log(this.shitti);
    }); 
    
  }
}
