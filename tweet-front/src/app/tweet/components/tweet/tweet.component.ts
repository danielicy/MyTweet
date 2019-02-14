import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


import { User } from '../../../usermanagment/models';
import { Tweet } from '../../models';
import { TweetService } from '../../services';

import { AlertService, AuthenticationService } from '../../../usermanagment/services';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
