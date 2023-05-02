import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  click:boolean=false;
  constructor(private route:Router,private location:Location){}
  ngOnInit(): void {}
  onClick() {
    this.click=!this.click;
    if(this.click==true)
    {this.route.navigate(['/home/teachersList'])}
    else{
      this.location.back()
    }

  }
  goGrades(){
    this.route.navigate(['grades'])
  }
}
