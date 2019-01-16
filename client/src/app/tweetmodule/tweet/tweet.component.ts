import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


import { Tweet } from '../../_models';
import { TweetsService } from '../_services'; 

@Component({ templateUrl: 'tweet.component.html' })
export class TweetComponent implements OnInit, OnDestroy {
    tweets: Tweet[] = [];
   
    ngOnInit() {
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        
    }
  
}