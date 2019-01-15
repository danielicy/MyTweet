import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './loginmodule/home';
import { LoginComponent } from './loginmodule/login';
import { RegisterComponent } from './loginmodule/register';
import { AuthGuard } from './loginmodule/_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
