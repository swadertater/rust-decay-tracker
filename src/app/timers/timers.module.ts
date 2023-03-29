import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimersRoutingModule} from './timers-routing.module';
import {TimersComponent} from './timers.component';
import {TimerModule} from "../shared/modules/timer/timer.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {TimerFormComponent} from './timer-form/timer-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    TimersComponent,
    TimerFormComponent
  ],
  imports: [
    CommonModule,
    TimersRoutingModule,
    TimerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class TimersModule {
}
