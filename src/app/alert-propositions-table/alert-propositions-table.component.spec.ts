import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPropositionsTableComponent } from './alert-propositions-table.component';

describe('AlertPropositionsTableComponent', () => {
  let component: AlertPropositionsTableComponent;
  let fixture: ComponentFixture<AlertPropositionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertPropositionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPropositionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
