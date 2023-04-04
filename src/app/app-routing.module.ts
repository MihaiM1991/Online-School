import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { LogginComponent } from './loggin-component/loggin.component';
import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';
import { TimeTable } from './timetable-component/timetable.component';
import { AuthGuard } from './shared-folder/auth-guard';
import { AuthGuardTest } from './shared-folder/auth-guard-test';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogginComponent,canActivate:[AuthGuardTest]},
  {path: 'home',component: HomeComponent,canActivate:[AuthGuard]},
  { path: 'header', component: HeaderComponent,canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'timetable', component: TimeTable,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
