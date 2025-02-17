import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ManagePanelComponent} from './manage-panel/manage-panel.component';
import {StationsComponent} from './stations/stations.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {StationDetailsComponent} from './station-details/station-details.component';
import {WeatherStationDetailsComponent} from './weather-station-details/weather-station-details.component';
import {AuthGuard} from './auth.guard';
import {UserSettingsComponent} from './user-settings/user-settings.component';
import {PrepositionsComponent} from './prepositions/prepositions.component';
import {Role} from './models/role';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'panel',
    component: ManagePanelComponent,
    canActivate: [AuthGuard],
    data: {
      Roles: [Role.Employee]
    }
  },
  {
    path: 'stations',
    component: StationsComponent,
    canActivate: [AuthGuard],
    data: {
      Roles: [Role.Employee]
    }
  },
  {
    path: 'stations/:stationId',
    component: StationDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      Roles: [Role.Employee]
    }
  },
  {
    path: 'stations/weather/:stationId',
    component: WeatherStationDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      Roles: [Role.Employee]
    }
  },
  {
    path: 'user',
    component: UserPanelComponent,
    canActivate: [AuthGuard],
    data: {
      Roles: [Role.User]
    }
  },
  {
    path: 'user/settings',
    component: UserSettingsComponent,
    canActivate: [AuthGuard],
    data: {
      Roles: [Role.User]
    }
  },
  {
    path: 'prepositions',
    component: PrepositionsComponent,
    canActivate: [AuthGuard],
    data: {
      Roles: [Role.User]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
