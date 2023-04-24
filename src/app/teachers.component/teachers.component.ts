import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teacherService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class Teachers implements OnInit {

  showText: boolean = false;

  text: string;
  showName: any;
  id: any;
  showTeach: any;
  showTeachDesc: any;
  constructor(private route: ActivatedRoute, private show: teacherService) {}

  ngOnInit() {
    {
      this.id = this.route.snapshot.fragment;
      if (!this.id) {
        this.showTeach = this.show.showTeacher();
        this.showTeachDesc = this.show.showTeacherDescription(this.showTeach);
        this.text = this.showTeachDesc.substring(1, 300);
        this.showName = this.show.showTeacherDescription(this.showTeach).name;
      } else {
        this.showTeach = this.id;
        this.showTeachDesc = this.show.showTeacherDescription(
          this.id
        ).description;
        this.text = this.showTeachDesc.substring(0, 311);

        this.showName = this.show.showTeacherDescription(this.id).name;
      }
    }
  }
  showMore() {
    this.showText = !this.showText;
  }
}
