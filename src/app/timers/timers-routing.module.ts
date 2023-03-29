import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimersComponent} from "./timers.component";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: TimersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimersRoutingModule {
}
