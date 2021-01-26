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
  towns: string[] = ['Całe Województwo', 'Kielce', 'Skarżysko-Kamienna', 'Ostrowiec-Świętokrzyski', 'Chęciny', 'Jędrzejów', 'Strawczyn', 'Umer', 'Końskie', 'Staszów', 'Łopuszno'];
  model: SignupViewModel = {
    username: '',
    password: '',
    phone: '',
    town: '',
    email: '',
    isEmployee: false
  };
  usernameError = false;
  emailError = false;
  phoneError = false;
  passwordError = false;
  townError = false;
  constructor(private apiService: ApiServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    console.log(this.model);
    this.usernameError = false;
    this.passwordError = false;
    this.phoneError = false;
    this.emailError = false;
    this.townError = false;
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
    else if (this.model.town === '') {
      this.townError = true;
    }
    else {
      this.Signup();
    }
  }

  Signup(): void {
    this.apiService.signUp(this.model).subscribe(
      res => {
        this.dialog.open(ErrorDialogComponent, {
          data: {alert: 'Zarejestrowano pomyślnie'}
        });
        this.router.navigate(['/']);
      },
      err => {
        this.dialog.open(ErrorDialogComponent, {
          data: {alert: 'Zarejestrowano'}
        });
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
  town: string;
  email: string;
  isEmployee: boolean;
}
