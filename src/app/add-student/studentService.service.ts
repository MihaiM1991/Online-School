import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Student } from '../shared-folder/student.module';

import { HttpRequests } from '../requests.service';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private students: Student[] = [];
  studentsSubject = new BehaviorSubject<Student[]>([]);

  constructor(private http: HttpRequests) {}

  getStudents(): Observable<Student[]> {
    return this.studentsSubject;
  }

  addStudent(student: Student) {
    this.http.post(student).subscribe((data: Student) => {
      this.students.push(data);

      this.studentsSubject.next(this.students);
      this.fetchStudents();
    });
  }

  fetchStudents() {
    this.http.get().subscribe((data: Student[]) => {
      this.students = data;
      this.studentsSubject.next(this.students);
    });
  }
}
