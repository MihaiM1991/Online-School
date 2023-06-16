import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapService {

  center: google.maps.LatLngLiteral = { lat: 44.44, lng: 26.22 };
  zoom = 10;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = event.latLng.toJSON();
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
    }
  }
}

