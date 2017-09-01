import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import { Signup } from 'app/models/_index';

@Component({
  selector: 'app-signup-manager',
  templateUrl: './signup-manager.component.html',
  styleUrls: ['./signup-manager.component.css']
})
export class SignupManagerComponent implements OnInit {
  @Input() filterBy?: string = 'all';
  @Input() readFilterBy?: string = 'all';
  signups: any;

  constructor(private af: AF) { 
    this.signups = this.af.signups;
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


}
