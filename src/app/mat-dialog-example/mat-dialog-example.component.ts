import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-example',
  templateUrl: './mat-dialog-example.component.html',
  styleUrls: ['./mat-dialog-example.component.css']
})
export class MatDialogExampleComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {}
}
