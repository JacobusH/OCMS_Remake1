import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { FAQ } from 'app/models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  public faqs: FirebaseListObservable<any>;
  private model = new FAQ(-1, '',  '');

  constructor(private router: Router
    , private route: ActivatedRoute
    , public afService: AF
    , public db: AngularFireDatabase) 
  { 

  }

  ngOnInit() {
    this.faqs = this.afService.faqs;
  }

  saveFAQ() {
    console.log('new faq: ', this.model);
    this.afService.saveFaq(this.model);
  }

}
