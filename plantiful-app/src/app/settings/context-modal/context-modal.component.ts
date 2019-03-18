import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: 'ns-context-modal',
  templateUrl: './context-modal.component.html',
  styleUrls: ['./context-modal.component.css'],
  moduleId: module.id,
})
export class ContextModalComponent {

  hello: string;

  constructor(private params: ModalDialogParams) {
    this.hello = params.context.viesti
  }

  public close(response: string) {
    this.params.closeCallback(response);
  }

}
