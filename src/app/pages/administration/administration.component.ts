import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { UserService } from 'app/providers/user.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(
      () => {
        this.loadAllUsers();
      }
    );
  }

  loadAllUsers() {
    this.userService.getAll().subscribe(
      users => {
        this.users = users;
      }
    );
  }

}
