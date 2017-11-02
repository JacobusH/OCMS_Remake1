import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { UserService } from 'app/providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: boolean = false;

  private lastPoppedUrl: string;
  
  constructor(private router: Router, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
  this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url == this.lastPoppedUrl)
          this.lastPoppedUrl = undefined;
        else
          window.scrollTo(0, 0);
      }
    });

    this.userService.getIsLoggedIn();
    this.isLoggedIn = this.userService.isLoggedIn;
  }

}
