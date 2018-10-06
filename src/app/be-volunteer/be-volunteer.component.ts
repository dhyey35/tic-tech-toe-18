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
    selector: 'app-be-volunteer-page',
    templateUrl: './be-volunteer.component.html',
    styleUrls: ['./be-volunteer.component.scss'],
})

export class BeVolunteerComponent implements OnInit {
    public reqModel: any;
    public rememberMe: boolean = true;
    public message: string = '';
    selectedPins: Array<any> = [];

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
        public vol: VolunteerService
    ) {

    }
    ngOnInit() {
        this.initModel();
    }

    initModel() {
        this.reqModel = {
            name: '',
            dob: '',
            skills: '',
            hq: '',
        };
    }
    sendLoginRequest(form: any) {
        if (form.invalid) {
            this.utilService.showErrorToast("Please fill the form correctly");
            return;
        }
        else {
            var l1 = this.selectedPins[0] ? this.selectedPins[0].lab_id : 0;
            var l2 = this.selectedPins[1] ? this.selectedPins[1].lab_id : 0;
            var l3 = this.selectedPins[2] ? this.selectedPins[2].lab_id : 0;

            this.vol.addVolunteer(new Voluteerclass(parseInt(localStorage.getItem('fk_id')), 0, this.reqModel.skills, this.reqModel.hq, l1, l2, l3)).subscribe((data: Voluteerclass) => {
                console.log("Success");
            }, () => {
                this.utilService.showErrorToast("Can`t Submitted your request");
            }, () => {
                console.log("Completed");
            });

        }
    }

    selectedPinsChanged(event: any) {
        this.selectedPins = event;
    }
}
