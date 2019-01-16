import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './loginmodule/_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './loginmodule/_components';
import { JwtInterceptor, ErrorInterceptor } from './loginmodule/_helpers';
import { HomeComponent } from './loginmodule/home';
import { LoginComponent } from './loginmodule/login';
import { RegisterComponent } from './loginmodule/register';

import { TweetComponent } from './tweetmodule/tweet';
import { TweeterComponent } from './tweetmodule/tweeter';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        TweetComponent,
        TweeterComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
