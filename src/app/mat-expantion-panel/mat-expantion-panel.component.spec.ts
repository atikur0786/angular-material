import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpantionPanelComponent } from './mat-expantion-panel.component';

describe('MatExpantionPanelComponent', () => {
  let component: MatExpantionPanelComponent;
  let fixture: ComponentFixture<MatExpantionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatExpantionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
