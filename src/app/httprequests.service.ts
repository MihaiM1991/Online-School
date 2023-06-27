import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs';
import { Student } from './shared-folder/student.model';
import { AuthService } from './shared-folder/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpRequests {
  url: string = environment.apiFirebase;
  constructor(private http: HttpClient, private auth: AuthService) {}
  post(requestBody: Student) {
    return this.auth.userNew.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.post(
          this.url + '.json?auth=' + user.tokenValue,
          requestBody
        );
      })
    );
  }

  getRequest() {
    return this.auth.userNew
      .pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.get<{ [key: string]: Student }>(
            this.url + '.json?auth=' + user.tokenValue
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
          this.url + '/' + id + '.json?auth=' + user.tokenValue
        );
      })
    );
  }
  updateStudent(id: string, student: Student) {
    return this.auth.userNew.pipe(
      take(1),
      exhaustMap((user) => {
        console.log(environment.apiFirebase);
        return this.http.put(
          this.url + '/' + id + `.json?auth=` + user.tokenValue,
          student
        );
      })
    );
  }
}
