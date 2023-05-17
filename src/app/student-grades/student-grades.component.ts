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

    this.studentService.getStudents().subscribe((students) => {
      this.student = students;
    });
  }

  goTo() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
      left: '30%',
    };
    dialogConfig.width = '500px';
    dialogConfig.panelClass = 'add-student-dialog-container';

    this.dialog.open(AddStudent, dialogConfig);
  }
  getAverageGrades(type: string, student: any) {
    const grades = student[type]?.map((item: any) => item.grades) || [];
    if (grades.length === 0) {
      return 0;
    }

    let sum = 0;
    for (const grade of grades) {
      sum += grade;
    }

    return Math.round(sum / grades.length);
  }
  getAverageOfAverages(student: any): number {
    const averages = [];

    for (const subject in student) {
      if (Array.isArray(student[subject])) {
        const subjectGrades =
          student[subject]?.map((item: any) => item.grades) || [];
        if (subjectGrades.length > 0) {
          const sum = subjectGrades.reduce(
            (total: number, grade: number) => total + grade
          );
          const average = sum / subjectGrades.length;
          averages.push(average);
        }
      }
    }

    if (averages.length === 0) {
      return 0;
    }

    const totalSum = averages.reduce(
      (total: number, average: number) => total + average
    );
    const totalAverage = totalSum / averages.length;

    return totalAverage;
  }
}
