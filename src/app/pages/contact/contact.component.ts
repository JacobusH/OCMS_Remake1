import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { MailMessage } from 'app/models/mailMessage.model';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public faqs: FirebaseListObservable<any>;
  private model = new MailMessage('', '', '', '',  '', '', false);

  mailForm: FormGroup;

  constructor(private afService: AF, private router: Router, private route:ActivatedRoute) { 
    this.model = new MailMessage('', '', '', '',  '', '', false);
  }

  ngOnInit() {
  }

  saveMailMessage() {
    let mm: MailMessage = this.model;
    mm.date = this.afService.getCurrentDate();

    this.afService.saveMailMessage(mm);
    this.model = new MailMessage('', '', '', '',  '', '', false);
    this.router.navigate(['thanks'], {relativeTo: this.route});
  }


}
