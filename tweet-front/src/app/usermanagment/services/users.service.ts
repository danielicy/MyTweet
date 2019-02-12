import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  appUrl = environment.appUrl;

  getAll() {

    return this.http.get<User[]>(this.appUrl + `/users`);
  }

  getById(id: number) {
    return this.http.get(this.appUrl + `/users/${id}`);
  }

  register(user: User) {
    return this.http.post(this.appUrl + `/users/register`, user);
  }

  update(user: User) {
    return this.http.put(this.appUrl + `/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(this.appUrl + `/users/${id}`);
  }
}
