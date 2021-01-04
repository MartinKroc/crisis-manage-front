import { Component, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {ActivatedRoute} from '@angular/router';
import {ApiServiceService} from '../shared/api-service.service';

@Component({
  selector: 'app-weather-station-details',
  templateUrl: './weather-station-details.component.html',
  styleUrls: ['./weather-station-details.component.css']
})
export class WeatherStationDetailsComponent implements OnInit {

  station;
  measures;
  chartDataTemp = [];
  chartDataPressure = [];
  chartDataHumidity = [];
  chartDataSmog = [];
  chartLabels = [];

  lineChartDataTemp: ChartDataSets[] = [];
  lineChartDataPressure: ChartDataSets[] = [];
  lineChartDataHumidity: ChartDataSets[] = [];
  lineChartDataSmog: ChartDataSets[] = [];

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
    this.apiService.getWeatherStationById(numb).subscribe(
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
    this.apiService.getWeatherMeasuresByStationId(numb).subscribe(
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
          this.chartDataTemp.push(el.temp);
          this.chartDataPressure.push(el.pressure);
          this.chartDataSmog.push(el.smogLevel);
          this.chartDataHumidity.push(el.humidity);
          this.chartLabels.push(temp2);
        });
        this.lineChartDataTemp = [
          { data: this.chartDataTemp, label: 'Temperatura (C)' }
        ];
        this.lineChartDataPressure = [
          { data: this.chartDataPressure, label: 'Ciśnienie (hPa)' }
        ];
        this.lineChartDataSmog = [
          { data: this.chartDataSmog, label: 'Poziom smogu' }
        ];
        this.lineChartDataHumidity = [
          { data: this.chartDataHumidity, label: 'Wilgotność (%)' }
        ];
        this.lineChartLabels = this.chartLabels;
      },
      error => {
        alert('error has occured show measures');
      }
    );
  }
}
