import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ApiServiceService} from '../../shared/api-service.service';

@Component({
  selector: 'app-add-proposition-dialog',
  templateUrl: './add-proposition-dialog.component.html',
  styleUrls: ['./add-proposition-dialog.component.css']
})
export class AddPropositionDialogComponent implements OnInit {
  dangerTypes;
  model: AlertPropositionViewModel = {
    lat: 0,
    lng: 0,
    description: '',
    dangerTypeId: 1
  };

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getDangerTypes();
  }
  setLat(event) {
    this.model.lat = event;
  }
  setLng(event) {
    this.model.lng = event;
  }
  addAlertProposition(): void {
    this.apiService.postAlertProposition(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error while adding alert proposition');
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
}
export interface AlertPropositionViewModel {
  lat: number;
  lng: number;
  description: string;
  dangerTypeId: number;
}
