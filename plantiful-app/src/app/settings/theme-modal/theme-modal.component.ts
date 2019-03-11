import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
  selector: 'ns-theme-modal',
  templateUrl: './theme-modal.component.html',
  styleUrls: ['./theme-modal.component.css'],
  moduleId: module.id,
})
export class ThemeModalComponent {

  constructor(private params: ModalDialogParams) { }

  public close() {
    this.params.closeCallback();
  }

}
