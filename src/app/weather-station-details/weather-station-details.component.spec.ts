import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStationDetailsComponent } from './weather-station-details.component';

describe('WeatherStationDetailsComponent', () => {
  let component: WeatherStationDetailsComponent;
  let fixture: ComponentFixture<WeatherStationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherStationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherStationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
