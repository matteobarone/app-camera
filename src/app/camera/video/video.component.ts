import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, Renderer2, NgZone } from '@angular/core';
import { fadeInAnimation } from './../../animations';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class VideoComponent implements OnInit, AfterViewInit {

  @ViewChild('video') video: ElementRef;
  navigator: Navigator;
  public videoLoaded: boolean;
  constructor(
    private renderer:Renderer2,
    private zone:NgZone
  ) { }

  ngOnInit() {
    this.videoLoaded = false;
  }

  ngAfterViewInit() {
    navigator.getUserMedia(
      {video: true, audio: false},
      (stream: any) => {
        this.zone.run(() => {
          this.videoLoaded = true;
          setTimeout(() => this.activeVideo(stream));
        })
      },
      (error: any) => console.log(error)
    );
  }

  private activeVideo(stream) {
    const video = this.renderer.selectRootElement('video');
    video.setAttribute('style', `margin-left:${(-video.clientWidth/2) + window.innerWidth}px`);
    video.src = window.URL.createObjectURL(stream);
    video.play();
  }

}
