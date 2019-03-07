import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ContextModalComponent } from "./context-modal/context-modal.component";
import { ClockModalComponent } from './clock-modal/clock-modal.component';
import { ThemeModalComponent } from './theme-modal/theme-modal.component';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  moduleId: module.id,
})
export class SettingsComponent implements OnInit {

  constructor(private page: Page, private modal: ModalDialogService, private vcRef: ViewContainerRef) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  showToS() {
    let options: ModalDialogOptions = {
      context: {
        viesti: "Tämä on ToS-modali!"
      },
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(ContextModalComponent, options)
  }

  showAbout() {
    let options: ModalDialogOptions = {
      context: {
        viesti: "Tämä on About-modali!"
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
}
