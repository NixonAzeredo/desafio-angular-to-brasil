import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { PoModule } from '@po-ui/ng-components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReminderListModule } from './pages/reminder-list/reminder-list.module';
import { RegisterReminderModule } from './shared/components/register-reminder/register-reminder.module';
import { MaterialModule } from './shared/modules-the-3rd/material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PoModule,
    BrowserAnimationsModule,
    NgbModule,
    ReminderListModule,
    RegisterReminderModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
