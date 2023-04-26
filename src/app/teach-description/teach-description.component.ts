import { Component,OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { teacherService } from '../teachers.component/teachers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teachDescription',
  templateUrl: './teach-description.component.html',
  styleUrls: ['./teach-description.component.scss'],
})
export class teachDescription implements OnInit {
  teachName: any;
  id: any;
  constructor(private show: teacherService, private route: ActivatedRoute) {}
  ngOnInit() {
    {
      this.id = this.route.snapshot.fragment;
      if (!this.id) {
        this.teachName = this.show.teachName;
      } else {
        this.teachName = this.id;
      }
    }
  }
}
