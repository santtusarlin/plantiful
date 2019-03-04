import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  moduleId: module.id,
})
export class PlantComponent implements OnInit {


  kakkaimg1: Image;
  isShown: boolean = true;
  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    const imaage = new Image();
    imaage.src = "res://plant1";
    this.kakkaimg1 = imaage;
  }
}
