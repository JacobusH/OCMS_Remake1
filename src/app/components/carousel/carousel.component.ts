import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces/image.interface';

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "We are covered", "url": "../assets/img/HomeSlider_Piano.jpg" },
  { "title": "We are covered", "url": "../assets/img/HomeSlider_Guitar.jpg" },
  { "title": "We are covered", "url": "../assets/img/HomeSlider_Violin.jpg" },
  { "title": "We are covered", "url": "../assets/img/HomeSlider_Kids.jpg" }
];

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public images = IMAGES;

  

  constructor() { }

  ngOnInit() {
  }

}
