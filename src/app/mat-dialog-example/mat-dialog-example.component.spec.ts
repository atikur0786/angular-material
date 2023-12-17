import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogExampleComponent } from './mat-dialog-example.component';

describe('MatDialogExampleComponent', () => {
  let component: MatDialogExampleComponent;
  let fixture: ComponentFixture<MatDialogExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
