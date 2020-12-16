import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {SignupViewModel} from '../signup/signup.component';
import {WaterStation} from '../models/waterstation';
import {SignInViewModel} from '../signin/signin.component';
import {WaterMeasure} from '../models/watermeasure';
import {WeatherMeasure} from '../models/weathermeasure';
import {WeatherStation} from '../models/weatherstation';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private port = '8080';
  private BASE_URL = 'http://localhost:' + this.port;
  private SIGNUP_URL = this.BASE_URL + '/api/user/signup';
  private SIGNIN_URL = this.BASE_URL + '/api/user/signin';
  private WATER_STATION_URL = this.BASE_URL + '/api/station/water';
  private WATER_MEASURE_URL = this.BASE_URL + '/api/measure/water';
  private WEATHER_STATION_URL = this.BASE_URL + '/api/station/weather';
  private WEATHER_MEASURE_URL = this.BASE_URL + '/api/measure/weather';
  public showmenu = true;
  constructor(private http: HttpClient, private router: Router) { }

  // AUTH
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

  // WATER STATIONS
  getWaterStations(): Observable<WaterStation[]> {
    return this.http.get<WaterStation[]>(this.WATER_STATION_URL);
  }

  getWaterStationById(id): Observable<WaterStation> {
    return this.http.get<WaterStation>(this.WATER_STATION_URL + '/' + id);
  }

  // WEATHER STATIONS
  getWeatherStations(): Observable<WeatherStation[]> {
    return this.http.get<WeatherStation[]>(this.WEATHER_STATION_URL);
  }

  getWeatherStationById(id): Observable<WeatherStation> {
    return this.http.get<WeatherStation>(this.WEATHER_STATION_URL + '/' + id);
  }
  // MEASURES
  getWaterMeasuresByStationId(id): Observable<WaterMeasure[]> {
    return this.http.get<WaterMeasure[]>(this.WATER_MEASURE_URL + '/' + id);
  }

  getWeatherMeasuresByStationId(id): Observable<WeatherMeasure[]> {
    return this.http.get<WeatherMeasure[]>(this.WEATHER_MEASURE_URL + '/' + id);
  }
}
