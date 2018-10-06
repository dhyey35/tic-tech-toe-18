import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
    UserAuthenticationService,
    UtilService,
    InvestorService
} from '@shared';
import { Companyclass } from '../shared/classes/company_class';
import { Investorclass } from '../shared/classes/investor_class';
import * as moment from "moment";
declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-investor-investing-page',
    templateUrl: './investor-investing.component.html',
    styleUrls: ['./investor-investing.component.scss'],
})

export class InvestorInvestingComponent implements OnInit {
    public reqModel: any;
    public rememberMe: boolean = true;
    public message: string = '';
    selectedPins: Array<any> = [];

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
        public investService: InvestorService

    ) {

    }
    ngOnInit() {
        this.initModel();
    }
    initModel() {
        this.reqModel = {
            amount: '',
            year: '',
            month: '',
            days: '',
            eyear: '',
            emonth: ''
        };
    }
    sendLoginRequest(form: any) {
        if (form.invalid) {
            this.utilService.showErrorToast("Please fill the form correctly");
            return;
        }
        else {
            var l1 = this.selectedPins[0] ? this.selectedPins[0].position.lat() + "," + this.selectedPins[0].position.lng() : "";
            var l2 = this.selectedPins[1] ? this.selectedPins[1].position.lat() + "," + this.selectedPins[1].position.lng() : "";
            var l3 = this.selectedPins[2] ? this.selectedPins[2].position.lat() + "," + this.selectedPins[2].position.lng() : "";

            let now = moment().local(true);
            now.add(this.reqModel.year, "years");
            now.add(this.reqModel.month, "months");
            now.add(this.reqModel.days, "days");
            let gh = moment().local(true);
            gh.add(this.reqModel.eyear, "years");
            gh.add(this.reqModel.emonth, "months");
            let todays = moment().local(true);
            this.investService.addInvestor(new Investorclass
                (parseInt(localStorage.getItem('fk_id')),
                this.reqModel.amount,
                todays.toDate(),
                now.toDate(),
                gh.toDate(),
                l1,
                l2,
                l3)).subscribe((data: Investorclass) => {
                    console.log("Success");
                }, () => {
                    this.utilService.showErrorToast("Can`t Submitted your request");;
                }, () => {
                    console.log("completed");
                });

        }
    }
    
    selectedPinsChanged(event: any) {
        this.selectedPins = event;
    }
}
