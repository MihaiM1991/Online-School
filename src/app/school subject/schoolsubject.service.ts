import { Injectable } from '@angular/core';
import { schoolSubjectEx } from './school-subject.mock';
import { SchoolSubjectInterface } from '../shared-folder/declarations';
@Injectable({ providedIn: 'root' })
export class schoolSubjectService {
  subject: SchoolSubjectInterface[] = [];
  data:any;
  item:any;
  description: string;
  constructor() {}

  showSubjectDescription(data) {
    const description = schoolSubjectEx.find(
      (element) => element.id == data
    ).description;

    return description;
  }

}
