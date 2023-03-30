import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WheatherWidgetMainComponent } from './Components/wheather-widget-main/wheather-widget-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WheatherWidgetMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
