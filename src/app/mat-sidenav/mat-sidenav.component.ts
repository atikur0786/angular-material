import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-sidenav',
  templateUrl: './mat-sidenav.component.html',
  styleUrls: ['./mat-sidenav.component.css']
})
export class MatSidenavComponent {
  
  
  opened: boolean = false;

  log(state: string) {
    console.log(state);
  }
}
