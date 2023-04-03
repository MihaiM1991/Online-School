import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticate = false;
  userNew="";
  localUser = '';
  userName = '';
  x:[]=[];

  constructor(private authCheck: AuthService,private router:Router) {}
  ngOnInit() {
    this.authCheck.userNew.subscribe((user) => {
      this.isAuthenticate = !!user;
      this.localUser = user.email;
      this.userName = this.localUser.slice(0, this.localUser.indexOf('@'));
      // console.log(this.userName.split(".").join(" ")[0].toUpperCase);
      let x = this.userName.split('.');
      for (let i = 0; i < x.length; i++) {
        x[i] = x[i][0].toUpperCase() + x[i].substr(1);
      }
      this.userNew=x.join(' ');
    });
  }
  rutare(){
    this.router.navigate(['/about'])
  }
}
