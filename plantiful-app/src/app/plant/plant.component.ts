import { Component, NgZone, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Observable } from 'rxjs';

import { Image } from './plant.service';
import * as sessionStorage from "nativescript-localstorage";
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
    this.page.actionBarHidden = true;
    
    let data = sessionStorage.getItem("data");
    this.images = data;
    console.log(this.images);
    
  }
}
