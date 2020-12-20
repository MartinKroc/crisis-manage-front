import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  @Input() alerts;
  displayedColumns: string[] = ['active', 'dangerDescription', 'dangerScale', 'publishDate', 'description'];
  constructor() { }

  ngOnInit(): void {
  }

}
