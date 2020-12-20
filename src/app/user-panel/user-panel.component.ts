import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {MatDialog} from '@angular/material/dialog';
import {AddPropositionDialogComponent} from './add-proposition-dialog/add-proposition-dialog.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  alertPropositions;
  lat = 50.863793;
  lng = 20.620789;
  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAlertPropositions();
  }

  public addProposition(): void {
    this.dialog.open(AddPropositionDialogComponent);
  }

  public getAlertPropositions(): void {
    this.apiService.getAlertPropositions().subscribe(
      res => {
        this.alertPropositions = res;
        console.log(res);
      },
      error => {
        alert('error has occured alert propositions');
      }
    );
  }
  public showDetails(cord): void {
    console.log(cord);
  }
}
