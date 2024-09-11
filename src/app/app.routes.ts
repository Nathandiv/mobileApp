import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { Component } from '@angular/core';
import { AboutComponent } from './Pages/about/about.component';
import { SettingsComponent } from './Pages/settings/settings.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'settings',component:SettingsComponent}

];
