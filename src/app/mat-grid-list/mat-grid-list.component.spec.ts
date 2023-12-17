import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGridListComponent } from './mat-grid-list.component';

describe('MatGridListComponent', () => {
  let component: MatGridListComponent;
  let fixture: ComponentFixture<MatGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatGridListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
