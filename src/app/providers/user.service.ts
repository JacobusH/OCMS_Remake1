import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from 'app/models/user.model';
import { AF } from 'app/providers/af.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  public currentUser: User;


  constructor() {
    this.currentUser = null;
  }

  setHere(user: User) {
    this.currentUser = user;
  }

  setAway() {
    this.currentUser = null;
  }


}