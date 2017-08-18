import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import { MailMessage } from 'app/models/mailMessage.model';

@Component({
  selector: 'app-message-manager',
  templateUrl: './message-manager.component.html',
  styleUrls: ['./message-manager.component.css']
})
export class MessageManagerComponent implements OnInit {
  mailMessages: any;

  constructor(private af: AF) { 
    this.mailMessages = this.af.mailMessages;
  }

  ngOnInit() {
  }

  readClicked(event, msg: MailMessage) {
    msg.read = !msg.read;
    this.af.updateMailMessage(msg);
  }


}
