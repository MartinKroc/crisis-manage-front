import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {MatDialog} from '@angular/material/dialog';
import {AddPropositionDialogComponent} from './add-proposition-dialog/add-proposition-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {AlertProposition} from '../models/alertproposition';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-prepositions',
  templateUrl: './prepositions.component.html',
  styleUrls: ['./prepositions.component.css']
})
export class PrepositionsComponent implements OnInit {
  public dataSource: any;
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
        this.dataSource = new MatTableDataSource<AlertProposition>(res);
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
