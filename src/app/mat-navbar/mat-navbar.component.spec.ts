import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNavbarComponent } from './mat-navbar.component';

describe('MatNavbarComponent', () => {
  let component: MatNavbarComponent;
  let fixture: ComponentFixture<MatNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
