import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styleUrls: ['./mat-tabs.component.css']
})
export class MatTabsComponent {

  getTabChangeValue(index: any) {
    console.log('tab change', index);
  }
}
