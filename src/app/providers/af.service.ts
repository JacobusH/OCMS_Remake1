import {Injectable} from '@angular/core';
// import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { FAQ } from 'app/models/faq.model';
import { Resource } from 'app/models/resource.model';
import { MailMessage } from 'app/models/mailMessage.model';
import { User } from 'app/models/user.model';


@Injectable()
export class AF {
  public faqs: FirebaseListObservable<any>;
  public resources: FirebaseListObservable<any>;
  public messages: FirebaseListObservable<any>;
  public announcements: FirebaseListObservable<any>;
  public mailMessages: FirebaseListObservable<any>;
  public testimonials: FirebaseListObservable<any>;
  public testimonialsDesc: FirebaseListObservable<any>;
  public teachers: FirebaseListObservable<any>;
  public teachersDesc: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public user: Observable<firebase.User>;
  public displayName: string;
  public email: string;

  private currentDate: string;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
      this.announcements = this.db.list('announcements');
      this.faqs = this.db.list('faqs');
      this.mailMessages = this.db.list('messages');
      this.resources = this.db.list('resources');
      this.testimonials = this.db.list('testimonials');
      this.teachers = this.db.list('teachers');
      this.testimonialsDesc = this.db.list('testimonials', {
        query: {
        limitToFirst: 4
      }});
      this.teachersDesc = this.db.list('teachers', {
        query: {
          limitToFirst: 4
        }});

      this.user = this.afAuth.authState;
      this.users = this.db.list('users');
  }

  // LOGIN
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  // USER
  saveUser(user:User) {
    this.users.push(user);
  }

  isUserUnique(user:User): boolean {
    // TOOD Jacobus: figure out how to check if it actually exists
    this.users.subscribe(u => {
      if(u.email == user.email)
        {
          console.log("User: " + u.email + " already exists.");
          return true;
        }
    });

    return false;
  }

  // HELPERS
  getCurrentDate() {
    const dt = new Date(Date.now());
    return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
  }


  sendMessage(text) {
    const message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: this.getCurrentDate()
    };
    this.messages.push(message);
  }

  saveAnnouncement(text) {
    const announcement = {
      announcement: text,
      timestamp: this.getCurrentDate()
    };
    this.announcements.push(announcement);
  }

  saveFaq(faq: FAQ)
  {
      this.faqs.push(faq);
  }

  saveResource(resource: Resource)
  {
      this.resources.push(resource);
  }

  saveMailMessage(m: MailMessage)
  {
      this.mailMessages.push(m);
  }

  // saveTeacher(text) {
  //   const teacher = {
  //     teacher: text,
  //     timestamp: this.getCurrentDate()
  //   };
  //   this.teachers.push(teacher);
  // }

}
