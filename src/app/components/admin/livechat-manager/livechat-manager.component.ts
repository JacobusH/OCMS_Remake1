import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LiveChat } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { slideUpDownAnimation, highlightAnimation } from 'app/animations/_index';
import {MdMenuModule, MdButtonModule, MdIconModule} from '@angular/material';

@Component({
  selector: 'app-livechat-manager',
  templateUrl: './livechat-manager.component.html',
  styleUrls: ['./livechat-manager.component.css']
})
export class LivechatManagerComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public currentLiveChat: FirebaseListObservable<any>;
  public activeLiveChats: FirebaseListObservable<any>;
  public currentLiveChatMessages: FirebaseListObservable<any>;
  currentLiveChatKey: string;
  menuKey: string;
  private model = new LiveChat();
  sessionRunning: boolean = false;
  userName;
  userEmail;

  state = 'normal';
  slideState = 'down';

  constructor(private af: AF) { 
    this.activeLiveChats = this.af.getActiveLiveChats();
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }
    catch (err) {}
  }

  setCurrentLiveChat(key: string) {
    this.currentLiveChatKey = key;
    this.currentLiveChat = this.af.getLiveChatByKey(key);
    this.setCurrentLiveChatMessages(key);
  }

  setCurrentLiveChatMessages(parentKey: string) {
    this.currentLiveChatMessages = this.af.getLiveChatMessagesByParentKey(parentKey);
  }

  sendMessage(msg: any) {
    this.af.addLiveChatMessage(this.currentLiveChatKey, msg, true);
  }

  setMenuLivechatKey(key: string) {
    this.menuKey = key;
  }

  markInactive() {
    this.af.markLiveChatAsInactive(this.menuKey);
  }

  deleteLivechat() {
    this.af.deleteLiveChat(this.menuKey);
  }

  
}
