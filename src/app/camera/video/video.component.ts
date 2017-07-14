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
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('img') img: ElementRef;
  navigator: Navigator;
  public videoLoaded: boolean;
  public photoTaken: boolean;
  constructor(
    private renderer:Renderer2,
    private zone:NgZone
  ) { }

  ngOnInit() {
    this.videoLoaded = false;
    this.photoTaken = false;
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

  public takePhoto() {
    this.zone.run(() => {
      this.photoTaken = true;
      setTimeout(() => this.buildImage());
    })

  }

  private buildImage() {
    debugger;
    const canvas = this.renderer.selectRootElement('canvas');
    debugger;
    const video = this.renderer.selectRootElement('video');
    debugger;
    const img = this.renderer.selectRootElement('img');
    const context = canvas.getContext('2d');

    canvas.width = 414;
    canvas.height = 736;

    const newHeight = 736*3/2;

    console.log(context);

    context.drawImage(video,
      200, 0,       // Start at 322 pixels from the left of the image (crop),
      936, 736,  // "Get" a `414 * 736` (w * h) area from the source image (crop),
      0, 0,      // Place the result at 0, 0 in the canvas,
      936*1.5, 736*1.5,  // With as width / height: 414 * 736
    )

    context.scale(1.5, 1.5);

    const data = canvas.toDataURL('image/png');
    img.setAttribute('src', data);
  }

}
