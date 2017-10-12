import { Component, OnInit } from '@angular/core';
import { Teacher } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  private model = new Teacher();

  constructor(private af: AF) { }

  ngOnInit() {
  }

  saveTeacher(form: NgForm) {
    let toSave: Teacher = new Teacher()
    console.log('new teacher: ', this.model);
    this.af.saveTeacher(this.model);
    form.reset();
  }


}
