import { Component,EventEmitter,Inject, OnInit, Output } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { HttpRequests } from '../requests.service';
import { Student } from '../shared-folder/student.module';
import { StudentService } from './studentService.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudent implements OnInit {
  @Output() studentAdded = new EventEmitter<Student>();
  form: FormGroup;
  i: any;
  pattern = /^[a-zA-Z ]+$/;
  student: any;

  constructor(
    private httpRequest: HttpRequests,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddStudent>,
    private studentService:StudentService

  ) {}

  ngOnInit() {
    this.initForm();
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
      sport: this.fb.array([this.addFormGroup()]),
      science: this.fb.array([this.addFormGroup()]),
      math: this.fb.array([this.addFormGroup()]),
      history: this.fb.array([this.addFormGroup()]),
      music: this.fb.array([this.addFormGroup()]),
    });
  }

  addInput(type: string) {
    (<FormArray>this.form.get(type)).push(this.addFormGroup());
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      const newStudent: Student = this.form.getRawValue();
    this.studentService.addStudent(newStudent);

    this.dialogRef.close();
    }
  }

  addFormGroup(): FormGroup {
    return this.fb.group({
      grades: ['', [Validators.min(1), Validators.max(10)]],
      date: ['', [Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
    });
  }

  deteleInput(type: string, index: number) {
    (<FormArray>this.form.get(type)).removeAt(index);
  }
}
