export class LiveChat {

      constructor(
        public key:string = '',
        public name: string = '',
        public email: string ='',
        public dateTime: string ='',
        public invertedDate: number = -1,
        public fromAdmin: boolean = false,
        public read: boolean = false
      ) {}
  }
  