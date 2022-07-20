import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService{
    constructor(private httpClient:HttpClient){
        
    }
    getWeatherData(){
        return this.httpClient.get("http://localhost:5148/WeatherForecast");
    }
   
}