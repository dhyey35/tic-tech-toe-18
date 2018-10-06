import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService, IPService, LabsService } from '../../services';

declare var google: any;

@Component({
    selector: 'app-select-pin-map',
    templateUrl: './select-pin-map.component.html',
    styles: [
        `
        #select-pin-map {
            width: 500px;
            height: 500px;
        }
        `
    ]
})
export class SelectPinMapComponent implements OnInit {
    @ViewChild("selectPinMap") selectPinMap: ElementRef;
    @Output("selectedPins") selectedPins: EventEmitter<any> = new EventEmitter();
    map: any;
    ownLocation: any;
    allLatLngs: Array<any> = [];
    locations: Array<any> = [];
    allMarkers: Array<any> = [];
    selectedCount: number = 0;
    currentSelectedPins: Array<any> = [];

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

        this.map = new google.maps.Map(this.selectPinMap.nativeElement, options);
        this.locations.map(value => {
            var marker = this.addMarker(value, this.map);
            marker.addListener('click', (event) => {
                if(marker.isSelected) {
                    this.selectedCount--;
                    // deselect
                    marker.setIcon("https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png");
                    marker.isSelected = false;
                    var indexToRemove = 0;
                    this.currentSelectedPins.map((pin, index) => {
                        if(pin === marker) {
                            indexToRemove = index;
                        }
                    });
                    this.currentSelectedPins.splice(indexToRemove, 1);
                } else {
                    if(this.selectedCount == 3) {
                        this.ngz.run(() => {
                            this.utilService.showErrorToast("You can select maximum of 3 labs");
                        })
                        return;
                    }
                    this.selectedCount++;
                    marker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
                    marker.isSelected = true;
                    this.currentSelectedPins.push(marker);
                }
                this.selectedPins.emit(this.currentSelectedPins);
            });
            this.allMarkers.push(marker);
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

    addMarker(pos, map, own?) {
        const obj: any = {};
        if (own) {
            obj.icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
            obj.animation = google.maps.Animation.DROP;
            obj.title = "Your Location";
        } else {
            obj.title = pos.name;
            obj.name = pos.name;
            obj.address = pos.address;
            obj.lab_id = pos.lab_id;
        }
        return new google.maps.Marker({
            position: pos,
            map: map,
            ...obj,
        });
    }
}