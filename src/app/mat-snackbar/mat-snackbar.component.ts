import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styleUrls: ['./mat-snackbar.component.css']
})
export class MatSnackbarComponent {

  constructor(
    private snackbar: MatSnackBar
  ){}

  openSnackbar(message: string, action: any) {
    let snackbarRef = this.snackbar.open(message, action, { duration: 2000});

    snackbarRef.afterDismissed().subscribe(()=> {
      console.log("Snackbar Dismissed!");
    });

    snackbarRef.onAction().subscribe(()=> {
      console.log("Snackbar Action!");
    });
  }
}