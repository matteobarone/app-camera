import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isListOpen: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isListOpen = false;
    console.log(this.router);
    console.log(this.activatedRoute);
    this.activatedRoute.url.subscribe((response) => console.log(response) )
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
