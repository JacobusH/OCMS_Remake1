import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Teacher } from 'app/models/teacher.model';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit, OnDestroy {
  key: number;
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
       this.key = params['id']; // (+) converts string 'id' to a number
    });

    this.teacherObj = this.db.object('/teacherUploads/' + this.key);
    this.teacherObj.subscribe(x => {
        this.teacher = new Teacher('', x.itemUrl, x.instrument, x.name, x.descriptionHTML, true);
        console.log(this.teacher);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
