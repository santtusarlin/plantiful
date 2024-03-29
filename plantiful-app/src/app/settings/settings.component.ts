import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { ContextModalComponent } from "./context-modal/context-modal.component";
import { ClockModalComponent } from './clock-modal/clock-modal.component';
import { ThemeModalComponent } from './theme-modal/theme-modal.component';
import { ToS } from './ToS';
import { About } from './About';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  moduleId: module.id,
})
export class SettingsComponent implements OnInit {

  
  constructor(private tos: ToS, private about: About, private page: Page, private modal: ModalDialogService, private vcRef: ViewContainerRef) { }

  ngOnInit() {
  }

  showToS() {
    let options: ModalDialogOptions = {
      context: {
        viesti: this.tos.getMessage()
      },
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(ContextModalComponent, options)
  }

  showAbout() {
    let options: ModalDialogOptions = {
      context: {
        viesti: this.about.getMessage()
      },
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(ContextModalComponent, options)
  }

  showClock() {
    let options: ModalDialogOptions = {
      context: { },
      fullscreen: true,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(ClockModalComponent, options)
  }

  showTheme() {
    let options: ModalDialogOptions = {
      context: { },
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(ThemeModalComponent, options)
  }

  notWorking() {
    dialogs.alert({
      title: "Button is NOT functional!",
      message: "The functionality for notifications is NOT implemented yet!",
      okButtonText: "Return"
    });
  }
}
