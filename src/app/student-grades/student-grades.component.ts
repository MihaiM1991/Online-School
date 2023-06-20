import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddStudent } from '../add-student/add-student.component';
import { HttpRequests } from '../httprequests.service';
import { Student } from '../shared-folder/student.module';
import { StudentService } from '../add-student/studentService.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { MessageService } from 'primeng/api';
import { grades } from '../shared-folder/declarations';
@Component({
  selector: 'app-studentGrades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss'],
})
export class StudentGrades implements OnInit {
  gradesExample: string[] = grades;
  student: Student[] = [];
  constructor(
    private messageService: MessageService,
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
    this.studentService.takeStudent(null);
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
  saveToPdf() {
    var data = document.getElementById('table');
    html2canvas(data).then((canvas) => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4');
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); //
    });
  }
  deleteStudent(id:string) {
    this.get.delete(id).subscribe(() => this.studentService.fetchStudents());
    this.messageService.add({
      severity: 'success',
      summary: 'Student Deleted',
      detail: 'The student was deleted.',
    });
  }
  editStudent(id) {
    this.studentService.takeStudent(id);
    const dialogConfigEdit = new MatDialogConfig();

    dialogConfigEdit.disableClose = true;
    dialogConfigEdit.autoFocus = true;

    dialogConfigEdit.position = {
      left: '30%',
    };
    dialogConfigEdit.width = '500px';
    dialogConfigEdit.panelClass = 'add-student-dialog-container';
    this.dialog.open(AddStudent, dialogConfigEdit);
  }
}
