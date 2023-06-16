import { Component, HostListener, OnInit } from '@angular/core';
import { schoolSubjectService } from './schoolsubject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { teacherService } from '../teachers.component/teachers.service';
import { schoolSubjectDescription } from './school-subject.mock';
import { SchoolSubjectInterface } from '../shared-folder/declarations';

@Component({
  selector: 'app-schoolSubject',
  templateUrl: './school-subject.component.html',
  styleUrls: ['./school-subject.component.scss'],
})
export class SchoolSubject implements OnInit {
  schoolSubjectDescription: string = schoolSubjectDescription;
  showSchObj: string;
  id: string;
  showDescription: string;
  constructor(
    private show: schoolSubjectService,
    private route: ActivatedRoute,
    private router: Router,
    private showTeacher: teacherService
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.fragment;
    this.showSchObj = this.id;
    this.showDescription = this.show.showSubjectDescription(this.id);
  }

  goToTeachers($event, abc) {
    this.router.navigate(['/teachers'], { fragment: abc });

  }
}
