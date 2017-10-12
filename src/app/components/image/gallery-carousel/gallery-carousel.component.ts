import { Component, OnInit, Input } from '@angular/core';
import { ImageInterface } from 'app/interfaces/galleryImage.interface';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.css']
})
export class GalleryCarouselComponent implements OnInit {
  @Input() myImages: ImageInterface[] = [];
  @Input() homeSlider: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
