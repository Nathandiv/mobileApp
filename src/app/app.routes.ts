import { LandingPpageComponent } from './Pages/landing-ppage/landing-ppage.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { Component } from '@angular/core';
import { AboutComponent } from './Pages/about/about.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { Error404Component } from './Pages/error404/error404.component';
import { AuthenticatorComponent } from './Pages/authenticator/authenticator.component';

export const routes: Routes = [
  {path:'',component:LandingPpageComponent},
  {path:'authentic',component:AuthenticatorComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'settings',component:SettingsComponent},
  {path:'**',component:Error404Component}
];
