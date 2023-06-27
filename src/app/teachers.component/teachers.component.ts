import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teacherService } from './teachers.service';

import { schoolSubjectService } from '../school subject/schoolsubject.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class Teachers implements OnInit {
  showText: boolean = false;
  itShow: boolean = false;
  text: string='';
  showName: string;
  id: string;
  showTeach: string;
  showTeachDesc: string;
  constructor(
    private route: ActivatedRoute,
    private show: teacherService,
    private router: Router,

  ) {}

  ngOnInit() {
    {
      this.id = this.route.snapshot.fragment;
      this.showTeach = this.id;
      this.showTeachDesc = this.show.showTeacherDescription(
        this.id
      ).description;
      this.text = this.showTeachDesc.substring(0, 311);
      this.showName = this.show.showTeacherDescription(this.id).name;
    }
  }
  showMore() {
    this.showText = !this.showText;
  }
  getTeach() {
    this.router.navigate(['name'], { fragment: this.showName });
  }
}
