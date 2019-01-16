import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


import { Tweet } from '../../_models';
import { TweetsService } from '../_services'; 

@Component({
    selector: 'app-tweet',
    templateUrl: 'tweet.component.html'
})
export class TweetComponent implements OnInit, OnDestroy {
    tweets: Tweet[] = [];

    constructor(
        private tweetsService: TweetsService       
    ) {
        
    }
   
    ngOnInit() {
        this.loadAllTweets();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        
    }

    private loadAllTweets() {
        this.tweetsService.getAll().pipe(first()).subscribe(tweets => {
            this.tweets = tweets;
        });
    }
  
}