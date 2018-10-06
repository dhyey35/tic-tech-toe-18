import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
    UserAuthenticationService,
    UtilService,
    VolunteerService
    
} from '@shared';
import { Voluteerclass } from '../shared/classes/volunteer_class';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-volunteer-history-page',
    templateUrl: './volunteer_history.component.html',
    styleUrls: ['./volunteer_history.component.scss'],
})

export class VolunteerHistory implements OnInit {
    
    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService
    ){

    }
    ngOnInit() { 
     
    }
    
    initModel() {
    }
}
