import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;

  lat: number = 45.605050;
  lng: number = -73.558353;
  zoom: number = 16;
  mapType: string = 'roadmap';
  constructor() { }

  ngOnInit() {
  }

}
