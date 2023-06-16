import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { teacherEx } from './mock-teachers';
import { TeacherInterfaceEx } from '../shared-folder/declarations';

@Injectable({ providedIn: 'root' })
export class teacherService {
  listName: TeacherInterfaceEx[] | undefined;
  teacher: TeacherInterfaceEx | undefined;
  teachName: TeacherInterfaceEx | undefined;

  showTeacherDescription(data: string): TeacherInterfaceEx | undefined {
    const descriptionTeach = teacherEx.find((element) => element.id === data);
    return descriptionTeach;
  }

  listTeacher(): Observable<TeacherInterfaceEx[]> {
    this.listName = teacherEx;
    return of(this.listName);
  }
}
