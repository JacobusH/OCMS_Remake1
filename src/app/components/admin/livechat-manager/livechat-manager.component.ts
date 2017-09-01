import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LiveChat } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { slideUpDownAnimation, highlightAnimation } from 'app/animations/_index';

@Component({
  selector: 'app-livechat-manager',
  templateUrl: './livechat-manager.component.html',
  styleUrls: ['./livechat-manager.component.css']
})
export class LivechatManagerComponent implements OnInit {
  public currentActiveLiveChats: FirebaseListObservable<any>;
  public currentLiveChatMessages: FirebaseListObservable<any>;
  private model = new LiveChat();
  sessionRunning: boolean = false;
  userName;
  userEmail;

  state = 'normal';
  slideState = 'down';

  constructor(private af: AF) { 
    this.currentActiveLiveChats = this.af.liveChats;
  }

  ngOnInit() {
  }

  setViewableConvoLiveChatMessages(liveChatKey: string) {
    return this.af.getLiveChatMessagesByParentKey(liveChatKey);
  }

  sendMessage(msg: any) {
    this.af.saveLivechat
    console.log(msg);
  }
}
