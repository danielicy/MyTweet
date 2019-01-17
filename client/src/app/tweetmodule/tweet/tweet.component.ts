import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


import { Tweet, User } from '../../_models';
import { TweetsService } from '../_services'; 

import { AlertService, AuthenticationService } from '@/_services';

@Component({
    selector: 'app-tweet',
    templateUrl: 'tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit, OnDestroy {
    msg: Tweet;   
     
    tweets: Tweet[] = [];

    currentUser: User;
    currentUserSubscription: Subscription;
    loading = false;
    submitted = false;

    constructor(
        private authenticationService: AuthenticationService,
        private tweeterService: TweetsService,
        private alertService: AlertService     
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
        
    }
   
    ngOnInit() {
        this.loadAllTweets();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        
    }

    private loadAllTweets() {
        this.tweeterService.getAll().pipe(first()).subscribe(tweets => {
            this.tweets = tweets;
        });
    }

     loadTweetsIFollow(): void {
         this.tweeterService.getById(this.currentUser.id).pipe(first()).subscribe(tweets => {            
             this.tweets = tweets;
        });
    }

    tweet(content: string): void {
        content = content.trim();
        if (!content) { return; }

        this.tweeterService.tweet({ content, userid: this.currentUser.id } as Tweet)
            .subscribe(data => {
                this.alertService.success('What a Tweet!!', true);
                this.tweets.push({ username: this.currentUser.username  ,content, userid: this.currentUser.id} as Tweet);
            },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });


    }
  
}