import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from 'app/providers/upload.service';
import { Upload } from 'app/models/_index';
import { GalleryUpload } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import * as _ from "lodash";
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
  selector: 'app-form-gallery-item-upload',
  templateUrl: './form-gallery-item-upload.component.html',
  styleUrls: ['./form-gallery-item-upload.component.css']
})
export class FormGalleryItemUploadComponent {

  selectedFiles: FileList;
  currentUpload: Upload;
  private model = new GalleryUpload();

  constructor(private upSvc: UploadService, private af: AF) { }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingleGalleryItem() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushGalleryUpload(this.currentUpload, 'gallery', this.model);
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
    mm.categories = mm.categories.toUpperCase();
    mm.itemUrl = 'gallery/' + fileName;
    
    this.af.addToGalleryCount();
    // this.af.saveGalleryUpload(mm);
    this.model = new GalleryUpload();

    form.reset();
  }

}
