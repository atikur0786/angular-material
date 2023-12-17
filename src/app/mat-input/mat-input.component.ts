import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.css']
})
export class MatInputComponent {

  matSelectedData!: any;

  options: string[] = ["Angular", "React", "Vue"];

  minDate = new Date();
  maxDate = new Date(2023, 11, 20);
}
