import {Component} from '@angular/core';
import {ApiServiceService} from './shared/api-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from './models/usermodel';
import {Role} from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crisis-front';
  showFiller = true;
  role = localStorage.getItem('role');
  user: UserModel;
  constructor(
    public apiService: ApiServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.apiService.user.subscribe(x => this.user = x);
  }
  get isEmployee() {
    return this.user && this.user.role === Role.Employee;
  }
}
