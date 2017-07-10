import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CameraModule } from './camera/camera.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CameraModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
