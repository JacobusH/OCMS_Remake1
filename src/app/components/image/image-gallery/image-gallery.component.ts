import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GalleryImage } from 'app/models/galleryImage.model';
import { ImageService } from 'app/providers/image.service';
import { AF } from 'app/providers/af.service';
import { apparateTrigger } from 'app/animations/apparate.animation';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  animations: [
    apparateTrigger
  ]
})
export class ImageGalleryComponent implements OnChanges, OnInit {
  @Input() filterBy?: string = 'all';
  title = "Recent Photos";
  state: string = 'in';
  visibleImages;
  loadedImages: GalleryImage[] = [];
  doneLoading: boolean = false;
  loadingPercent: number = 0;
  loadingCount: number = 0;
  loadingTotal: number = 30; // total imgs stored in 'all'
  isShown: boolean = false;
  filterOptions: Array<string> = [];

  constructor(private imageService: ImageService, private af: AF, private sanitizer: DomSanitizer, public db: AngularFireDatabase) { 
    // this.visibleImages = this.af.galleryDesc;
    this.visibleImages = this.af.galleryUploadsDesc;
  }

  ngOnChanges() {
    // this.visibleImages = this.af.galleryDesc;
    this.visibleImages = this.af.galleryUploadsDesc;
  }

  ngOnInit() {
    var cnt = this.db.object('/galleryUploadCount/' , { preserveSnapshot: true }).take(1);
    cnt.subscribe(x => {
      this.loadingTotal = x.val().count;
    });

    this.af.galleryUploadsDesc.subscribe(img => {
      this.loadedImages.push(img);
      
      for(var i = 0; i < img.length; i++) {
        let splits = img[i].categories.split(',');
        for(var j = 0; j < splits.length; j++) {
          var element = splits[j].replace(/\s/g, '');
          if(this.filterOptions.indexOf(element) === -1) {
            this.filterOptions.push(element);
          }
        }
      }

    });

  }

  filterClicked(filterApplied: string) {
     this.filterBy = filterApplied; 
  }

  public isLoaded(event: Event) {
    this.loadingCount += 1;

    this.loadingPercent = (this.loadingCount / this.loadingTotal) * 100;
    if(this.loadingPercent == 100) {
      this.doneLoading = true;
    }
    // console.log("loading img" + this.loadingPercent);
    // console.log(event);
  }

}
