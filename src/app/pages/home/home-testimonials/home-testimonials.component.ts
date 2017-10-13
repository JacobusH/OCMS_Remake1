import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ImageInterface } from 'app/interfaces/galleryImage.interface';
import { fadeInAnimation } from 'app/animations/fade-in.animation';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.css']
})
export class HomeTestimonialsComponent implements OnInit {
  public testimonials: FirebaseListObservable<any>;
 

  constructor(public afService: AF, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.testimonials = this.afService.testimonialsDesc;
  }
}
