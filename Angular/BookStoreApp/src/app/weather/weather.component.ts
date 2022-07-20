import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
import { Weather} from '../Models/weather'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
weathers:any;
  constructor(private weatherservce:WeatherService) {

   }

  ngOnInit(): void {
  }
  sowWeather(){
    this.weatherservce.getWeatherData().subscribe(data=>
      {
        console.log(data);
        this.weathers=data as Weather[];
      })
  }

}
