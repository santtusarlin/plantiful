import { Component, NgZone, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Image } from '../models/image';
import { Uuid } from "../uuid"

const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: 'ns-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  moduleId: module.id,
})
export class PlantComponent implements OnInit {

  public images: Array<Image> = [];
  isLoading = false;

  constructor(private page: Page, private uuid: Uuid) { }

  ngOnInit() {
    this.isLoading = true;
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "~/app/images/background/sky3.png";

    this.delay(1500).then(() => {
      const collection = firebase.firestore().collection(`${this.uuid.uuid}`).orderBy("date", "desc");
      let data = [];
      collection.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.images.push(doc.data())
        });
        const ruukkudate = new Date("2002-03-23T11:59:35.511Z");


        const ruukkuUrl = {
          mood: 3,
          activities: [],
          freeText: "",
          imageURL: "ruukku.png",
          date: ruukkudate
        }

        this.images.push(ruukkuUrl);
        this.isLoading = false;
      })
    })

  }


  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }
}
