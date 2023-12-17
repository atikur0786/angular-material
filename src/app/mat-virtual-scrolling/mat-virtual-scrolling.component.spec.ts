import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatVirtualScrollingComponent } from './mat-virtual-scrolling.component';

describe('MatVirtualScrollingComponent', () => {
  let component: MatVirtualScrollingComponent;
  let fixture: ComponentFixture<MatVirtualScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatVirtualScrollingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatVirtualScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
