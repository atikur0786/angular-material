import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-virtual-scrolling',
  templateUrl: './mat-virtual-scrolling.component.html',
  styleUrls: ['./mat-virtual-scrolling.component.css']
})
export class MatVirtualScrollingComponent {
  numbers: number[] = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }
}
