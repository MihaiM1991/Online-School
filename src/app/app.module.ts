import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './loggin-component/loggin.component';
import { HomeComponent } from './home-component/home.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SpinnerComponent } from './shared-folder/spinner.component';
import { AlertModalComponent } from './loggin-component/alert-model/alert.component';
import { HeaderComponent } from './header-component/header.component';
import { AboutComponent } from './about-component/about.component';
import { TimeTable } from './timetable-component/timetable.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { TableModule } from 'primeng/table';
import { disciplines } from './disciplines-component/disciplines.component';




@NgModule({
  declarations: [AppComponent, LogginComponent,HomeComponent,SpinnerComponent,AlertModalComponent,HeaderComponent,AboutComponent,TimeTable,disciplines],
  imports: [BrowserModule,TableModule, ButtonModule, AppRoutingModule,InputTextModule,FormsModule,HttpClientModule,GoogleMapsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
