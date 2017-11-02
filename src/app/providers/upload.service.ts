import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/storage";
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Upload, TeacherUpload } from 'app/models/_index';

@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }
  private basePathGallery:string = '/gallery';
  private basePathTeachers:string = '/teachers';
  uploads: FirebaseListObservable<Upload[]>;
  
  pushUpload(upload: Upload, location: string) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${location}/${upload.file.name}`).put(upload.file);
    
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, {
      next : (snapshot) => {
      // upload in progress
      upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, error: (error) => {
      // upload failed
      console.log(error)
    }, complete: () => {
      // upload success
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);

    }});
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.key)
    .then( () => {
      this.deleteFileStorage(upload.name)
    })
    .catch(error => console.log(error))
  }

  // Deletes the file details from the realtime db
  deleteFileData(key: string) {
    return this.db.list(`${this.basePathGallery}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePathGallery}/${name}`).delete()
  }

  // Writes the file details to the realtime db
  saveFileData(upload: Upload) {
    this.db.list(`${this.basePathGallery}/`).push(upload);
  }

}