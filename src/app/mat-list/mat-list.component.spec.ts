import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatListComponent } from './mat-list.component';

describe('MatListComponent', () => {
  let component: MatListComponent;
  let fixture: ComponentFixture<MatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
