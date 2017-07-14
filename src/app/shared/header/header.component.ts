import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isListOpen: boolean;
  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    console.log(this.location.path());
    this.isListOpen = this.location.path() == '' ? false : true;
  }

  openList() {
    if (!this.isListOpen) {
      this.isListOpen = true;
      this.router.navigate(['/list']);
    }else{
      this.isListOpen = false;
      this.router.navigate(['/']);
    }
  }

}
