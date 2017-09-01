export class LiveChatMessage {
  
      constructor(
        public key:string,
        public parentKey: string,
        public message: string,
        public dateTime: string,
        public invertedDate: number,
        public fromAdmin: boolean,
        public read: boolean
      ) {}
  }
  