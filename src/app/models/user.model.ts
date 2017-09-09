export class User {

    constructor(
      public authID: string,
      public key: string,
      public name: string,
      public email: string,
      public password: string,
      public role: string,
      public authMethod: string
    ) {}
}