import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {WaterStation} from '../models/waterstation';
import {WeatherStation} from '../models/weatherstation';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  lat = 50.863793;
  lng = 20.620789;
  stations: WaterStation[] = [];
  weatherStations: WeatherStation[] = [];
  url = 'https://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getStations();
    this.getWeatherStations();
  }
  public getStations(): void {
    this.apiService.getWaterStations().subscribe(
      res => {
        this.stations = res;
        console.log(res);
      },
      error => {
        alert('error has occured');
      }
    );
  }
  public getWeatherStations(): void {
    this.apiService.getWeatherStations().subscribe(
      res => {
        this.weatherStations = res;
        console.log(res);
      },
      error => {
        alert('error has occured');
      }
    );
  }
  public showDetails(cord): void {
    console.log(cord);
  }
}
