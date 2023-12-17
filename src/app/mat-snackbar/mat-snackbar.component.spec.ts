import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSnackbarComponent } from './mat-snackbar.component';

describe('MatSnackbarComponent', () => {
  let component: MatSnackbarComponent;
  let fixture: ComponentFixture<MatSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
