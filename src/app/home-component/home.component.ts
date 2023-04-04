import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared-folder/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  local: string = null;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {

    this.local = this.auth.userName.email;
  }
}
