import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AF } from 'app/providers/af.service';
import { LiveChatStatusService } from 'app/providers/liveChatStatus.service';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { slideUpDownAnimation, highlightAnimation } from 'app/animations/_index';
import { LiveChat, LiveChatMessage } from 'app/models/_index';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.component.html',
  styleUrls: ['./livechat.component.css'],
  animations: [
    slideUpDownAnimation,
    highlightAnimation
  ]
})
export class LivechatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public liveChatMessages: FirebaseListObservable<any>; 
  private model = new LiveChat();
  sessionRunning: boolean = false;
  currentChatKey: string;
  public presence: string;
  userName;
  userEmail;

  state = 'normal';
  slideState = 'up';

  constructor(private af: AF, private lcService: LiveChatStatusService) { 
    this.liveChatMessages;
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

  saveInfo(f: NgForm) {
    var test:any = this.model;
    this.userEmail = this.model.email;
    this.userName = this.model.name;

    let chatMsg = new LiveChatMessage(test.message, this.af.getCurrentDateTime(), this.af.getInvertedDate(), false, false);
    let liveChatToSave = new LiveChat('', this.model.name, this.model.email, '', 0, -1, true, true, new Array<LiveChatMessage>(chatMsg));
    this.currentChatKey = this.af.saveLivechat(liveChatToSave);
    
    this.liveChatMessages = this.af.getLiveChatMessagesByParentKey(this.currentChatKey);
    console.log(this.liveChatMessages);


    this.model = new LiveChat();
    this.sessionRunning = true;
    f.reset();
  }

  sendMessage(msg: any) {
    this.af.addLiveChatMessage(this.currentChatKey, msg, false);
    this.liveChatMessages = this.af.getLiveChatMessagesByParentKey(this.currentChatKey);
  }

  markHasNewMessages() {
    this.af.markLiveChatUnreadMessage(this.currentChatKey, true);
  }

  toggleAnimationState() {
    this.slideState == 'down' ? this.slideState = 'up' : this.slideState = 'down';
  }


}
