import {Component, Input, OnInit} from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';

@Component({
  selector: 'app-alert-propositions-table',
  templateUrl: './alert-propositions-table.component.html',
  styleUrls: ['./alert-propositions-table.component.css']
})
export class AlertPropositionsTableComponent implements OnInit {
  @Input() alerts;
  displayedColumns: string[] = ['id', 'nazwa', 'opis', 'weryfikacja', 'punkty', 'dajpunkt', 'akceptuj'];
  constructor(public apiService: ApiServiceService) { }

  ngOnInit(): void {
  }
  public addPoint(id) {
    this.apiService.addPointToAlertProposition(id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        alert('error has occured add point');
      }
    );
  }
  public acceptProposition(id) {
    this.apiService.acceptAlertProposition(id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        alert('error has occured accept proposition');
      }
    );
  }
}
