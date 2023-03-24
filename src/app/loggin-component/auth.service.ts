import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from './authresponse.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWn4XOHAeqa7iCVmHCD44liu1Lnd9E7Io',
      { email: email, password: password, returnSecureToken: true }
    )
    .pipe(
      catchError((errorRespons) => {
        let errormessages = 'An unknown error occured';
        if (!errorRespons.error || !errorRespons.error.error) {
          return throwError(errormessages);
        }
        switch (errorRespons.error.error.message) {
          case 'EMAIL_EXISTS':
            errormessages = 'This email exists already';
        }
        return throwError(errormessages);
      })
    );
  }
}
