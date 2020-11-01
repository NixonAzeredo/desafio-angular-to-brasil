import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReminderListComponent } from './reminder-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReminderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderListRoutingModule { }
