import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBadgesComponent } from './mat-badges.component';

describe('MatBadgesComponent', () => {
  let component: MatBadgesComponent;
  let fixture: ComponentFixture<MatBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
