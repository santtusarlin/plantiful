import { Component, NgZone, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Observable } from 'rxjs';

import { Image } from './plant.service';
import { firestore } from "nativescript-plugin-firebase";
import { Uuid } from "../uuid"

const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: 'ns-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  moduleId: module.id,
})
export class PlantComponent implements OnInit {

  public images: Array<Image> = [];

  constructor(private page: Page, private uuid: Uuid) {
  }


  ngOnInit() {
    const ruukkudate = new Date("2000-03-23T11:59:35.511Z");

    const collection = firebase.firestore().collection(`${this.uuid.uuid}`).orderBy("date", "desc");
    const imageURL = {
      mood: 3,
      activities: [],
      freeText: "",
      imageURL: "ruukku.png",
      date: ruukkudate
    }
    this.page.actionBarHidden = true;
    collection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.images.push(doc.data())
      });
      this.images.push(imageURL);
    }); 
    
  }
}
