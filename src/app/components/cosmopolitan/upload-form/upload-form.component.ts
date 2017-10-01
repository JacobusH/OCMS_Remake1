import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/uploads/shared/upload.service';
import { Upload } from 'app/models/_index';
import { GalleryUpload } from 'app/models/_index';
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

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }

  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)}
    )
  }

  saveGalleryUpload(form: NgForm) {
    this.uploadSingle();

    let mm: GalleryUpload = this.model;
    mm.url = 'test';
    
    this.af.saveGalleryUpload(mm);
    this.model = new GalleryUpload();

    form.reset();
  }

  

}