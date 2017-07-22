import { Component, OnInit } from '@angular/core';
import { Image } from 'app/interfaces/image.interface';

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "Private Music Lessons", "url": "../assets/img/HomeSlider_Piano.jpg", "color": "white" },
  { "title": "Professional and Fun Environment", "url": "../assets/img/HomeSlider_Guitar.jpg", "color": "white" },
  { "title": "Recitals offered", "url": "../assets/img/HomeSlider_Violin.jpg", "color": "white" },
  { "title": "Learn any Insturment", "url": "../assets/img/HomeSlider_Kids.jpg", "color": "black" }
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
