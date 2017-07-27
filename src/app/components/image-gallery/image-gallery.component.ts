import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { GalleryImage } from 'app/models/galleryImage.model';
import { ImageService } from 'app/providers/image.service';
import { AF } from 'app/providers/af.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnChanges {
  @Input() filterBy?: string = 'all';
  title = "Recent Photos";
  // visibleImages: GalleryImage[] = [];
  visibleImages;

  constructor(private imageService: ImageService, private af: AF) { 
    // this.visibleImages = this.imageService.getImages();  
    this.visibleImages = this.af.gallery;  
  }

  ngOnChanges() {
    // this.visibleImages = this.imageService.getImages();
    this.visibleImages = this.af.gallery;
  }

}
