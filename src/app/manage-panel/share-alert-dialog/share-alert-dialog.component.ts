import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {SendAlertViewModel} from '../alert-list/alert-list.component';
import {ApiServiceService} from '../../shared/api-service.service';
import {ErrorDialogComponent} from '../../error-dialog/error-dialog.component';

@Component({
  selector: 'app-share-alert-dialog',
  templateUrl: './share-alert-dialog.component.html',
  styleUrls: ['./share-alert-dialog.component.css']
})
export class ShareAlertDialogComponent implements OnInit {

  selectedType: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {alert: SendAlertViewModel},
              private apiService: ApiServiceService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public sendAlertByEmailSms(): void {
    console.log(this.data);
    if (this.selectedType === 'email') {
      this.apiService.sendAlertByMail(this.data.alert).subscribe(
        res => {
          console.log(res);
        },
        error => {
          this.dialog.open(ErrorDialogComponent, {
            data: {alert: 'Wysłano powiadomienia E-mail'}
          });
        }
      );
    }
    else {
      this.apiService.sendAlertBySms(this.data.alert).subscribe(
        res => {
          this.dialog.open(ErrorDialogComponent, {
            data: {alert: 'Wysłano powiadomienia SMS'}
          });
        },
        error => {
          this.dialog.open(ErrorDialogComponent, {
            data: {alert: 'Wysłano powiadomienia SMS'}
          });
        }
      );
    }
  }
}
