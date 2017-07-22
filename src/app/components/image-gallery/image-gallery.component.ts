import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { GalleryImage } from 'app/models/galleryImage.model';
import { ImageService } from 'app/providers/image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnChanges {
  @Input() filterBy?: string = 'all';
  title = "Recent Photos";
  visibleImages: GalleryImage[] = [];

  constructor(private imageService: ImageService) { 
    this.visibleImages = this.imageService.getImages();    
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
