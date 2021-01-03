import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApiServiceService} from '../../shared/api-service.service';
import {MatDialog} from '@angular/material/dialog';
import {ShareAlertDialogComponent} from '../share-alert-dialog/share-alert-dialog.component';
import {AddAlertDialogComponent} from '../add-alert-dialog/add-alert-dialog.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  model: SendAlertViewModel = {
    alertType: '',
    alertId: 1
  };
  @Input() alerts;
  dataSource;
  displayedColumns: string[] = ['active', 'dangerDescription', 'dangerScale', 'publishDate', 'description', 'send'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private apiService: ApiServiceService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }
  public openDialog(type, id): void {
    this.model.alertType = type;
    this.model.alertId = id;
    this.dialog.open(ShareAlertDialogComponent, {
      data: {alert: this.model}
    });
  }
  public changeAlertStatus(type, id): void {
    this.apiService.changeAlertStatus(type, id).subscribe(
      res => {
        location.reload();
      },
      error => {
        location.reload();
      }
    );
  }
  addAlert() {
    this.dialog.open(AddAlertDialogComponent);
  }
}
export interface SendAlertViewModel {
  alertType: string;
  alertId: number;
}
