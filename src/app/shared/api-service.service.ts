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
import {Watermeasureimgw} from '../models/watermeasureimgw';
import {AlertProposition} from '../models/alertproposition';
import {Danger} from '../models/danger';
import {AlertPropositionViewModel} from '../user-panel/add-proposition-dialog/add-proposition-dialog.component';
import {Alert} from '../models/alert';
import {AlertSuggestion} from '../models/alertsuggestion';
import {AlertStat} from '../models/alertstat';

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
  private ALERT_PROPOSITION_URL = this.BASE_URL + '/api/proposition';
  private ALERT_URL = this.BASE_URL + '/api/alert';
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
    this.showmenu = false;
    this.router.navigate(['']);
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

  getWaterMeasuresFromImgw(): Observable<Watermeasureimgw[]> {
    return this.http.get<Watermeasureimgw[]>('https://danepubliczne.imgw.pl/api/data/hydro/');
  }

  getWeatherMeasuresByStationId(id): Observable<WeatherMeasure[]> {
    return this.http.get<WeatherMeasure[]>(this.WEATHER_MEASURE_URL + '/' + id);
  }

  // ALERT PROPOSITIONS
  getAlertPropositions(): Observable<AlertProposition[]> {
    return this.http.get<AlertProposition[]>(this.ALERT_PROPOSITION_URL);
  }

  postAlertProposition(alertProposition: AlertPropositionViewModel): Observable<any> {
    return this.http.post(this.ALERT_PROPOSITION_URL, alertProposition);
  }

  acceptAlertProposition(id): Observable<AlertProposition> {
    return this.http.get<AlertProposition>(this.ALERT_PROPOSITION_URL + '/accept/' + id);
  }

  addPointToAlertProposition(id): Observable<AlertProposition> {
    return this.http.get<AlertProposition>(this.ALERT_PROPOSITION_URL + '/point/' + id);
  }

  // DANGER TYPES
  getDangerTypes(): Observable<Danger[]> {
    return this.http.get<Danger[]>(this.ALERT_PROPOSITION_URL + '/dangers');
  }

  // ALERTS
  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.ALERT_URL);
  }
/*  postAlert(alert: AlertViewModel): Observable<any> {
    return this.http.post(this.ALERT_URL, alert);
  }*/

/*  sendAlertByMail(sendAlert: SendAlertViewModel): Observable<any> {
    return this.http.post(this.ALERT_URL + '/sendmail', sendAlert);
  }*/

  getAlertSuggestions(): Observable<AlertSuggestion[]> {
    return this.http.get<AlertSuggestion[]>(this.ALERT_URL + '/suggestion');
  }

  getAlertStats(): Observable<AlertStat[]> {
    return this.http.get<AlertStat[]>(this.ALERT_URL + '/stat');
  }
}
