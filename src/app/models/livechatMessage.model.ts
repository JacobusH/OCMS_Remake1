export class LiveChatMessage {
  
        constructor(
          public message: string = '',
          public dateTime: string ='',
          public invertedDate: number = -1,
          public fromAdmin: boolean = false,
          public read: boolean = false
        ) {}
    }
    