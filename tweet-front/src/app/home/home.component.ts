
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../usermanagment/models/user';
import { UsersService, AuthenticationService } from '../usermanagment/services';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

}
