import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepositionsComponent } from './prepositions.component';

describe('PrepositionsComponent', () => {
  let component: PrepositionsComponent;
  let fixture: ComponentFixture<PrepositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
