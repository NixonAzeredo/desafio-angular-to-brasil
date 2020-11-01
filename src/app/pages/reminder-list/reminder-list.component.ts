import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../shared/models/reminder.interface';
import { MatDialog } from '@angular/material/dialog';
import { RegisterReminderComponent } from 'src/app/shared/components/register-reminder/register-reminder.component';
import { RemindersService } from 'src/app/shared/services/reminders.service';
import { priority } from 'src/assets/database/reminder.data';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.scss']
})
export class ReminderListComponent implements OnInit {

  listOfRemindersFiltered: Reminder[];
  listOfReminders: Reminder[];
  priorityRating = priority;

  constructor(
    private dialog: MatDialog,
    private reminderService: RemindersService
  ) { }

  ngOnInit(): void {
    this.seeReminderList()
  }

  show(): void { 
    const pag = this.listOfReminders.length
    this.reminderService.pagination(String(pag), String(pag + 3) ).subscribe(
      (response: Reminder[]) => {
        this.listOfReminders = [...this.listOfReminders, ...response]
        this.listOfRemindersFiltered = [...this.listOfRemindersFiltered, ...response]
      }
    )
  }

  filter(e: KeyboardEvent ): void {
    const { value } = e.target as HTMLInputElement 
    const regex = new RegExp(value.toLowerCase())
    const filter = this.listOfReminders.filter(
      reminder => regex.exec(reminder.title.toLowerCase())
    )
    this.listOfRemindersFiltered = filter;
  }

  dialogForNewReminder(item?: Reminder): void {
    const dialogRef = this.dialog.open(RegisterReminderComponent, {
      width: '350px',
      data: item ?? false
    });

    dialogRef.afterClosed().subscribe((status) => {
      if (!status){
        return;
      }
      if(status.id){
        this.reminderService.updatedOne(status.id)
        .subscribe(
          (response: Reminder) => {
            const oldReminders = this.listOfRemindersFiltered;
            const updatedIndex = this.listOfRemindersFiltered.findIndex((reminder) => reminder.id === response.id);
            oldReminders.splice(updatedIndex, 1, response)
            this.listOfRemindersFiltered = [...oldReminders]
            this.update()
          }
        )
      }else{
        this.seeReminderList();
      }
    });
  }

  seeReminderList(): void {
    this.reminderService.list().subscribe(
      (response: Reminder[]) => {
        this.listOfReminders = response
        this.listOfRemindersFiltered = this.listOfReminders;
      }
    )
  }

  edit(item: Reminder): void {
    this.dialogForNewReminder(item);
  }
  
  update(): void {
    this.reminderService.goBackWhereYouLeftOff(this.listOfReminders.length)
      .subscribe(
        (response: Reminder[]) => {
          this.listOfReminders = [...response]
        }
      )
  }

}
