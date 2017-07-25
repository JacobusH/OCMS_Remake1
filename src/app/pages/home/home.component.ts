import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ImageInterface } from 'app/interfaces/galleryImage.interface';
import { fadeInAnimation } from 'app/animations/fade-in.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  public teachers: FirebaseListObservable<any>;
  public testimonials: FirebaseListObservable<any>;
  myImages: ImageInterface[] = [
    { "thumbnail": "assets/img/HomeSlider_Piano.jpg", "image": "assets/img/HomeSlider_Piano.jpg", "title": "Private Music Lessons" },
    { "thumbnail": "assets/img/HomeSlider_Guitar.jpg", "image": "assets/img/HomeSlider_Guitar.jpg", "title": "Professional and Fun Environment" },
    { "thumbnail": "assets/img/HomeSlider_Violin.jpg", "image": "assets/img/HomeSlider_Violin.jpg", "title": "Recitals offered" },
    { "thumbnail": "assets/img/HomeSlider_Kids.jpg", "image": "assets/img/HomeSlider_Kids.jpg", "title": "Learn any Insturment" }
  ];

  

  constructor(public afService: AF, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.teachers = this.afService.teachersDesc;
    this.testimonials = this.afService.testimonialsDesc;
  }

}
