import { Component, OnInit } from '@angular/core';

import {
    UserAuthenticationService,
    UtilService
} from '@shared';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

    ngOnInit() { }

}
