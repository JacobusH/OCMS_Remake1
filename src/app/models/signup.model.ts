export class Signup {
  
      constructor(
        public key:string = '',
        public name: string = '',
        public email: string = '',
        public about: string = '',
        public instrument: string = '',
        public date: string = '',
        public dateUnix: number = 0,
        public invertedDate: number = 0,
        public read: boolean = false
      ) {}
  }
  