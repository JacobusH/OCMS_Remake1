import {Injectable, Input} from '@angular/core';
import { GalleryImage } from 'app/models/galleryImage.model';

@Injectable()
export class ImageService {
  visibleImages: GalleryImage[] = [];
  galleryImages: GalleryImage[] = [];

  constructor() {
    for(var i = 1; i <= 100; i++)
    {
      var cat: string = (i % 2 == 0) ? "boats" : "trees";
      this.galleryImages.push(new GalleryImage(i, cat, cat, "assets/img/gallery/GalleryPhoto (" + i + ").jpg"));
    }
  }

  getImages() {
    return this.visibleImages = this.galleryImages.slice(0);
  }

  getImage(id: number) {
    return this.galleryImages.slice(0).find(image => image.id == id);
  }

}
