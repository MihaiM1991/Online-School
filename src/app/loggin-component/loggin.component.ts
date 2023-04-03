import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'loggin-component',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss'],
})
export class LogginComponent {
  constructor(private auth: AuthService,private router:Router) {}
  isLogin = true;
  isLoading = false;
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
          // console.log(response);
          this.isLoading = false;
          this.router.navigate(['/home'])
        },
        (errormessages) => {
          this.isLoading = false;
          this.isError = errormessages;
          console.log(errormessages);
        }
      );
    } else {
      this.auth.signUp(email, password).subscribe(
        (response) => {
          // console.log(response);
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
