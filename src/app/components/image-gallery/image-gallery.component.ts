import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GalleryImage } from 'app/models/galleryImage.model';
import { ImageService } from 'app/providers/image.service';
import { AF } from 'app/providers/af.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  animations: [
    trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
]
})
export class ImageGalleryComponent implements OnChanges, OnInit {
  @Input() filterBy?: string = 'all';
  title = "Recent Photos";
  // visibleImages: GalleryImage[] = [];
  visibleImages;

  public loaded = false;
  public fadeInState = 'in';
  public fadeOutState = 'out';
  private _placeholderBase64 = `data:image/jpeg;base64,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`;
  private _placeholderImg = "/assets/bg-low.jpg";
  private _imgSafe: SafeUrl;
  private _placeHolderSafe: SafeUrl;

  constructor(private imageService: ImageService, private af: AF, private sanitizer: DomSanitizer) { 
    // this.visibleImages = this.imageService.getImages();  
    this.visibleImages = this.af.gallery;  
  }

  public get placeholder() {
    return this._placeHolderSafe;
  }

  public get image() {
    return this._imgSafe;
  }

  ngOnChanges() {
    // this.visibleImages = this.imageService.getImages();
    this.visibleImages = this.af.gallery;
  }

  ngOnInit() {
    this._placeHolderSafe = this.sanitizer.bypassSecurityTrustUrl(this._placeholderBase64);
    this._imgSafe = this.sanitizer.bypassSecurityTrustUrl("/assets/img/music-logo.svg");
  }

  public isLoaded(event: Event) {
    this.loaded = true;
    this.fadeInState = 'out';
    this.fadeOutState = 'in';

    console.log("loading img");
    console.log(event);
  }

}
