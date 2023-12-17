import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogExampleComponent } from '../mat-dialog-example/mat-dialog-example.component';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent {

  constructor(
    private  dialog: MatDialog
  ){}

  openDialog() {
    let dialogRef = this.dialog.open(MatDialogExampleComponent, { data: { name: "Atikur"}});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog results: ', result);
    })
  }
}
