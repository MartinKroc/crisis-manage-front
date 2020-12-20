import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: SignupViewModel = {
    username: '',
    password: '',
    phone: '',
    email: ''
  };

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  Signup(): void {
    console.log(this.model);
    this.apiService.signUp(this.model).subscribe(
      res => {
        this.router.navigate(['/']);
      },
      err => {
        this.router.navigate(['']);
      }
    );
  }
  signed(): void {
    console.log(this.model);
  }
}
export interface SignupViewModel {
  username: string;
  password: string;
  phone: string;
  email: string;
}
