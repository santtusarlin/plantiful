import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'ns-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  animations: [
  ],
  moduleId: module.id,
})



export class PlantComponent implements OnInit {
  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
}

