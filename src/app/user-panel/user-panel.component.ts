import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {MatDialog} from '@angular/material/dialog';
import {AddPropositionDialogComponent} from '../prepositions/add-proposition-dialog/add-proposition-dialog.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  public alertsList = <any>{};
  panelOpenState = true;
  lat = 50.863793;
  lng = 20.620789;
  constructor(private apiService: ApiServiceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAlerts();
  }
  public getAlerts(): void {
    this.apiService.getAlerts().subscribe(
      res => {
        this.alertsList = res;
        console.log(res);
      },
      error => {
        alert('error has occured alerts');
      }
    );
  }
}
