import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


import { Tweet } from '../../_models';
import { TweetsService } from '../_services';
import { AlertService  } from '@/_services';

@Component({
    selector: 'app-tweeter',
    templateUrl: 'tweeter.component.html'
})
export class TweeterComponent implements OnInit, OnDestroy {
    loading = false;
    submitted = false;

    constructor(
        private tweeterService: TweetsService,
        private alertService: AlertService
       
    ) {

    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks

    }


    tweet(content: string): void {
        content = content.trim();
        if (!content) { return; }
       
        this.tweeterService.tweet({ content } as Tweet)
            .subscribe(data => {
                this.alertService.success('What a Tweet!!', true);
            },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
             

    }

        
     

}