import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  towns: string[] = ['Całe Województwo', 'Kielce', 'Skarżysko-Kamienna', 'Ostrowiec-Świętokrzyski', 'Chęciny', 'Jędrzejów', 'Strawczyn', 'Umer', 'Końskie', 'Staszów', 'Łopuszno'];
model: UserSettingsViewModel = {
  email: '',
  phone: '',
  town: ''
};
  errorEmail = false;
  errorPhone = false;
  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    this.errorEmail = false;
    this.errorPhone = false;
    if (this.model.email === '') {
      this.errorEmail = true;
    }
    else if (this.model.phone === '') {
      this.errorPhone = true;
    }
    else {
      this.ChangeUserData();
    }
  }

  public ChangeUserData() {
    console.log(this.model);
    this.apiService.changeUserSettings(this.model).subscribe(
      res => {
        console.log(res);
      },
      err => {
        this.dialog.open(ErrorDialogComponent, {
          data: {alert: 'Zmieniono dane'}
        });
      }
    );
  }
}
export interface UserSettingsViewModel {
  email: string;
  phone: string;
  town: string;
}
