import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


import { Tweet } from '../../_models';
import { TweetsService } from '../_services';

@Component({
    selector: 'app-tweeter',
    templateUrl: 'tweeter.component.html'
})
export class TweeterComponent implements OnInit, OnDestroy {
    loading = false;
    submitted = false;

    constructor(
        private tweeterService: TweetsService
       
    ) {

    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks

    }


    add(content: string): void {
        this.submitted = true;
        this.tweeterService.tweet(content)
            .pipe(first())
                .subscribe(
                    data => {
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;* /
                    }
    }


     

}