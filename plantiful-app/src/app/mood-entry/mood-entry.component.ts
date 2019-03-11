import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

import { Item, ActivityService } from './activity/activity.service';
import { Mood, MoodService } from './mood/mood.service';

import { ItemViewState } from '../model/itemviewstate';
import { getViewState } from '../../view-state-utils';

import { ListViewEventData } from "nativescript-ui-listview";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as dialogs from "tns-core-modules/ui/dialogs";

import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Component({
  selector: 'ns-mood-entry',
  templateUrl: './mood-entry.component.html',
  styleUrls: ['./mood-entry.component.css'],
  moduleId: module.id
})

export class MoodEntryComponent extends Observable implements OnInit {

  moods: Mood[];

  public moodForm: FormGroup;
  public mood: number;
  public currentConfig: any;

  private _activityItems: ObservableArray<Item>

  constructor(private page: Page, private formBuilder: FormBuilder, private activityService: ActivityService, private moodService: MoodService) {
    super();
    this.moods = moodService.getMoods();
  }

  get activityItems(): ObservableArray<Item> {
    return this.get("_activityItems");
  }

  set activityItems(value: ObservableArray<Item>) {
    this.set("_activityItems", value);
  }

  public itemSelected(args: ListViewEventData) {
    const item = this.activityItems.getItem(args.index);
    item.selected = true;
    console.log(item);
    console.log("args.index: " + args.index);
  }

  public itemDeselected(args: ListViewEventData) {
    const item = this.activityItems.getItem(args.index);
    item.selected = false;
  }

  /* 
    logaa valitun moodin. Aktiviteetin ja moodin data kerätään 
    result- ja moodResult-muuttujiinn getViewState-funktiota hyödyntäen.
  */
  submitLog() {

     const moodResult = this.moods.filter(item => {
      const vs = getViewState<ItemViewState>(item);
      return vs && vs.selected;
    })
    
    let config = {
      mood: moodResult,
      freeText: this.f.freeText.value,
      activities: ''

    }

    this.currentConfig = config;
    // currentConfig => mood olio
    console.log(this.currentConfig);

    dialogs.alert({
      title: "Success!",
      message: `Here is your entry:\nMood koodi:${this.currentConfig.mood.map(data => "\n" + data.title)}\nKirjoitettu tekstisi: ${this.currentConfig.freeText}
      \nAktiviteettisi: `,
      okButtonText: "OK"
    });
  }

  // Otetaan moodForm-oliosta talteen controllerit, jotta niitä voidaan käyttää myöhemmin paljon siistimmin.
  get f() {
    return this.moodForm.controls;
  }

  ngOnInit() {
    this._activityItems = new ObservableArray(this.activityService.getItems());
    this.page.actionBarHidden = true;

    // luodaan uusi formgrouppi johon pusketaan mood.
    this.moodForm = this.formBuilder.group({
      mood: [''],
      freeText: [''],
      activities: ['']
    });
  }

}
