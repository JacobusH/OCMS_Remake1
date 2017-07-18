import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from '../providers/af';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  private teacherObj: any;
  private teacher: Teacher;

  constructor(private router: Router
    , private route: ActivatedRoute
    , public afService: AF
    , public db: AngularFireDatabase) 
  {
     
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.teacherObj = this.db.object('/teachers/' + this.id);
    this.teacherObj.subscribe(x => {
        this.teacher = new Teacher(this.id, x.imgName, x.instrument, x.name, x.summary);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
