import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSuggestionsListComponent } from './alert-suggestions-list.component';

describe('AlertSuggestionsListComponent', () => {
  let component: AlertSuggestionsListComponent;
  let fixture: ComponentFixture<AlertSuggestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSuggestionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSuggestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
