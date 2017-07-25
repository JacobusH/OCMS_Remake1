import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from 'app/animations/fade-in.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInAnimation]
})
export class AboutComponent implements OnInit {
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  constructor() { }

  ngOnInit() {
  }

}

