import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { MailMessage } from 'app/models/mailMessage.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public faqs: FirebaseListObservable<any>;
  private model = new MailMessage('', '',  '', '');

  constructor(private afService: AF) { }

  ngOnInit() {
  }

  saveMailMessage(m: MailMessage) {
    this.afService.saveMailMessage(this.model);
  }

}
