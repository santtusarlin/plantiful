import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  animations: [
  ],
  moduleId: module.id,
})

export class PlantComponent implements OnInit {

  kakkaimg1: Image;
  kakkaimg2: Image;
  isShown: boolean = true;
  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    const imaage = new Image();
    imaage.src = "res://plant1";
    const imaage2 = new Image();
    imaage2.src = "res://plant2";
    this.kakkaimg1 = imaage;
    this.kakkaimg2 = imaage2;
  }

  toggleShown() {
    if (this.isShown) {
      this.isShown = false;
    } else {
      this.isShown = true;
    }
  }
}

