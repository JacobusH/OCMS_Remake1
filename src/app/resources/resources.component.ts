import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource';
import { AF } from '../providers/af';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  private model = new Resource('', '',  '');


  constructor(private afService: AF) { }

  ngOnInit() {
  }

  saveResource() {
    this.afService.saveResource(this.model);
    // if (this.resourceForm.valid) {
    //   console.log("Form Submitted!");
    // }
  }

}
