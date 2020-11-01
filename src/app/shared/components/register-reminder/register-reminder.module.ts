import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterReminderComponent } from './register-reminder.component';
import { MaterialModule } from 'src/app/shared/modules-the-3rd/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterReminderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterReminderComponent
  ]
})
export class RegisterReminderModule { }
