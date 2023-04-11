import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { schoolSubjectEx } from './school-subject.mock';
@Injectable({ providedIn: 'root' })
export class schoolSubjectService {
  subject: any;
  description: any;
  constructor() {}

  takeSchoolSubject(data: any) {
    this.subject = data;
    return this.subject;
  }
  showSchoolSubject(): Observable<{}> {
    return this.subject;
  }
  showSubjectDescription(data) {
    const description = schoolSubjectEx.find(
      (element) => element.id == data
    ).description;

    return description;
  }
}
