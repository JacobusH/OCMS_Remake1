export class TeacherUpload { 
  
        constructor(
          public key:string = '',
          public name:string = '',
          public descriptionHTML: string = '',
          public qualifications: string = '',
          public instrument: string = '',
          public itemUrl: string = '',
          public isActive: boolean = true
        ) {}
    }
    