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
     

    constructor(
       
    ) {

    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks

    }

     

}