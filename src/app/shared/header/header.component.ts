import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isListOpen: boolean;

  constructor() {}

  ngOnInit() {
    this.isListOpen = false;
  }

  openList() {
    if (!this.isListOpen) {
      this.isListOpen = true;
    }else{
      this.isListOpen = false;
    }
  }

}
