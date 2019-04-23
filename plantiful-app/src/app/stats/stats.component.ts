import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
@Component({
  selector: 'ns-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  moduleId: module.id,
})
export class StatsComponent implements OnInit {

  constructor(private page: Page) { }
  isTrue: boolean = false;

  ngOnInit() {
  }

  setBoolean(b) {
    this.isTrue = b;
  }

}
