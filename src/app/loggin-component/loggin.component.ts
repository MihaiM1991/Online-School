import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'loggin-component',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss'],
})
export class LogginComponent {
  constructor(private auth: AuthService) {}
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
      this.isLoading = false;
    } else {
      this.auth.signUp(email, password).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
        },
        (errormessages) => {

          this.isLoading = false;
          this.isError=errormessages;
          console.log(errormessages);
        }
      );
    }

    form.reset();
  }
}
