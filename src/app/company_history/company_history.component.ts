import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
    UserAuthenticationService,
    UtilService,
    VolunteerService,
    
    
} from '@shared';
import { Companyclass } from '../shared/classes/company_class';
import { CompanyHistoryService } from '../shared/services/company_history';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-company-history-page',
    templateUrl: './company_history.component.html',
    styleUrls: ['./company_history.component.scss'],
})

export class CompanyHistory implements OnInit {
    public company_history:company_history[];
    constructor(
      public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
        public companyhistory_service:CompanyHistoryService
    ){

    }
    ngOnInit() { 
     this.companyhistory_service.getCompanyById(parseInt(localStorage.getItem('fk_id'))).subscribe((data:company_history[])=>{
        console.log(data); 
        this.company_history=data;
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
