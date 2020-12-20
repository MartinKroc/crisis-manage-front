import {WaterAlert} from './wateralert';
import {WeatherAlert} from './weatheralert';
import {OtherAlert} from './otheralert';

export class Alert {
  waterAlert: WaterAlert[];
  weatherAlert: WeatherAlert[];
  alerts: OtherAlert[];
}
