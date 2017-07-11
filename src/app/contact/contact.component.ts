import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from '../providers/af';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { MailMessage } from '../models/mailMessage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public faqs: FirebaseListObservable<any>;
  private model = new MailMessage('', '',  '', '');

  constructor() { }

  ngOnInit() {
  }

}
