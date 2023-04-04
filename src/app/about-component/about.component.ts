import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  show: boolean = false;
  isShow: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.onSelect();
    this.onPurpose();
  }

  onSelect() {
    this.show = !this.show;
    if (this.isShow) {
      return;
    } else {
      this.isShow = true;
    }
  }
  onPurpose() {
    this.isShow = !this.isShow;
    if (this.show) {
      return;
    } else {
      this.show = true;
    }
  }
}
