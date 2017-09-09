import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class LiveChatStatusService {
  public liveChatPresence: string;  
  
  constructor() {
    this.liveChatPresence = 'away';
  }

  setHere() {
    this.liveChatPresence = 'here';
  }

  setAway() {
    this.liveChatPresence = 'away';
  }

}