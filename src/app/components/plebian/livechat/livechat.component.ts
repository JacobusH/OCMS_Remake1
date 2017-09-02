import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LiveChat, LiveChatMessage } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { slideUpDownAnimation, highlightAnimation } from 'app/animations/_index';
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
export class LivechatComponent implements OnInit {
  public liveChatMessages: FirebaseListObservable<any>;
  private model = new LiveChat();
  sessionRunning: boolean = false;
  currentChatKey: string;
  userName;
  userEmail;

  state = 'normal';
  slideState = 'up';

  constructor(private af: AF) { 
    this.liveChatMessages = this.af.liveChatMessages;
  }

  ngOnInit() {
  }

  saveInfo(f: NgForm) {
    var test:any = this.model;
    
    let liveChatToSave = new LiveChat('', this.model.name, this.model.email, '', -1, false, false);
    this.currentChatKey = this.af.saveLivechat(liveChatToSave);
    
    let liveChatMessageToSave = new LiveChatMessage('', this.currentChatKey, test.message, '', -1, false, false);
    this.af.saveLiveChatMessage(liveChatMessageToSave);

    

    this.model = new LiveChat();
    this.sessionRunning = true;
    f.reset();
  }

  sendMessage(msg: any) {
    let messageToSave = new LiveChatMessage('', this.currentChatKey, msg, '', -1, false, false);
    console.log(messageToSave);
    return this.af.saveLiveChatMessage(messageToSave);
  }

  toggleAnimationState() {
    this.slideState == 'down' ? this.slideState = 'up' : this.slideState = 'down';
  }


}
