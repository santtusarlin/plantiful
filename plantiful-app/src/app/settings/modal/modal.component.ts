import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: 'ns-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  moduleId: module.id,
})
export class ModalComponent {

  hello: string;

  constructor(private params: ModalDialogParams) {
    this.hello = params.context.viesti
  }

  public close(response: string) {
    this.params.closeCallback(response);
  }

}
