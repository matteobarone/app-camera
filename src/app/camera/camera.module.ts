import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { VideoComponent } from './video/video.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VideoComponent
  ],
  declarations: [VideoComponent, ListComponent]
})
export class CameraModule { }
