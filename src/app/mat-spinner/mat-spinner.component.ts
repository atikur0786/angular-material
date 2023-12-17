import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner.component.html',
  styleUrls: ['./mat-spinner.component.css']
})
export class MatSpinnerComponent {
  showSpinner: boolean = false;

  loadData () {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
