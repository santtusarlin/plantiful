import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

import { Item, ActivityService } from './activity/activity.service';
import { Mood, MoodService } from './mood/mood.service';

import { ItemViewState } from '../model/itemviewstate';
import { getViewState } from '../../view-state-utils';

import { ListViewEventData, RadListView } from "nativescript-ui-listview";
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
  private _selectedActivityItems: string;
  private _selectedMoodItem: string;

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
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems() as Array<Item>;
    let selectedTitles = "Selected activities: ";
    for (let i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i] ? selectedItems[i].title : "";

        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }

    this._selectedActivityItems = selectedTitles;
    const activityItem = this.activityItems.getItem(args.index);
    activityItem.selected = true;
    console.log("Item selected: ");
    console.log(activityItem);
  }

  public activityItemDeselected(args: ListViewEventData) {
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems() as Array<Item>;
    if (selectedItems.length > 0) {
        let selectedTitles = "Selected activityItems: ";
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].title : "";

            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }

        this._selectedActivityItems = selectedTitles;
    } else {
        this._selectedActivityItems = "No Selected items.";
    }

    const activityItem = this.activityItems.getItem(args.index);
    activityItem.selected = false;
    console.log("Item deselected: ");
    console.log(activityItem);
  }


  // MOOD ITEMIT

  get moodItems(): ObservableArray<Mood> {
    return this.get("_moodItems");
  }

  set moodItems(value: ObservableArray<Mood>) {
    this.set("_moodItems", value);
  }

  public moodItemSelected(args: ListViewEventData) {
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems() as Array<Mood>;
    let selectedTitles = "Selected mood: ";
    for (let i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i] ? selectedItems[i].title : "";

        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }

    this._selectedMoodItem = selectedTitles;

    const moodItem = this.moodItems.getItem(args.index);
    moodItem.selected = true;
    console.log(moodItem);
  }

  public moodItemDeselected(args: ListViewEventData) {
    const moodItem = this.moodItems.getItem(args.index);
    moodItem.selected = false;
  }

  // SELECTED ITEMIT

  get selectedActivityItems(): string {
    return this._selectedActivityItems;
  }

  get selectedMoodItem(): string {
    return this._selectedMoodItem;
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
    console.log(this._selectedActivityItems);
    console.log(this._selectedMoodItem);
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
    this._selectedActivityItems = "No Selected activityItems.";
    this._selectedMoodItem = "No Selected moodItem.";

    this.page.actionBarHidden = true;

    // luodaan uusi formgrouppi johon pusketaan mood.
    this.moodForm = this.formBuilder.group({
      mood: [''],
      freeText: [''],
      activities: ['']
    });
  }

}
