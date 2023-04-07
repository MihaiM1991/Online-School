import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

import jsPDF from 'jspdf';

import 'jspdf-autotable';
import { timeTableService } from './timetable.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimeTable implements OnInit {

  discExample;
  test
  constructor(private disciplines: timeTableService,private router:Router) {}

  ngOnInit() {
    this.disciplines.getTimeTableInfo().subscribe((data) => {
      this.discExample = data;
    });
  }
  goToDisciplines($event,abc){
this.test=abc;
    this.router.navigate(['/disciplines']);
    console.log(this.test)
  }
}
