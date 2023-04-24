import { Component, HostListener, OnInit } from '@angular/core';
import { schoolSubjectService } from './schoolsubject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { teacherService } from '../teachers.component/teachers.service';

@Component({
  selector: 'app-schoolSubject',
  templateUrl: './school-subject.component.html',
  styleUrls: ['./school-subject.component.scss'],
})
export class SchoolSubject implements OnInit {

  showSchObj: any;
  id: any;
  showDescription;
  constructor(
    private show: schoolSubjectService,
    private route: ActivatedRoute,
    private router:Router,
    private showTeacher:teacherService
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.fragment;
    if (!this.id) {
      this.showSchObj = this.show.showSchoolSubject();
      this.showDescription = this.show.showSubjectDescription(this.showSchObj);
    }
    else{
      this.showSchObj=this.id;
      this.showDescription=this.show.showSubjectDescription(this.id)
    }
  }
  goToTeachers($event,abc){
    this.router.navigate(['/teachers'],{fragment: abc });
    this.showTeacher.takeTeacher(abc);

  }
}
