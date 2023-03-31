import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { SearchInputComponent } from './Components/search-input/search-input.component';

@NgModule({
  declarations: [AppComponent, WeatherWidgetMainComponent, SearchInputComponent],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
