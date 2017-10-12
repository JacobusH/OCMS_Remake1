import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/providers/upload.service';
import { Upload } from 'app/models/_index';
import { GalleryUpload, TeacherUpload } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import * as _ from "lodash";
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
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  selectedFiles: FileList;
  currentUpload: Upload;
  private model = new GalleryUpload();

  constructor(private upSvc: UploadService, private af: AF) { }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingleTeacher() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, 'teacher');
  }

  uploadSingleGalleryItem() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, 'gallery');
  }


  // uploadMulti() {
  //   let files = this.selectedFiles
  //   let filesIndex = _.range(files.length)
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.upSvc.pushUpload(this.currentUpload)}
  //   )
  // }

  saveGalleryUpload(form: NgForm) {
    this.uploadSingleGalleryItem();
    
    let fileName = this.selectedFiles.item(0).name;
    let mm: GalleryUpload = this.model;
    mm.itemUrl = 'gallery/' + fileName;
    
    this.af.saveGalleryUpload(mm);
    this.model = new GalleryUpload();

    form.reset();
  }

  saveTeacherUpload(form: NgForm) {
    // this.uploadSingleTeacher();

    // let fileName = this.selectedFiles.item(0).name;
    // let mm: TeacherUpload = this.model;
    // mm.itemUrl = 'teacher/' + fileName;
    
    // this.af.saveTeacherUpload(mm);
    // this.model = new GalleryUpload();

    // form.reset();
  }

  

}