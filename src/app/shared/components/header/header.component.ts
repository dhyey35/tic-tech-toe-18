import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService } from '../../services';

declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    
    constructor(
        public utilService: UtilService,
    ) {

    }

    ngOnInit() {}
}