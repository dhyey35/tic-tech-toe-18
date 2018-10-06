import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
    UserAuthenticationService,
    UtilService,
    VolunteerService,
    
    
} from '@shared';
import { Investorclass } from '../shared/classes/investor_class';
import { InvestorHistoryService } from '../shared/services/investor_history';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-investor-history-page',
    templateUrl: './investor_history.component.html',
    styleUrls: ['./investor_history.component.scss'],
})

export class InvestorHistory implements OnInit {
    public investor_history:investor_history[];
    public start_date:Date[];
    public expected_return_date:Date[];
    public actual_return_date:Date[];
    constructor(
      public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
        public investorhistory_service:InvestorHistoryService
    ){

    }
    ngOnInit() { 
     this.investorhistory_service.getInvestorId(parseInt(localStorage.getItem('fk_id'))).subscribe((data:investor_history[])=>{
        console.log(data); 
        this.investor_history=data;
        this.investor_history.forEach((value:any)=>{
            value.start_date=new Date(value.start_date);
            value.expected_ret_date=new Date(value.expected_ret_date);
            value.actual_ret_date=new Date(value.actual_ret_date);
        });
     },
     ()=>{
         console.log("Error")
     },()=>{
         console.log("Completed Call");
     });
    }
    
    initModel() {
    }
}
