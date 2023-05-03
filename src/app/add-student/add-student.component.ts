import { Component } from '@angular/core';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudent {
  cities = [
    { name: 'Sport' },
    { name: 'Math' },
    { name: 'Science' },
    { name: 'History' },
    { name: 'Economics' },
  ];
  selectedCity=this.cities[0];
  value1=1;
}
