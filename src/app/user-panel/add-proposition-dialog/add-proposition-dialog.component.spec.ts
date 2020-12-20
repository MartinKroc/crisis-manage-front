import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropositionDialogComponent } from './add-proposition-dialog.component';

describe('AddPropositionDialogComponent', () => {
  let component: AddPropositionDialogComponent;
  let fixture: ComponentFixture<AddPropositionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropositionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
