import { Component, OnInit } from '@angular/core';
import { schoolSubjectService } from './schoolsubject.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
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
}
