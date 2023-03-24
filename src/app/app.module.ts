import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './loggin-component/loggin.component';
import { TestComponent } from './test/test.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared-folder/spinner.component';
import { AlertModalComponent } from './loggin-component/alert-model/alert.component';


@NgModule({
  declarations: [AppComponent, LogginComponent,TestComponent,SpinnerComponent,AlertModalComponent],
  imports: [BrowserModule, ButtonModule, AppRoutingModule,InputTextModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
