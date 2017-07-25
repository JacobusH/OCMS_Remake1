import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'app/providers/alert.service'
import { AuthenticationService } from 'app/providers/authentication.service';
import  { AF } from 'app/providers/af.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private af: AF) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  googleLogin() {
    this.af.loginWithGoogle().then(authData => {
      console.log(authData);
    });
  }

  facebookLogin() {
    this.af.loginWithFacebook().then(authData => {
      console.log(authData);
    })
    .catch(error => {
      console.log(error);
      this.alertService.error(error.message);
      // this.alertService.warning("If you tried signing in with Facebook, you may have already created an account with Google. Try siging in with Google.");
    });
  }

  logout() {
    this.af.logout();
  }

  // login() {
  //   this.loading = true;
  //   this.authenticationService.login(this.model.username, this.model.password)
  //     .subscribe(
  //       data => {
  //         this.router.navigate([this.returnUrl]);
  //       },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //         });
  // }
}
