import { Component, OnInit } from '@angular/core';
import { teacherService } from '../teachers.component/teachers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachersList',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss'],
})
export class TeachersList implements OnInit {
  showTeachName: any;
  abc: any;
  constructor(private listTeacher: teacherService, private router: Router) {}
  ngOnInit(): void {
    this.listTeacher.listTeacher().subscribe((data) => {
      this.showTeachName = data;
    });
  }
  goTo(name:string) {
    this.router.navigate(['name'], { fragment: name });
  }
}
