import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Reminder } from '../models/reminder.interface';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  readonly url: string = environment.baseUrl;
  readonly resource: string = "/reminders";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.url.concat(this.resource, '?_start=0&_end=6&_sort=id&_order=desc,asc'));
  }

  pagination(start: string, end: string): Observable<Reminder[]>{
    return this.http.get<Reminder[]>(this.url.concat(this.resource, `?_start=${start}&_end=${end}=6&_sort=id&_order=desc,asc`));
  }

  add(reminder: Reminder): Observable<Reminder>{
    return this.http.post<Reminder>(this.url.concat(this.resource), reminder);
  }

  edit(reminder: Reminder, id: number): Observable<Reminder>{
    return this.http.put<Reminder>(this.url.concat(this.resource, "/", String(id)), reminder);
  }

  goBackWhereYouLeftOff(end: number): Observable<Reminder[]>{
    return this.pagination('0', String(end));
  }

  updatedOne(id: number): Observable<Reminder>{
    return this.http.get<Reminder>(this.url.concat(this.resource, "/", String(id)));
  }

}
