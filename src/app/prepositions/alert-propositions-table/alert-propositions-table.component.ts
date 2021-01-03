import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApiServiceService} from '../../shared/api-service.service';
import {AddPropositionDialogComponent} from '../add-proposition-dialog/add-proposition-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AlertSuggestion} from '../../models/alertsuggestion';
import {AlertProposition} from '../../models/alertproposition';

@Component({
  selector: 'app-alert-propositions-table',
  templateUrl: './alert-propositions-table.component.html',
  styleUrls: ['./alert-propositions-table.component.css']
})
export class AlertPropositionsTableComponent implements OnInit, AfterViewInit {
  public dataSource: any;
  displayedColumns: string[] = ['dangerTypeName', 'opis', 'accepted', 'points', 'akceptuj', 'dodaj'];
  role = localStorage.getItem('role');
  @ViewChild(MatSort) sort: MatSort;
  constructor(public apiService: ApiServiceService, public dialog: MatDialog) {
    this.getAlertPropositions();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {

  }
  public getAlertPropositions(): void {
    this.apiService.getAlertPropositions().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<AlertProposition>(res);
        this.dataSource.sort = this.sort;
      },
      error => {
        alert('error has occured alert propositions');
      }
    );
  }
  public addPoint(id) {
    this.apiService.addPointToAlertProposition(id).subscribe(
      res => {
        location.reload();
      },
      error => {
        alert('error has occured add point');
      }
    );
  }
  public acceptProposition(id) {
    this.apiService.acceptAlertProposition(id).subscribe(
      res => {
        location.reload();
      },
      error => {
        alert('error has occured accept proposition');
      }
    );
  }
  public addProposition(): void {
    this.dialog.open(AddPropositionDialogComponent);
  }
}
