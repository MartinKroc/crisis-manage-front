import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AlertSuggestion} from '../../models/alertsuggestion';
import {ApiServiceService} from '../../shared/api-service.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-alert-suggestions-list',
  templateUrl: './alert-suggestions-list.component.html',
  styleUrls: ['./alert-suggestions-list.component.css']
})
export class AlertSuggestionsListComponent implements AfterViewInit, OnInit {
  list;
  displayedColumns: string[] = ['alertType', 'date', 'description', 'station'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private apiService: ApiServiceService) {
  }

  ngOnInit(): void {
    this.getAlertsSuggestions();
  }

  ngAfterViewInit(): void {
  }
  public getAlertsSuggestions(): void {
    this.apiService.getAlertSuggestions().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<AlertSuggestion>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        alert('error has occured alert suggestions');
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
