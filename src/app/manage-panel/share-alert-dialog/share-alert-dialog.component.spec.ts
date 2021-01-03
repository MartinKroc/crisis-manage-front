import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAlertDialogComponent } from './share-alert-dialog.component';

describe('ShareAlertDialogComponent', () => {
  let component: ShareAlertDialogComponent;
  let fixture: ComponentFixture<ShareAlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareAlertDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
