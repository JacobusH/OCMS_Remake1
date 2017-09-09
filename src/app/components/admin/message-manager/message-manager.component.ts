import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import { MailMessage } from 'app/models/mailMessage.model';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-message-manager',
  templateUrl: './message-manager.component.html',
  styleUrls: ['./message-manager.component.css']
})
export class MessageManagerComponent implements OnInit {
  @Input() readFilterBy?: string = 'all';
  mailMessages: any;
  loadedMessages: MailMessage[] = [];
  public daterange: any = {};
  public dateInputs: any = [
    {
        start: moment().subtract(6, 'month'),
        end: moment()
    }
  ];
  public mainInput = {
      start: moment().subtract(12, 'month'),
      end: moment().subtract(6, 'month')
  }
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };
  readFilter = [
    {value: 'all', viewValue: 'All'},  
    {value: 'Read', viewValue: 'Read'},  
    {value: 'Unread', viewValue: 'Unread'}
  ];
  readSelectedValue;



  constructor(private af: AF, private daterangepickerOptions: DaterangepickerConfig) { 
    this.mailMessages = this.af.mailMessages;
    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      ranges: {
         'Last Month': [moment().subtract(1, 'month'), moment()],
         'Last 3 Months': [moment().subtract(4, 'month'), moment()],
         'Last 6 Months': [moment().subtract(6, 'month'), moment()],
         'Last 12 Months': [moment().subtract(12, 'month'), moment()],
      }
    };
  }

  ngOnInit() {
   
  }

  readClicked(event, msg: MailMessage) {
    msg.read = !msg.read;
    this.af.updateMailMessage(msg);
  }

  readFilterClicked(filterApplied: string) {
    this.readFilterBy = filterApplied; 
  }

  private selectedDate(value: any, dateInput: any) {
    dateInput.start = value.start;
    dateInput.end = value.end;

    this.mailMessages = this.af.getMailMessagesByDateRange(value.start, value.end);
  }


}
