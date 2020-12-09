import { Component, OnInit } from '@angular/core';
import {WaterStation} from '../models/waterstation';
import {ApiServiceService} from '../shared/api-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  lat = 50.863793;
  lng = 20.620789;
  lat2 = 53.678418;
  lng2 = 8.809007;
  stations: WaterStation[] = [];
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getStations();
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
  public showDetails(cord): void {
    console.log(cord);
  }
}
