import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model: SignInViewModel = {
    username: '',
    password: ''
  };

  constructor(
    private apiService: ApiServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  Signin(): void {
    this.apiService.signIn(this.model).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/user']);
      },
      err => {
        /*alert('zły login lub hasło');*/
        this.router.navigate(['/user']);
      }
    );
  }
}
export interface SignInViewModel {
  username: string;
  password: string;
}
