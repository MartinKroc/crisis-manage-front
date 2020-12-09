import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {SignupViewModel} from '../signup/signup.component';
import {WaterStation} from '../models/waterstation';
import {SignInViewModel} from '../signin/signin.component';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private port = '8080';
  private BASE_URL = 'http://localhost:' + this.port;
  private SIGNUP_URL = this.BASE_URL + '/api/user/signup';
  private SIGNIN_URL = this.BASE_URL + '/api/user/signin';
  private WATER_STATION_URL = this.BASE_URL + '/api/station/water';
  constructor(private http: HttpClient, private router: Router) { }

  //AUTH
  signUp(user: SignupViewModel): Observable<any> {
    return this.http.post(this.SIGNUP_URL, user);
  }

  signIn(user: SignInViewModel): Observable<any> {
    return this.http.post(this.SIGNIN_URL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  //WATER STATIONS
  getWaterStations(): Observable<WaterStation[]> {
    return this.http.get<WaterStation[]>(this.WATER_STATION_URL);
  }
}
