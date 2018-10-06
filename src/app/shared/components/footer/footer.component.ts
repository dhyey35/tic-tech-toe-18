import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService } from '../../services';

declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    imageUrl = [
        '../../assets/footer/0.png',
        '../../assets/footer/images.png',
        '../../assets/footer/images (1).png',
        '../../assets/footer/images (2).png',
        '../../assets/footer/infosys-logo-JPEG.jpg'
    ];

    constructor(
        public utilService: UtilService,
    ) {

    }

    ngOnInit() { }
}