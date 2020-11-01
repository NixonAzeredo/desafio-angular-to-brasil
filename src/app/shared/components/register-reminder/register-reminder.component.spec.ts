import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReminderComponent } from './register-reminder.component';

describe('RegisterReminderComponent', () => {
  let component: RegisterReminderComponent;
  let fixture: ComponentFixture<RegisterReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
