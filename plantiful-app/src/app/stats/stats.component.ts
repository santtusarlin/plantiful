import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  moduleId: module.id,
})
export class StatsComponent implements OnInit {

  isTrue: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setBoolean(b) {
    this.isTrue = b;
  }

}
