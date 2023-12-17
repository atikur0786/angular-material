import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { MatIconComponent } from './mat-icon/mat-icon.component';
import { MatBadgesComponent } from './mat-badges/mat-badges.component';
import { MatSpinnerComponent } from './mat-spinner/mat-spinner.component';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { MatSidenavComponent } from './mat-sidenav/mat-sidenav.component';
import { MatMenuComponent } from './mat-menu/mat-menu.component';
import { MatListComponent } from './mat-list/mat-list.component';
import { MatGridListComponent } from './mat-grid-list/mat-grid-list.component';
import { MatExpantionPanelComponent } from './mat-expantion-panel/mat-expantion-panel.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatTabsComponent } from './mat-tabs/mat-tabs.component';
import { MatStepperComponent } from './mat-stepper/mat-stepper.component';
import { MatInputComponent } from './mat-input/mat-input.component';
import { MatTooltipComponent } from './mat-tooltip/mat-tooltip.component';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { MatDialogExampleComponent } from './mat-dialog-example/mat-dialog-example.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatVirtualScrollingComponent } from './mat-virtual-scrolling/mat-virtual-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    MatButtonComponent,
    MatIconComponent,
    MatBadgesComponent,
    MatSpinnerComponent,
    MatNavbarComponent,
    MatSidenavComponent,
    MatMenuComponent,
    MatListComponent,
    MatGridListComponent,
    MatExpantionPanelComponent,
    MatCardComponent,
    MatTabsComponent,
    MatStepperComponent,
    MatInputComponent,
    MatTooltipComponent,
    MatSnackbarComponent,
    MatDialogComponent,
    MatDialogExampleComponent,
    MatTableComponent,
    MatVirtualScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
