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
import {AuthGuard} from './auth.guard';
import {UserSettingsComponent} from './user-settings/user-settings.component';
import {PrepositionsComponent} from './prepositions/prepositions.component';

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
    component: ManagePanelComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'stations',
    component: StationsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'stations/:stationId',
    component: StationDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'stations/weather/:stationId',
    component: WeatherStationDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'user',
    component: UserPanelComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_USER'
    }
  },
  {
    path: 'user/alert',
    component: UserAlertComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/settings',
    component: UserSettingsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_USER'
    }
  },
  {
    path: 'prepositions',
    component: PrepositionsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_USER'
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
