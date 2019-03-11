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

  public moodForm: FormGroup;
  public mood: number;
  public currentConfig: any;

  private _activityItems: ObservableArray<Item>
  private _moodItems: ObservableArray<Mood>

  constructor(private page: Page, private formBuilder: FormBuilder, private activityService: ActivityService, private moodService: MoodService) {
    super();
  }

  // ACTIVITY ITEMIT

  get activityItems(): ObservableArray<Item> {
    return this.get("_activityItems");
  }

  set activityItems(value: ObservableArray<Item>) {
    this.set("_activityItems", value);
  }

  public activityItemSelected(args: ListViewEventData) {
    const activityItem = this.activityItems.getItem(args.index);
    activityItem.selected = true;
    console.log(activityItem);
    console.log("args.index: " + args.index);
  }

  public activityItemDeselected(args: ListViewEventData) {
    const activityItem = this.activityItems.getItem(args.index);
    activityItem.selected = false;
  }


  // MOOD ITEMIT

  get moodItems(): ObservableArray<Mood> {
    return this.get("_moodItems");
  }

  set moodItems(value: ObservableArray<Mood>) {
    this.set("_moodItems", value);
  }

  public moodItemSelected(args: ListViewEventData) {
    const moodItem = this.moodItems.getItem(args.index);
    moodItem.selected = true;
    console.log(moodItem);
    console.log("args.index: " + args.index);
  }

  public moodItemDeselected(args: ListViewEventData) {
    const moodItem = this.moodItems.getItem(args.index);
    moodItem.selected = false;
  }

  /* 
    logaa valitun moodin. Aktiviteetin ja moodin data kerätään 
    result- ja moodResult-muuttujiinn getViewState-funktiota hyödyntäen.
  */
  submitLog() {

     /*const moodResult = this.moods.filter(item => {
      const vs = getViewState<ItemViewState>(item);
      return vs && vs.selected;
    })*/
    
    let config = {
      mood: '',
      freeText: this.f.freeText.value,
      activities: ''

    }

    this.currentConfig = config;
    // currentConfig => mood olio
    console.log(this.currentConfig);

    dialogs.alert({
      title: "Success!",
      /*message: `Here is your entry:\nMood koodi:${this.currentConfig.mood.map(data => "\n" + data.title)}\nKirjoitettu tekstisi: ${this.currentConfig.freeText}
      \nAktiviteettisi: `,*/
      okButtonText: "OK"
    });
  }

  // Otetaan moodForm-oliosta talteen controllerit, jotta niitä voidaan käyttää myöhemmin paljon siistimmin.
  get f() {
    return this.moodForm.controls;
  }

  ngOnInit() {
    this._activityItems = new ObservableArray(this.activityService.getItems());
    this._moodItems = new ObservableArray(this.moodService.getMoods());
    this.page.actionBarHidden = true;

    // luodaan uusi formgrouppi johon pusketaan mood.
    this.moodForm = this.formBuilder.group({
      mood: [''],
      freeText: [''],
      activities: ['']
    });
  }

}
