import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ManagePanelComponent } from './manage-panel/manage-panel.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StationsComponent } from './stations/stations.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './shared/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BasicChartComponent } from './basic-chart/basic-chart.component';
import {ChartsModule} from 'ng2-charts';
import {AgmCoreModule} from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GoogleMapComponent } from './google-map/google-map.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { StationDetailsComponent } from './station-details/station-details.component';
import { WeatherStationDetailsComponent } from './weather-station-details/weather-station-details.component';
import {MatTableModule} from '@angular/material/table';
import { AlertPropositionsTableComponent } from './prepositions/alert-propositions-table/alert-propositions-table.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddPropositionDialogComponent } from './prepositions/add-proposition-dialog/add-proposition-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { BarChartComponent } from './manage-panel/bar-chart/bar-chart.component';
import { AlertListComponent } from './manage-panel/alert-list/alert-list.component';
import { AlertSuggestionsListComponent } from './manage-panel/alert-suggestions-list/alert-suggestions-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AddAlertDialogComponent } from './manage-panel/add-alert-dialog/add-alert-dialog.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ShareAlertDialogComponent } from './manage-panel/share-alert-dialog/share-alert-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { PrepositionsComponent } from './prepositions/prepositions.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { ShowStatusPipe } from './shared/pipes/show-status.pipe';
import { ShowVerificationPipe } from './shared/pipes/show-verification.pipe';
import { AlertTypesPipe } from './shared/pipes/alert-types.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { ColorizeDirective } from './shared/directives/colorize.directive';
import { ColoredPipe } from './shared/pipes/colored.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ManagePanelComponent,
    SigninComponent,
    SignupComponent,
    StationsComponent,
    UserPanelComponent,
    BasicChartComponent,
    GoogleMapComponent,
    StationDetailsComponent,
    WeatherStationDetailsComponent,
    AlertPropositionsTableComponent,
    AddPropositionDialogComponent,
    BarChartComponent,
    AlertListComponent,
    AlertSuggestionsListComponent,
    AddAlertDialogComponent,
    UserSettingsComponent,
    ShareAlertDialogComponent,
    ErrorDialogComponent,
    PrepositionsComponent,
    ShowStatusPipe,
    ShowVerificationPipe,
    AlertTypesPipe,
    ColorizeDirective,
    ColoredPipe
  ],
  entryComponents: [AddPropositionDialogComponent, AddAlertDialogComponent, ShareAlertDialogComponent, ErrorDialogComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        MatCheckboxModule,
        ChartsModule,
        AgmCoreModule.forRoot({
            apiKey: ''
        }),
    ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
