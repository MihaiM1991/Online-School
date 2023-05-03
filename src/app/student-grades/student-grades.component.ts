import { Component, OnInit } from '@angular/core';
import { timeTableService } from '../timetable-component/timetable.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddStudent } from '../add-student/add-student.component';

@Component({
  selector: 'app-studentGrades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss'],
})
export class StudentGrades implements OnInit {
  [x: string]: any;
  discListAll: any;
  test: object[] = [
    {
      name: 'Mihai',
      value: 10,
    },
    {
      name: 'Andrei',
      value: 10,
    },
  ];

  matsArray: string[] = [];
  constructor(private discList: timeTableService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.discList.getTimeTableInfo().subscribe((data) => {
      this.discListAll = data;
      this.matsArray = this.discListAll
        .map((obj) => [obj.mat1, obj.mat2, obj.mat3])
        .flat();
    });
    this.matsArray = [...new Set(this.matsArray)];

    this.matsArray.splice(-2);
  }
  goTo() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
      top: '1%',
      left: '10%',

    };

    this.dialog.open(AddStudent, dialogConfig);
  }
}
