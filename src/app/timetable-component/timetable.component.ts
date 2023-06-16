import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';
import { timeTableService } from './timetable.service';
import { Router } from '@angular/router';

import { DisciplinesExample, daysOfWeek } from '../shared-folder/declarations';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimeTable implements OnInit {
  daysOfWeek: string[] = daysOfWeek;
  discExample:DisciplinesExample[]=[]


  constructor(
    private disciplines: timeTableService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.disciplines.getTimeTableInfo().subscribe((data) => {
      this.discExample = data;

    });
  }
  goToDisciplines($event, abc) {
    if (
      abc == 'Sport' ||
      abc == 'Science' ||
      abc == 'Math' ||
      abc == 'History' ||
      abc == 'Economics'
    ) {
      this.router.navigate(['/school-subjects'], { fragment: abc });

    } else {
      return;
    }
  }
}
