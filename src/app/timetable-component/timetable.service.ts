import { Injectable } from '@angular/core';
import { discEx } from './timetable.mock';
import { Observable, of } from 'rxjs';
import { DisciplinesExample } from '../shared-folder/declarations';
@Injectable({ providedIn: 'root' })
export class timeTableService {
  constructor() {}

  getTimeTableInfo(): Observable<DisciplinesExample[]> {
    const info = of(discEx);
    return info;
  }
}
