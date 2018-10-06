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
    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
        public investService:InvestorService
        
    ){

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
            eyear:'',
            emonth:''
        };
    }
    sendLoginRequest(form: any) {
        if (form.invalid) {
            this.utilService.showErrorToast("Please fill the form correctly");
            return;
        }
         else {
             let now=moment().local(true);
             now.add(this.reqModel.year,"years");
             now.add(this.reqModel.month,"months");
             now.add(this.reqModel.days,"days");
            let tods=moment().locale();
             let sg=moment().local();
             let gh=moment().local();
             gh.add(this.reqModel.eyear,"year");
             gh.add(this.reqModel.emonth,"months");
            this.investService.addInvestor(new Investorclass
                (parseInt(localStorage.getItem('fk_id')),this.reqModel.amount,now.toDate(),gh.toDate(),null,null,null,null)).subscribe((data:Investorclass)=>{
                        console.log("Success");
                },()=>{
                    this.utilService.showErrorToast("Can`t Submitted your request");;
                },()=>{
                    console.log("completed");
                });
            
        }
    }
}
