import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { LogginComponent } from './login-component/login.component';
import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';
import { TimeTable } from './timetable-component/timetable.component';
import { AuthGuard } from './shared-folder/auth-guard';
import { AuthGuardHome } from './shared-folder/auth-guard-home';
import { SchoolSubject } from './school subject/school-subject.component';
import { Teachers } from './teachers.component/teachers.component';
import { TeachDescription } from './teach-description/teach-description.component';
import { TeachersList } from './teachers-list/teachers-list.component';
import { StudentGrades } from './student-grades/student-grades.component';
import { AddStudent } from './add-student/add-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogginComponent, canActivate: [AuthGuardHome] },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'teachersList',
        component: TeachersList,
        canActivate: [AuthGuard],
        data: { breadcrumb: 'teachersList' }
      },
    ],
  },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent,data: { breadcrumb: 'About' } },
  { path: 'timetable', component: TimeTable,data: { breadcrumb: 'Timetable' }, canActivate: [AuthGuard] },
  {
    path: 'school-subjects',
    component: SchoolSubject,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'School-Subjects' }
  },
  {
    path: 'teachers',
    component: Teachers,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Teachers' }
  },
  {
    path: 'name',
    component: TeachDescription,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Name' }
  },
  {
    path: 'grades',
    component: StudentGrades,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Grades' }
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
