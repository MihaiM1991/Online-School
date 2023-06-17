import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared-folder/auth.service';

@Component({
  selector: 'loggin-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LogginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  isLogin: boolean = true;
  isLoading: boolean = false;
  isError: string = '';
  onSwitch() {
    this.isLogin = !this.isLogin;
  }
  submit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    if (!form.value) {
      return;
    }
    this.isLoading = true;
    if (this.isLogin) {
      this.auth.loginMethod(email, password).subscribe(
        (response) => {
          this.isLoading = false;
          this.router.navigate(['/home']);
        },
        (errormessages) => {
          this.isLoading = false;
          this.isError = errormessages;
        }
      );
    } else {
      this.auth.signUp(email, password).subscribe(
        (response) => {
          this.isLoading = false;
          this.router.navigate(['/home']);
        },
        (errormessages) => {
          this.isLoading = false;
          this.isError = errormessages;
          console.log(errormessages);
        }
      );
    }

    form.reset();
  }
}
