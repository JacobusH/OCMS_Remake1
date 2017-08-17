import { AF } from 'app/providers/af.service';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  isAdmin = false;

  constructor(private af: AF) {}

  checkAdmin(user: firebase.User): boolean {
    return true;
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        this.af.afAuth.authState.subscribe(user => {
          if(user) {
            this.isAdmin = true; // check admin
          } else {
            this.isAdmin = false;
          }
          resolve(this.isAdmin);
        });
      }
    );
    return promise;
  }
  

}