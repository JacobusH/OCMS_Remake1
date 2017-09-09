import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GalleryImage } from 'app/models/galleryImage.model';
import { ImageService } from 'app/providers/image.service';
import { AF } from 'app/providers/af.service';
import { apparateTrigger } from 'app/animations/apparate.animation';

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
  loadingTotal: number = 50; // total imgs stored in 'all'
  isShown: boolean = false;

  constructor(private imageService: ImageService, private af: AF, private sanitizer: DomSanitizer) { 
    this.visibleImages = this.af.galleryDesc;
  }

  ngOnChanges() {
    this.visibleImages = this.af.galleryDesc;
  }

  ngOnInit() {
     this.af.galleryDesc.subscribe(img => {
      this.loadedImages.push(img);
    })
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
