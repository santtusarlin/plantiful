import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

import { Item, ActivityService } from './activity/activity.service';
import { Mood, MoodService } from './mood/mood.service';

import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as dialogs from "tns-core-modules/ui/dialogs";

import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
const firebase = require("nativescript-plugin-firebase/app");


@Component({
  selector: 'ns-mood-entry',
  templateUrl: './mood-entry.component.html',
  styleUrls: ['./mood-entry.component.css'],
  moduleId: module.id
})

export class MoodEntryComponent extends Observable implements OnInit {

  public moodForm: FormGroup;
  public currentConfig: any;

  private _activityItems: ObservableArray<Item>
  private _moodItems: ObservableArray<Mood>
  private _selectedActivityItems: Array<string>;
  private _selectedMoodItem: number;

  constructor(private page: Page, private formBuilder: FormBuilder, private activityService: ActivityService, private moodService: MoodService) {
    super();
  }

  // MOOD ITEMIT

  get moodItems(): ObservableArray<Mood> {
    return this.get("_moodItems");
  }

  set moodItems(value: ObservableArray<Mood>) {
    this.set("_moodItems", value);
  }

  // listView muuttujaan otetaan RadListView-komponentti eli ListViewEventData.object
  // getSelectedItems()-metodi palauttaa ObservableArrayn joka sisältää RadListViewin selected itemit
  // selectedItemit pusketaan moodTitle muuttujaan

  public moodItemSelected(args: ListViewEventData) {
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems() as Array<Mood>;
    let moodTitle;
    for (let i = 0; i < selectedItems.length; i++) {
      moodTitle = selectedItems[i].title
    }
    this._selectedMoodItem = moodTitle;

    const moodItem = this.moodItems.getItem(args.index);
    moodItem.selected = true;
    console.log(moodItem);
  }

  public moodItemDeselected(args: ListViewEventData) {
    const moodItem = this.moodItems.getItem(args.index);
    moodItem.selected = false;
  }

  get selectedMoodItem(): number {
    return this._selectedMoodItem;
  }

  // ACTIVITY ITEMIT

  get activityItems(): ObservableArray<Item> {
    return this.get("_activityItems");
  }

  set activityItems(value: ObservableArray<Item>) {
    this.set("_activityItems", value);
  }

  get selectedActivityItems(): Array<string> {
    return this._selectedActivityItems;
  }

  // listView muuttujaan otetaan RadListView-komponentti eli ListViewEventData.object
  // getSelectedItems()-metodi palauttaa ObservableArrayn joka sisältää RadListViewin selected itemit
  // selectedItemit pusketaan activityArray taulukkoon

  public activityItemSelected(args: ListViewEventData) {
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems() as Array<Item>;
    let activityArray = []
    for (let i = 0; i < selectedItems.length; i++) {
      activityArray.push(selectedItems[i])
    }
    this._selectedActivityItems = activityArray;
    const activityItem = this.activityItems.getItem(args.index);
    activityItem.selected = true;
    console.log("Item selected: ");
    console.log(activityItem);
  }

  public activityItemDeselected(args: ListViewEventData) {
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems() as Array<Item>;
    let activityArray = []
    if (selectedItems.length > 0) {
      for (let i = 0; i < selectedItems.length; i++) {
        activityArray.push(selectedItems[i])
      }
      this._selectedActivityItems = activityArray;
    }

    const activityItem = this.activityItems.getItem(args.index);
    activityItem.selected = false;
    console.log("Item deselected: ");
    console.log(activityItem);
  }

  // logaa valitun moodin. Aktiviteetin ja moodin data kerätään 
  // result- ja moodResult-muuttujiinn getViewState-funktiota hyödyntäen.
  submitLog() {
    let entryDate = new Date();
    let config = {
      mood: this._selectedMoodItem,
      freeText: this.moodForm.controls.freeText.value,
      activities: this._selectedActivityItems,
      imageURL: this.getURL(this._selectedMoodItem),
      date: entryDate
    }

    this.currentConfig = config;
    // currentConfig => mood olio
    console.log(this.currentConfig);

    const collection = firebase.firestore().collection("users");
    collection.add({
      mood: this._selectedMoodItem,
      freeText: this.moodForm.controls.freeText.value,
      activities: this._selectedActivityItems,
      imageURL: this.getURL(this._selectedMoodItem),
      date: entryDate
    }).then(ref => {
      dialogs.alert({
        title: "Kirjaus onnistui!",
        message: `Laitettu tämmönen tietokantaan: \n ${ref.id}`,
        okButtonText: "OK"
      });
    });
  }

  ngOnInit() {
    this._activityItems = new ObservableArray(this.activityService.getItems());
    this._moodItems = new ObservableArray(this.moodService.getMoods());

    //this.page.actionBarHidden = true;

    // luodaan uusi formgrouppi johon pusketaan mood.
    this.moodForm = this.formBuilder.group({
      mood: [''],
      freeText: [''],
      activities: ['']
    });
  }

  

//audioElement.setAttribute('src', textArray[randomNumber]);

  // Valitsee lähetettävälle kirjaukselle referenssin kasvinosaan, käyttäen parametrina tuotua moodin arvoa
  getURL(m: number): string {
  let moodArray1 = [
      'Flower1.png',
      'Flower2.png',
  ];
  let moodArray2= [
    'Flower3.png',
    'Flower4.png',
  ];
  let moodArray3= [
    'Flower5.png',
    'Flower6.png',
  ];
  let moodArray4= [
    'Flower7.png',
    'Flower8.png',
  ];
  let moodArray5= [
    'Flower9.png',
    'Flower10.png'
  ];

  let randomNumber1 = Math.floor(Math.random()*moodArray1.length);
  let randomNumber2 = Math.floor(Math.random()*moodArray2.length);
  let randomNumber3 = Math.floor(Math.random()*moodArray3.length);
  let randomNumber4 = Math.floor(Math.random()*moodArray4.length);
  let randomNumber5 = Math.floor(Math.random()*moodArray5.length);

    let url = "";
    switch (m) {
      case 1:
        url = moodArray1[randomNumber1];
        break;
      case 2:
        url = moodArray2[randomNumber2];
        break;
      case 3:
        url = moodArray3[randomNumber3];
        break;
      case 4:
        url = moodArray4[randomNumber4];
        break;
      case 5:
        url = moodArray5[randomNumber5];
        break;
    }
    return url;
  }

}
