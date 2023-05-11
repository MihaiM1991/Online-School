import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './login-component/login.component';
import { HomeComponent } from './home-component/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { SpinnerComponent } from './shared-folder/spinner.component';
import { AlertModalComponent } from './login-component/alert-model/alert.component';
import { HeaderComponent } from './header-component/header.component';
import { AboutComponent } from './about-component/about.component';
import { TimeTable } from './timetable-component/timetable.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { TableModule } from 'primeng/table';
import { SchoolSubject } from './school subject/school-subject.component';
import { Teachers } from './teachers.component/teachers.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TeachDescription } from './teach-description/teach-description.component';
import { TeachersList } from './teachers-list/teachers-list.component';
import { StudentGrades } from './student-grades/student-grades.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'primeng/dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddStudent } from './add-student/add-student.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    HomeComponent,
    SpinnerComponent,
    AlertModalComponent,
    HeaderComponent,
    AboutComponent,
    TimeTable,
    SchoolSubject,
    Teachers,
    TeachDescription,
    TeachersList,
    StudentGrades,
    AddStudent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    YouTubePlayerModule,
    CalendarModule,
    NoopAnimationsModule,
    DropdownModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
