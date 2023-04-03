import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { LogginComponent } from './loggin-component/loggin.component';
import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogginComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
