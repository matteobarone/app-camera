import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CameraModule } from './camera/camera.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ListComponent } from './camera/list/list.component';
import { VideoComponent } from './camera/video/video.component';

const appRoutes: Routes = [
  { path: '', component: VideoComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CameraModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
