import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { schoolSubjectEx } from './school-subject.mock';
import { SchoolSubjectInterface } from '../shared-folder/declarations';
@Injectable({ providedIn: 'root' })
export class schoolSubjectService {
  subject: SchoolSubjectInterface[] = [];
  description: string;
  constructor() {}

  takeSchoolSubject(data: SchoolSubjectInterface[]) {
    this.subject = data;
    return this.subject;
  }
  showSchoolSubject(): Observable<SchoolSubjectInterface[]> {
    return of(this.subject);
  }
  showSubjectDescription(data) {
    const description = schoolSubjectEx.find(
      (element) => element.id == data
    ).description;

    return description;
  }
}
