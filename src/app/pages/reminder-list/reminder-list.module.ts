import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReminderListRoutingModule } from './reminder-list-routing.module';
import { ReminderListComponent } from './reminder-list.component';
import { PoModule } from '@po-ui/ng-components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterReminderModule } from '../../shared/components/register-reminder/register-reminder.module';
import { MaterialModule } from '../../shared/modules-the-3rd/material.module';

@NgModule({
  declarations: [ReminderListComponent],
  imports: [
    CommonModule,
    ReminderListRoutingModule,
    PoModule,
    NgbModule,
    RegisterReminderModule,
    MaterialModule
  ]
})
export class ReminderListModule { }
