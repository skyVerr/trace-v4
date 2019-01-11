import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  ILatLng
} from '@ionic-native/google-maps/ngx';
import { Platform } from "@ionic/angular";
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  map: GoogleMap;
  marker: Marker;

  constructor(
    private platform: Platform,
    private geolocation: Geolocation
  ) { }

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap();
    let watch = this.geolocation.watchPosition({enableHighAccuracy: true});

    try {
      let resp = await this.geolocation.getCurrentPosition();
      let latLng:ILatLng = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.map.setCameraTarget(latLng);
      this.marker.setPosition(latLng);
    } catch (error) {
      console.log('Error getting location', error);
    }
   
    watch.subscribe(data=>{
      if(data['code']){
        console.log('error',data);
      } else {
        let latLng:ILatLng = {
          lat: data.coords.latitude,
          lng: data.coords.longitude
        };
        this.marker.setPosition(latLng);
      }
    });
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 14.5995,
           lng: 120.9842
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.marker = this.map.addMarkerSync({
      title: 'own location',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 14.5995,
        lng: 120.9842
      }
    });
  }

}
