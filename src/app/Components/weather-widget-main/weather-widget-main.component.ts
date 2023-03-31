import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  faMoon,
  faSun,
  faCloud,
  faCloudShowersHeavy,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css'],
})
export class WeatherWidgetMainComponent implements OnInit, OnChanges {
  sunIcon = faSun;
  moonIcon = faMoon;
  cloudIcon = faCloud;
  rainIcon = faCloudShowersHeavy;
  snowIcon = faSnowflake;

  WeatherData: any;
  isLoading = true;
  isFound = true;

  @Input() city: string = 'grenoble';

  constructor() {}

  ngOnInit() {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['city'] && !changes['city'].firstChange) {
      this.getWeatherData();
    }
  }

  getWeatherData() {
    this.isLoading = true;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=15d862d9cbe0fe159e91d73c3bc8027c`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
        this.isFound = true;
      })
      .catch(() => (this.isFound = false));
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    this.setTimeData();
    this.setTempData();
  }

  setTimeData(): void {
    let timestamp = this.WeatherData.dt;
    let sunrise = this.WeatherData.sys.sunrise;
    let sunset = this.WeatherData.sys.sunset;
    this.WeatherData.isDay = sunrise < timestamp && timestamp < sunset;
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
    this.setDescription();
  }

  getTempCelcius(tempKelvin: number) {
    return (tempKelvin - 273.15).toFixed(0);
  }

  isClear = false;
  isCloud = false;
  isRain = false;
  isSnow = false;

  setDescription() {
    this.resetDescription();
    this.WeatherData.description = this.WeatherData.weather[0].description;
    console.log(this.WeatherData.description);
    if (this.WeatherData.description.includes('cloud')) {
      this.isCloud = true;
    } else if (this.WeatherData.description.includes('rain')) {
      this.isRain = true;
    } else if (this.WeatherData.description.includes('snow')) {
      this.isSnow = true;
    }
  }

  resetDescription() {
    this.isClear = false;
    this.isCloud = false;
    this.isRain = false;
    this.isSnow = false;
  }
}
