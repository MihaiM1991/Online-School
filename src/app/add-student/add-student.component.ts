import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpRequests } from '../httprequests.service';
import { Student } from '../shared-folder/student.model';
import { StudentService } from './studentService.service';
import { MessageService } from 'primeng/api';
import {
  grades,
  pattern,
  patternDate,
  SportGroupItem,
  ToastErrorMessage,
  ToastMessageProperty,
  ToastSeverity,
  ToastSuccessMessage,
} from '../shared-folder/declarations';

@Component({
  selector: 'app-my-form',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudent implements OnInit {
  grades: string[] = grades;
  form: FormGroup;
  index: number;
  currentId: string;
  pattern: RegExp = pattern;
  student: Student;
  isEdit: boolean = false;
  paternDate: string = patternDate;

  constructor(
    private messageService: MessageService,
    private httpRequest: HttpRequests,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddStudent>,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.initForm();
    this.editFunction();
  }
  editFunction() {
    if (this.studentService.showStudentEdit()) {
      this.isEdit = true;
      const id = this.studentService.showStudentEdit();
      this.httpRequest.getRequest().subscribe((data) => {
        const student = data.find((item) => item.id === id);
        if (student) {
          this.currentId = student.id;
          const nameEdit = student.name;
          this.form.patchValue({
            name: nameEdit,
          });
          grades.forEach((subject) => {
            if (student[subject]) {
              this.form.setControl(subject, this.setExisting(student[subject]));
            }
          });
        }
      });
    }
  }
  setExisting(name: SportGroupItem[]) {
    const sportGroup = new FormArray([]);
    name.forEach((item) => {
      sportGroup.push(
        this.fb.group({
          grades: item.grades,
          date: item.date,
        })
      );
    });
    return sportGroup;
  }

  initForm() {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.pattern),
        ],
      ],
      // sport: this.fb.array([this.addFormGroup()]),
      // science: this.fb.array([this.addFormGroup()]),
      // math: this.fb.array([this.addFormGroup()]),
      // history: this.fb.array([this.addFormGroup()]),
      // economics: this.fb.array([this.addFormGroup()]),
    });
    grades.forEach((item) => {
      const formArray: FormArray = this.fb.array([this.addFormGroup()]);
      this.form.addControl(item, formArray);
    });
  }

  addInput(type: string) {
    (<FormArray>this.form.get(type)).push(this.addFormGroup());
  }
  onSubmit() {
    if (this.isEdit == false) {
      if (this.form.invalid) {
        this.messageService.add({
          [ToastMessageProperty.Severity]: ToastSeverity.Error,
          [ToastMessageProperty.Summary]: ToastSeverity.Error,
          [ToastMessageProperty.Detail]: ToastErrorMessage.InvalidForm,
        });
        return;
      } else {
        const newStudent: Student = this.form.getRawValue();
        this.studentService.addStudent(newStudent);

        this.dialogRef.close();
        this.messageService.add({
          [ToastMessageProperty.Severity]: ToastSeverity.Success,
          [ToastMessageProperty.Summary]: ToastSeverity.Success,
          [ToastMessageProperty.Detail]: ToastSuccessMessage.StudentAdded,
        });
      }
    } else {
      const newStudentUpdated: Student = this.form.getRawValue();
      this.httpRequest
        .updateStudent(this.currentId, newStudentUpdated)
        .subscribe(() => {
          this.dialogRef.close();
          this.studentService.fetchStudents();
        });
      this.messageService.add({
        [ToastMessageProperty.Severity]: ToastSeverity.Success,
        [ToastMessageProperty.Summary]: ToastSeverity.Success,
        [ToastMessageProperty.Detail]: ToastSuccessMessage.StudentEdit,
      });
    }
  }

  addFormGroup(): FormGroup {
    return this.fb.group({
      grades: ['', [Validators.min(1), Validators.max(10)]],
      date: ['', [Validators.pattern(patternDate)]],
    });
  }

  deteleInput(type: string, index: number) {
    (<FormArray>this.form.get(type)).removeAt(index);
  }
  closeMessages() {
    this.messageService.add({
      [ToastMessageProperty.Severity]: ToastSeverity.Warning,
      [ToastMessageProperty.Summary]: ToastSeverity.Warning,
      [ToastMessageProperty.Detail]: ToastErrorMessage.OtherError,
    });
  }
  getFormControlClass(controlName: string) {
    const control = this.form.get(controlName);
    return control.touched ? 'invalid' : '';
  }
}
