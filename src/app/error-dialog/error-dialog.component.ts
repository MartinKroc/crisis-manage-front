import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SendAlertViewModel} from '../manage-panel/alert-list/alert-list.component';
import {ApiServiceService} from '../shared/api-service.service';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {alert: string}) { }

  ngOnInit(): void {
  }

}
