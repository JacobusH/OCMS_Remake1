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
  public currentUser: any;
  public isLoggedIn: boolean;


  constructor(private af: AF) {
       // get user logged in state
       this.af.afAuth.authState.subscribe(user => {
        if(user) {
            this.currentUser = user;
            this.isLoggedIn = true;
            // this.isAdmin = this.af.getUserRoles(user);
            // console.log("Logged in user is: " + user.email);
            // console.log("User photo: " + user.providerData[0].photoURL);
            // console.log("User name: " + user.providerData[0].displayName);
            // console.log(user);
        }
        else {
          this.currentUser = {};
          this.isLoggedIn = false;
        }
    });
  }

  getIsLoggedIn() {
    // get user logged in state
    this.af.afAuth.authState.subscribe(user => {
      if(user) {
          this.currentUser = user;
          this.isLoggedIn = true;
          // this.isAdmin = this.af.getUserRoles(user);
          // console.log("Logged in user is: " + user.email);
          // console.log("User photo: " + user.providerData[0].photoURL);
          // console.log("User name: " + user.providerData[0].displayName);
          // console.log(user);
      }
      else {
        this.currentUser = {};
        this.isLoggedIn = false;
      }
  });
  }

}