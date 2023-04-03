import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './auth.service';
import { LogginComponent } from './loggin-component/loggin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  show = false;
  a: string[] = [];
  title = 'Online Catalog';
  constructor(private auth: AuthService) {}
  ngOnInit() {}
}
