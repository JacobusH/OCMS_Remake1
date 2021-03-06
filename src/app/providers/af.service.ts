import {Injectable} from '@angular/core';
import { UUID } from 'angular2-uuid';
// import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FAQ, MailMessage, User, GalleryImage, GalleryUpload, Signup, Resource, LiveChat, LiveChatMessage, Teacher, TeacherUpload, SkillTree, SkillTreeNode } from 'app/models/_index';
import * as firebase from 'firebase/app';
import * as moment from 'moment';
import 'rxjs/add/operator/take';
import "firebase/storage";


@Injectable()
export class AF {
  private currentDate: string;
  public displayName: string;
  public email: string;
  public announcements: FirebaseListObservable<any>;
  public faqs: FirebaseListObservable<any>;
  public gallery: FirebaseListObservable<any>;
  public galleryDesc: FirebaseListObservable<any>;
  public galleryUploads: FirebaseListObservable<any>;
  public galleryUploadsDesc: FirebaseListObservable<any>;
  public liveChats: FirebaseListObservable<any>;
  public liveChatSwitch: FirebaseObjectObservable<any>;
  public mailMessages: FirebaseListObservable<any>;
  public resources: FirebaseListObservable<any>;
  public resourceCategories: FirebaseListObservable<any>;
  public roles: FirebaseListObservable<any>;
  public skillTrees: FirebaseListObservable<any>;
  public signups: FirebaseListObservable<any>;
  public testimonials: FirebaseListObservable<any>;
  public testimonialsDesc: FirebaseListObservable<any>;
  public teachers: FirebaseListObservable<any>;
  public teacherUploads: FirebaseListObservable<any>;
  public teachersDesc: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public user: Observable<firebase.User>;
  storage = firebase.storage();
  storageRef = this.storage.ref();


  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
      this.announcements = this.db.list('announcements');
      this.faqs = this.db.list('faqs');
      this.gallery = this.db.list('gallery');
      this.galleryUploads = this.db.list('galleryUploads');
      this.liveChatSwitch = this.db.object('galleryUploads');
      this.resources = this.db.list('resources');
      this.roles = this.db.list('roles');
      this.skillTrees = this.db.list('skillTrees');
      this.testimonials = this.db.list('testimonials');
      this.teachers = this.db.list('teachers');
      this.teacherUploads = this.db.list('teacherUploads');
      this.user = this.afAuth.authState;
      this.users = this.db.list('users');
      
      this.galleryDesc = this.db.list('gallery', {
        query: {
          limitToFirst: 50
        }});
      this.galleryUploadsDesc = this.db.list('galleryUploads', {
          query: {
            limitToFirst: 30
          }});
      this.liveChats = this.db.list('liveChats', {
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
   SKILLTREE
  ****************** */
  addSkillTreeNode(skillTreeKey: string, parentNodeKey: string) {
    this.db.object('skilltree/' + skillTreeKey);
  }

  createSkillTree() {
    let tree = new SkillTree();
    tree.nodes = new Array<SkillTreeNode>(new SkillTreeNode()); 
    let promise = this.skillTrees.push(tree);
    this.db.object("skillTrees/" + promise.key).update({key: promise.key});
  }
  
  getSkillTreeByUserType(skillTreeKey) : FirebaseListObservable<any> {
    return this.db.list('skilltree/' + skillTreeKey);
  }

  /******************** 
   SIGNUPS / LEARN TO PLAY
  ****************** */
  saveSignup(signup: Signup) {
    signup.date = this.getCurrentDate();
    signup.dateUnix = this.getCurrentDateUNIX();
    signup.invertedDate = this.getInvertedDate();

    let promise = this.signups.push(signup);
    this.db.object("signups/" + promise.key).update({key: promise.key});
  }

  updateSignup(s: Signup)
  {
    this.db.object("signups/" +s.key).update(s)
  }

  getSignupsByDateRange(rangeStart: any, rangeEnd:any) {
    return this.db.list('signups', {
      query: {
        orderByChild: 'dateUnix',
        startAt: this.getUnixDate(rangeStart._d.toLocaleDateString()),
        endAt: this.getUnixDate(rangeEnd._d.toLocaleDateString())
      }
    })
  }

  // startAt: "2017/8/22",
  // endAt: "2017/9/4"

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

  saveUser(user:User) {
    let promise = this.users.push(user);
    this.db.object("users/" + promise.key).update({key: promise.key})
  }

  isAdminUser(userID) {
    var test = this.db.list("users", {
      query: {
        orderByChild: 'authID',
        equalTo: userID
      }
    }).take(1).map(x => console.log(x))

    console.log(test)

  }

  getUserRoles(user: User): Observable<User> {
    return this.db.object('/users/' + user.authID + "/role")
           .take(1)
           .map(roles => {
             user.role = roles;
             return user;
            });
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

  saveGalleryUpload(item: GalleryUpload) {
    let promise = this.galleryUploads.push(item);
    this.db.object("galleryUploads/" + promise.key).update({key: promise.key});
    
    let galleryRef = this.storageRef.child(item.itemUrl);
    galleryRef.getDownloadURL().then((url) => {
      // this.selectedPicture = url;
      this.db.object("galleryUploads/" + promise.key).update({itemUrl: url});
    })
    .catch((err) => {
      console.log(err);
    });

  }

  addToGalleryCount() {
    var cnt = this.db.object('/galleryUploadCount/' , { preserveSnapshot: true }).take(1);
    cnt.subscribe(x => {
      let cnt = +x.val().count + 1;
      this.db.object("/galleryUploadCount/").update({count: cnt});
    });
    

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
    m.dateUnix = this.getCurrentDateUNIX();
    m.invertedDate = this.getInvertedDate();

    let promise = this.mailMessages.push(m);
    this.db.object("messages/" + promise.key).update({key: promise.key})
  }

  updateMailMessage(msg: MailMessage)
  {
    this.db.object("messages/" + msg.key).update(msg)
  }

  getMailMessagesByDateRange(rangeStart: any, rangeEnd:any) {
    return this.db.list('messages', {
      query: {
        orderByChild: 'dateUnix',
        startAt: this.getUnixDate(rangeStart._d.toLocaleDateString()),
        endAt: this.getUnixDate(rangeEnd._d.toLocaleDateString())
      }
    })
  }

  /******************** 
    LIVE CHAT
  ****************** */
  saveLivechat(lc: LiveChat)
  {
    lc.dateTime = this.getCurrentDateTime();
    lc.dateUnix = this.getCurrentDateUNIX();
    lc.invertedDate = this.getInvertedDate();

    let promise = this.liveChats.push(lc);
    this.db.object("liveChats/" + promise.key).update({key: promise.key});
    return promise.key;
  }

  addLiveChatMessage(chatKey: string, msg: string, fromAdmin: boolean) {
    let chatMsg = new LiveChatMessage(msg, this.getCurrentDateTime(), this.getInvertedDate(), fromAdmin, false);

    let messages = this.db.object("liveChats/" + chatKey + "/messages");
    let promise = messages.$ref.push(chatMsg);
  }

  getLiveChatMessagesByParentKey(parentKey: string): FirebaseListObservable<any> {
    return this.db.list("liveChats/" + parentKey + "/messages");
  }

  getActiveLiveChats(): FirebaseListObservable<any> {
    return this.db.list("liveChats/", {
      query: {
        orderByChild: 'active',
        equalTo: true
      }
    });
  } 

  getLiveChatsByDateRange(rangeStart: any, rangeEnd:any) {
    return this.db.list('liveChats', {
      query: {
        orderByChild: 'dateUnix',
        startAt: this.getUnixDate(rangeStart._d.toLocaleDateString()),
        endAt: this.getUnixDate(rangeEnd._d.toLocaleDateString())
      }
    })
  }

  getLiveChatByKey(key: string): FirebaseListObservable<any> {
    return this.db.list("liveChats/" + key);
  }

  markLiveChatAsInactive(key: string) {
    this.db.object("liveChats/" + key).update({active: false});
  }

  markLiveChatUnreadMessage(key: string, hasNewUnread: boolean) {
    this.db.object("liveChats/" + key).update({hasUnreadMessage: hasNewUnread});
  }

  deleteLiveChat(key: string) {
    this.db.object("liveChats/" + key).remove();
  }

  toggleLiveChatSwitch() {
    this.db.object("liveChatSwitch").subscribe(x => {
      if(x.active) {
        this.db.object("liveChatSwitch").update({active: false});
      } else {
        this.db.object("liveChatSwitch").update({active: true});
      }
    })
  }


  /******************** 
   TEACHERS
  ****************** */
  saveTeacher(t: Teacher) {
    let promise = this.teachers.push(t);
    this.db.object("teachers/" + promise.key).update({key: promise.key});
    return promise.key;
  }

  updateTeacherURL(item: TeacherUpload, url: string) {
    this.db.object("teacherUploads/" + item.key).update({itemUrl: url});
  }

  saveTeacherUpload(item: TeacherUpload) {
    let promise = this.teacherUploads.push(item);
    this.db.object("teacherUploads/" + promise.key).update({key: promise.key});
    
    let teacherRef = this.storageRef.child(item.itemUrl);
    teacherRef.getDownloadURL().then((url) => {
      // this.selectedPicture = url;
      this.db.object("teacherUploads/" + promise.key).update({itemUrl: url});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  editTeacherUpload(item: TeacherUpload) {
    this.db.object("teacherUploads/" + item.key).update(item);
  }

  deleteTeacherUpload(item: TeacherUpload) {
    this.db.object("teacherUploads/" + item.key).remove();
  }


  /******************** 
   HELPERS
  ****************** */
  getCurrentDateTime() {
    const dt = new Date(Date.now());
    return (dt.getMonth() + 1)  + '/' + dt.getDate()  + '/' + dt.getFullYear() + ' ' + dt.getHours() + ':' + dt.getMinutes();
  }

  //want it in mm/dd/yyy
  getCurrentDate() {
    const dt = new Date(Date.now());
    return (dt.getMonth() + 1)  + '/' + dt.getDate()  + '/' + dt.getFullYear();
  }

  getCurrentDateUNIX() {
    return new Date(Date.now()).getTime() / 1000;
  }

  getUnixDate(date: string): number {
    return new Date(date).getTime() / 1000;
  }

  getInvertedDate() {
   return 0 - Date.now();
  }


  

}
