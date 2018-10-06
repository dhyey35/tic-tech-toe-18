import { Component, OnInit } from '@angular/core';

import {
    UserAuthenticationService,
    UtilService
} from '@shared';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-privacy-policy-page',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss'],
})

export class PrivacyPolicyComponent implements OnInit {

    ngOnInit() { }

}
