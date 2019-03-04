import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ModalComponent } from "./modal/modal.component";

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

  showModal() {
    let options = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(ModalComponent, options)
  }

}
