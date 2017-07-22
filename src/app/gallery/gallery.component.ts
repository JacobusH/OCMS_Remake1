import { Component, OnInit } from '@angular/core';
import { ImageInterface } from '../interfaces/galleryImage.interface';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  myImages: ImageInterface[] = [];
  private _albums: Array<{"src": string, "caption": string, "thumb": string}> = [];


  constructor(private _lightbox: Lightbox) { 
    for(var i = 1; i <= 100; i++)
    {
        const src = '../assets/img/gallery/GalleryPhoto (' + i + ').jpg';
        const caption = 'test caption';
        const thumb = 'demo/img/image' + i + '-thumb.jpg';

        this.myImages.push({"thumbnail": '../assets/img/gallery/GalleryPhoto (' + i + ').jpg', "image": '../assets/img/gallery/GalleryPhoto (' + i + ').jpg', "text": ""});
        this._albums.push({"src": src, "caption": 'test', "thumb": src});
    }

  }

  ngOnInit() {
  }

  open(index: number): void {
    // open lightbox 
    this._lightbox.open(this._albums, index);
    // this._lightbox.open(this.myImages, index);
  }

}
