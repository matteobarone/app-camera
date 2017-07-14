import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { fadeInAnimation } from './../../animations';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class VideoComponent implements OnInit, AfterViewInit {

  @ViewChild('video') video: any;
  navigator: Navigator;
  private videoMarginLeft: number;
  constructor() { }

  ngOnInit() {
    this.videoMarginLeft = this.getVideoMarginLeft();
  }

  ngAfterViewInit() {
    navigator.getUserMedia(
      {video: true, audio: false},
      (stream: any) => this.activeVideo(stream),
      (error: any) => console.log(error)
    );
  }

  activeVideo(stream) {
    const vendorURL = window.URL;
    this.video.nativeElement.src = vendorURL.createObjectURL(stream);
    this.video.nativeElement.play();
  }

  getVideoMarginLeft() {
    return (-this.video.nativeElement.clientWidth/2) + window.innerWidth;
  }

}
