import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutUsPage } from './about-us-page/about-us-page';
import { ContactPage } from './contact-page/contact-page';
import { LoginPage } from './login-page/login-page';
import { DemoPage } from './demo-page/demo-page';
import { DashboardPage } from './dashboard-page/dashboard-page';
import { AddTagPage } from './add-tag-page/add-tag-page';
import { PetProfilePage } from './pet-profile-page/pet-profile-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutUsPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'demo',
    component: DemoPage,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  { path: 'add-tag', component: AddTagPage },
  { path: 'pet/:id', component: PetProfilePage },
];
