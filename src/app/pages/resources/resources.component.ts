import { Component, OnInit } from '@angular/core';
import { Resource } from 'app/models/resource.model';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  private model = new Resource('', '',  '');
  public resources: FirebaseListObservable<any>;

  constructor(private afService: AF) { }

  ngOnInit() {
    this.resources = this.afService.resources;
  }

  saveResource() {
    this.afService.saveResource(this.model);
    // if (this.resourceForm.valid) {
    //   console.log("Form Submitted!");
    // }
  }

}
