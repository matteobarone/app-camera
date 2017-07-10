import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VideoComponent
  ],
  declarations: [VideoComponent]
})
export class CameraModule { }
