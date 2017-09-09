export class MailMessage {

    constructor(
      public key:string = '',
      public name: string = '',
      public email: string = '',
      public phone: string = '',
      public message: string = '',
      public date: string = '',
      public dateUnix: number = 0,
      public invertedDate: number = 0,
      public read: boolean = false
    ) {}
}
