import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {Router} from '@angular/router';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

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
  usernameError = false;
  emailError = false;
  phoneError = false;
  passwordError = false;
  constructor(private apiService: ApiServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    this.usernameError = false;
    this.passwordError = false;
    this.phoneError = false;
    this.emailError = false;
    if (this.model.username === '') {
      this.usernameError = true;
    }
    else if (this.model.password === '') {
      this.passwordError = true;
    }
    else if (this.model.phone === '') {
      this.phoneError = true;
    }
    else if (this.model.email === '') {
      this.emailError = true;
    }
    else {
      this.Signup();
    }
  }

  Signup(): void {
    this.apiService.signUp(this.model).subscribe(
      res => {
        this.router.navigate(['/']);
      },
      err => {
        this.router.navigate(['/']);
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
