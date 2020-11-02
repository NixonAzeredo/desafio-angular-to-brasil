import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { RemindersService } from '../../services/reminders.service';
import { Reminder } from '../../models/reminder.interface';

@Component({
  selector: 'app-register-reminder',
  templateUrl: './register-reminder.component.html',
  styleUrls: ['./register-reminder.component.scss']
})
export class RegisterReminderComponent implements OnInit {

  reminderForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(2)]],
    priority: '1',
  });
  message: string;

  constructor(
    private dialogRef: MatDialogRef<RegisterReminderComponent>,
    private fb: FormBuilder,
    private reminderService: RemindersService,
    @Inject(MAT_DIALOG_DATA) public data: Reminder
    ) {}

    ngOnInit(): void {
      if (this.data) {
        this.reminderForm.patchValue(
          this.data
        )
      }
      console.log(this.reminderForm)
    }

    get reminderFormStatus(){
      return this.reminderForm.status === "INVALID";
    }

    submitNewReminder(): void {
      console.log(this.data)
      if (!this.data){
        this.reminderService.add(this.reminderForm.getRawValue())
          .subscribe(
          (response) => this.close(true),
          (error) => console.log(error)
        )
      }else{
        this.reminderService.edit(this.reminderForm.getRawValue(), this.data.id).subscribe(
          (response) => this.close(true, response.id),
          (error) => console.log(error)
        )
      }
    };

    close(status?:boolean, id?: number): void {
      this.dialogRef.close({status, id});
    }
}
