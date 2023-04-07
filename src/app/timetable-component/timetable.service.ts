import { Injectable } from '@angular/core';
import { discEx } from './timetable.mock';
import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class timeTableService {
  constructor() {}

  getTimeTableInfo(): Observable<{}> {
    const info = of(discEx);
    return info;
  }
}
