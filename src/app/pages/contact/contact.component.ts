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
  FormBuilder,
  NgForm
} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public faqs: FirebaseListObservable<any>;
  private model = new MailMessage('', '', '', '', '',  '', 0, false);

  mailForm: FormGroup;

  constructor(private afService: AF, private router: Router, private route:ActivatedRoute) { 
    this.model = new MailMessage('', '', '', '', '',  '', 0, false);
  }

  ngOnInit() {
  }

  saveMailMessage(form: NgForm) {
    let mm: MailMessage = this.model;
    
    this.afService.saveMailMessage(mm);
    this.model = new MailMessage('', '', '', '', '',  '', 0, false);

    form.reset();
    this.router.navigate(['thanks'], {relativeTo: this.route});
  }

  onAddItem(form: NgForm) {
    console.log(form.value.amount, form.value.name);
    form.reset();
  }


}
