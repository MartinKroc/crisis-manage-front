import { Component } from '@angular/core';
import {ApiServiceService} from './shared/api-service.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crisis-front';
  showFiller = true;
  role = localStorage.getItem('role');
  mySubscription;
  constructor(
    public apiService: ApiServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
/*    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });*/
  }
}
