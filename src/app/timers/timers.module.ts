import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimersRoutingModule} from './timers-routing.module';
import {TimersComponent} from './timers.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {TimerFormComponent} from './timer-form/timer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from "@angular/material/radio";
import {TimerComponent} from './timer/timer.component';


@NgModule({
  declarations: [
    TimersComponent,
    TimerFormComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimersRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatRadioModule,
    FormsModule
  ]
})
export class TimersModule {
}
