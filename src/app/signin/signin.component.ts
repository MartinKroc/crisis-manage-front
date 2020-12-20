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
  loginErrorUsername = false;
  loginErrorPassword = false;

  constructor(
    private apiService: ApiServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.apiService.showmenu = false;
  }
  validateForm(): void {
    if (this.model.username === '') {
      this.loginErrorUsername = true;
    }
    else if (this.model.password === '') {
      this.loginErrorPassword = true;
    }
    else {
      this.Signin();
    }
  }

  Signin(): void {
    this.apiService.signIn(this.model).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.apiService.showmenu = true;
        this.router.navigate(['/user']);
      },
      err => {
        alert('zły login lub hasło');
      }
    );
  };
}
export interface SignInViewModel {
  username: string;
  password: string;
}
