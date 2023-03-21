import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimersRoutingModule } from './timers-routing.module';
import { TimersComponent } from './timers.component';
import {TimerModule} from "../shared/modules/timer/timer.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    TimersComponent
  ],
  imports: [
    CommonModule,
    TimersRoutingModule,
    TimerModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TimersModule { }
