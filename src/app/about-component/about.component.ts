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
  isLocated: boolean = false;

  constructor() {}
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
  display: any;
  center: google.maps.LatLngLiteral = { lat: 44.44, lng: 26.22 };
  zoom = 10;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];


}
