import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { teacherService } from '../teachers.component/teachers.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Contact,
  teachContact,
  TeacherDescription,
    teachExperience,
} from '../shared-folder/declarations';

@Component({
  selector: 'app-teachDescription',
  templateUrl: './teach-description.component.html',
  styleUrls: ['./teach-description.component.scss'],
})
export class TeachDescription implements OnInit {
  teachDescription: string = TeacherDescription;
  teachExperience: string = teachExperience;
  teachContact: Contact = teachContact;
  teachName: string;
  id: string;
  constructor(private show: teacherService, private route: ActivatedRoute) {}
  ngOnInit() {
    {
      this.id = this.route.snapshot.fragment;
      this.teachName = this.id;
    }
  }
}
