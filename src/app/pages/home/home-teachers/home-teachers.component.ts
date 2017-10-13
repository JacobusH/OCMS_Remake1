import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ImageInterface } from 'app/interfaces/galleryImage.interface';
import { fadeInAnimation } from 'app/animations/fade-in.animation';

@Component({
  selector: 'app-home-teachers',
  templateUrl: './home-teachers.component.html',
  styleUrls: ['./home-teachers.component.css']
})
export class HomeTeachersComponent implements OnInit {
  public teachers: FirebaseListObservable<any>;
  constructor(public afService: AF, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.teachers = this.afService.teachersDesc;
  }
}
