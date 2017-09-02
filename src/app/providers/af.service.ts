import {Injectable} from '@angular/core';
// import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { FAQ, MailMessage, User, GalleryImage, Signup, Resource, LiveChat, LiveChatMessage} from 'app/models/_index';


@Injectable()
export class AF {
  private currentDate: string;
  public displayName: string;
  public email: string;
  public announcements: FirebaseListObservable<any>;
  public faqs: FirebaseListObservable<any>;
  public gallery: FirebaseListObservable<any>;
  public liveChats: FirebaseListObservable<any>;
  public liveChatMessages: FirebaseListObservable<any>;
  public mailMessages: FirebaseListObservable<any>;
  public messages: FirebaseListObservable<any>;
  public resources: FirebaseListObservable<any>;
  public resourceCategories: FirebaseListObservable<any>;
  public signups: FirebaseListObservable<any>;
  public testimonials: FirebaseListObservable<any>;
  public testimonialsDesc: FirebaseListObservable<any>;
  public teachers: FirebaseListObservable<any>;
  public teachersDesc: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public user: Observable<firebase.User>;


  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
      this.announcements = this.db.list('announcements');
      this.faqs = this.db.list('faqs');
      this.gallery = this.db.list('gallery');
      this.resources = this.db.list('resources');
      this.testimonials = this.db.list('testimonials');
      this.teachers = this.db.list('teachers');
      this.user = this.afAuth.authState;
      this.users = this.db.list('users');
      
      this.liveChats = this.db.list('livechats', {
        query: {
          orderByChild: 'invertedDate'
        }
      });
      this.liveChatMessages = this.db.list('liveChatMessages', {
        query: {
          orderByChild: 'invertedDate'
        }
      });
      this.signups = this.db.list('signups', {
        query: {
          orderByChild: 'invertedDate'
        }
      });
      this.mailMessages = this.db.list('messages', {
        query: {
          orderByChild: 'invertedDate'
        }
      });
      this.testimonialsDesc = this.db.list('testimonials', {
        query: {
          limitToFirst: 4
        }});
      this.teachersDesc = this.db.list('teachers', {
        query: {
          limitToFirst: 4
      }});

  }

  /******************** 
   LOGIN
  ****************** */
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithEmail(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  /******************** 
   SIGNUPS / LEARN TO PLAY
  ****************** */
  saveSignup(signup: Signup) {
    signup.date = this.getCurrentDate();
    signup.invertedDate = this.getInvertedDate();

    let promise = this.signups.push(signup);
    this.db.object("signups/" + promise.key).update({key: promise.key});
  }

  updateSignup(s: Signup)
  {
    this.db.object("signups/" +s.key).update(s)
  }

  /******************** 
   USERS
  ****************** */
  checkUserExists(uid: string) {
    let item = this.db.object('/users/' + uid, { preserveSnapshot: true });
    
    item.subscribe(snapshot => {
    if(snapshot.exists()) {  
      //object exists 
      console.log("EXISTS!!!");
    } else {
      //object doesnt exist 
      console.log("NOT THERE!!!");
    }
    });
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

  getUser(email: string) {
    return this.db.list('users', {
        query: {
          orderByChild: 'email',
          equalTo: email
        }});
  }

  saveEmailUser(user:User) {
    let promise = this.users.push(user);
    this.db.object("users/" + promise.key).update({key: promise.key})
  }

  /******************** 
   GALLERY
  ****************** */
  saveGalleryItem(item: GalleryImage) {
    this.gallery.push(item);
  }

  getGalleryItem(id: number) {
    this.db.list('gallery', {
      query: {
          orderBy: 'location',
          equalTo: 'some place'
      }
    })
  }

  getMostRecentGalleryItem() {
     return this.db.list('gallery', {
      query: {
        orderByChild: 'id',
        limitToLast: 1 // returns one result of list ordered by id with highest id first
      }
    });
  }

  /******************** 
   MESSAGES
  ****************** */
  sendMessage(text) {
    const message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: this.getCurrentDate()
    };
    this.messages.push(message);
  }

  /******************** 
   ANNOUNCEMENT
  ****************** */
  saveAnnouncement(text) {
    const announcement = {
      announcement: text,
      timestamp: this.getCurrentDate()
    };
    this.announcements.push(announcement);
  }

  /******************** 
   FAQ
  ****************** */
  saveFaq(faq: FAQ)
  {
      this.faqs.push(faq);
  }

  /******************** 
   RESOURCE
  ****************** */
  saveResource(resource: Resource)
  {
      this.resources.push(resource);
  }

  /******************** 
    MAIL MESSAGES
  ****************** */
  saveMailMessage(m: MailMessage)
  {
    m.date = this.getCurrentDate();
    m.invertedDate = this.getInvertedDate();

    let promise = this.mailMessages.push(m);
    this.db.object("messages/" + promise.key).update({key: promise.key})
  }

  updateMailMessage(msg: MailMessage)
  {
    this.db.object("messages/" + msg.key).update(msg)
  }

  /******************** 
    LIVE CHAT
  ****************** */
  saveLivechat(lc: LiveChat)
  {
    lc.dateTime = this.getCurrentDateTime();
    lc.invertedDate = this.getInvertedDate();

    let promise = this.liveChats.push(lc);
    this.db.object("livechats/" + promise.key).update({key: promise.key});
    console.log(promise.key);
    return promise.key;
  }

  saveLiveChatMessage(message: LiveChatMessage)
  {
    message.dateTime = this.getCurrentDateTime();
    message.invertedDate = this.getInvertedDate();

    let promise = this.liveChatMessages.push(message);
    this.db.object("liveChatMessages/" + promise.key).update({key: promise.key})
    console.log(promise.key);
    return promise.key;
  }

  getLiveChatMessagesByParentKey(parentKey: string) {
    return this.db.list('liveChatMessages', {
      query: {
        equalTo: parentKey,
        orderByChild: 'invertedDate'
      }
    });
  }

  /******************** 
   HELPERS
  ****************** */
  getCurrentDateTime() {
    const dt = new Date(Date.now());
    return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate() + ' ' + dt.getHours() + ' : ' + dt.getMinutes();
  }

  getCurrentDate() {
    const dt = new Date(Date.now());
    return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
  }

  getInvertedDate() {
   return 0 - Date.now();
  }


  // saveTeacher(text) {
  //   const teacher = {
  //     teacher: text,
  //     timestamp: this.getCurrentDate()
  //   };
  //   this.teachers.push(teacher);
  // }

}
