import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import { Signup } from 'app/models/_index';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-signup-manager',
  templateUrl: './signup-manager.component.html',
  styleUrls: ['./signup-manager.component.css']
})
export class SignupManagerComponent implements OnInit {
  @Input() filterBy?: string = 'all';
  @Input() readFilterBy?: string = 'all';
  signups: any;
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
  instruments = [
    {value: 'all', viewValue: 'All'},  
    {value: 'Bass', viewValue: 'Bass'},  
    {value: 'Cello', viewValue: 'Cello'},  
    {value: 'Clarinet', viewValue: 'Clarinet'},  
    {value: 'Drums', viewValue: 'Drums'},  
    {value: 'Flute', viewValue: 'Flute'},  
    {value: 'Guitar', viewValue: 'Guitar'},  
    {value: 'Piano', viewValue: 'Piano'},
    {value: 'Sax', viewValue: 'Saxophone'},  
    {value: 'Singing', viewValue: 'Singing'},  
    {value: 'Trumpet', viewValue: 'Trumpet'},  
    {value: 'Ukulele', viewValue: 'Ukulele'},
    {value: 'Violin', viewValue: 'Violin'}
  ];
  readFilter = [
    {value: 'all', viewValue: 'All'},  
    {value: 'Read', viewValue: 'Read'},  
    {value: 'Unread', viewValue: 'Unread'}
  ];
  instSelectedValue;
  readSelectedValue;

  constructor(private af: AF, private daterangepickerOptions: DaterangepickerConfig) { 
    this.signups = this.af.signups;
    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      ranges: {
        'Last Month': [moment().subtract(1, 'month'), moment().add(1, 'day')],
        'Last 3 Months': [moment().subtract(4, 'month'), moment().add(1, 'day')],
        'Last 6 Months': [moment().subtract(6, 'month'), moment().add(1, 'day')],
        'Last 12 Months': [moment().subtract(12, 'month'), moment().add(1, 'day')],
      }
    };
  }

  ngOnInit() {
   
  }

  readClicked(event, msg: Signup) {
    msg.read = !msg.read;
    this.af.updateSignup(msg);
  }

  filterClicked(filterApplied: string) {
    this.filterBy = filterApplied; 
  }

  readFilterClicked(filterApplied: string) {
    this.readFilterBy = filterApplied; 
  }

  private selectedDate(value: any, dateInput: any) {
    dateInput.start = value.start;
    dateInput.end = value.end;

    this.signups = this.af.getSignupsByDateRange(value.start, value.end);
  }

}
