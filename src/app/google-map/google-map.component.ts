import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat = 50.863793;
  lng = 20.620789;
  @Output() pointedLat = new EventEmitter<number>();
  @Output() pointedLng = new EventEmitter<number>();
  lt;
  ln;
  constructor() { }

  ngOnInit(): void {
  }
  changeCords(event) {
    this.lt = event.coords.lat;
    this.ln = event.coords.lng;
    this.pointedLat.emit(event.coords.lat);
    this.pointedLng.emit(event.coords.lng);
  }
}
