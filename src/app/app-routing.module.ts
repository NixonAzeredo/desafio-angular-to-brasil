import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () => import('./pages/reminder-list/reminder-list.module').then(m => m.ReminderListModule)
  },
  {
    path: '404',
    loadChildren:  () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
