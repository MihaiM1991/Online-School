import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';
import { timeTableService } from './timetable.service';
import { Router } from '@angular/router';
import {
  DisciplinesExample,
  daysOfWeek,
  grades,
} from '../shared-folder/declarations';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimeTable implements OnInit {
  grades: string[] = grades;
  daysOfWeek: string[] = daysOfWeek;
  discExample: DisciplinesExample[] = [];

  constructor(private disciplines: timeTableService, private router: Router) {}

  ngOnInit() {
    this.disciplines.getTimeTableInfo().subscribe((data) => {
      this.discExample = data;
    });
  }

  goToDisciplines(abc: string) {

    let matchFound = false;
    this.grades.forEach((item) => {

      if (item == abc.toLowerCase()) {
        matchFound = true;
      }
    });
    if (matchFound) {
      this.router.navigate(['/school-subjects'], { fragment: abc });
    }
  }
}
