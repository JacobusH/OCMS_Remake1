import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-plus',
  templateUrl: './menu-plus.component.html',
  styleUrls: ['./menu-plus.component.css']
})
export class MenuPlusComponent implements OnInit {
  @Input() menuItems: Array<string>;


  constructor() { }

  ngOnInit() {
  }

}
