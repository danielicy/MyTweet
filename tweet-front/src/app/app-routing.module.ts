import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';

import { LoginComponent, RegisterComponent } from '../app/usermanagment/components';

import { AuthGuard } from '../app/usermanagment/guards/auth.guard';

 
 const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
