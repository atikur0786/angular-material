import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTooltipComponent } from './mat-tooltip.component';

describe('MatTooltipComponent', () => {
  let component: MatTooltipComponent;
  let fixture: ComponentFixture<MatTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
