import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: any;
  teachersStatic: Array<any> = [];
  result;

  constructor(private af: AF) {
    // this.teachers = this.af.teacherUploads;
    this.teachers = this.af.teacherUploads.map(x => {
      'pink' + x.itemUrl;
      x.json();
    }).subscribe(x => this.result = x);

    // http.get('friends.json')
    // .map(response => response.json())
    // .subscribe(result => this.result =result);
    
   }

  ngOnInit() {
    // this.storageRef = firebase.storage().ref().child('images/image.png');
    // this.storageRef.getDownloadURL().then(url => console.log(url) );
    this.af.db.list('/teacherUploads', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          // console.log(snapshot.key, snapshot.val());
          // this.teachersStatic.push(snapshot);
          this.getTeacherURL(snapshot.val().itemUrl);
        });
    })

  }

  getTeacherURL(teacherUrl: string) {
    firebase.storage().ref().child(teacherUrl).getDownloadURL().then(url => console.log(url) )
  }

}
