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
  private model = new User('', '', '', '', '', '');
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
      this.saveEmailUser(authData, 'email', this.model.name);
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
      this.saveAuthUser(authData, 'google');
      this.router.navigate(['']);
    });
  }

  facebookLogin() {
    this.af.loginWithFacebook().then(authData => {
      this.saveAuthUser(authData, 'facebook');
      this.router.navigate(['']);
    })
    .catch(error => {
      console.log(error);
      this.alertService.error(error.message);
    });
  }

  saveAuthUser(authData: any, provider: string) {
    // does user already exist?
    // this.af.checkUserExists(authData.user.uid);
    
    let u = new User(authData.user.uid, authData.user.displayName, authData.user.email, '', 'student', provider);
    this.af.users.push(u);
  }

  saveEmailUser(authData: any, provider: string, emailName: string = null) {
    // does user already exist?
    // this.af.checkUserExists(authData.user.uid);
    
    let u = new User(authData.uid, emailName, authData.email, '', 'student', provider);
    this.af.users.push(u);
  }

} 