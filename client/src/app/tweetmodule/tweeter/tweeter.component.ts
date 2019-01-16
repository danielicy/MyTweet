import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
 


import { Tweet, User } from '../../_models';
import { TweetsService } from '../_services';

 
import { AlertService, AuthenticationService  } from '@/_services';

@Component({
    selector: 'app-tweeter',
    templateUrl: 'tweeter.component.html'
})
export class TweeterComponent implements OnInit, OnDestroy {
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
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks

    }


    tweet(content: string): void {
        content = content.trim();
        if (!content) { return; }

        this.tweeterService.tweet({ content, username : this.currentUser.username } as Tweet)
            .subscribe(data => {
                this.alertService.success('What a Tweet!!', true);
            },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
             

    }

        
     

}