import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { LogginComponent } from './login-component/login.component';
import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';
import { TimeTable } from './timetable-component/timetable.component';
import { AuthGuard } from './shared-folder/auth-guard';
import { AuthGuardTest } from './shared-folder/auth-guard-test';
import { SchoolSubject } from './school subject/school-subject.component';
import { Teachers } from './teachers.component/teachers.component';
import { TeachDescription } from './teach-description/teach-description.component';
import { TeachersList } from './teachers-list/teachers-list.component';
import { StudentGrades } from './student-grades/student-grades.component';
import { AddStudent } from './add-student/add-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogginComponent, canActivate: [AuthGuardTest] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'teachersList',
        component: TeachersList,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'timetable', component: TimeTable, canActivate: [AuthGuard] },
  {
    path: 'school-subjects',
    component: SchoolSubject,
    canActivate: [AuthGuard],
  },
  {
    path: 'teachers',
    component: Teachers,
    canActivate: [AuthGuard],
  },
  {
    path: 'name',
    component: TeachDescription,
    canActivate: [AuthGuard],
  },
  {
    path: 'grades',
    component: StudentGrades,
    canActivate: [AuthGuard],
  },
  {
    path:'addStudent',
    component: AddStudent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
