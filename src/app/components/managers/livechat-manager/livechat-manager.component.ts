import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LiveChat } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import { LiveChatStatusService } from 'app/providers/liveChatStatus.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { slideUpDownAnimation, highlightAnimation } from 'app/animations/_index';
import {MatMenuModule, MatButtonModule, MatIconModule} from '@angular/material';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-livechat-manager',
  templateUrl: './livechat-manager.component.html',
  styleUrls: ['./livechat-manager.component.css']
})
export class LivechatManagerComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Input() activeFilterBy?: string = 'all';
  public currentLiveChat: FirebaseListObservable<any>;
  public activeLiveChats: FirebaseListObservable<any>;
  public currentLiveChatMessages: FirebaseListObservable<any>;
  public currentLiveChatKey: string;
  public menuKey: string;
  public presence: string = 'away';
  private model = new LiveChat();
  public sessionRunning: boolean = false;
  public hasNewMessages: boolean = false;
  public userName;
  public userEmail;
  public daterange: any = {};
  public dateInputs: any = [{start: moment().subtract(6, 'month'),end: moment()}];
  public mainInput = {start: moment().subtract(12, 'month'),end: moment().subtract(6, 'month')}
  public options: any = {locale: { format: 'YYYY-MM-DD' },alwaysShowCalendars: false,};
  public activeFilter = [
    {value: 'all', viewValue: 'All'},  
    {value: 'Active', viewValue: 'Active'},  
    {value: 'Inactive', viewValue: 'Inactive'}
  ];
  public activeSelectedValue;
  public state = 'normal';
  public slideState = 'down';

  constructor(private af: AF, private lcService: LiveChatStatusService) { 
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
    this.currentLiveChat.subscribe(x => {
      this.hasNewMessages = x[4].$value;
    })
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

  markNoNewMessages() {
    this.af.markLiveChatUnreadMessage(this.currentLiveChatKey, false);
  }

  deleteLivechat() {
    this.af.deleteLiveChat(this.menuKey);
  }

  activeFilterClicked(filterApplied: string) {
    this.activeFilterBy = filterApplied; 
  }

  togglePresence() {
    this.presence = this.lcService.liveChatPresence = (this.lcService.liveChatPresence === 'away') ? 'here' : 'away';
  }

  private selectedDate(value: any, dateInput: any) {
    dateInput.start = value.start;
    dateInput.end = value.end;

    this.activeLiveChats = this.af.getLiveChatsByDateRange(value.start, value.end);
  }

  
}
