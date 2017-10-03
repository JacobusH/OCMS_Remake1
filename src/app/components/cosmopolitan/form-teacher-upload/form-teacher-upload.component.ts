import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/providers/upload.service';
import { Upload } from 'app/models/_index';
import { TeacherUpload } from 'app/models/_index';
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
  selector: 'app-form-teacher-upload',
  templateUrl: './form-teacher-upload.component.html',
  styleUrls: ['./form-teacher-upload.component.css']
})
export class FormTeacherUploadComponent {
  selectedFiles: FileList;
  currentUpload: Upload;
  private model = new TeacherUpload();

  constructor(private upSvc: UploadService, private af: AF) { }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingleTeacher() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, 'teacher');
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
    this.uploadSingleTeacher();

    let fileName = this.selectedFiles.item(0).name;
    let mm: TeacherUpload = this.model;
    mm.itemUrl = 'teacher/' + fileName;
    
    this.af.saveTeacherUpload(mm);
    this.model = new TeacherUpload();

    form.reset();
  }


}
