import { LiveChatMessage } from 'app/models/liveChatMessage.model';

export class LiveChat {

      constructor(
        public key:string = '',
        public name: string = '',
        public email: string ='',
        public dateTime: string ='',
        public invertedDate: number = -1,
        public active: boolean = false,
        public messages: Array<LiveChatMessage> = []
      ) {}
  }
  