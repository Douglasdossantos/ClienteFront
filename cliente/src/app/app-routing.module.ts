import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AllComponent } from './page/all/all.component';
import { NewComponent } from './page/new/new.component';

const routes: Routes = [
  //{ path: "login", component: LoginComponent },
  {
    path: "", component: HomeComponent, children: [
      { path: '', component: AllComponent },
      { path: 'new', component: NewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
