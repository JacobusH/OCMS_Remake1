import { LiveChatMessage } from 'app/models/liveChatMessage.model';

export class LiveChat {

      constructor(
        public key:string = '',
        public name: string = '',
        public email: string ='',
        public dateTime: string ='',
        public dateUnix: number = 0,
        public invertedDate: number = -1,
        public active: boolean = false,
        public hasUnreadMessage: boolean = true,
        public messages: Array<LiveChatMessage> = []
      ) {}
  }
  