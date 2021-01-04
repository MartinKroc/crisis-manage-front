import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiServiceService} from '../shared/api-service.service';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  station;
  measures;
  chartData = [];
  chartLabels = [];

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];

  constructor(
    private route: ActivatedRoute, private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getStation(params.get('stationId'));
      this.getStationMeasures(params.get('stationId'));
    });
  }
  public getStation(id): void {
    let numb = Number(id);
    numb+=1;
    this.apiService.getWaterStationById(numb).subscribe(
      res => {
        this.station = res;
      },
      error => {
        alert('error has occured show station');
      }
    );
  }
  public getStationMeasures(id): void {
    let numb = Number(id);
    numb+=1;
    this.apiService.getWaterMeasuresByStationId(numb).subscribe(
      res => {
        this.measures = res;
        this.measures.forEach((el) => {
          const temp3 = new Date(Date.parse(el.date));
          const temp = el.date.slice(0, 10);
          let hh: string = temp3.getHours().toString();
          let mm: string = temp3.getMinutes().toString();
          if (temp3.getHours() < 10) {
            hh = '0' + temp3.getHours().toString();
          }
          if (temp3.getMinutes() < 10) {
            mm = '0' + temp3.getMinutes().toString();
          }
          const temp2 = `${temp}, ${hh}:${mm}`;
          this.chartData.push(el.waterLevel);
          this.chartLabels.push(temp2);
        });
        this.lineChartData = [
          { data: this.chartData, label: 'Poziom wody (mm)' }
        ];
        this.lineChartLabels = this.chartLabels;
      },
      error => {
        alert('error has occured show measures');
      }
    );
  }
}
