import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {Alert} from '../models/alert';
import {MatDialog} from '@angular/material/dialog';
import {AddPropositionDialogComponent} from '../user-panel/add-proposition-dialog/add-proposition-dialog.component';
import {AddAlertDialogComponent} from './add-alert-dialog/add-alert-dialog.component';

@Component({
  selector: 'app-manage-panel',
  templateUrl: './manage-panel.component.html',
  styleUrls: ['./manage-panel.component.css']
})
export class ManagePanelComponent implements OnInit {
  alerts;
  suggestions;
  stats;
  barChartData: ChartDataSets[] = [];
  barChartLabels: Label[] = [];
  chartData = [];
  chartLabels = [];
  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAlerts();
    this.getStats();
  }
  public getAlerts(): void {
    this.apiService.getAlerts().subscribe(
      res => {
        console.log(res);
        this.alerts = res;
      },
      error => {
        alert('error has occured alerts');
      }
    );
  }
  public getAlertsSuggestions(): void {
    this.apiService.getAlertSuggestions().subscribe(
      res => {
        this.suggestions = res;
      },
      error => {
        alert('error has occured alert suggestions');
      }
    );
  }
  public getStats(): void {
    this.apiService.getAlertStats().subscribe(
      res => {
        this.stats = res;
        this.stats.forEach((el) => {
          this.chartData.push(el.occurrence);
          this.chartLabels.push(el.dangerType);
        });
        this.barChartData = [
          { data: this.chartData, label: 'Występowanie zagrożeń według typu' }
        ];
        this.barChartLabels = this.chartLabels;
      },
      error => {
        alert('error has occured alert stats');
      }
    );
  }
  addAlert() {
    this.dialog.open(AddAlertDialogComponent);
  }
}
