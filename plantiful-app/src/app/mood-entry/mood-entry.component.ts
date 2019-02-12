import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'ns-mood-entry',
  templateUrl: './mood-entry.component.html',
  styleUrls: ['./mood-entry.component.css'],
  moduleId: module.id,
})
export class MoodEntryComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
