import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService, IPService } from '../../services';

declare var google: any;

@Component({
    selector: 'app-select-pos-map',
    templateUrl: './select-pos-map.component.html',
    styles: [
        `
        #select-pos-map {
            width: 500px;
            height: 500px;
        }
        `
    ]
})
export class SelectPosMapComponent implements OnInit {
    @ViewChild("selectPosMap") selectPosMap: ElementRef;
    @Output("selectedPins") selectedPins: EventEmitter<any> = new EventEmitter();
    map: any;
    ownLocation: any;
    allLatLngs: Array<any> = [];

    constructor(
        public utilService: UtilService,
        public iPService: IPService,
        public ngz: NgZone,
    ) {

    }

    ngOnInit() {
        this.showMap();
    }


    showMap() {
        var options = {
            zoom: 4
        }

        this.map = new google.maps.Map(this.selectPosMap.nativeElement, options);

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

        google.maps.event.addListener(this.map, 'click', (event) => {
            if(this.allLatLngs.length == 3) {
                this.ngz.run(() => {
                    this.utilService.showErrorToast("You can select maximum of 3 places");
                })
                return;
            }
            var marker = this.addMarker(event.latLng, this.map);
            var curInsertPos = this.allLatLngs.length;
            marker.addListener('click', () => {
                this.allLatLngs[curInsertPos].setMap(null);
                this.allLatLngs.splice(curInsertPos, 1);
                this.selectedPins.emit(this.allLatLngs);
            });
            this.allLatLngs.push(marker);
            this.selectedPins.emit(this.allLatLngs);
            console.log(this.allLatLngs);
        });
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

    addMarker(pos, map, own?) {
        const obj: any = {};
        if (own) {
            obj.icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
            obj.animation = google.maps.Animation.DROP;
            obj.title = "Your Location";
        }
        return new google.maps.Marker({
            position: pos,
            map: map,
            ...obj,
        });
    }
    
    selectedPinsChanged(event: any) {
        this.selectedPins = event;
    }
}