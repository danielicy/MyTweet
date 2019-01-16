import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './loginmodule/home';
import { LoginComponent } from './loginmodule/login';
import { RegisterComponent } from './loginmodule/register';
import { AuthGuard } from './loginmodule/_guards';

import { TweetComponent } from './tweetmodule/tweet';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: TweetComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
