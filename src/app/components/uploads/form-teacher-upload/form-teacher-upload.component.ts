import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from 'app/providers/upload.service';
import { Upload } from 'app/models/_index';
import { TeacherUpload } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import * as _ from "lodash";
import * as firebase from 'firebase/app';
import "firebase/storage";
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-form-teacher-upload',
  templateUrl: './form-teacher-upload.component.html',
  styleUrls: ['./form-teacher-upload.component.css']
})
export class FormTeacherUploadComponent {
  @ViewChild('fileUpload') fileUploadVar: any;
  @ViewChild('imgTeacherSelected') imgTeacherSelected: any;
  selectedTeacher: TeacherUpload;
  selectedFiles: FileList;
  selectedPicture: string;
  currentUpload: Upload;
  private model = new TeacherUpload();
  private teachers: FirebaseListObservable<any>;
  private firebaseUrl: string = 'gs://ocmusicschool-11817.appspot.com/';
  private basePathGallery:string = '/gallery';
  private basePathTeachers:string = '/teachers';

  storage = firebase.storage();
  storageRef = this.storage.ref();

  constructor(private upSvc: UploadService, private af: AF) { 
    this.teachers = this.af.teacherUploads;
  }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingleTeacher() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);

    this.upSvc.pushUpload(this.currentUpload, 'teacher', this.model);
  }

  // uploadMulti() {
  //   let files = this.selectedFiles
  //   let filesIndex = _.range(files.length)
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.upSvc.pushUpload(this.currentUpload)}
  //   )
  // }

  saveTeacherUpload(form: NgForm) {
    // uploading new teacher with picture
    if(this.selectedFiles != null) {
      this.uploadSingleTeacher();

      // let fileName = this.selectedFiles.item(0).name;
      // let mm: TeacherUpload = this.model;
      // mm.itemUrl = 'teacher/' + fileName;
      
      // this.af.saveTeacherUpload(mm);

      this.model = new TeacherUpload();
      
      this.fileUploadVar.nativeElement.value = "";
      form.reset();
    }
    // editing teacher
    else if(this.selectedTeacher != null) {
      this.af.editTeacherUpload(this.model)

      this.fileUploadVar.nativeElement.value = "";
      form.reset();
    }

  }

  setNewTeacher() {
    this.selectedTeacher = null;
    this.model = new TeacherUpload();
    this.imgTeacherSelected.nativeElement.src = "";
  }

  setSelectedTeacher(teacher: TeacherUpload) {
    this.selectedTeacher = teacher;
    this.model = teacher;

    let teacherRef = this.storageRef.child(teacher.itemUrl);
    teacherRef.getDownloadURL().then((url) => {
      this.selectedPicture = url;
    })
    .catch((err) => {
      console.log(err);
    });
   
  }

  deleteTeacher(form: NgForm) {
    this.fileUploadVar.nativeElement.value = "";
    form.reset();
    this.af.deleteTeacherUpload(this.selectedTeacher);
  }


}
