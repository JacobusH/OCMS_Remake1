import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from 'app/models/user.model';
import { AF } from 'app/providers/af.service';
 
@Injectable()
export class UserService {
  constructor(private http: Http, private af:AF) { }

  getAll() {
      return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
      return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  createUser(user: User): boolean {
      // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    if(!this.af.isUserUnique(user)) {
      this.af.saveUser(user);
      return true;
    }
    else {
      return false;
      }
  }

  update(user: User) {
      // return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
      return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
      // create authorization header with jwt token
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }
}