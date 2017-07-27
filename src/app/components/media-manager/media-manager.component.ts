import { Component, OnInit } from '@angular/core';
import { GalleryImage } from 'app/models/galleryImage.model';
import { AF } from 'app/providers/af.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.css']
})
export class MediaManagerComponent implements OnInit {
  // gallery: any;
  private model = new GalleryImage(-1, '',  '', '');

  constructor(private af: AF) { 
    // this.gallery = this.af.gallery;
  }

  ngOnInit() {
  }

  saveMedia() {
    // find next item id available
    // var nextId = this.af.getNextAvailableGalleryId();
    var lastItem = this.af.getMostRecentGalleryItem().subscribe(x => {
      // console.log("from sub");      
      // console.log(x);   
      // console.log(x[0]);   
      // console.log(x[0].id);   
       
      var itemToAdd = new GalleryImage((+x[0].id + 1), this.model.category, this.model.caption, this.model.url);
      this.af.saveGalleryItem(itemToAdd);
      
    });

    // var itemToAdd = new GalleryImage(1, this.model.category, this.model.caption, this.model.url);
    //   this.af.saveGalleryItem(itemToAdd);
  }

  modifyItem(item: GalleryImage) {
    var itemToChange = this.af.getGalleryItem(item.id);
    itemToChange.update(item);
  }

  deleteItem(item: GalleryImage) {
    this.af.getGalleryItem(item.id).remove();
  }

}
