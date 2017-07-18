import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from '../providers/af';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public teachers: FirebaseListObservable<any>;
  public testimonials: FirebaseListObservable<any>;


  constructor(public afService: AF, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.teachers = this.afService.teachersDesc;
    this.testimonials = this.afService.testimonialsDesc;
  }

}
