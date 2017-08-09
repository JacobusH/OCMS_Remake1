import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from 'app/animations/_index';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent implements OnInit {
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  constructor() { }

  ngOnInit() {
  }

}

