import { Component, OnInit } from '@angular/core';
import { ImageService } from 'app/providers/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-gallery-detail',
  templateUrl: './image-gallery-detail.component.html',
  styleUrls: ['./image-gallery-detail.component.css']
})
export class ImageGalleryDetailComponent implements OnInit {
  image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    );
  }

}
