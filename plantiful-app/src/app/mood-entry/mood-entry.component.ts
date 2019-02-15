import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { moodConfiguration } from '../model/mood';

import { GridItemEventData } from "nativescript-grid-view";

import { SegmentedBar, SegmentedBarItem, selectedIndexProperty } from "tns-core-modules/ui/segmented-bar";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-mood-entry',
  templateUrl: './mood-entry.component.html',
  styleUrls: ['./mood-entry.component.css'],
  moduleId: module.id,
})
export class MoodEntryComponent implements OnInit {

  public myItems: Array<SegmentedBarItem>;
  public dataItems = ['Cooking', 'Sports', 'Sleeping', 'Video games', 'Overclocking', 'Programming', 'Cleaning', 'Shopping'];
  public mood: number;
  public moodForm: FormGroup;
  public currentConfig: any;

  constructor(private page: Page, private formBuilder: FormBuilder) {
    this.moodForm = this.formBuilder.group({
      mood: new FormControl("")
    });
    
    this.myItems = [];
        for (let i = 1; i < 6; i++) {
            const item = new SegmentedBarItem();
            item.title = "" + i;
            this.myItems.push(item);
      }
  }

  onItemTap(args) {
    console.log(args.index);
}

  logItem() {
    console.log("click");
  }

  submitLog() {
    let config = new moodConfiguration(
      this.moodForm.value
    );
    this.currentConfig = config;
    console.log('Button Works');
    console.log('this.mood = ' + this.mood);
    console.log(this.currentConfig);

    dialogs.alert({
      title: "Mood number:",
      message: "Current mood selected: " + this.mood,
      okButtonText: "OK"
  });
  }

  public onSelectedIndexChange(args) {
    let segmentedBar = <SegmentedBar>args.object;
    this.mood = (segmentedBar.selectedIndex + 1);
}


  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
