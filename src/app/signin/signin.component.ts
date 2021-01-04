import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ShareAlertDialogComponent} from '../manage-panel/share-alert-dialog/share-alert-dialog.component';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {first, map} from 'rxjs/operators';
import {UserModel} from '../models/usermodel';

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
  usr: UserModel;
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.apiService.showmenu = false;
  }

  validateForm(): void {
    this.loginErrorPassword = false;
    this.loginErrorUsername = false;
    if (this.model.username === '') {
      this.loginErrorUsername = true;
    } else if (this.model.password === '') {
      this.loginErrorPassword = true;
    } else {
      this.Signin();
    }
  }

  Signin(): void {
    this.apiService.signIn(this.model).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.apiService.getUser().subscribe(
          resp => {
            console.log(resp);
            // @ts-ignore
            localStorage.setItem('role', resp.roles[0]);
            this.usr = resp;
            // @ts-ignore
            this.usr.role = resp.roles[0];
            this.usr.token = localStorage.getItem('token');
            localStorage.setItem('user', JSON.stringify(this.usr));
            this.apiService.setUserValue(this.usr);
            if (localStorage.getItem('role') === 'ROLE_EMPLOYEE') {
              this.router.navigate(['/panel']);
            } else {
              this.router.navigate(['/user']);
            }
          },
          error => {
            alert('error has occured ddd');
          }
        );
        this.apiService.showmenu = true;
      },
      err => {
        this.dialog.open(ErrorDialogComponent, {
          data: {alert: 'Zły login lub hasło'}
        });
      }
    );
  }
}
export interface SignInViewModel {
  username: string;
  password: string;
}
