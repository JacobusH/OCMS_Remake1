import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'app/providers/alert.service';
import { UserService } from 'app/providers/user.service';
import { User } from 'app/models/user.model';
import { SimpleUser } from 'app/models/simpleUser.model';
import { AF } from 'app/providers/af.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private model = new User( '', '', '', '', '');
  private isLoggedIn;
  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService,
      private af: AF) { }


    ngOnInit() {
      this.af.afAuth.authState.subscribe(user => {
          if(user) {
              this.isLoggedIn = true;
          }
          else {
            this.isLoggedIn = false;
          }
      });
    }

  saveUserEmailPassword() {
    this.af.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password)
    .then((authData) => {
      console.log("EMail auth data");
      console.log(authData);

      this.af.users.push(new SimpleUser(authData.uid, 'student'));

      this.af.loginWithEmail(this.model.email, this.model.password);
      // this.af.users.push(authData);
      this.router.navigate(['/']);
    })
    .catch(error => {
      this.alertService.error(error.message);      
    });
    
  }

  googleLogin() {
    this.af.loginWithGoogle().then(authData => {
      this.router.navigate(['']);
    });
  }

  facebookLogin() {
    this.af.loginWithFacebook().then(authData => {
      this.router.navigate(['']);
    })
    .catch(error => {
      console.log(error);
      this.alertService.error(error.message);
    });
  }

}
