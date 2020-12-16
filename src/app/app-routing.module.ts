import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SignupComponent} from './signup/signup.component';
import {DemoComponent} from './demo/demo.component';
import {ManagePanelComponent} from './manage-panel/manage-panel.component';
import {StationsComponent} from './stations/stations.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {UserAlertComponent} from './user-alert/user-alert.component';
import {StationDetailsComponent} from './station-details/station-details.component';
import {WeatherStationDetailsComponent} from './weather-station-details/weather-station-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'panel',
    component: ManagePanelComponent
  },
  {
    path: 'stations',
    component: StationsComponent
  },
  {
    path: 'stations/:stationId',
    component: StationDetailsComponent
  },
  {
    path: 'stations/weather/:stationId',
    component: WeatherStationDetailsComponent
  },
  {
    path: 'user',
    component: UserPanelComponent
  },
  {
    path: 'user/alert',
    component: UserAlertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
