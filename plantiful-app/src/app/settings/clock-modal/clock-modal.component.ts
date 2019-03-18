import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: 'ns-clock-modal',
  templateUrl: './clock-modal.component.html',
  styleUrls: ['./clock-modal.component.css'],
  moduleId: module.id,
})
export class ClockModalComponent {

  constructor(private params: ModalDialogParams) {
  }

  public close(response: string) {
    this.params.closeCallback(response);
  }
}
