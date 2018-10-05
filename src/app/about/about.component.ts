import { Component, OnInit } from '@angular/core';

import {
    UserAuthenticationService,
    UtilService
} from '@shared';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {

    ngOnInit() { }

}
