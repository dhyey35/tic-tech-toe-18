import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { UtilService, IPService } from '@shared';

declare var google: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild("mapRef") mapRef: ElementRef;
    map: any
    locations: Array<any> = [
        { lat: 28.5355, lng: 77.3910, name: "Lab 1" },
        { lat: 30.5355, lng: 79.3910, name: "Lab 2" }
    ];
    ownLocation: any;
    allMarkers: Array<any> = [];

    constructor(
        private router: Router,
        public utilService: UtilService,
        public iPService: IPService,
    ) {

    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        console.log(localStorage.getItem('email_id'));
        this.showMap();
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
