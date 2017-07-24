import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'app/providers/alert.service';
import { UserService } from 'app/providers/user.service';
import { User } from 'app/models/user.model';
import { AF } from 'app/providers/af.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  private model = new User('',  '', '', '', '', '');
  loading = false;

  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService,
      private af: AF) { }

  register() {
    this.loading = true;
    if(this.userService.createUser(this.model)) {
      this.alertService.success('Registration successful', true);
      this.router.navigate(['/login']);
    }
    else {
      this.alertService.error("Unable to create user, the email address is already used.");
      this.loading = false;
    }
  }

  saveUser() {
    var userToSave = new User(this.model.firstName, this.model.lastName, this.model.email, this.model.password, '', '');

    userToSave.role = 'student';
    userToSave.authMethod = 'email';

    console.log('new user: ', this.model);
    this.userService.createUser(userToSave);
  }



}
