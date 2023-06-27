import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { authResponseData } from '../login-component/authresponse.model';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class AuthService {
  userName: User = null;
  private tokenExpirationTimer: any;
  test: any;
  url1: string = `${environment.apiFireBaseSignIn}${environment.apiKey}`;
  url: string = `${environment.apiFireBaseSignUp}${environment.apiKey}`;
  userNew = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private route: Router) {}
  signUp(email: string, password: string) {
    return this.http
      .post<authResponseData>(this.url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.checkError),
        tap((response) => {
          const expirationDate = new Date(
            new Date().getTime() + +response.expiresIn * 1000
          );
          const user = new User(
            response?.email,
            response?.localId,
            response?.idToken,
            expirationDate
          );
          this.userNew.next(user);
        })
      );
  }

  loginMethod(email: string, password: string) {
    return this.http
      .post<authResponseData>(this.url1, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.checkError),
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
          this.autoLogout(+response.expiresIn * 1000);
          const dataString = JSON.stringify(user);
          const key = environment.apiSecret;
          const encryptedData = CryptoJS.AES.encrypt(
            dataString,
            key
          ).toString();
          localStorage.setItem('encryptedData', encryptedData);
        })
      );
  }
  autoLogin() {
    const encryptedData = localStorage.getItem('encryptedData');
    const key = environment.apiSecret;
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(
      CryptoJS.enc.Utf8
    );
    const data: {
      email: string;
      localId: string;
      idToken: string;
      tokenExpirationDate: string;
    } = JSON.parse(decryptedData);

    if (!data) {
      return;
    }
    const sameUser = new User(
      data.email,
      data.localId,
      data.idToken,
      new Date(data.tokenExpirationDate)
    );
    if (sameUser.tokenValue) {
      const expirationDuration =
        new Date(data.tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
      this.userNew.next(sameUser);
    }
  }
  logout() {
    this.userNew.next(null);
    this.route.navigate(['/login']);
    localStorage.removeItem('encryptedData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  autoLogout(expirationTime: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationTime);
  }
  private checkError(errorRespons: HttpErrorResponse) {
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
