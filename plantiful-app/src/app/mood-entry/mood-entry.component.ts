import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { ActivityComponent } from './activity/activity.component';
import { moodConfiguration } from '../model/mood';

import { Item, ActivityService } from './activity/activity.service';
import { ItemViewState } from './activity/activity.component';
import { getViewState } from '../../view-state-utils';

import { SegmentedBar, SegmentedBarItem, selectedIndexProperty } from "tns-core-modules/ui/segmented-bar";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as dialogs from "tns-core-modules/ui/dialogs";

const ItemViewStateFactory = () => { return { selected: false } };
@Component({
  selector: 'ns-mood-entry',
  templateUrl: './mood-entry.component.html',
  styleUrls: ['./mood-entry.component.css'],
  moduleId: module.id
})

export class MoodEntryComponent implements OnInit {

  selected: boolean = false;

  public myItems: Array<SegmentedBarItem>;
  //public dataItems = ['Cooking', 'Sports', 'Sleeping', 'Video games', 'Overclocking', 'Programming', 'Cleaning', 'Shopping'];
  
  items: Item[];

  public mood: number;
  public moodForm: FormGroup;

  public currentConfig: any;

  constructor(private page: Page, private formBuilder: FormBuilder, private activityService: ActivityService) {
    this.moodForm = this.formBuilder.group({
      mood: new FormControl("")
    });

    this.items = activityService.getItems();
    
    this.myItems = [];
        for (let i = 1; i < 6; i++) {
            const item = new SegmentedBarItem();
            item.title = "" + i;
            this.myItems.push(item);
      }
  }

  onItemTap(args) {
    console.log("args.index: " + args.index);
    console.log("args.view: " + args.view);
    console.log("args.object: " + args.object);
}

  logItem() {
    console.log("click");
  }
  
  checkout() {
    const result = this.items
      .filter(item => {
        const vs = getViewState<ItemViewState>(item);
        return vs && vs.selected;
      })
      .map(item => item.name)
      .join("\n");
    alert("Selected items:\n" + result);
    console.log(result);
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
