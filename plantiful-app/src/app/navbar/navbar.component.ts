import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';


@Component({
  selector: 'ns-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  moduleId: module.id,
})
export class NavbarComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
