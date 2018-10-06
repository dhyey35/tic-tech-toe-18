import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService, IPService, LabsService } from '../../services';

declare var google: any;

@Component({
    selector: 'app-nearby-map',
    templateUrl: './nearby-map.component.html',
    styles: [
        `
        #map {
            width: 100%;
            height: 400px;
        }
        
        `
    ]
})
export class NearbyMapComponent implements OnInit {
    @ViewChild("mapRef") mapRef: ElementRef;
    map: any
    locations: Array<any> = [
        // { lat: 28.5355, lng: 77.3910, name: "Lab 1" },
        // { lat: 30.5355, lng: 79.3910, name: "Lab 2" }
    ];
    ownLocation: any;
    allMarkers: Array<any> = [];

    constructor(
        public utilService: UtilService,
        public iPService: IPService,
        public ngz: NgZone,
        public labsService: LabsService,
    ) {

    }

    ngOnInit() {
        this.labsService.getLabs().subscribe((res: any) => {
            console.log("labs", res);
            this.locations = res.map(val => {
                return {
                    lat: parseFloat(val.location.split(",")[0]), 
                    lng: parseFloat(val.location.split(",")[1]), 
                    name: "Lab " + val.lab_id
                }
            })
            this.showMap();
        }, (err) => {
            console.error("Lab error", err);
            this.showMap();
        })
    }


    showMap() {
        var options = {
            center: this.locations[0],
            zoom: 4
        }

        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.locations.map(value => {
            this.allMarkers.push(this.addMarker(value, this.map));
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.ownLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                this.addOwnMarker(this.ownLocation, this.map)
            }, (err) => {
                this.getPosFromIP();
            });
        } else {
            this.getPosFromIP()
        }
    }

    getPosFromIP() {
        this.iPService.getLatLng().subscribe((res: any) => {
            this.ownLocation = {
                lat: res.latitude,
                lng: res.longitude,
            };
            this.addOwnMarker(this.ownLocation, this.map);
        })
    }

    addOwnMarker(position, map) {
        this.addMarker(position, map, true);
        map.panTo(position);
    }

    nearMe() {
        var minIndex = 0;
        var minDistance = 0;
        for(var i = 0; i < this.allMarkers.length; i++) {
            var data = this.allMarkers[i].position;
            var dis = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.ownLocation.lat, this.ownLocation.lng), data);
            console.log("dis", dis);
            if(dis < minDistance) {
                minIndex = i;
                minDistance = dis;
            }
        }
        console.log("min", this.allMarkers[minIndex]);
        this.allMarkers[minIndex].setIcon("http://maps.google.com/mapfiles/ms/icons/yellow-dot.png");
        this.allMarkers[minIndex].setTitle("Nearest Lab - " + this.allMarkers[minIndex].getTitle());
    }

    addMarker(pos, map, own?) {
        const obj: any = {};
        if (own) {
            obj.icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
            obj.animation = google.maps.Animation.DROP;
            obj.title = "Your Location";
        } else {
            obj.title = pos.name;
        }
        return new google.maps.Marker({
            position: pos,
            map: map,
            ...obj,
        });
    }
}