import { Component, OnInit } from '@angular/core';
import { MapService } from './google.maps.service';
import { contactSchool, description, purpose } from './mock-about';
import { Display } from '../shared-folder/declarations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  show: boolean = false;
  isShow: boolean = false;
  isLocated: boolean = false;
  center = this.mapsService.center;
  zoom = this.mapsService.zoom;
  display: Display;
  schoolDescription:string=description;
  schoolPurpose:string=purpose;
  contact=contactSchool;

  constructor(private mapsService: MapService) {}
  ngOnInit(): void {
    this.onSelect();
    this.onPurpose();
    this.onLocated();
  }

  onSelect() {
    this.show = !this.show;
    if (this.show == false) {
      this.isLocated = true;
      this.isShow = true;
    }
  }

  onPurpose() {
    this.isShow = !this.isShow;
    if (this.isShow == false) {
      this.isLocated = true;
      this.show = true;
    }
  }
  onLocated() {
    this.isLocated = !this.isLocated;
    if (this.isLocated == false) {
      this.isShow = true;
      this.show = true;
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.mapsService.moveMap(event);
  }

  move(event: google.maps.MapMouseEvent) {
    this.mapsService.move(event);
    this.display = event.latLng.toJSON();
  }
}
