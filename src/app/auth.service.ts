import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData } from './loggin-component/authresponse.model';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userName:User =null;
  userNew = new Subject<User>();
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWn4XOHAeqa7iCVmHCD44liu1Lnd9E7Io',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.chechError),
        tap((response) => {
          const expirationDate = new Date(
            new Date().getTime() + +response.expiresIn * 1000
          );
          const user = new User(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
          );
          this.userNew.next(user);
        })
      );
  }

  loginMethod(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWn4XOHAeqa7iCVmHCD44liu1Lnd9E7Io',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.chechError),
        tap((response) => {
          const expirationDate = new Date(
            new Date().getTime() + +response.expiresIn * 1000
          );
          const user = new User(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
          );
          this.userNew.next(user);
          this.userName=user;
        })
      );
  }

  private chechError(errorRespons: HttpErrorResponse) {
    let errormessages = 'An unknown error occured';
    if (!errorRespons.error || !errorRespons.error.error) {
      return throwError(errormessages);
    }
    switch (errorRespons.error.error.message) {
      case 'EMAIL_EXISTS':
        errormessages = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errormessages = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errormessages = 'Invalid password';
    }
    return throwError(errormessages);
  }
}
