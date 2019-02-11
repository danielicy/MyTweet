import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  

  getAll() {

    return this.http.get<User[]>(environment.appUrl + `/users`);
  }

  getById(id: number) {
    return this.http.get(environment.appUrl + `/users/${id}`);
  }

  register(user: User) {
    return this.http.post(environment.appUrl + `/users/register`, user);
  }

  update(user: User) {
    return this.http.put(environment.appUrl + `/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(environment.appUrl + `

/users/${id}`);
  }
}
