import { AF } from 'app/providers/af.service';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  isAdmin = false;

  constructor(private af: AF, public db: AngularFireDatabase) {}

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        this.af.afAuth.authState.subscribe(user => {
          if(user) {
            // TODO Jacobus: fucking figure out real auth for admin
            if(user.uid === "TaMaXVstDMaUmkGRmO44pKTQxT13" || user.uid === "6zlgSIBKoUht9UCm8fsU9XUc4nE2") {
              this.isAdmin = true;
            }
            else {
              this.isAdmin = false;
            }
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