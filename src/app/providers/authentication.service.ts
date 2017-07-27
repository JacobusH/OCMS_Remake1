import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AF } from 'app/providers/af.service';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private af: AF) { }
 
  //   loginWithGoogle() {
  //   return this.af.auth.login({
  //     provider: AuthProviders.Google,
  //     method: AuthMethods.Popup
  //   });
  // }

  // logout() {
  //   return this.af.auth.logout();
  // }

}