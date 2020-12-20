import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../shared/api-service.service';

@Component({
  selector: 'app-add-alert-dialog',
  templateUrl: './add-alert-dialog.component.html',
  styleUrls: ['./add-alert-dialog.component.css']
})
export class AddAlertDialogComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
  }
}
