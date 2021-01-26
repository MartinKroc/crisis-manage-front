import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../shared/api-service.service';

@Component({
  selector: 'app-add-alert-dialog',
  templateUrl: './add-alert-dialog.component.html',
  styleUrls: ['./add-alert-dialog.component.css']
})
export class AddAlertDialogComponent implements OnInit {
  towns: string[] = ['Całe Województwo', 'Kielce', 'Skarżysko-Kamienna', 'Ostrowiec-Świętokrzyski', 'Chęciny', 'Jędrzejów', 'Strawczyn', 'Umer', 'Końskie', 'Staszów', 'Łopuszno'];
  dangerTypes;
  waterStations;
  weatherStations;
  selecteDType: string;
  model: AlertViewModel = {
    alertType: '',
    description: '',
    dangerTypeId: 1,
    waterStationId: 1,
    lat: 1,
    lng: 1,
    town: ''
  };

  constructor(private apiService: ApiServiceService) {
  }

  ngOnInit(): void {
    this.getDangerTypes();
    this.getWaterStations();
    this.getWeatherStations();
  }
  setLat(event) {
    this.model.lat = event;
  }
  setLng(event) {
    this.model.lng = event;
  }
  public AddAlert(): void {
    if (this.model.dangerTypeId === 1) { this.model.alertType = 'WATER'; }
    if (this.model.dangerTypeId === 2 || this.model.dangerTypeId === 3 || this.model.dangerTypeId === 5) { this.model.alertType = 'WEATHER'; }
    if (this.model.dangerTypeId === 4 || this.model.dangerTypeId === 6) { this.model.alertType = 'OTHER'; }
    console.log(this.model);
    this.apiService.postAlert(this.model).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => {
        alert('błąd');
      }
    );
  }
  public getDangerTypes(): void {
    this.apiService.getDangerTypes().subscribe(
      res => {
        this.dangerTypes = res;
        console.log(res);
      },
      error => {
        alert('error has occured danger types');
      }
    );
  }
  public getWaterStations(): void {
    this.apiService.getWaterStations().subscribe(
      res => {
        this.waterStations = res;
        console.log(res);
      },
      error => {
        alert('error has occured water stations');
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
        alert('error has occured weather stations');
      }
    );
  }
}
export interface AlertViewModel {
  alertType: string;
  description: string;
  dangerTypeId: number;
  waterStationId: number;
  lat: number;
  lng: number;
  town: string;
}
