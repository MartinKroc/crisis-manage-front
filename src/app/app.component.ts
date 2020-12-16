import { Component } from '@angular/core';
import {ApiServiceService} from './shared/api-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crisis-front';
  showFiller = true;
  constructor(
    public apiService: ApiServiceService) { }
}
