import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent } from './video/video.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VideoComponent
  ],
  declarations: [VideoComponent, ListComponent]
})
export class CameraModule { }
