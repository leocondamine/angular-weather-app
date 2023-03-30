import { Component, OnInit } from '@angular/core';
import {
  faMoon,
  faSun,
  faCloud,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css'],
})
export class WeatherWidgetMainComponent implements OnInit {
  sunIcon = faSun;
  moonIcon = faMoon;
  cloudIcon = faCloud;
  loadingIcon = faCircleNotch;

  WeatherData: any;
  isLoading = true;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.getWeatherData();
      this.isLoading = false;
    }, 1200);
    console.log(this.WeatherData);
  }

  getWeatherData() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=grenoble&appid=15d862d9cbe0fe159e91d73c3bc8027c'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    this.setTimeData();
    this.setTempData();
  }

  setTimeData(): void {
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
  }

  setTempData(): void {
    this.WeatherData.temp = this.getTempCelcius(this.WeatherData.main.temp);
    this.WeatherData.temp_min = this.getTempCelcius(
      this.WeatherData.main.temp_min
    );
    this.WeatherData.temp_max = this.getTempCelcius(
      this.WeatherData.main.temp_max
    );
    this.WeatherData.temp_feels_like = this.getTempCelcius(
      this.WeatherData.main.feels_like
    );
    this.WeatherData.humidity = this.WeatherData.main.humidity;
  }

  getTempCelcius(tempKelvin: number) {
    return (tempKelvin - 273.15).toFixed(0);
  }
}
