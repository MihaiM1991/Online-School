import { Component, OnInit } from '@angular/core';
import { timeTableService } from '../timetable-component/timetable.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddStudent } from '../add-student/add-student.component';
import { HttpRequests } from '../requests.service';
import { Student } from '../shared-folder/student.module';
import { StudentService } from '../add-student/studentService.service';

@Component({
  selector: 'app-studentGrades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss'],
})
export class StudentGrades implements OnInit {
  student: Student[] = [];
  constructor(
    private discList: timeTableService,
    private dialog: MatDialog,
    private get: HttpRequests,
    private studentService: StudentService
  ) {}
  ngOnInit(): void {
    this.studentService.fetchStudents();
    debugger
    this.studentService.getStudents().subscribe((students) => {
      this.student = students;
      debugger
      console.log(this.student);
      debugger
    });
  }

  goTo() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
      top: '1%',
      left: '30%',
    };
    dialogConfig.width = '500px';
    const dialogRef = this.dialog.open(AddStudent, dialogConfig);
  }
}
