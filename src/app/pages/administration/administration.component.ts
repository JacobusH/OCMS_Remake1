import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { UserService } from 'app/providers/user.service';
import { AF } from 'app/providers/af.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  public users: FirebaseListObservable<any>;

  constructor(private userService: UserService, private af: AF) { 
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
    this.users = this.af.users;
  }

  deleteUser(id: number) {
    
  }

  loadAllUsers() {
    // this.userService.getAll().subscribe(
    //   users => {
    //     this.users = users;
    //   }
    // );
  }

}
