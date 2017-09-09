import { Component, OnInit } from '@angular/core';
import { AF } from 'app/providers/af.service';
import { UserService } from 'app/providers/user.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { apparateTrigger } from 'app/animations/apparate.animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    animations: [
    apparateTrigger
  ]
})
export class HeaderComponent implements OnInit {
  isIn = false;
  state: string = 'in';
  isLoggedIn = false;
  isAdmin = false;
  currentUser: any;

  constructor(private af:AF, private userService: UserService) { }

  ngOnInit() {
    // get user logged in state
    this.af.afAuth.authState.subscribe(user => {
          if(user) {
              this.currentUser = user;
              this.isLoggedIn = true;
              // this.isAdmin = this.af.getUserRoles(user);
              // console.log("Logged in user is: " + user.email);
              // console.log("User photo: " + user.providerData[0].photoURL);
              // console.log("User name: " + user.providerData[0].displayName);
              // console.log(user);
          }
          else {
            this.currentUser = {};
            this.isLoggedIn = false;
          }
      });

  }

  toggleState() {
    // this.isIn = !this.isIn;
    let bool = this.isIn;
    this.isIn = bool === false ? true : false; 
  }

  logout() {
    this.af.logout();
  }

}
