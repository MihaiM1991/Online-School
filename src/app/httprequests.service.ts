import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, take } from 'rxjs';
import { Student } from './shared-folder/student.module';
import { AuthService } from './shared-folder/auth.service';

@Injectable({ providedIn: 'root' })
export class HttpRequests {
  constructor(private http: HttpClient, private auth: AuthService) {}
  post(requestBody: Student) {
    return this.auth.userNew.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.post(
          'https://mihai-test-a6972-default-rtdb.firebaseio.com/Students.json?auth=' +
            user.tokenValue,
          requestBody
        );
      })
    );
  }

  get() {
    return this.auth.userNew
      .pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.get<{ [key: string]: Student }>(
            'https://mihai-test-a6972-default-rtdb.firebaseio.com/Students.json?auth=' +
              user.tokenValue
          );
        })
      )
      .pipe(
        map((response) => {
          const post = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              post.push({ ...response[key], id: key });
            }
          }
          return post;
        })
      );
  }

  delete(id: string) {
    return this.auth.userNew.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.delete(
          'https://mihai-test-a6972-default-rtdb.firebaseio.com/Students/' +
            id +
            '.json?auth=' +
            user.tokenValue
        );
      })
    );
  }
  updateStudent(id:string,student: Student) {
    return this.auth.userNew.pipe(
      take(1),
      exhaustMap((user) => {
        const url = `https://mihai-test-a6972-default-rtdb.firebaseio.com/Students/` +id +`.json?auth=`+ user.tokenValue;
        return this.http.put(url, student);
      })
    );
  }
}
