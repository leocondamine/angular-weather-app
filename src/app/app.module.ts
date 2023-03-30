import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';

@NgModule({
  declarations: [AppComponent, WeatherWidgetMainComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
