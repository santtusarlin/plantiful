import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

import { Item, ActivityService } from './activity/activity.service';
import { Mood, MoodService } from './mood/mood.service';

import { ItemViewState } from '../model/itemviewstate';
import { getViewState } from '../../view-state-utils';

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

  //public dataItems = ['Cooking', 'Sports', 'Sleeping', 'Video games', 'Overclocking', 'Programming', 'Cleaning', 'Shopping'];

  items: Item[];
  moods: Mood[];

  public moodForm: FormGroup;
  public mood: number;
  public currentConfig: any;

  constructor(private page: Page, private formBuilder: FormBuilder, private activityService: ActivityService, private moodService: MoodService) {


    this.items = activityService.getItems();
    this.moods = moodService.getMoods();

   
  }

  // Otetaan moodForm-oliosta talteen controllerit, jotta niitä voidaan käyttää myöhemmin paljon siistimmin.
  get f() { return this.moodForm.controls; }

  onItemTap(args) {
    console.log("args.index: " + args.index);
    console.log("args.view: " + args.view);
    console.log("args.object: " + args.object);
  }

  logItem() {
    console.log("click");
  }

  // palauttaa selected itemit.
  // checkout() {
  //   const result = this.items
  //     .filter(item => {
  //       const vs = getViewState<ItemViewState>(item);
  //       return vs && vs.selected;
  //     })
  //     .map(item => item.name)
  //     .join("\n");
  //   alert("Selected items:\n" + result);
  //   console.log(result);
  // }

  /* 
    logaa valitun moodin. Aktiviteetin data kerätään result-muuttujaan getViewState-funktiota
    hyödyntäen.
  */
  submitLog() {
    const result = this.items.filter(item => {
      const vs = getViewState<ItemViewState>(item);
      return vs && vs.selected;
    })

     const moodResult = this.moods.filter(item => {
      const vs = getViewState<ItemViewState>(item);
      return vs && vs.selected;
    })
    
    let config = {
      mood: moodResult,
      freeText: this.f.freeText.value,
      activities: result

    }

    this.currentConfig = config;
    console.log('Button Works');
    // currentConfig => mood olio
    console.log(this.currentConfig);

    dialogs.alert({
      title: "Success!",
      message: `Here is your entry:\nMood koodi:${this.currentConfig.mood.map(data => "\n" + data.title)}\nKirjoitettu tekstisi: ${this.currentConfig.freeText}
      \nAktiviteettisi: ${this.currentConfig.activities.map(data => "\n" + data.title)}`,
      okButtonText: "OK"
    });
  }


  ngOnInit() {
    this.page.actionBarHidden = true;

    // luodaan uusi formgrouppi johon pusketaan mood.
    this.moodForm = this.formBuilder.group({
      mood: [''],
      freeText: [''],
      activities: ['']
    });
  }

}
