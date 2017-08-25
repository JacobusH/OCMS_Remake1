export class MailMessage {

    constructor(
      public key:string,
      public name: string,
      public email: string,
      public phone: string,
      public message: string,
      public date: string,
      public invertedDate: number,
      public read: boolean
    ) {}
}
