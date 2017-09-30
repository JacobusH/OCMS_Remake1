import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';


  constructor() { }

  ngOnInit() {
  }

  savePlayer (player) {
    this.player = player; 
    console.log('player instance', player);
  }

  onreadystatechange(event) {
    console.log('player stat', event.data);
  }

}
